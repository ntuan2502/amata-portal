'use client';

import { useState, useMemo } from 'react';
import { AppEntity } from '@/types';
import { AppCard } from './AppCard';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguageStore } from '@/store/useLanguageStore';

interface Props {
    apps: AppEntity[];
}

export const AppGrid = ({ apps }: Props) => {
    const { t, _hasHydrated } = useLanguageStore();
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState<string>('All');



    // Extract unique categories and translate them for display if needed, 
    // but for filtering logic we keep keys. 
    // Actually, 'categories' array is used for rendering tabs.
    const uniqueCategories = useMemo(() => {
        return Array.from(new Set(apps.map(a => a.category))).sort();
    }, [apps]);

    const categories = ['All', ...uniqueCategories];

    const filteredApps = useMemo(() => {
        return apps.filter(app => {
            const lowerTerm = searchTerm.toLowerCase();
            // Since description is now an object, we search in both (or just current? user didn't specify, let's search all strings to be safe)
            const matchesSearch = app.name.toLowerCase().includes(lowerTerm) ||
                app.description.vi.toLowerCase().includes(lowerTerm) ||
                app.description.en.toLowerCase().includes(lowerTerm) ||
                app.tags?.some(tag => tag.toLowerCase().includes(lowerTerm));
            const matchesTab = activeTab === 'All' || app.category === activeTab;
            return matchesSearch && matchesTab;
        });
    }, [apps, searchTerm, activeTab]);

    const getCategoryLabel = (cat: string) => {
        if (cat === 'All') return t('apps.all');
        return t(`category.${cat}`);
    };

    if (!_hasHydrated) return null;

    return (
        <div className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between sticky top-0 z-10 bg-background/95 backdrop-blur-md py-2 border-b border-border/40 md:static md:bg-transparent md:border-0 md:py-0 dark:border-white/20">
                <Tabs defaultValue="All" value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto max-w-full">
                    <TabsList className="h-10 bg-muted/50 p-1 w-full md:w-auto flex justify-start md:justify-center overflow-x-auto no-scrollbar scroll-smooth">
                        {categories.map(cat => (
                            <TabsTrigger
                                key={cat}
                                value={cat}
                                className="rounded-full text-sm px-5 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary transition-all duration-300 whitespace-nowrap shrink-0 font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer"
                            >
                                {getCategoryLabel(cat)}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </Tabs>

                <div className="relative w-full md:w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder={t('search.placeholder')}
                        className="pl-9 bg-muted/30 border-primary/10 focus-visible:ring-primary/20 transition-all hover:bg-muted/50 dark:border-white/20"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-20"
            >
                <AnimatePresence mode="popLayout">
                    {filteredApps.map(app => (
                        <AppCard key={app.id} app={app} />
                    ))}
                </AnimatePresence>

                {filteredApps.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="col-span-full flex flex-col items-center justify-center py-20 text-muted-foreground"
                    >
                        <Search className="w-12 h-12 mb-4 opacity-20" />
                        <p className="text-lg">No results found.</p>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

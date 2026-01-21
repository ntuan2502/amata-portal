'use client';

import { AppEntity } from '@/types';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { ExternalLink } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';


import { useLanguageStore } from '@/store/useLanguageStore';

interface Props {
    app: AppEntity;
}

export const AppCard = ({ app }: Props) => {
    const { language, t } = useLanguageStore();
    // Lấy icon component từ thư viện Lucide dựa trên tên string
    // @ts-expect-error: Dynamic icon access from library string
    const IconComponent = LucideIcons[app.iconUrl] || LucideIcons.AppWindow;

    const description = typeof app.description === 'string'
        ? app.description
        : app.description[language];

    return (
        <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{
                y: -5,
                transition: { type: 'spring', stiffness: 300 }
            }}
            className="h-full"
        >
            <Card className="h-full flex flex-col p-0 gap-0 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 border-muted/40 transition-all duration-500 dark:bg-card/30 dark:hover:bg-card/60 backdrop-blur-md overflow-hidden group dark:border-white/10">
                <div className="relative h-44 w-full bg-muted/50 overflow-hidden">
                    <a href={app.url} target="_blank" rel="noopener noreferrer" className="block w-full h-full cursor-pointer">
                        {app.thumbnailUrl ? (
                            <Image
                                src={app.thumbnailUrl}
                                alt={`${app.name} Thumbnail`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-primary/5">
                                <IconComponent size={40} className="text-primary/20" />
                            </div>
                        )}
                    </a>
                </div>

                <CardHeader className="flex flex-row items-center gap-5 px-5 pt-5 pb-2">
                    <div className="w-12 h-12 rounded-xl bg-background shadow-sm border border-border/50 text-primary flex items-center justify-center shrink-0 p-2.5 dark:border-white/20">
                        <IconComponent className="w-full h-full" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-2 pt-0">
                        <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
                                {app.name}
                            </h3>
                            {app.isNew && (
                                <Badge variant="secondary" className="text-[10px] px-1.5 h-5 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/25 border-0">
                                    NEW
                                </Badge>
                            )}
                        </div>
                        <Badge variant="outline" className="text-[10px] py-0 h-5 font-normal text-muted-foreground border-primary/20 dark:border-white/20">
                            {t(`category.${app.category}`)}
                        </Badge>
                    </div>
                </CardHeader>
                <CardContent className="flex-1 pt-2 px-5 pb-3">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <p className="text-sm text-muted-foreground line-clamp-none md:line-clamp-2 leading-relaxed cursor-help touch-manipulation">
                                {description}
                            </p>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-[280px] bg-primary text-primary-foreground shadow-md dark:bg-white dark:text-black" side="top">
                            {description}
                        </TooltipContent>
                    </Tooltip>
                </CardContent>
                <CardFooter className="pt-0 pb-5 px-5">
                    <Button variant="outline" className="w-full h-9 group/btn hover:border-primary/50 hover:bg-primary/5 dark:hover:bg-primary/10 cursor-pointer" asChild>
                        <a href={app.url} target="_blank" rel="noopener noreferrer">
                            {t('app.visit')}
                            <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    );
};

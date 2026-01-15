'use client';

import { Moon, Sun, Languages } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { useLanguageStore } from '@/store/useLanguageStore';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
    const { language, setLanguage, _hasHydrated } = useLanguageStore();
    const { setTheme, theme } = useTheme();

    if (!_hasHydrated) {
        return <header className="h-16 border-b border-border shadow-sm bg-background sticky top-0 z-50 w-full transition-all" />;
    }

    return (
        <header className="h-16 border-b border-white/10 shadow-sm bg-background/60 backdrop-blur-xl sticky top-0 z-50 w-full transition-all support-[backdrop-filter]:bg-background/60 dark:border-white/10 dark:bg-black/30">
            <div className="h-full max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8">
                <div className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/images/amata-logo.png"
                        alt="AMATA Portal"
                        className="h-14 w-auto object-contain"
                    />
                </div>

                <div className="flex items-center gap-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary cursor-pointer">
                                <Languages className="w-5 h-5" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setLanguage('vi')} className={`cursor-pointer ${language === 'vi' ? 'bg-accent' : ''}`}>
                                🇻🇳 Tiếng Việt
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setLanguage('en')} className={`cursor-pointer ${language === 'en' ? 'bg-accent' : ''}`}>
                                🇺🇸 English
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="text-muted-foreground hover:text-primary cursor-pointer"
                    >
                        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </div>
            </div>
        </header>
    );
};

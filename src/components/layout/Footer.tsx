'use client';

import { useLanguageStore } from '@/store/useLanguageStore';

export const Footer = () => {
    const { t } = useLanguageStore();

    return (
        <footer className="border-t border-border/50 bg-muted/20 mt-auto">
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 flex items-center justify-center">
                <div className="text-sm text-center text-muted-foreground">
                    © {new Date().getFullYear()} {t('footer.copyright')}
                </div>
            </div>
        </footer>
    );
};

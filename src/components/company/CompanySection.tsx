'use client';

import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { COMPANIES } from '@/constants/company';
import { useLanguageStore } from '@/store/useLanguageStore';
import { MapPin, Building2, FileText, Globe, Copy, Check } from 'lucide-react';

export const CompanySection = () => {
    const { language, t } = useLanguageStore();
    const [copiedKey, setCopiedKey] = useState<string | null>(null);
    const companyKeys = Object.keys(COMPANIES) as Array<keyof typeof COMPANIES>;

    const handleCopy = (key: string) => {
        const company = COMPANIES[key as keyof typeof COMPANIES];
        const textToCopy = `
${language === 'vi' ? company.fullName : company.intlName}
${language === 'vi' ? company.intlName : company.fullName}
${t('company.tax_code')}: ${company.taxCode}
${t('company.address')}: ${language === 'vi' ? company.taxAddress.vi : company.taxAddress.en}
        `.trim();

        navigator.clipboard.writeText(textToCopy);
        setCopiedKey(key);
        setTimeout(() => setCopiedKey(null), 2000);
    };

    return (
        <div className="w-full mt-12 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <h2 className="text-2xl font-bold text-center mb-8 text-foreground/80">{t('company.title')}</h2>

            <Tabs defaultValue={companyKeys[0]} className="w-full">
                <div className="flex justify-center mb-8 w-full">
                    <TabsList className="bg-muted/50 p-1 h-auto w-full md:w-auto flex justify-start md:justify-center overflow-x-auto no-scrollbar scroll-smooth">
                        {companyKeys.map((key) => (
                            <TabsTrigger
                                key={key}
                                value={key}
                                className="rounded-full text-sm px-5 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary dark:hover:text-primary transition-all duration-300 cursor-pointer font-medium"
                            >
                                {COMPANIES[key].shortName}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </div>

                {companyKeys.map((key) => {
                    const company = COMPANIES[key];
                    return (
                        <TabsContent key={key} value={key} className="mt-0 focus-visible:outline-none">
                            <Card className="border-2 border-border/60 bg-background/50 dark:bg-card/40 dark:hover:bg-card/80 backdrop-blur-sm dark:border-white/20 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-full group relative">
                                <CardContent className="p-0">
                                    <div className="absolute top-4 right-4 z-10">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => handleCopy(key)}
                                            className="bg-background/80 hover:bg-primary/10 hover:text-primary dark:hover:text-primary dark:hover:bg-primary/20 transition-colors backdrop-blur-sm border-border/50 dark:border-white/20 cursor-pointer font-medium"
                                        >
                                            {copiedKey === key ? (
                                                <>
                                                    <Check className="w-4 h-4 mr-2" />
                                                    {t('company.copied')}
                                                </>
                                            ) : (
                                                <>
                                                    <Copy className="w-4 h-4 mr-2" />
                                                    {t('company.copy')}
                                                </>
                                            )}
                                        </Button>
                                    </div>

                                    <div className="grid md:grid-cols-[1fr_2fr] gap-0">
                                        <div className="bg-muted/30 p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-border/50">
                                            <div className="text-center space-y-4 w-full">
                                                <div className="w-48 h-48 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm p-4 overflow-hidden border-2 border-border/60 dark:border-white/30">
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                    <img
                                                        src={company.logo}
                                                        alt={`${company.shortName} Logo`}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                                <div className="text-sm font-medium text-muted-foreground bg-background/80 px-3 py-1 rounded-full inline-block border border-border/50 dark:border-white/20">
                                                    {t('company.tax_code')}: {company.taxCode}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-8 space-y-6">
                                            <div>
                                                <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 pr-20">
                                                    {language === 'vi' ? company.fullName : company.intlName}
                                                </h3>
                                                <p className="text-sm md:text-base text-muted-foreground font-medium flex items-center gap-2">
                                                    <Globe className="w-4 h-4 shrink-0" />
                                                    {language === 'vi' ? company.intlName : company.fullName}
                                                </p>
                                            </div>

                                            <div className="space-y-4 pt-4 border-t border-border/50 dark:border-white/10">
                                                <div className="flex items-start gap-3">
                                                    <div className="bg-primary/10 p-2 rounded-lg shrink-0 mt-0.5">
                                                        <MapPin className="w-5 h-5 text-primary" />
                                                    </div>
                                                    <div>
                                                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">{t('company.address')}</span>
                                                        <p className="text-foreground/90 leading-relaxed">
                                                            {language === 'vi' ? company.taxAddress.vi : company.taxAddress.en}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="flex items-start gap-3">
                                                    <div className="bg-primary/10 p-2 rounded-lg shrink-0 mt-0.5">
                                                        <FileText className="w-5 h-5 text-primary" />
                                                    </div>
                                                    <div>
                                                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">{t('company.tax_code')}</span>
                                                        <p className="font-mono text-foreground/90">
                                                            {company.taxCode}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    );
                })}
            </Tabs>
        </div>
    );
};

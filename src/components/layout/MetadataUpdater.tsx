'use client';

import { useEffect } from 'react';
import { useLanguageStore } from '@/store/useLanguageStore';

export const MetadataUpdater = () => {
    const { t, language } = useLanguageStore();

    useEffect(() => {
        // Update document title
        document.title = t('metadata.title');

        // Update meta description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', t('metadata.description'));
        } else {
            // Create if not exists (though Next.js usually creates one)
            const meta = document.createElement('meta');
            meta.name = 'description';
            meta.content = t('metadata.description');
            document.head.appendChild(meta);
        }
    }, [t, language]);

    return null;
};

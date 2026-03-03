'use client';

import { useLanguageStore } from '@/store/useLanguageStore';
import { Loader2 } from "lucide-react";
import { useSyncExternalStore } from 'react';

const emptySubscribe = () => () => { };

export const ClientLoader = ({ children }: { children: React.ReactNode }) => {
    const { _hasHydrated } = useLanguageStore();
    const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

    // Show loader if not mounted yet (SSR) or not hydrated
    if (!mounted || !_hasHydrated) {
        return (
            <div className="flex h-[calc(100vh-4rem)] w-full items-center justify-center">
                <Loader2 className="h-10 w-10 animate-spin text-primary" />
            </div>
        );
    }

    return <>{children}</>;
};

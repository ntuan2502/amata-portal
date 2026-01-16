'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-3 right-3 z-50"
                >
                    <Button
                        variant="secondary"
                        size="icon"
                        onClick={scrollToTop}
                        className="h-10 w-10 rounded-full shadow-lg bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-110 transition-all duration-300 border border-primary/20 backdrop-blur-sm cursor-pointer"
                    >
                        <ArrowUp className="h-5 w-5" />
                        <span className="sr-only">Scroll to top</span>
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

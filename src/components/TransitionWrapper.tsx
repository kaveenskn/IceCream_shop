'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

const routes = ['/', '/flavours', '/offers', '/about'];

export default function TransitionWrapper({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const [prevPath, setPrevPath] = useState(pathname);
    const [direction, setDirection] = useState(0);

    // Synchronous direction calculation to prevent white flashes and delayed animations
    if (pathname !== prevPath) {
        const prevIndex = routes.indexOf(prevPath);
        const currIndex = routes.indexOf(pathname);

        if (currIndex !== -1 && prevIndex !== -1) {
            const newDirection = currIndex > prevIndex ? 1 : -1;
            if (newDirection !== direction) {
                setDirection(newDirection);
            }
        }
        setPrevPath(pathname);
    }

    const variants = {
        initial: (dir: number) => ({
            x: dir > 0 ? '100%' : dir < 0 ? '-100%' : 0,
            opacity: 0,
        }),
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
            },
        },
        exit: (dir: number) => ({
            x: dir > 0 ? '-100%' : dir < 0 ? '100%' : 0,
            opacity: 0,
            transition: {
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
            },
        }),
    };

    return (
        <div className="relative w-full min-h-screen overflow-x-hidden bg-[var(--chocolate-brown)]">
            <AnimatePresence mode="popLayout" custom={direction} initial={false}>
                <motion.div
                    key={pathname}
                    custom={direction}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="w-full min-h-screen flex flex-col"
                    style={{ position: 'relative' }}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

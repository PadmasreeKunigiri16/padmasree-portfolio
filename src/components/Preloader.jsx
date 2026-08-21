'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = [
    "Hello",
    "నమస్కారం",
    "नमस्ते",
    "ನಮಸ್ಕಾರ",
    "வணக்கம்"
];

export default function Preloader() {
    const [index, setIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        // Check if user has already visited in this session
        if (sessionStorage.getItem('hasVisited')) {
            setIsLoading(false);
            return;
        }
        
        setShouldRender(true);
        // Prevent scrolling while preloader is active
        document.body.style.overflow = 'hidden';

        const cycleWords = setInterval(() => {
            setIndex((prev) => {
                if (prev === words.length - 1) {
                    clearInterval(cycleWords);
                    setTimeout(() => {
                        setIsLoading(false);
                        sessionStorage.setItem('hasVisited', 'true');
                        document.body.style.overflow = 'auto';
                    }, 800); // Wait a bit on the last word before sliding up
                    return prev;
                }
                return prev + 1;
            });
        }, 350); // Speed of language cycling

        return () => {
            clearInterval(cycleWords);
            document.body.style.overflow = 'auto';
        };
    }, []);

    if (!shouldRender && !isLoading) return null;

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ y: 0 }}
                    exit={{ 
                        y: '-100vh', 
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } // Premium ease
                    }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: '#111',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 9999,
                        color: '#fff'
                    }}
                >
                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.15, ease: 'easeInOut' }}
                            style={{
                                fontSize: 'clamp(2rem, 5vw, 4rem)',
                                fontWeight: '700',
                                letterSpacing: '0.05em',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                margin: 0
                            }}
                        >
                            <span style={{ 
                                width: '10px', 
                                height: '10px', 
                                backgroundColor: '#fff', 
                                borderRadius: '50%',
                                display: 'inline-block'
                            }}></span>
                            {words[index]}
                        </motion.h1>
                    </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

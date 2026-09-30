'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Prevent scrolling while loading
        document.body.style.overflow = 'hidden';
        
        // Hide loader after 2.5 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = 'auto';
        }, 2500);

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 999999,
                        backgroundColor: '#f5f1ec',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <motion.div
                        initial={{ clipPath: 'inset(0 100% 0 0)' }}
                        animate={{ clipPath: 'inset(0 0% 0 0)' }}
                        transition={{ duration: 1.8, ease: "easeInOut" }}
                        style={{ display: 'inline-block' }}
                    >
                        <img 
                            src="/signature.png" 
                            alt="Padmasree Kunigiri" 
                            style={{ 
                                height: 'clamp(6rem, 15vw, 12rem)',
                                objectFit: 'contain',
                                mixBlendMode: 'multiply',
                                display: 'block'
                            }} 
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

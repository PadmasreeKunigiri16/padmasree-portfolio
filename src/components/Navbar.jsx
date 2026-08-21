'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
    }, [pathname]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
    };

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Experience', path: '/experience' },
        { name: 'Projects', path: '/projects' },
        { name: 'Certificates', path: '/certificates' },
        { name: 'About', path: '/about' },
    ];

    return (
        <>
            <header className="navbar">
                <div className="logo" style={{ zIndex: 10000 }}>
                    <Link href="/" style={{ fontWeight: '700', fontSize: '1.2rem', letterSpacing: '1px', textDecoration: 'none', color: isOpen ? '#fff' : 'inherit', transition: 'color 0.3s ease' }}>
                        PADMASREE KUNIGIRI
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="nav-links desktop-only">
                    {navItems.filter(item => item.path !== '/' || pathname !== '/').map(item => (
                        <Link key={item.path} href={item.path}>{item.name}</Link>
                    ))}
                </nav>
                
                <div className="desktop-only" style={{ zIndex: 10000 }}>
                    <Link
                        href="/contact"
                        className="btn btn-outline"
                        style={{ 
                            border: 'none', 
                            cursor: 'pointer', 
                            background: 'var(--text-primary)', 
                            color: '#fff', 
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '0.5rem 1rem',
                            borderRadius: '0.5rem'
                        }}
                    >
                        Let&apos;s Talk →
                    </Link>
                </div>

                {/* Mobile Hamburger Icon */}
                <div className="mobile-only" style={{ zIndex: 10000, cursor: 'pointer' }} onClick={toggleMenu}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '30px' }}>
                        <motion.span 
                            animate={isOpen ? { rotate: 45, y: 8, backgroundColor: '#fff' } : { rotate: 0, y: 0, backgroundColor: 'var(--text-primary)' }}
                            style={{ width: '100%', height: '2px', display: 'block', transformOrigin: 'center' }}
                        />
                        <motion.span 
                            animate={isOpen ? { opacity: 0 } : { opacity: 1, backgroundColor: 'var(--text-primary)' }}
                            style={{ width: '100%', height: '2px', display: 'block' }}
                        />
                        <motion.span 
                            animate={isOpen ? { rotate: -45, y: -8, backgroundColor: '#fff' } : { rotate: 0, y: 0, backgroundColor: 'var(--text-primary)' }}
                            style={{ width: '100%', height: '2px', display: 'block', transformOrigin: 'center' }}
                        />
                    </div>
                </div>
            </header>

            {/* Mobile Fullscreen Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: '-100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            backgroundColor: '#111',
                            zIndex: 9999,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '2rem'
                        }}
                    >
                        {navItems.map((item, i) => (
                            <motion.div
                                key={item.path}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + (i * 0.1), duration: 0.4 }}
                            >
                                <Link 
                                    href={item.path}
                                    style={{
                                        fontSize: '2.5rem',
                                        fontWeight: '700',
                                        color: pathname === item.path ? '#fff' : '#888',
                                        textDecoration: 'none',
                                        letterSpacing: '-0.02em',
                                        textTransform: 'uppercase'
                                    }}
                                    onClick={toggleMenu}
                                >
                                    {item.name}
                                </Link>
                            </motion.div>
                        ))}
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (navItems.length * 0.1), duration: 0.4 }}
                            style={{ marginTop: '2rem' }}
                        >
                            <Link
                                href="/contact"
                                style={{ 
                                    background: '#fff', 
                                    color: '#111', 
                                    textDecoration: 'none',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '1rem 2rem',
                                    borderRadius: '2rem',
                                    fontWeight: '600',
                                    fontSize: '1.2rem'
                                }}
                                onClick={toggleMenu}
                            >
                                Let&apos;s Talk
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            
            <style jsx global>{`
                .mobile-only { display: none; }
                .desktop-only { display: flex; }
                
                @media (max-width: 768px) {
                    .mobile-only { display: block; }
                    .desktop-only { display: none !important; }
                    .navbar { 
                        flex-wrap: nowrap !important; 
                        justify-content: space-between !important;
                    }
                }
            `}</style>
        </>
    );
}

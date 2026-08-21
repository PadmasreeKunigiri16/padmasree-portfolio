'use client';

import { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const certs = [
    { title: "AWS Certified Developer", category: "Cloud Development", issuer: "AWS", type: "cloud", file: "/AWS Certified Developer - Associate certificate.pdf" },
    { title: "AWS Certified AI Practitioner", category: "Artificial Intelligence", issuer: "AWS", type: "ai", file: "/AWS Certified AI Practitioner certificate.pdf" },
    { title: "AWS Certified Cloud Practitioner", category: "Cloud Foundations", issuer: "AWS", type: "cloud", file: "/AWS Certified Cloud Practitioner certificate.pdf" },
    { title: "Google Cloud Digital Leader", category: "Cloud Foundations", issuer: "Google", type: "cloud" },
    { title: "Oracle Agentic AI Certified Foundations Associate", category: "Artificial Intelligence", issuer: "Oracle", type: "ai" },
    { title: "Oracle Java Certification", category: "Software Engineering", issuer: "Oracle", type: "software" },
    { title: "Getting Started with Enterprise-grade AI", category: "Artificial Intelligence", issuer: "IBM", type: "ai" },
    { title: "Cybersecurity Analyst Job Simulation", category: "Security", issuer: "Forage (TATA)", type: "software" },
    { title: "Cambridge Lingua Skills – B2", category: "Language", issuer: "Cambridge", type: "software" }
];

const chapters = [
    { id: 'cover', title: 'Cover' },
    { id: 'cloud', title: 'Cloud' },
    { id: 'ai', title: 'AI' },
    { id: 'software', title: 'Software' },
    { id: 'footer', title: 'End' }
];

export default function CertificatesPage() {

    const [activeChapter, setActiveChapter] = useState('cover');
    const [navVisible, setNavVisible] = useState(true);
    const containerRef = useRef(null);

    useEffect(() => {
        let navTimeout;
        const showNav = () => {
            setNavVisible(true);
            clearTimeout(navTimeout);
            navTimeout = setTimeout(() => setNavVisible(false), 2500);
        };

        window.addEventListener('mousemove', showNav);
        window.addEventListener('touchstart', showNav);
        
        navTimeout = setTimeout(() => setNavVisible(false), 3000);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                        setActiveChapter(entry.target.id);
                        showNav();
                    }
                });
            },
            { root: containerRef.current, threshold: 0.51 }
        );

        chapters.forEach((chapter) => {
            const el = document.getElementById(chapter.id);
            if (el) observer.observe(el);
        });

        return () => {
            window.removeEventListener('mousemove', showNav);
            window.removeEventListener('touchstart', showNav);
            clearTimeout(navTimeout);
            observer.disconnect();
        };
    }, []);

    const scrollToChapter = (id) => {
        const el = document.getElementById(id);
        if (el && containerRef.current) {
            containerRef.current.scrollTo({
                left: el.offsetLeft,
                behavior: 'smooth'
            });
        }
    };

    const pageStyle = {
        flex: 'none',
        flexShrink: 0,
        width: '100vw',
        minWidth: '100vw',
        maxWidth: '100vw',
        height: '100%',
        scrollSnapAlign: 'start',
        overflowY: 'auto',
        overflowX: 'hidden',
        position: 'relative',
        backgroundColor: 'var(--bg-primary)',
        boxSizing: 'border-box',
        padding: '0 2rem'
    };

    const renderCerts = (type) => {
        return (
            <div className="certs-grid grid-collapse" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '2rem',
                width: '100%',
                maxWidth: '1200px',
                margin: '0 auto',
                paddingBottom: '6rem'
            }}>
                {certs.filter(c => c.type === type).map((cert, index) => (
                    <div key={index} className="cert-card" style={{ 
                        padding: '2rem', 
                        background: 'rgba(0,0,0,0.01)', 
                        borderRadius: '1.25rem', 
                        border: '1px solid var(--border-color)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                        cursor: 'default'
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--text-primary)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.boxShadow = 'none'; }}
                    >
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                                <div style={{ fontSize: '0.65rem', fontFamily: 'monospace', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)', background: 'var(--bg-secondary)', padding: '0.4rem 0.8rem', borderRadius: '2rem', border: '1px solid var(--border-color)' }}>
                                    {cert.category}
                                </div>
                            </div>
                            <h4 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-primary)', letterSpacing: '-0.02em', lineHeight: '1.3' }}>
                                {cert.title}
                            </h4>
                        </div>
                        <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ fontSize: '0.65rem', fontWeight: '800', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>ISSUED BY</span>
                                <span style={{ fontSize: '0.85rem', fontWeight: '900', color: 'var(--text-primary)' }}>{cert.issuer}</span>
                            </div>
                            {cert.file && (
                                <a href={cert.file} target="_blank" rel="noopener noreferrer" style={{
                                    fontSize: '0.7rem', fontWeight: '700', letterSpacing: '0.05em', textTransform: 'uppercase',
                                    color: 'var(--bg-primary)', backgroundColor: 'var(--text-primary)',
                                    padding: '0.35rem 0.85rem', borderRadius: '2rem', textDecoration: 'none',
                                    transition: 'transform 0.2s ease, opacity 0.2s ease'
                                }}
                                onMouseEnter={e => { e.currentTarget.style.opacity = '0.8'; e.currentTarget.style.transform = 'scale(1.05)'; }}
                                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1)'; }}
                                >
                                    View
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="certs-page-container" style={{ backgroundColor: 'var(--bg-primary)', overflow: 'hidden', height: '100vh', width: '100vw' }}>
            <Navbar />
            
            {/* Table of Contents / Sidebar Overlay */}
            <nav className="toc-nav" style={{
                position: 'fixed',
                bottom: '2rem',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                background: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '4rem',
                zIndex: 1000,
                boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                opacity: navVisible ? 1 : 0,
                pointerEvents: navVisible ? 'auto' : 'none',
                transition: 'opacity 0.5s ease',
            }}>
                {chapters.map(ch => (
                    <button
                        key={ch.id}
                        onClick={() => scrollToChapter(ch.id)}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontFamily: 'monospace',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            color: activeChapter === ch.id ? '#fff' : 'rgba(255,255,255,0.4)',
                            fontWeight: activeChapter === ch.id ? 'bold' : 'normal',
                            transition: 'all 0.3s ease',
                            position: 'relative',
                            whiteSpace: 'nowrap',
                            padding: '1rem 1.5rem',
                            fontSize: '0.75rem'
                        }}
                    >
                        {ch.title}
                        {activeChapter === ch.id && (
                            <div style={{ position: 'absolute', bottom: '8px', left: '50%', transform: 'translateX(-50%)', width: '4px', height: '4px', borderRadius: '50%', background: '#fff' }} />
                        )}
                    </button>
                ))}
            </nav>

            <div 
                ref={containerRef}
                style={{
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                    overflowX: 'auto',
                    overflowY: 'hidden',
                    scrollSnapType: 'x mandatory',
                    scrollBehavior: 'smooth',
                    msOverflowStyle: 'none',
                    scrollbarWidth: 'none',
                }}
                className="hide-scrollbar mobile-vertical-scroll"
            >
                {/* 1. COVER */}
                <section id="cover" style={{ ...pageStyle, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ textAlign: 'center', maxWidth: '1400px', width: '100%' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>CREDENTIALS</span>
                        <h1 style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)', fontWeight: '900', letterSpacing: '-0.05em', lineHeight: '0.9', color: 'var(--text-primary)', marginTop: '1rem', textTransform: 'uppercase' }}>
                            CERTIFICATIONS
                        </h1>
                        <div style={{ marginTop: '4rem', display: 'flex', gap: '2rem', justifyContent: 'center' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <span style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--text-primary)' }}>{certs.length}</span>
                                <span style={{ fontSize: '0.7rem', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Total</span>
                            </div>
                            <div style={{ width: '1px', background: 'var(--border-color)' }}></div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <span style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--text-primary)' }}>3</span>
                                <span style={{ fontSize: '0.7rem', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Categories</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. CLOUD */}
                <section id="cloud" style={{ ...pageStyle, paddingTop: '120px' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
                        <div style={{ marginBottom: '3rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                            <h2 style={{ fontSize: '2rem', fontWeight: '900', letterSpacing: '-0.03em', textTransform: 'uppercase' }}>Cloud Architecture</h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>AWS & Google Cloud Certifications</p>
                        </div>
                        {renderCerts('cloud')}
                    </div>
                </section>

                {/* 3. AI */}
                <section id="ai" style={{ ...pageStyle, paddingTop: '120px' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
                        <div style={{ marginBottom: '3rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                            <h2 style={{ fontSize: '2rem', fontWeight: '900', letterSpacing: '-0.03em', textTransform: 'uppercase' }}>Artificial Intelligence</h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Oracle & IBM AI Certifications</p>
                        </div>
                        {renderCerts('ai')}
                    </div>
                </section>

                {/* 4. SOFTWARE */}
                <section id="software" style={{ ...pageStyle, paddingTop: '120px' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
                        <div style={{ marginBottom: '3rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                            <h2 style={{ fontSize: '2rem', fontWeight: '900', letterSpacing: '-0.03em', textTransform: 'uppercase' }}>Software & Security</h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Java, Cybersecurity, and Language</p>
                        </div>
                        {renderCerts('software')}
                    </div>
                </section>

                {/* 5. FOOTER */}
                <section id="footer" style={pageStyle}>
                    <div style={{ width: '100%', height: '100%', overflowY: 'auto' }}>
                        <Footer />
                    </div>
                </section>
            </div>

            <style>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                @media (max-width: 768px) {
                    .toc-nav {
                        width: 90%;
                        overflow-x: auto;
                        justify-content: flex-start;
                    }
                }
            `}</style>
        </div>
    );
}

'use client';

import { useEffect, useRef, useState } from 'react';
import LeetCodeStats from './LeetCodeStats';
import Journey from './Journey';
import Footer from './Footer';

const chapters = [
    { id: 'cover', title: 'Cover' },
    { id: 'identity', title: 'Identity' },
    { id: 'education', title: 'Education' },
    { id: 'stats', title: 'Stats' },
    { id: 'journey', title: 'Journey' },
    { id: 'philosophy', title: 'Philosophy' },
    { id: 'epilogue', title: 'End' }
];

export default function About() {

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
        overflowY: 'hidden',
        overflowX: 'hidden',
        position: 'relative',
        backgroundColor: 'var(--bg-primary)',
        boxSizing: 'border-box'
    };

    return (
        <div style={{ backgroundColor: 'var(--bg-primary)', overflow: 'hidden', height: '100vh', width: '100vw' }}>
            
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
                            whiteSpace: 'nowrap'
                        }}
                    >
                        {ch.title}
                        {activeChapter === ch.id && (
                            <div style={{ position: 'absolute', bottom: '-8px', left: '50%', transform: 'translateX(-50%)', width: '4px', height: '4px', borderRadius: '50%', background: '#fff' }} />
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
                className="hide-scrollbar"
            >
                {/* 1. COVER */}
                <section id="cover" style={pageStyle}>
                    <div className="mobile-col" style={{
                        height: '100%',
                        display: 'flex',
                        position: 'relative',
                        backgroundColor: 'var(--bg-secondary)', // Unified seamless canvas
                        overflow: 'hidden'
                    }}>
                        {/* Massive Background Typography */}
                        <div className="hero-bg-text" style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            fontSize: '20.5vw',
                            fontWeight: '900',
                            color: 'var(--text-primary)',
                            opacity: 0.12,
                            lineHeight: '0.8',
                            letterSpacing: '-0.05em',
                            pointerEvents: 'none',
                            whiteSpace: 'nowrap',
                            zIndex: 0
                        }}>
                            ENGINEER
                        </div>

                        <div className="hero-text-box" style={{
                            flex: '1',
                            display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
                            position: 'relative',
                            zIndex: 2,
                        }}>
                            <div className="hero-chapter-tag" style={{ fontSize: '0.65rem', fontFamily: 'monospace', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Chapter 01 — Portfolio</div>
                            
                            <h1 style={{ fontSize: 'clamp(3rem, 7vw, 7rem)', fontWeight: '900', letterSpacing: '-0.04em', lineHeight: '1', color: 'var(--text-primary)', margin: '0 0 2rem 0' }}>
                                Padmasree<br/>Kunigiri.
                            </h1>
                            
                            <div className="hero-badges" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                                <div style={{ padding: '0.5rem 1.25rem', border: '1px solid var(--text-primary)', borderRadius: '2rem', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                                    Full-Stack Dev
                                </div>
                                <div style={{ padding: '0.5rem 1.25rem', border: '1px solid transparent', backgroundColor: 'var(--text-primary)', color: 'var(--bg-primary)', borderRadius: '2rem', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                                    QA Automation
                                </div>
                            </div>

                            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.7', maxWidth: '420px' }}>
                                Bridging the gap between beautiful interfaces and bulletproof backend architecture to engineer products people can actually trust.
                            </p>

                            {/* Swipe hint */}
                            <div className="swipe-hint" style={{ position: 'absolute', display: 'flex', alignItems: 'center', gap: '1rem', animation: 'swipeHint 2s infinite ease-in-out' }}>
                                <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Swipe to explore</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </div>
                        </div>

                        <div className="hero-image-box" style={{ 
                            flex: '1', 
                            position: 'relative', 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'flex-end',
                            zIndex: 1
                        }}>
                            <img src="/bg1.png" alt="Padmasree Kunigiri" style={{ width: '90%', height: '90%', objectFit: 'contain', objectPosition: 'bottom center', display: 'block', filter: 'drop-shadow(-10px 10px 30px rgba(0,0,0,0.15))' }} />
                        </div>
                    </div>
                </section>

                {/* 2. IDENTITY */}
                <section id="identity" style={{ ...pageStyle, borderRight: '1px solid var(--border-color)' }}>
                    <div className="pad-box" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                            <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', marginBottom: '2rem' }}>Chapter 02 — Identity</span>
                            <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 4.5rem)', fontWeight: '900', letterSpacing: '-0.03em', lineHeight: '1.1', color: 'var(--text-primary)', maxWidth: '1200px' }}>
                                I craft <span style={{ color: 'transparent', WebkitTextStroke: '1px var(--text-primary)' }}>digital experiences</span> that are reliable, performant, and beautiful.
                            </h2>
                            <p style={{ fontSize: '1rem', lineHeight: '1.6', color: 'var(--text-secondary)', maxWidth: '600px', marginTop: '1.5rem' }}>
                                From intuitive frontends to dependable backend systems, I engineer products end-to-end — and test every detail so people can <strong style={{ color: 'var(--text-primary)' }}>actually trust them</strong>.
                            </p>
                        </div>

                        {/* Bottom Metadata Bar */}
                        <div className="metadata-bar" style={{ display: 'grid', borderTop: '1px solid var(--border-color)' }}>
                            <div>
                                <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.25rem' }}>Location</span>
                                <div style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>Kurnool, AP</div>
                            </div>
                            <div>
                                <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.25rem' }}>Core Focus</span>
                                <div style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>Full-Stack Eng.</div>
                            </div>
                            <div>
                                <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.25rem' }}>Current Role</span>
                                <div style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>Software Dev</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. EDUCATION */}
                <section id="education" style={{ ...pageStyle, borderRight: '1px solid var(--border-color)' }}>
                    <div className="pad-box" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                        <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', marginBottom: '1.5rem' }}>Chapter 03 — Education</span>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0', maxWidth: '1000px' }}>
                            {[
                                { institution: 'Ravindra College of Engineering', degree: 'B.Tech CSE', cgpa: '9.0', year: 'Present', current: true },
                                { institution: 'Jawahar Navodaya Vidyalaya', degree: 'Intermediate (CBSE)', cgpa: '8.0', year: '2022', current: false },
                                { institution: 'Jawahar Navodaya Vidyalaya', degree: 'Secondary (CBSE)', cgpa: '9.1', year: '2020', current: false },
                            ].map((edu, idx, arr) => (
                                <div key={idx} className="edu-grid" style={{
                                    display: 'grid', alignItems: 'center',
                                    borderBottom: idx < arr.length - 1 ? '1px solid var(--border-color)' : 'none',
                                }}>
                                    <div>
                                        <div style={{ fontSize: '0.7rem', fontFamily: 'monospace', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>{edu.year}</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: '0.25rem' }}>{edu.institution}</div>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>{edu.degree}</div>
                                    </div>
                                    <div className="edu-right">
                                        <div style={{ fontSize: '2.5rem', fontWeight: '900', letterSpacing: '-0.05em', lineHeight: 1, color: 'var(--text-primary)' }}>{edu.cgpa}</div>
                                        <div style={{ fontSize: '0.6rem', fontFamily: 'monospace', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>CGPA</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. STATS (LeetCode) */}
                <section id="stats" style={{ ...pageStyle, borderRight: '1px solid var(--border-color)' }}>
                    <LeetCodeStats isBookLayout={true} />
                </section>

                {/* 5. JOURNEY */}
                <section id="journey" style={{ ...pageStyle, borderRight: '1px solid var(--border-color)' }}>
                    <Journey isBookLayout={true} />
                </section>

                {/* 6. PHILOSOPHY */}
                <section id="philosophy" style={{ ...pageStyle, borderRight: '1px solid var(--border-color)' }}>
                    <div className="philosophy-grid pad-box" style={{ height: '100%', display: 'grid', alignItems: 'center' }}>
                        <div>
                            <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', marginBottom: '1rem' }}>Chapter 06 — Philosophy</span>
                            <div className="hide-on-mobile" style={{ fontSize: '0.75rem', fontFamily: 'monospace', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)', lineHeight: '2' }}>
                                <div>Kurnool, Andhra Pradesh, India</div>
                                <div>B.Tech Computer Science</div>
                                <div>Full-Stack Engineering</div>
                                <div>AI / ML Integration</div>
                            </div>
                        </div>
                        <blockquote style={{ fontSize: 'clamp(1.5rem, 4vw, 3.5rem)', fontWeight: '800', letterSpacing: '-0.03em', lineHeight: '1.2', color: 'var(--text-primary)', margin: 0, borderLeft: '3px solid var(--text-primary)', paddingLeft: '1.5rem' }}>
                            &quot;I care about every detail — from clean architecture to pixel-perfect UI — turning ambitious ideas into{' '}
                            <span style={{ color: 'transparent', WebkitTextStroke: '1px var(--text-primary)' }}>products people can trust.</span>&quot;
                        </blockquote>
                    </div>
                </section>

                {/* 7. EPILOGUE (To Be Continued) */}
                <section id="epilogue" style={{ ...pageStyle, borderRight: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ textAlign: 'center', padding: '2rem' }}>
                        <span style={{ fontSize: '0.85rem', fontFamily: 'monospace', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', marginBottom: '2rem' }}>To Be Continued</span>
                        <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 4rem)', fontWeight: '900', letterSpacing: '-0.03em', lineHeight: '1.2', color: 'var(--text-primary)', maxWidth: '900px', margin: '0 auto' }}>
                            This journey is continuously evolving. <br/><span style={{ color: 'transparent', WebkitTextStroke: '1px var(--text-primary)' }}>The next chapters are currently being written.</span>
                        </h2>
                    </div>
                </section>

                {/* 8. FOOTER */}
                <section id="footer" style={{ ...pageStyle, overflowY: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div style={{ flexGrow: 1 }} />
                    <Footer />
                </section>

            </div>
            
            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                
                /* Desktop Defaults */
                .toc-nav { gap: 2rem; padding: 1.25rem 2.5rem; font-size: 0.75rem; }
                .hero-text-box { padding: 4rem 6rem; }
                .swipe-hint { bottom: 2rem; left: 6rem; }
                .pad-box { padding: 6rem; }
                .metadata-bar { grid-template-columns: repeat(3, 1fr); gap: 3rem; padding-top: 3rem; }
                .edu-grid { grid-template-columns: 160px 1fr auto; gap: 3rem; padding: 1.5rem 0; }
                .edu-right { text-align: right; }
                .philosophy-grid { grid-template-columns: 1fr 2fr; gap: 6rem; }

                /* Mobile Adjustments */
                @media (max-width: 768px) {
                    .mobile-col { flex-direction: column !important; }
                    .hero-text-box { padding: 3rem 2rem 2rem 2rem !important; flex: none !important; }
                    .hero-image-box { flex: 1 !important; }
                    .hero-bg-text { font-size: 40vw !important; }
                    .swipe-hint { bottom: 1rem !important; left: 2rem !important; }
                    
                    .pad-box { padding: 2rem !important; }
                    .metadata-bar, .metadata-bar-2 { grid-template-columns: 1fr !important; gap: 1.5rem !important; padding-top: 1.5rem !important; }
                    
                    .identity-why-box { align-self: flex-start !important; text-align: left !important; }

                    .edu-grid { grid-template-columns: 1fr !important; gap: 0.5rem !important; padding: 1rem 0 !important; }
                    .edu-right { text-align: left !important; margin-top: 0.5rem; }
                    
                    .philosophy-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
                    .hide-on-mobile { display: none !important; }
                    
                    .toc-nav { 
                        width: 90% !important; 
                        padding: 1rem !important; 
                        gap: 1rem !important; 
                        overflow-x: auto !important; 
                        justify-content: flex-start !important;
                    }
                    .toc-nav button { font-size: 0.65rem !important; }
                }
                
                @keyframes swipeHint {
                    0%, 100% { transform: translateX(0); }
                    50% { transform: translateX(10px); }
                }
            `}</style>
        </div>
    );
}

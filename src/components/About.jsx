'use client';

import { useEffect, useRef, useState } from 'react';
import { Playfair_Display, Inter } from 'next/font/google';
import LeetCodeStats from './LeetCodeStats';
import Journey from './Journey';
import Footer from './Footer';

const playfair = Playfair_Display({ weight: ['400','600','700','800','900'], subsets: ['latin'], display: 'swap' });
const inter = Inter({ weight: ['300','400','500','600'], subsets: ['latin'], display: 'swap' });

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
        width: '100%',
        minWidth: '100%',
        maxWidth: '100%',
        height: '100%',
        scrollSnapAlign: 'start',
        overflowY: 'hidden',
        overflowX: 'hidden',
        position: 'relative',
        backgroundColor: '#f5f1ec',
        boxSizing: 'border-box'
    };

    return (
        <div style={{ backgroundColor: '#f5f1ec', overflow: 'hidden', height: '100vh', width: '100%' }}>
            
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
                className="hide-scrollbar mobile-vertical-scroll"
            >
                {/* 1. COVER */}
                <section id="cover" style={{ 
                    ...pageStyle, 
                    backgroundColor: '#f5f1ec', 
                    backgroundImage: "url('/section-bg.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    overflow: 'hidden', 
                    position: 'relative', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    padding: '1.5rem' 
                }}>
                    
                    {/* Elegant Double Frame */}
                    <div style={{ width: '100%', height: '100%', border: '1px solid rgba(0,0,0,0.1)', padding: '0.5rem', position: 'relative' }}>
                        <div style={{ width: '100%', height: '100%', border: '1px solid rgba(0,0,0,0.05)', position: 'relative', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                            
                            {/* Subtle overlay to soften the background image */}
                            <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(245,241,236,0.4)', zIndex: 0 }} />

                            {/* The Signature (From Uploaded Image) - PLACED BEHIND PORTRAIT */}
                            <div className="cover-signature" style={{ position: 'absolute', top: '20%', right: '5%', zIndex: 1, pointerEvents: 'none', width: '40vw', maxWidth: '500px', transform: 'rotate(-3deg)' }}>
                                <img src="/signature-transparent.png" alt="Padmasree Signature" style={{ width: '100%', height: 'auto', filter: 'brightness(0) opacity(0.85)' }} />
                                {/* Organic Curved Purple Underline */}
                                <svg style={{ position: 'absolute', bottom: '16%', left: '2%', width: '95%', height: '40px', overflow: 'visible', pointerEvents: 'none' }} viewBox="0 0 100 20" preserveAspectRatio="none">
                                    <path d="M 5,18 Q 45,15 95,2" fill="none" stroke="url(#purple-grad)" strokeWidth="0.8" strokeLinecap="round" />
                                    <defs>
                                        <linearGradient id="purple-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="rgba(177,136,166,0)" />
                                            <stop offset="15%" stopColor="rgba(177,136,166,0.9)" />
                                            <stop offset="100%" stopColor="rgba(177,136,166,0)" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            {/* The Portrait */}
                            <div style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', height: '88%', width: '100%', zIndex: 2, display: 'flex', justifyContent: 'center' }}>
                                <img src="/bg1.png" alt="Padmasree Kunigiri" style={{ height: '100%', width: 'auto', objectFit: 'contain', objectPosition: 'bottom center', filter: 'drop-shadow(0px 15px 40px rgba(0,0,0,0.2))' }} />
                            </div>

                            {/* Foreground Content (IN FRONT of everything) */}
                            <div className="cover-foreground" style={{ position: 'relative', zIndex: 3, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '2.5rem', pointerEvents: 'none' }}>
                                
                                {/* Refined Top Bar with Micro-typography */}
                                <div className="cover-top-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                                        <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-primary)' }}>Chapter 01</span>
                                        <span style={{ fontSize: '0.55rem', fontFamily: 'monospace', fontWeight: '500', letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>Updated 2026</span>
                                    </div>
                                </div>

                                {/* Bottom Content Area */}
                                <div className="cover-bottom-area" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '3rem' }}>
                                    
                                    {/* Minimal Floating Paragraph */}
                                    <div className="cover-text-box" style={{ maxWidth: '400px', pointerEvents: 'auto', paddingLeft: '1.5rem', borderLeft: '1.5px solid rgba(109,63,82,0.3)' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                            <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', fontWeight: '700', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-primary)' }}>Full-Stack</span>
                                            <div style={{ width: '4px', height: '4px', backgroundColor: '#6d3f52', borderRadius: '50%' }} />
                                            <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', fontWeight: '700', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-primary)' }}>QA Auto</span>
                                        </div>
                                        <p style={{ fontSize: '1rem', color: 'var(--text-primary)', lineHeight: '1.8', margin: 0, fontWeight: '400' }}>
                                            A software engineer obsessed with bridging the gap between beautiful interfaces and bulletproof backend systems. I build digital products that prioritize scale, automation, and an uncompromising aesthetic.
                                        </p>
                                    </div>

                                    {/* Minimal Explore Hint */}
                                    <div 
                                        onClick={() => scrollToChapter('identity')}
                                        style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', pointerEvents: 'auto', cursor: 'pointer', transition: 'opacity 0.3s ease' }}
                                        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                                        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                                    >
                                        <div style={{ width: '40px', height: '1px', backgroundColor: 'rgba(0,0,0,0.2)' }} />
                                        <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', fontWeight: '700', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--text-primary)' }}>Swipe to Discover</span>
                                        <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '50%', border: '1px solid rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* 2. IDENTITY */}
                <section id="identity" style={{ ...pageStyle, borderRight: '1px solid rgba(0,0,0,0.1)', position: 'relative', overflow: 'hidden' }}>
                    
                    {/* Giant Watermark */}
                    <div className={playfair.className} style={{ position: 'absolute', top: '5%', right: '-2%', fontSize: 'clamp(20rem, 40vw, 40rem)', lineHeight: '0.8', color: 'rgba(0,0,0,0.02)', fontWeight: '700', fontStyle: 'italic', pointerEvents: 'none', zIndex: 0 }}>
                        02
                    </div>

                    <div className="pad-box" style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
                        
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            {/* Chapter Header */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                                <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--text-secondary)' }} />
                                <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', fontWeight: '700', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                                    Chapter 02 // Identity
                                </span>
                            </div>
                            
                            {/* Split Editorial Layout */}
                            <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-end', flexWrap: 'wrap' }}>
                                {/* Massive Heading */}
                                <div style={{ flex: '1 1 400px' }}>
                                    <h2 className={playfair.className} style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: '400', lineHeight: '0.95', color: 'var(--text-primary)', margin: '0', letterSpacing: '-0.04em' }}>
                                        I engineer <br/>
                                        <span style={{ fontStyle: 'italic', color: '#6d3f52' }}>products</span><br/>
                                        people trust.
                                    </h2>
                                </div>
                                
                                {/* Editorial Paragraph */}
                                <div style={{ flex: '1 1 300px', paddingBottom: '0.5rem' }}>
                                    <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--text-secondary)', margin: '0', fontWeight: '400', maxWidth: '400px' }}>
                                        I craft digital experiences that are robust, performant, and deeply intuitive. From pixel-perfect frontends to scalable backend architecture, I focus strictly on the details that elevate a product.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Metadata Bar */}
                        <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '1.5rem', paddingBottom: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', fontWeight: '700', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Location</span>
                                <span style={{ fontSize: '1rem', fontWeight: '500', color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>Kurnool, AP</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', fontWeight: '700', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Core Focus</span>
                                <span style={{ fontSize: '1rem', fontWeight: '500', color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>Full-Stack Engineering</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', fontWeight: '700', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Current Role</span>
                                <span style={{ fontSize: '1rem', fontWeight: '500', color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>Software Developer</span>
                            </div>
                        </div>

                        
                    </div>
                </section>

                {/* 3. EDUCATION */}
                <section id="education" style={{ ...pageStyle, borderRight: '1px solid var(--border-color)', position: 'relative', overflow: 'hidden' }}>
                    {/* Giant Watermark */}
                    <div className={playfair.className} style={{ position: 'absolute', top: '5%', right: '-2%', fontSize: 'clamp(20rem, 40vw, 40rem)', lineHeight: '0.8', color: 'rgba(0,0,0,0.02)', fontWeight: '700', fontStyle: 'italic', pointerEvents: 'none', zIndex: 0 }}>
                        03
                    </div>
                    <div className="pad-box" style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '4rem' }}>
                            <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--text-secondary)' }} />
                            <span style={{ fontSize: '0.85rem', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                                Chapter 03 — Education
                            </span>
                        </div>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0', maxWidth: '1200px', width: '100%', borderTop: '2px solid var(--text-primary)' }}>
                            {[
                                { institution: 'Ravindra College of Engineering', degree: 'B.Tech CSE', cgpa: '9.0', year: 'Present', current: true },
                                { institution: 'Jawahar Navodaya Vidyalaya', degree: 'Intermediate (CBSE)', cgpa: '8.0', year: '2022', current: false },
                                { institution: 'Jawahar Navodaya Vidyalaya', degree: 'Secondary (CBSE)', cgpa: '9.1', year: '2020', current: false },
                            ].map((edu, idx, arr) => (
                                <div key={idx} style={{
                                    display: 'flex', 
                                    justifyContent: 'space-between', 
                                    alignItems: 'center',
                                    padding: '2rem 0',
                                    borderBottom: idx < arr.length - 1 ? '1px solid var(--border-color)' : 'none',
                                    gap: '2rem'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '3rem', flex: 1 }}>
                                        <div style={{ fontSize: '0.85rem', fontFamily: 'monospace', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)', minWidth: '80px' }}>
                                            {edu.year}
                                        </div>
                                        <div>
                                            <h3 className={playfair.className} style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: '600', color: 'var(--text-primary)', margin: '0 0 0.5rem 0', lineHeight: '1.2' }}>
                                                {edu.institution}
                                            </h3>
                                            <div style={{ fontSize: '0.8rem', fontWeight: '600', letterSpacing: '0.1em', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
                                                {edu.degree}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center' }}>
                                        <div className={playfair.className} style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: '400', fontStyle: 'italic', color: '#6d3f52', lineHeight: '0.8', margin: 0 }}>
                                            {edu.cgpa}
                                        </div>
                                        <div style={{ fontSize: '0.65rem', fontFamily: 'monospace', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginTop: '0.8rem' }}>
                                            CGPA
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. STATS (LeetCode) */}
                <section id="stats" style={{ ...pageStyle, borderRight: '1px solid var(--border-color)', position: 'relative', overflow: 'hidden' }}>
                    {/* Giant Watermark */}
                    <div className={playfair.className} style={{ position: 'absolute', top: '5%', right: '-2%', fontSize: 'clamp(20rem, 40vw, 40rem)', lineHeight: '0.8', color: 'rgba(0,0,0,0.02)', fontWeight: '700', fontStyle: 'italic', pointerEvents: 'none', zIndex: 0 }}>
                        04
                    </div>
                    <div style={{ position: 'relative', zIndex: 1, height: '100%' }}>
                        <LeetCodeStats isBookLayout={true} />
                    </div>
                </section>

                {/* 5. JOURNEY */}
                <section id="journey" style={{ ...pageStyle, borderRight: '1px solid var(--border-color)', position: 'relative', overflow: 'hidden' }}>
                    {/* Giant Watermark */}
                    <div className={playfair.className} style={{ position: 'absolute', top: '5%', right: '-2%', fontSize: 'clamp(20rem, 40vw, 40rem)', lineHeight: '0.8', color: 'rgba(0,0,0,0.02)', fontWeight: '700', fontStyle: 'italic', pointerEvents: 'none', zIndex: 0 }}>
                        05
                    </div>
                    <div style={{ position: 'relative', zIndex: 1, height: '100%' }}>
                        <Journey isBookLayout={true} />
                    </div>
                </section>

                {/* 6. PHILOSOPHY */}
                <section id="philosophy" style={{ ...pageStyle, borderRight: '1px solid var(--border-color)', position: 'relative', overflow: 'hidden' }}>
                    {/* Giant Watermark */}
                    <div className={playfair.className} style={{ position: 'absolute', top: '5%', right: '-2%', fontSize: 'clamp(20rem, 40vw, 40rem)', lineHeight: '0.8', color: 'rgba(0,0,0,0.02)', fontWeight: '700', fontStyle: 'italic', pointerEvents: 'none', zIndex: 0 }}>
                        06
                    </div>
                    <div className="pad-box" style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingBottom: '8rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '4rem' }}>
                            <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--text-secondary)' }} />
                            <span style={{ fontSize: '0.85rem', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                                Chapter 06 // Philosophy
                            </span>
                        </div>
                        
                        <div style={{ maxWidth: '1000px' }}>
                            <h2 className={playfair.className} style={{ fontSize: 'clamp(3.5rem, 7vw, 6.5rem)', fontWeight: '400', lineHeight: '1', color: 'var(--text-primary)', margin: '0 0 2.5rem 0', letterSpacing: '-0.03em' }}>
                                Obsessed with <br/>
                                <span style={{ color: '#6d3f52', fontStyle: 'italic' }}>the details.</span>
                            </h2>
                            
                            <p style={{ fontSize: '1.2rem', lineHeight: '1.7', color: 'var(--text-secondary)', maxWidth: '600px', fontWeight: '400' }}>
                                I care about every single layer of a project. From clean, robust backend architecture to pixel-perfect, intuitive user interfaces—my philosophy is simple: turn ambitious ideas into products people trust.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 7. EPILOGUE (To Be Continued) */}
                <section id="epilogue" style={{ ...pageStyle, borderRight: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                    {/* Giant Watermark */}
                    <div className={playfair.className} style={{ position: 'absolute', top: '5%', right: '-2%', fontSize: 'clamp(20rem, 40vw, 40rem)', lineHeight: '0.8', color: 'rgba(0,0,0,0.02)', fontWeight: '700', fontStyle: 'italic', pointerEvents: 'none', zIndex: 0 }}>
                        07
                    </div>
                    <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '2rem', paddingBottom: '8rem', width: '100%' }}>
                        <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', fontWeight: '600', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', marginBottom: '2rem' }}>// Epilogue</span>
                        <h2 className={playfair.className} style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: '400', fontStyle: 'italic', color: '#6d3f52', maxWidth: '900px', margin: '0 auto', lineHeight: '1', marginBottom: '4rem' }}>
                            The next chapters are currently being written.
                        </h2>
                    </div>
                </section>

                {/* 8. FOOTER */}
                <section id="footer" style={{ ...pageStyle, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
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

                    /* Cover Page Mobile Fixes */
                    .cover-signature {
                        top: 5% !important;
                        right: -10% !important;
                        width: 80vw !important;
                    }
                    .cover-foreground {
                        padding: 1.5rem !important;
                        justify-content: flex-end !important;
                    }
                    .cover-top-bar {
                        position: absolute;
                        top: 1.5rem;
                        left: 1.5rem;
                        right: 1.5rem;
                    }
                    .cover-bottom-area {
                        flex-direction: column !important;
                        align-items: flex-start !important;
                        gap: 2rem !important;
                        background: linear-gradient(to top, rgba(245,241,236,1) 30%, rgba(245,241,236,0.8) 60%, transparent 100%) !important;
                        width: calc(100% + 3rem) !important;
                        margin-left: -1.5rem !important;
                        margin-bottom: -1.5rem !important;
                        padding: 8rem 1.5rem 1.5rem 1.5rem !important;
                    }
                }
                
                @keyframes swipeHint {
                    0%, 100% { transform: translateX(0); }
                    50% { transform: translateX(10px); }
                }
            `}</style>
        </div>
    );
}

"use client";
import { Playfair_Display, Inter } from 'next/font/google';
import { motion } from 'framer-motion';

const playfair = Playfair_Display({
    weight: ['400', '700', '800'],
    subsets: ['latin'],
    display: 'swap',
});

const inter = Inter({
    weight: ['300', '400', '500'],
    subsets: ['latin'],
    display: 'swap',
});

    export default function Hero() {
        return (
            <section id="home" className={inter.className} style={{
                position: 'relative',
                width: '100%',
                maxWidth: '100%',
                margin: 0,
                padding: 0,
                height: '100vh',
            minHeight: '700px',
            overflow: 'hidden',
            backgroundImage: "url('/hero-bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
        }}>

            {/* PORTRAIT — centered */}
            <img
                className="hero-portrait"
                src="/Padu Background Removed.png"
                alt="Padmasree Kunigiri"
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    height: '102vh',
                    width: 'auto',
                    maxWidth: 'none',
                    objectFit: 'contain',
                    objectPosition: 'bottom center',
                    zIndex: 10,
                }}
            />

            {/* LEFT TEXT COLUMN */}
            <div className="hero-left" style={{
                position: 'absolute',
                left: '5%',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '35%',
                minWidth: '320px',
                zIndex: 20,
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '2rem',
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.4rem' }}>
                    <span style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.22em', color: '#888', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                        FULL-STACK WEB DEVELOPER
                    </span>
                    <div style={{ width: '60px', height: '1px', background: '#bbb', flexShrink: 0 }} />
                </div>

                <h1 className={playfair.className} style={{
                    margin: '0 0 1.2rem 0',
                    lineHeight: 0.9,
                    letterSpacing: '-0.02em',
                    fontSize: 'clamp(3rem, 7vw, 8rem)',
                    fontWeight: 800,
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <span style={{ color: '#111' }}>Padmasree</span>
                    <span style={{ color: '#6d3f52' }}>Kunigiri</span>
                </h1>

                <h2 style={{ 
                    fontSize: '1.3rem', 
                    fontWeight: 600, 
                    color: '#111', 
                    marginBottom: '1rem', 
                    lineHeight: 1.3, 
                    letterSpacing: '-0.01em' 
                }}>
                    I turn ideas into digital experiences.
                </h2>

                <p style={{ fontSize: '0.96rem', lineHeight: 1.7, color: '#555', marginBottom: '2.2rem', fontWeight: 400 }}>
                    I design and build thoughtful web experiences that bring ideas to life through clean design, reliable engineering, and purposeful technology.
                </p>



                <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
                    <div style={{ 
                        width: '40px', 
                        height: '40px', 
                        borderRadius: '50%', 
                        border: '1px solid rgba(0,0,0,0.1)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center'
                    }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6d3f52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <polyline points="19 12 12 19 5 12"></polyline>
                        </svg>
                    </div>
                    <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', color: '#888', textTransform: 'uppercase' }}>
                        SCROLL
                    </span>
                </div>
            </div>

            {/* RIGHT KEYWORDS COLUMN */}
            <div className="hero-right" style={{
                position: 'absolute',
                right: '2%',
                top: 0,
                bottom: 0,
                width: '8%',
                zIndex: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                borderLeft: '1px solid rgba(0,0,0,0.1)',
                paddingLeft: '1rem',
            }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                    {['BUILD', 'AUTOMATE', 'INNOVATE', 'SCALE'].map(word => (
                        <span key={word} style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.28em', color: '#888', textTransform: 'uppercase', whiteSpace: 'nowrap', display: 'block' }}>
                            {word}
                        </span>
                    ))}
                    <span style={{ fontSize: '0.9rem', color: '#bbb' }}>—</span>
                </div>
            </div>

        <style>{`
            @media (max-width: 900px) {
                .hero {
                    min-height: 100vh !important;
                }
                .hero-portrait { 
                    height: 50vh !important; 
                    left: 50% !important;
                    right: auto !important;
                    transform: translateX(-50%) !important;
                    object-position: bottom center !important;
                }
                .hero-left {
                    top: 15% !important;
                    bottom: auto !important;
                    transform: none !important;
                    width: 100% !important;
                    min-width: 0 !important;
                    left: 0 !important;
                    z-index: 30 !important;
                    background: transparent !important;
                    padding: 0 1.5rem !important;
                    display: flex !important;
                    flex-direction: column !important;
                    align-items: center !important;
                    text-align: center !important;
                }
                .hero-left > div:first-child { justify-content: center !important; margin-bottom: 1.5rem !important; } /* Center the top label */
                .hero-left h1 { 
                    font-size: clamp(3rem, 15vw, 4rem) !important; 
                    line-height: 1 !important;
                    text-align: center !important;
                }
                .hero-left p { text-align: center !important; margin: 1.5rem auto 0 auto !important; }
                .hero-right { display: none !important; }
            }
        `}</style>
        </section>
    );
}

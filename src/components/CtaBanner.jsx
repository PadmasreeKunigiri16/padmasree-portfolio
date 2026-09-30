"use client";
import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({ weight: ['400','700','800','900'], subsets: ['latin'], display: 'swap' });
const inter = Inter({ weight: ['300','400','500','600','700'], subsets: ['latin'], display: 'swap' });

export default function CtaBanner() {
    return (
        <section id="contact" className={inter.className} style={{
            position: 'relative',
            width: '100%',
            maxWidth: '100%',
            minHeight: '80vh',
            margin: 0,
            padding: 0,
            overflow: 'hidden',
            backgroundColor: '#f5f1ec',
        }}>


            <div style={{ position: 'relative', zIndex: 1, padding: '7rem 6% 4rem 6%', minHeight: '80vh', display: 'flex', flexDirection: 'column' }}>
                
                {/* WATERMARK */}
                <div className="desktop-only" style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: 'clamp(5rem, 20vw, 24rem)',
                    fontWeight: 900,
                    color: 'transparent',
                    WebkitTextStroke: '1.5px rgba(0,0,0,0.04)',
                    pointerEvents: 'none',
                    letterSpacing: '-0.02em',
                    whiteSpace: 'nowrap',
                    zIndex: 0,
                    lineHeight: 1,
                    textAlign: 'center'
                }}>
                    CONNECT
                </div>

                {/* CONTENT WRAPPER */}
                <div style={{ position: 'relative', zIndex: 10, flex: 1, display: 'flex', flexDirection: 'column' }}>
                    
                    {/* Top label */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
                        <div style={{ width: '2.4rem', height: '2.4rem', borderRadius: '50%', border: '1px solid rgba(0,0,0,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.72rem', fontWeight: 600, color: '#555', letterSpacing: '0.05em', flexShrink: 0 }}>
                            04
                        </div>
                        <div style={{ width: '60px', height: '1px', background: 'rgba(0,0,0,0.2)' }} />
                        <span style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.22em', color: '#888', textTransform: 'uppercase' }}>
                            LET&apos;S CONNECT
                        </span>
                    </div>

                    {/* Main content row */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'flex-start', maxWidth: '800px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {/* Eyebrow */}
                            <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.22em', color: '#888', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                                AVAILABLE FOR OPPORTUNITIES
                            </span>

                            {/* Headline */}
                            <h2 className={playfair.className} style={{ fontSize: 'clamp(3rem, 6vw, 6.5rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.03em', color: '#111', margin: '0 0 1rem 0' }}>
                                Let&apos;s build something<br />
                                <span style={{ color: '#6d3f52' }}>amazing together.</span>
                            </h2>

                            {/* Description */}
                            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#555', margin: '0 0 2rem 0', fontWeight: 400, maxWidth: '500px' }}>
                                I&apos;m actively seeking opportunities in Full Stack Development, Software Testing, and AI/ML integrations. Let&apos;s connect and create something great.
                            </p>

                            {/* Buttons */}
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                                <a href="mailto:padmasreekunigiri@gmail.com" style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                                    padding: '0.8rem 1.8rem', borderRadius: '0.5rem',
                                    backgroundColor: '#111', color: '#fff',
                                    fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none',
                                    transition: 'opacity 0.2s ease', border: '1px solid #111'
                                }}
                                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                    Email Me →
                                </a>

                                <a href="https://linkedin.com/in/padmasree-kunigiri" target="_blank" rel="noopener noreferrer" style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                                    padding: '0.8rem 1.8rem', borderRadius: '0.5rem',
                                    backgroundColor: 'transparent', color: '#111',
                                    fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none',
                                    transition: 'background 0.2s ease', border: '1px solid rgba(0,0,0,0.15)'
                                }}
                                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.03)'}
                                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                    LinkedIn →
                                </a>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </section>
    );
}

"use client";
import { Playfair_Display, Inter } from 'next/font/google';
import { SiLeetcode } from 'react-icons/si';

const playfair = Playfair_Display({ weight: ['400','700','800','900'], subsets: ['latin'], display: 'swap' });
const inter = Inter({ weight: ['300','400','500','600','700'], subsets: ['latin'], display: 'swap' });

export default function Footer() {
    return (
        <footer id="footer" className={inter.className} style={{
            position: 'relative',
            width: '100%',
            minHeight: '80vh',
            margin: 0,
            padding: 0,
            overflow: 'hidden',
            backgroundColor: '#f5f1ec',
            backgroundImage: "url('/contact-bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            flexDirection: 'column',
        }}>
            {/* Overlay to soften the background, stronger on the left */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to right, rgba(245,241,236,0.96) 0%, rgba(245,241,236,0.88) 55%, rgba(245,241,236,0.2) 100%)',
                zIndex: 0
            }} />

            <div style={{ position: 'relative', zIndex: 1, padding: '6rem 6% 2rem 6%', flex: 1, display: 'flex', flexDirection: 'column' }}>

                {/* Top Row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '3rem', marginBottom: 'auto' }}>
                    
                    {/* Left: Find Me Online */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.22em', color: '#888', textTransform: 'uppercase' }}>
                                FIND ME ONLINE
                            </span>
                            <div style={{ width: '60px', height: '1px', background: 'rgba(0,0,0,0.2)' }} />
                        </div>
                        <div style={{ display: 'flex', gap: '0.8rem' }}>
                            {/* GitHub */}
                            <a href="https://github.com/PadmasreeKunigiri16" target="_blank" rel="noreferrer" style={{
                                width: '3.2rem', height: '3.2rem', borderRadius: '0.8rem', border: '1px solid rgba(0,0,0,0.15)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: '#111', textDecoration: 'none', transition: 'background 0.2s ease', background: 'transparent'
                            }}
                            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.04)'}
                            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </a>
                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/padmasree-kunigiri-19859630a/" target="_blank" rel="noreferrer" style={{
                                width: '3.2rem', height: '3.2rem', borderRadius: '0.8rem', border: '1px solid rgba(0,0,0,0.15)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: '#111', textDecoration: 'none', transition: 'background 0.2s ease', background: 'transparent'
                            }}
                            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.04)'}
                            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                            {/* LeetCode */}
                            <a href="https://leetcode.com/u/padmasree16_kunigiri/" target="_blank" rel="noreferrer" style={{
                                width: '3.2rem', height: '3.2rem', borderRadius: '0.8rem', border: '1px solid rgba(0,0,0,0.15)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: '#111', textDecoration: 'none', transition: 'background 0.2s ease', background: 'transparent'
                            }}
                            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.04)'}
                            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>
                                <SiLeetcode size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Right: Bio snippet */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', maxWidth: '450px' }}>
                        <div style={{ width: '1px', height: '45px', background: 'rgba(0,0,0,0.15)', flexShrink: 0 }} />
                        <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: '#555', margin: 0, fontWeight: 400, textAlign: 'left' }}>
                            Crafted with care by <strong>Padmasree Kunigiri</strong> — a Full-Stack Developer who turns ideas into well-engineered, reliable products that people can trust.
                        </p>
                    </div>

                </div>

                {/* Center: Massive Name Watermark */}
                <div className={playfair.className} style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    marginTop: '2rem', marginBottom: '4rem', pointerEvents: 'none'
                }}>
                    <span style={{
                        fontSize: 'clamp(3rem, 11vw, 13rem)',
                        fontWeight: 900,
                        color: 'rgba(0,0,0,0.25)',
                        lineHeight: 0.8,
                        letterSpacing: '-0.02em',
                        textAlign: 'center'
                    }}>PADMASREE</span>
                    <span style={{
                        fontSize: 'clamp(3rem, 11vw, 13rem)',
                        fontWeight: 900,
                        color: 'rgba(0,0,0,0.25)',
                        lineHeight: 0.8,
                        letterSpacing: '-0.02em',
                        textAlign: 'center'
                    }}>KUNIGIRI</span>
                </div>

                {/* Bottom Row: Copyright & Signature */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 'auto', flexWrap: 'wrap', gap: '1rem' }}>
                    <span style={{ fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.2em', color: '#888', textTransform: 'uppercase', flex: 1, textAlign: 'left' }}>
                        © {new Date().getFullYear()} PADMASREE KUNIGIRI. ALL RIGHTS RESERVED.
                    </span>
                    
                    <div style={{ paddingRight: '1rem', display: 'flex', alignItems: 'center' }}>
                        <img 
                            src="/signature-new.png" 
                            alt="Padmasree Kunigiri Signature" 
                            style={{ 
                                height: '5rem',
                                objectFit: 'contain',
                                filter: 'brightness(0)',
                                opacity: 0.8
                            }} 
                        />
                    </div>
                </div>

            </div>
        </footer>
    );
}

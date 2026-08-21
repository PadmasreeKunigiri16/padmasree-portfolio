'use client';
import { SiLeetcode } from 'react-icons/si';
export default function Footer() {
    return (
        <footer style={{
            backgroundColor: 'var(--bg-secondary)',
            borderTop: '1px solid var(--border-color)',
            padding: '6rem 0 0 0',
            position: 'relative',
            overflow: 'hidden',
        }}>
            <div className="footer-container">
                {/* Left: Socials */}
                <div className="footer-socials">
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Find me online:</h3>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                        {/* GitHub */}
                        <a href="https://github.com/PadmasreeKunigiri16" target="_blank" rel="noreferrer" title="GitHub" style={{ width: '3rem', height: '3rem', backgroundColor: 'var(--text-primary)', color: '#fff', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'opacity 0.2s ease', opacity: 1 }}
                            onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
                            onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </a>
                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/padmasree-kunigiri-19859630a/" target="_blank" rel="noreferrer" title="LinkedIn" style={{ width: '3rem', height: '3rem', backgroundColor: 'var(--text-primary)', color: '#fff', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'opacity 0.2s ease', opacity: 1 }}
                            onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
                            onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                        {/* LeetCode */}
                        <a href="https://leetcode.com/u/padmasree16_kunigiri/" target="_blank" rel="noreferrer" title="LeetCode" style={{ width: '3rem', height: '3rem', backgroundColor: 'var(--text-primary)', color: '#fff', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'opacity 0.2s ease', opacity: 1 }}
                            onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
                            onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                            <SiLeetcode size={20} />
                        </a>
                    </div>
                </div>

                {/* Right: Blurb */}
                <div className="footer-blurb">
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7' }}>
                        Crafted with care by <strong style={{ color: 'var(--text-primary)', fontWeight: '700' }}>Padmasree Kunigiri</strong> — a Full-Stack Developer who turns ideas into well-engineered, reliable products that people can trust.
                    </p>
                </div>
            </div>

            {/* Massive stacked name — uses site text color */}
            <div style={{ width: '100%', overflow: 'hidden', marginTop: '5rem' }}>
                <h2 className="footer-massive-text" style={{
                    fontWeight: '900',
                    letterSpacing: '-0.04em',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                    color: 'var(--border-color)',
                    margin: 0,
                    padding: 0,
                    userSelect: 'none',
                    whiteSpace: 'nowrap',
                    width: '100%',
                    lineHeight: '0.8'
                }}>
                    PADMASREE<br />KUNIGIRI
                </h2>
            </div>

            {/* Copyright strip */}
            <div style={{ padding: '1.25rem', textAlign: 'center' }}>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    © {new Date().getFullYear()} Padmasree Kunigiri. All rights reserved.
                </p>
            </div>

            <style jsx>{`
                .footer-container {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 0 4rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    gap: 3rem;
                }
                .footer-blurb {
                    text-align: right;
                    max-width: 420px;
                }
                .footer-massive-text {
                    font-size: 11.5vw;
                }
                
                @media (max-width: 768px) {
                    .footer-container {
                        flex-direction: column;
                        padding: 0 1.5rem;
                        align-items: flex-start;
                    }
                    .footer-blurb {
                        text-align: left;
                        max-width: 100%;
                    }
                    .footer-massive-text {
                        font-size: 11.5vw !important;
                        line-height: 0.8 !important;
                    }
                }
            `}</style>
        </footer>
    );
}

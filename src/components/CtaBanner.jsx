'use client';

export default function CtaBanner() {
    return (
        <section className="cta-section">
            {/* Faint watermark */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '12vw',
                fontWeight: '900',
                color: 'transparent',
                WebkitTextStroke: '1px rgba(0,0,0,0.04)',
                pointerEvents: 'none',
                whiteSpace: 'nowrap',
                zIndex: 0,
                letterSpacing: '-0.04em',
            }}>
                CONNECT
            </div>

            <div className="cta-container">
                {/* Left: Text */}
                <div>
                    <span style={{
                        fontSize: '0.7rem',
                        fontFamily: 'monospace',
                        letterSpacing: '0.3em',
                        textTransform: 'uppercase',
                        color: 'var(--text-secondary)',
                        display: 'block',
                        marginBottom: '1.25rem',
                    }}>Available for opportunities</span>

                    <h2 style={{
                        fontSize: 'clamp(2.25rem, 4.5vw, 4rem)',
                        fontWeight: '800',
                        letterSpacing: '-0.04em',
                        lineHeight: '1.05',
                        color: 'var(--text-primary)',
                        marginBottom: '1.5rem',
                    }}>
                        Let&apos;s build something<br />
                        <span style={{
                            color: 'transparent',
                            WebkitTextStroke: '2px var(--text-primary)',
                        }}>amazing together.</span>
                    </h2>

                    <p style={{
                        fontSize: '1.1rem',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.75',
                        maxWidth: '520px',
                    }}>
                        I&apos;m actively seeking opportunities in Full Stack Development, Software Testing, and AI/ML integrations. Let&apos;s connect and create something great.
                    </p>
                </div>

                {/* Right: CTA buttons */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexShrink: 0 }}>
                    <a
                        href="mailto:kunigiripadmasri16@gmail.com"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                            padding: '1rem 2rem',
                            background: 'var(--text-primary)',
                            color: '#fff',
                            borderRadius: '3rem',
                            fontWeight: '600',
                            fontSize: '0.95rem',
                            textDecoration: 'none',
                            transition: 'opacity 0.2s ease',
                            whiteSpace: 'nowrap',
                            justifyContent: 'center',
                        }}
                        onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
                        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        Email Me
                    </a>
                    <a
                        href="https://www.linkedin.com/in/padmasree-kunigiri-19859630a/"
                        target="_blank" rel="noreferrer"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                            padding: '1rem 2rem',
                            background: 'transparent',
                            color: 'var(--text-primary)',
                            border: '1px solid var(--border-color)',
                            borderRadius: '3rem',
                            fontWeight: '600',
                            fontSize: '0.95rem',
                            textDecoration: 'none',
                            transition: 'background 0.2s ease',
                            whiteSpace: 'nowrap',
                            justifyContent: 'center',
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.02)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        LinkedIn
                    </a>
                </div>
            </div>

            <style jsx>{`
                .cta-section {
                    background-color: var(--bg-primary);
                    padding: 8rem 4rem;
                    position: relative;
                    overflow: hidden;
                    border-top: 1px solid var(--border-color);
                    max-width: 100% !important;
                    margin: 0 !important;
                }
                .cta-container {
                    max-width: 900px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 10;
                    display: grid;
                    grid-template-columns: 1fr auto;
                    align-items: center;
                    gap: 4rem;
                }

                @media (max-width: 768px) {
                    .cta-section {
                        padding: 5rem 1.5rem !important;
                    }
                    .cta-container {
                        grid-template-columns: 1fr !important;
                        gap: 2rem !important;
                        text-align: center;
                    }
                    .cta-container p {
                        margin: 0 auto;
                    }
                }
            `}</style>
        </section>
    );
}

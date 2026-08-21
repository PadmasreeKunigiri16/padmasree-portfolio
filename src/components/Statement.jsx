import Link from 'next/link';

export default function Statement() {
    return (
        <>
            <section className="statement-section">
                
                {/* Massive Faint Watermark Background */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '10vw',
                    fontWeight: '900',
                    color: 'transparent',
                    WebkitTextStroke: '2px rgba(0,0,0,0.03)',
                    pointerEvents: 'none',
                    whiteSpace: 'nowrap',
                    zIndex: 0
                }}>
                    INNOVATE
                </div>


                <div className="statement-content">
                    <h2 className="animate-up" style={{ 
                        fontSize: 'clamp(2.5rem, 5vw, 5.5rem)', 
                        fontWeight: '800', 
                        lineHeight: '1.1', 
                        letterSpacing: '-0.04em',
                        color: 'var(--text-primary)',
                        marginBottom: '2rem'
                    }}>
                        I build <span style={{color: 'transparent', WebkitTextStroke: '2px var(--text-primary)'}}>intelligent systems</span><br/>
                        that scale, perform, and <span style={{color: 'transparent', WebkitTextStroke: '2px var(--text-primary)'}}>deliver.</span>
                    </h2>
                    
                    <p className="animate-up" style={{ 
                        fontSize: '1.15rem', 
                        color: 'var(--text-secondary)', 
                        maxWidth: '650px', 
                        margin: '0 auto',
                        lineHeight: '1.8',
                        animationDelay: '0.1s',
                        fontWeight: '400'
                    }}>
                        I&apos;m a <strong style={{color: 'var(--text-primary)', fontWeight: '600'}}>Full-Stack Developer</strong> passionate about creating seamless user experiences and reliable software from end to end. From crafting intuitive frontends to building dependable backend systems and testing every detail, I turn ideas into <strong style={{color: 'var(--text-primary)', fontWeight: '600'}}>well-engineered products people can trust</strong>.
                    </p>
                </div>
                
                <div className="statement-btn animate-up">
                    <Link
                        href="/about"
                        style={{background: 'var(--text-primary)', color: '#ffffff', padding: '1.25rem 2.5rem', borderRadius: '3rem', fontWeight: '600', fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '0.75rem', transition: 'transform 0.3s ease, opacity 0.3s ease', border: 'none', cursor: 'pointer', textDecoration: 'none'}}
                        onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                    >
                        Explore Me.. <span style={{fontSize: '1.2rem'}}>→</span>
                    </Link>
                </div>
            </section>

            <style jsx>{`
                .statement-section {
                    position: relative;
                    min-height: 80vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: 4rem 2rem 8rem 2rem;
                    background-color: var(--bg-secondary);
                    border: none;
                    overflow: hidden;
                }
                .statement-content {
                    max-width: 1000px;
                    margin: 0 auto;
                    text-align: center;
                    position: relative;
                    z-index: 10;
                }
                .statement-btn {
                    position: absolute;
                    right: 4rem;
                    bottom: 4rem;
                    animation-delay: 0.2s;
                    z-index: 10;
                }
                
                @media (max-width: 768px) {
                    .statement-section {
                        padding: 4rem 1.5rem !important;
                        min-height: auto;
                        text-align: center;
                    }
                    .statement-content h2 {
                        font-size: 2.2rem !important;
                    }
                    .statement-content p {
                        font-size: 1rem !important;
                    }
                    .statement-btn {
                        position: relative !important;
                        right: auto !important;
                        bottom: auto !important;
                        margin: 3rem auto 0 auto !important;
                        display: flex;
                        justify-content: center;
                    }
                }
            `}</style>
        </>
    );
}

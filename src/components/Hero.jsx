"use client";

export default function Hero() {
    return (
        <section id="home" className="hero-section" style={{ 
            height: '100vh',
            backgroundColor: 'var(--bg-primary)',
            position: 'relative',
            overflow: 'hidden',
            padding: 0,
            maxWidth: '100%',
            width: '100%',
            margin: 0,
        }}>
            
            <div className="hero-bio">
                <p>
                    Specialized in scalable web<br />architecture, QA automation,<br />and intelligent AI integrations.
                </p>
            </div>

            <div className="hero-bottom-left">
                <div>I AM</div>
                <div>PADMASREE</div>
            </div>

            <div className="hero-bottom-right">
                <div style={{ letterSpacing: '0.1em' }}>FULL-STACK</div>
                <div style={{ letterSpacing: '0.15em' }}>WEB DEVELOPER</div>
            </div>

            <div className="hero-image-container">
                <img 
                    src="/Padu Background Removed.png" 
                    alt="Padmasree Portrait" 
                    className="hero-image"
                />
            </div>

            <style jsx>{`
                /* Base Desktop Styles */
                .hero-image-container {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    z-index: 20;
                    pointer-events: none;
                    display: flex;
                    justify-content: center;
                    align-items: flex-end;
                    height: 100%;
                }
                .hero-image {
                    height: 110%;
                    width: auto;
                    object-fit: contain;
                    object-position: bottom;
                    display: block;
                    flex-shrink: 0;
                    transform: translateX(5%);
                }

                .hero-bio {
                    position: absolute;
                    top: 50%;
                    right: 3%;
                    z-index: 30;
                    max-width: 200px;
                }
                .hero-bio p {
                    font-size: 0.88rem;
                    color: var(--text-secondary);
                    line-height: 1.6;
                    font-weight: 400;
                    margin: 0;
                }

                .hero-bottom-left {
                    position: absolute;
                    bottom: 3%;
                    left: 1.5%;
                    z-index: 10;
                    font-family: "Impact", "Arial Black", sans-serif;
                    font-weight: 900;
                    color: var(--text-primary);
                    text-transform: uppercase;
                    line-height: 0.82;
                    letter-spacing: -0.02em;
                    font-size: clamp(2rem, 4.5vw, 5rem);
                }

                .hero-bottom-right {
                    position: absolute;
                    bottom: 3%;
                    right: 1.5%;
                    z-index: 10;
                    text-align: right;
                    font-family: "Impact", "Arial Black", sans-serif;
                    font-weight: 900;
                    color: var(--text-primary);
                    text-transform: uppercase;
                    line-height: 0.82;
                    font-size: clamp(2rem, 3.5vw, 4rem);
                }

                /* Mobile Optimizations - Premium Editorial Magazine Look */
                @media (max-width: 768px) {
                    .hero-section {
                        display: block !important;
                    }
                    .hero-image-container {
                        position: absolute !important;
                        height: 75vh !important;
                        bottom: 0 !important;
                        z-index: 20;
                    }
                    .hero-image {
                        height: 100%;
                        transform: translateX(0);
                    }
                    
                    /* I AM PADMASREE: massive, centered, behind portrait */
                    .hero-bottom-left {
                        position: absolute !important;
                        top: 20% !important;
                        left: 50% !important;
                        bottom: auto !important;
                        transform: translateX(-50%) !important;
                        width: 100% !important;
                        text-align: center !important;
                        font-size: 16vw !important;
                        line-height: 0.85 !important;
                        z-index: 10 !important; /* BEHIND IMAGE */
                        text-shadow: none !important; /* No glow */
                    }

                    /* Hide FULL-STACK WEB DEV on mobile */
                    .hero-bottom-right {
                        display: none !important;
                    }

                    /* Hide bio on mobile for clean editorial look */
                    .hero-bio {
                        display: none !important; 
                    }
                }
            `}</style>
        </section>
    );
}

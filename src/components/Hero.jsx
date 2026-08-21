"use client";

export default function Hero() {
    return (
        <section id="home" style={{ 
            height: '100vh',
            backgroundColor: 'var(--bg-primary)',
            position: 'relative',
            overflow: 'hidden',
            padding: 0,
            maxWidth: '100%',
            width: '100%',
            margin: 0,
        }}>
            

            {/* 
                Portrait — z:20 (in front of all text)
                Math: at 95vh height, image = 41.8vw wide
                translateX(-15%) shifts face from 51.8% → 44.5% of viewport
                This places face in the comma-gap of "Hey, there"
                Subject spans 28.3vw to 60.7vw leaving:
                  Left clear zone: 28.3vw  (PADMASREE at 6vw = 29.7vw — only last "E" hides)
                  Right clear zone: 39.3vw (FULL-STACK at 4vw = 22vw — fully visible)
            */}
            <div style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: 0,
                right: 0,
                zIndex: 20,
                pointerEvents: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
                height: '100%',
            }}>
                <img 
                    src="/Padu Background Removed.png" 
                    alt="Padmasree Portrait" 
                    style={{ 
                        height: '110%',
                        width: 'auto',
                        objectFit: 'contain',
                        objectPosition: 'bottom',
                        display: 'block',
                        flexShrink: 0,
                        /* +5% right: subject left moves from 31.5vw → 33.6vw, clear zone = 32.1vw */
                        /* face moves from 44.5% → 46.6% viewport (stays in comma-gap of Hey,there) */
                        transform: 'translateX(5%)',
                    }} 
                />
            </div>

            {/* Right bio text — z:30 (always on top) */}
            <div style={{
                position: 'absolute',
                top: '50%',
                right: '3%',
                zIndex: 30,
                maxWidth: '200px',
            }}>
                <p style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    fontWeight: '400',
                    margin: 0,
                }}>
                    Specialized in scalable web<br />architecture, QA automation,<br />and intelligent AI integrations.
                </p>
            </div>

            {/* Bottom-left: "I AM / PADMASREE" — z:10 (behind portrait) */}
            <div style={{
                position: 'absolute',
                bottom: '3%',
                left: '1.5%',
                zIndex: 10,
            }}>
                <div style={{
                    fontFamily: '"Impact", "Arial Black", sans-serif',
                    fontWeight: '900',
                    color: 'var(--text-primary)',
                    textTransform: 'uppercase',
                    lineHeight: '0.82',
                    letterSpacing: '-0.02em',
                }}>
                    {/* 
                        Impact font ~0.5 char ratio: PADMASREE at 7vw = 9*0.5*7 = 31.5vw
                        Left clear zone with -8% shift = ~31vw → barely fits, SREE fully visible
                    */}
                    {/* PADMASREE at 4.5vw = 9*0.714*4.5 = 28.9vw < 32.1vw clear zone ✓ */}
                    <div style={{ fontSize: 'clamp(1.8rem, 4.5vw, 5rem)' }}>I AM</div>
                    <div style={{ fontSize: 'clamp(1.8rem, 4.5vw, 5rem)' }}>PADMASREE</div>
                </div>
            </div>

            {/* Bottom-right: role — z:10 (behind portrait) */}
            <div style={{
                position: 'absolute',
                bottom: '3%',
                right: '1.5%',
                zIndex: 10,
                textAlign: 'right',
            }}>
                <div style={{
                    fontFamily: '"Impact", "Arial Black", sans-serif',
                    fontWeight: '900',
                    color: 'var(--text-primary)',
                    textTransform: 'uppercase',
                    lineHeight: '0.82',
                    letterSpacing: '-0.02em',
                }}>
                    <div style={{ fontSize: 'clamp(1.5rem, 4vw, 4.5rem)', textAlign: 'right' }}>FULL-STACK</div>
                    <div style={{ fontSize: 'clamp(1.5rem, 4vw, 4.5rem)', textAlign: 'right' }}>WEB</div>
                    <div style={{ fontSize: 'clamp(1.5rem, 4vw, 4.5rem)', textAlign: 'right' }}>DEVELOPER</div>
                </div>
            </div>

        </section>
    );
}

"use client";
import { Playfair_Display, Inter } from 'next/font/google';
import Link from 'next/link';

const playfair = Playfair_Display({ weight: ['400','700','800','900'], subsets: ['latin'], display: 'swap' });
const inter = Inter({ weight: ['300','400','500','600'], subsets: ['latin'], display: 'swap' });

const pillars = [
    {
        num: '01',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6d3f52" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 12 12 17 22 12"></polyline>
                <polyline points="2 17 12 22 22 17"></polyline>
            </svg>
        ),
        label: 'BUILD',
        desc: 'Design and develop scalable web applications with clean architecture and great user experiences.',
    },
    {
        num: '02',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6d3f52" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
        ),
        label: 'AUTOMATE',
        desc: 'Automate real-world processes and integrate smart systems to save time and improve productivity.',
    },
    {
        num: '03',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6d3f52" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>
            </svg>
        ),
        label: 'INNOVATE',
        desc: 'Explore and integrate AI to create practical, human-centered solutions for real-world challenges.',
    },
];

export default function Statement() {
    return (
        <section className={`approach-section ${inter.className}`}>

            {/* APPROACH watermark */}
            <div className="watermark">APPROACH</div>

            {/* Top label row */}
            <div className="top-label">
                <div className="circle-num">02</div>
                <div className="label-line" />
                <span className="label-text">ABOUT ME</span>
            </div>

            {/* Main two-col layout */}
            <div className="main-row">
                {/* Left — big headline */}
                <div className="headline-col">
                    <h2 className={`headline ${playfair.className}`}>
                        I build intelligent<br />
                        systems that<br />
                        <span className="accent">scale, perform,</span><br />
                        <span className="accent">and deliver.</span>
                    </h2>
                </div>

                {/* Right — description */}
                <div className="desc-col">
                    <p className="desc">
                        I&apos;m a <strong>Full-Stack Developer</strong> passionate about creating seamless user experiences
                        and reliable software from end to end. From crafting intuitive frontends to
                        building dependable backend systems and testing every detail, I turn ideas into{' '}
                        <strong>well-engineered products people can trust.</strong>
                    </p>
                </div>
            </div>

            {/* Pillar cards row */}
            <div className="pillars-row">
                {pillars.map((p) => (
                    <div key={p.num} className="pillar">
                        <div className="pillar-left">
                            <span className="pillar-num">{p.num}</span>
                        </div>
                        <div className="pillar-right">
                            <div className="pillar-icon-wrapper">
                                <div className="pillar-icon">{p.icon}</div>
                            </div>
                            <span className="pillar-label">{p.label}</span>
                            <p className="pillar-desc">{p.desc}</p>
                        </div>
                    </div>
                ))}
            </div>


            {/* Explore button */}
            <Link href="/about" style={{
                position: 'absolute',
                right: '6%',
                bottom: '4rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.8rem 1.6rem',
                borderRadius: '2rem',
                border: '1px solid rgba(0,0,0,0.15)',
                background: 'transparent',
                color: '#111',
                fontSize: '0.85rem',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                zIndex: 1,
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.03)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
            >
                Explore Me →
            </Link>

            <style jsx>{`
                .approach-section {
                    position: relative;
                    width: 100vw;
                    max-width: none !important;
                    margin: 0 !important;
                    padding: 5rem 6% 7rem 6%;
                    background: #f5f1ec;
                    overflow: hidden;
                    min-height: 90vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    box-sizing: border-box;
                }



                /* Elevate content above the overlay */
                .top-label,
                .main-row,
                .pillars-row,
                .scroll-hint {
                    position: relative;
                    z-index: 2;
                }

                /* Faint APPROACH watermark — bottom aligned, full width */
                .watermark {
                    position: absolute;
                    bottom: -2rem;
                    left: 0;
                    right: 0;
                    font-size: clamp(4rem, 13vw, 16rem);
                    font-weight: 900;
                    color: rgba(0,0,0,0.03);
                    pointer-events: none;
                    letter-spacing: -0.02em;
                    white-space: nowrap;
                    z-index: 0;
                    font-family: inherit;
                    line-height: 1;
                    text-align: center;
                }

                /* Top label */
                .top-label {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 2.5rem;
                    z-index: 1;
                }
                .circle-num {
                    width: 2.4rem;
                    height: 2.4rem;
                    border-radius: 50%;
                    border: 1px solid rgba(0,0,0,0.18);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.72rem;
                    font-weight: 600;
                    color: #555;
                    letter-spacing: 0.05em;
                    flex-shrink: 0;
                }
                .label-line {
                    width: 60px;
                    height: 1px;
                    background: rgba(0,0,0,0.2);
                }
                .label-text {
                    font-size: 0.68rem;
                    font-weight: 600;
                    letter-spacing: 0.22em;
                    color: #888;
                    text-transform: uppercase;
                }

                /* Main two-col row */
                .main-row {
                    display: flex;
                    gap: 5%;
                    align-items: flex-start;
                    margin-bottom: 4rem;
                    z-index: 1;
                }
                .headline-col {
                    flex: 0 0 52%;
                }
                .headline {
                    font-size: clamp(2.2rem, 4.5vw, 5rem);
                    font-weight: 800;
                    line-height: 1.08;
                    letter-spacing: -0.03em;
                    color: #111;
                    margin: 0;
                }
                .accent {
                    color: #6d3f52;
                }
                .desc-col {
                    flex: 0 0 38%;
                    padding-top: 0.5rem;
                }
                .desc {
                    font-size: 0.97rem;
                    line-height: 1.78;
                    color: #555;
                    margin: 0;
                    font-weight: 400;
                }
                .desc strong {
                    color: #111;
                    font-weight: 600;
                }

                /* Pillar cards */
                .pillars-row {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 2rem;
                    border-top: 1px solid rgba(0,0,0,0.1);
                    z-index: 1;
                    padding-top: 2rem;
                }
                .pillar {
                    padding: 0 2rem 1rem 0;
                    display: flex;
                    align-items: flex-start;
                    gap: 1.2rem;
                }
                .pillar:last-child { border-right: none; }
                .pillar-left {
                    padding-top: 0.8rem;
                }
                .pillar-num {
                    font-size: 0.65rem;
                    font-weight: 600;
                    color: #555;
                    letter-spacing: 0.1em;
                }
                .pillar-right {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 0.5rem;
                }
                .pillar-icon-wrapper {
                    width: 3.2rem;
                    height: 3.2rem;
                    border-radius: 50%;
                    background: rgba(109, 63, 82, 0.06);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 0.5rem;
                }
                .pillar-icon {
                    color: #6d3f52;
                }
                .pillar-label {
                    font-size: 0.8rem;
                    font-weight: 600;
                    letter-spacing: 0.25em;
                    color: #6d3f52;
                    text-transform: uppercase;
                }
                .pillar-line {
                    width: 30px;
                    height: 1.5px;
                    background: rgba(0,0,0,0.15);
                    margin: -0.2rem 0;
                }
                .pillar-desc {
                    font-size: 0.95rem;
                    line-height: 1.6;
                    color: #555;
                    margin: 0;
                    font-weight: 400;
                    max-width: 250px;
                }

                /* Scroll hint */
                .scroll-hint {
                    position: absolute;
                    left: 6%;
                    bottom: 4rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.6rem;
                    z-index: 1;
                }
                .scroll-hint span {
                    font-size: 0.55rem;
                    font-weight: 600;
                    letter-spacing: 0.18em;
                    color: #aaa;
                    text-transform: uppercase;
                    text-align: center;
                    line-height: 1.5;
                }
                .scroll-arrow {
                    font-size: 1rem;
                    color: #aaa;
                    animation: scrollBounce 2s ease-in-out infinite;
                }
                @keyframes scrollBounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(5px); }
                }

                @media (max-width: 900px) {
                    .main-row { flex-direction: column; gap: 2rem; }
                    .headline-col, .desc-col { flex: 1 1 100%; }
                    .pillars-row { grid-template-columns: 1fr; }
                    .pillar { border-right: none; border-bottom: 1px solid rgba(0,0,0,0.1); }
                    .scroll-hint { display: none; }
                }
            `}</style>
        </section>
    );
}

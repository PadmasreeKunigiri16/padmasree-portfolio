"use client";
import Link from 'next/link';
import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({ weight: ['400','700','800','900'], subsets: ['latin'], display: 'swap' });
const inter = Inter({ weight: ['300','400','500','600','700'], subsets: ['latin'], display: 'swap' });

const categories = [
    {
        num: '01',
        title: 'CORE & SYSTEMS',
        items: [
            { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
            { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
            { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
            { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        ]
    },
    {
        num: '02',
        title: 'FRONTEND',
        items: [
            { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
            { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
        ]
    },
    {
        num: '03',
        title: 'BACKEND & DB',
        items: [
            { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
            { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
            { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
            { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        ]
    },
    {
        num: '04',
        title: 'DEVOPS & QA',
        items: [
            { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
            { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
            { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
            { name: 'Playwright', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg' },
        ]
    }
];

export default function TechStack() {
    return (
        <section id="stack" className={inter.className} style={{
            position: 'relative',
            width: '100%',
            maxWidth: '100%',
            minHeight: '100vh',
            margin: 0,
            padding: 0,
            overflow: 'hidden',
            backgroundColor: '#f5f1ec',
        }}>



            <div style={{ position: 'relative', zIndex: 1, padding: '7rem 6% 4rem 6%', display: 'flex', flexDirection: 'column' }}>
                
                {/* WATERMARK */}
                <div className="desktop-only" style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    fontSize: 'clamp(4rem, 13vw, 16rem)',
                    fontWeight: 900,
                    color: 'rgba(0,0,0,0.06)',
                    pointerEvents: 'none',
                    letterSpacing: '-0.02em',
                    whiteSpace: 'nowrap',
                    zIndex: 0,
                    lineHeight: 1,
                    textAlign: 'center'
                }}>
                    STACK
                </div>

                {/* CONTENT WRAPPER */}
                <div style={{ position: 'relative', zIndex: 10, flex: 1, display: 'flex', flexDirection: 'column' }}>
                    
                    {/* Top label */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
                        <div style={{ width: '2.4rem', height: '2.4rem', borderRadius: '50%', border: '1px solid rgba(0,0,0,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.72rem', fontWeight: 600, color: '#555', letterSpacing: '0.05em', flexShrink: 0 }}>
                            03
                        </div>
                        <div style={{ width: '60px', height: '1px', background: 'rgba(0,0,0,0.2)' }} />
                        <span style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.22em', color: '#888', textTransform: 'uppercase' }}>
                            TECH STACK
                        </span>
                    </div>

                    {/* Headline Row */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'flex-start', marginBottom: '4rem' }}>
                        <div style={{ flex: '1 1 50%', minWidth: '300px' }}>
                            <h2 className={playfair.className} style={{ fontSize: 'clamp(3rem, 5.5vw, 6.5rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.03em', color: '#111', margin: 0 }}>
                                The tools behind<br />
                                <span style={{ color: '#6d3f52' }}>the work.</span>
                            </h2>
                        </div>
                        <div style={{ flex: '1 1 35%', minWidth: '250px', borderLeft: '1px solid rgba(0,0,0,0.15)', paddingLeft: '1.5rem', paddingTop: '0.5rem' }}>
                            <p style={{ fontSize: '0.97rem', lineHeight: 1.78, color: '#555', margin: 0, fontWeight: 400, maxWidth: '350px' }}>
                                A carefully chosen stack for building reliable interfaces, scalable systems, and modern digital products.
                            </p>
                        </div>
                    </div>

                    {/* Categories Grid */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem 4rem', marginBottom: '6rem' }}>
                        {categories.map((cat) => (
                            <div key={cat.title} style={{ flex: '1 1 40%', minWidth: '280px' }}>
                                {/* Category Header */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
                                    <span style={{ fontSize: '0.65rem', fontWeight: 600, color: '#aaa', letterSpacing: '0.1em' }}>{cat.num}</span>
                                    <div style={{ width: '40px', height: '1px', background: 'rgba(0,0,0,0.15)' }} />
                                    <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.22em', color: '#6d3f52', textTransform: 'uppercase' }}>{cat.title}</span>
                                </div>
                                {/* Tech Icons */}
                                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                    {cat.items.map(tech => (
                                        <div key={tech.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', width: '80px' }}>
                                            <div style={{ width: '70px', height: '70px', backgroundColor: '#fff', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.03)' }}>
                                                <img src={tech.logo} alt={tech.name} style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                                            </div>
                                            <span style={{ fontSize: '0.65rem', fontWeight: 600, color: '#111', textAlign: 'center', letterSpacing: '0.02em' }}>{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Bottom Elements */}
                <div style={{ position: 'relative', zIndex: 10, display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 'auto' }}>
                    {/* Explore button */}
                    <Link href="/stack" style={{
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
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.03)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
                    >
                        Why I Chose This Stack →
                    </Link>
                </div>
            </div>
        </section>
    );
}

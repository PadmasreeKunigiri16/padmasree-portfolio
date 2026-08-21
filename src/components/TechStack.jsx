'use client';
import Link from 'next/link';

const stack = [
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'TailwindCSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Playwright', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg' },
];

export default function TechStack() {
    return (
        <section id="stack" style={{
            backgroundColor: 'var(--bg-primary)',
            padding: '6rem 0',
            borderTop: '1px solid var(--border-color)',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Faint watermark */}
            <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '16vw', fontWeight: '900',
                letterSpacing: '-0.05em',
                color: 'var(--text-primary)',
                opacity: 0.10,
                whiteSpace: 'nowrap',
                pointerEvents: 'none', userSelect: 'none', zIndex: 0,
            }}>STACK</div>

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 4rem', position: 'relative', zIndex: 10 }}>
                {/* Header row */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '3rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flex: 1 }}>
                        <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>Tech Stack</span>
                        <div style={{ height: '1px', flex: 1, background: 'var(--border-color)' }} />
                    </div>
                </div>

                {/* Logo grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
                    gap: '1rem',
                }}>
                    {stack.map(tech => (
                        <div key={tech.name} style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            padding: '1.5rem 1rem',
                            border: '1px solid var(--border-color)',
                            borderRadius: '1rem',
                            background: 'rgba(0,0,0,0.01)',
                            gap: '0.75rem',
                            transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                            cursor: 'default',
                        }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--text-primary)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.boxShadow = 'none'; }}
                        >
                            <img src={tech.logo} alt={tech.name} style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                            <span style={{ fontSize: '0.78rem', fontWeight: '600', color: 'var(--text-primary)', textAlign: 'center' }}>{tech.name}</span>
                        </div>
                    ))}
                </div>

                {/* Bottom link */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '3rem' }}>
                    <Link href="/stack" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        fontSize: '0.8rem', fontWeight: '600',
                        color: 'var(--text-primary)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '2rem',
                        padding: '0.5rem 1.25rem',
                        textDecoration: 'none',
                        whiteSpace: 'nowrap',
                        transition: 'background 0.2s ease, color 0.2s ease',
                    }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'var(--text-primary)'; e.currentTarget.style.color = 'var(--bg-primary)'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-primary)'; }}
                    >
                        Why this stack? →
                    </Link>
                </div>
            </div>
        </section>
    );
}

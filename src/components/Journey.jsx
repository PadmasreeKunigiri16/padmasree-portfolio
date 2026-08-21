'use client';
import { useRef } from 'react';

export default function Journey({ isBookLayout }) {
    const journeyData = [
        {
            date: "Present",
            badge: "Current Role",
            title: "RMJ IT Solutions",
            role: "Frontend Developer & Tester",
            description: "Building intuitive user interfaces and performing robust testing workflows using Playwright to ensure high-quality software delivery.",
            tags: ["Frontend", "Playwright", "QA"]
        },
        {
            date: "Winner",
            badge: "Hackathon",
            title: "syntax2code",
            role: "1st Place",
            description: "Won first place showcasing rapid problem solving, clean code architecture, and effective teamwork under intense time pressure.",
            tags: ["Problem Solving", "Teamwork"]
        },
        {
            date: "2023",
            badge: "The Beginning",
            title: "B.Tech Computer Science",
            role: "Student",
            description: "Started B.Tech in CSE. Immersed myself deeply into programming, mastering full-stack development and automation by my 4th year.",
            tags: ["Computer Science", "Foundation"]
        }
    ];

    const listRef = useRef(null);

    const scrollList = (direction) => {
        if (listRef.current) {
            const scrollAmount = 300;
            listRef.current.scrollBy({
                top: direction === 'down' ? scrollAmount : -scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: isBookLayout ? '100%' : 'auto', overflow: 'hidden' }}>
            <div className="journey-header" style={{ flexShrink: 0 }}>
                <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', marginBottom: '1rem' }}>Chapter 05</span>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                    <h2 className="journey-title" style={{ fontWeight: '900', color: 'var(--text-primary)', letterSpacing: '-0.04em', margin: 0, lineHeight: 1 }}>
                        The Journey.
                    </h2>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', background: 'rgba(0,0,0,0.02)', padding: '0.4rem 1rem', borderRadius: '2rem', border: '1px solid var(--border-color)' }}>
                        <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: '600' }}>Scroll</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.15rem' }}>
                            <button onClick={() => scrollList('up')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.2rem', color: 'inherit' }} title="Scroll Up">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                            </button>
                            <button onClick={() => scrollList('down')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.2rem', color: 'inherit' }} title="Scroll Down">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div ref={listRef} className="journey-list hide-scrollbar" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, overflowY: 'auto', scrollBehavior: 'smooth' }}>
                {journeyData.map((item, index) => (
                    <div key={index} className="animate-up" style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        padding: '1.5rem 0',
                        borderBottom: index < journeyData.length - 1 ? '1px solid var(--border-color)' : 'none',
                    }}>
                        <div className="journey-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1rem' }}>
                            <h3 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--text-primary)', letterSpacing: '-0.03em', margin: 0 }}>{item.title}</h3>
                            <span style={{ fontSize: '1.1rem', fontWeight: '900', color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>{item.date}</span>
                        </div>
                        
                        <h4 style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '1.5rem' }}>{item.role}</h4>
                        
                        <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.7', maxWidth: '800px', marginBottom: '1.5rem' }}>
                            {item.description}
                        </p>
                        
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                            {item.tags.map(tag => (
                                <span key={tag} style={{ padding: '0.3rem 0.8rem', border: '1px solid var(--border-color)', borderRadius: '2rem', fontSize: '0.75rem', fontWeight: '500', color: 'var(--text-primary)' }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .journey-header { padding: 4rem 6rem 2rem; }
                .journey-list { padding: 0 6rem 4rem 6rem; }
                .journey-title { font-size: clamp(2.5rem, 5vw, 4rem); }

                @media (max-width: 768px) {
                    .journey-header { padding: 2rem 2rem 1rem 2rem !important; }
                    .journey-list { padding: 0 2rem 2rem 2rem !important; }
                    .journey-title { font-size: 2.5rem !important; }
                    .journey-row { flex-direction: column; align-items: flex-start !important; gap: 0.5rem; }
                }
            `}</style>
        </div>
    );
}

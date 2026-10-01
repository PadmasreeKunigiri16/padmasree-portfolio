'use client';
import { useRef } from 'react';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], style: ['italic', 'normal'] });

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
            <div className="journey-header" style={{ flexShrink: 0, paddingBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--text-secondary)' }} />
                    <span style={{ fontSize: '0.85rem', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                        Chapter 05
                    </span>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
                    <h2 className={`journey-title ${playfair.className}`} style={{ fontWeight: '400', fontStyle: 'italic', color: '#6d3f52', letterSpacing: '-0.02em', margin: 0, lineHeight: 1 }}>
                        The Journey.
                    </h2>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', background: 'transparent', padding: '0', border: 'none' }}>
                        <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: '600' }}>Scroll</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: '0.5rem' }}>
                            <button onClick={() => scrollList('up')} style={{ background: 'var(--border-color)', border: 'none', cursor: 'pointer', padding: '0.5rem', borderRadius: '50%', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} title="Scroll Up">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                            </button>
                            <button onClick={() => scrollList('down')} style={{ background: 'var(--border-color)', border: 'none', cursor: 'pointer', padding: '0.5rem', borderRadius: '50%', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} title="Scroll Down">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div ref={listRef} className="journey-list hide-scrollbar" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, overflowY: 'auto', scrollBehavior: 'smooth', borderTop: '2px solid var(--text-primary)' }}>
                {journeyData.map((item, index) => (
                    <div key={index} className="animate-up" style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        padding: '3rem 0',
                        borderBottom: index < journeyData.length - 1 ? '1px solid var(--border-color)' : 'none',
                    }}>
                        <div className="journey-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                            <h3 className={playfair.className} style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: '600', color: 'var(--text-primary)', margin: 0 }}>{item.title}</h3>
                            <span className={playfair.className} style={{ fontSize: '1.2rem', fontWeight: '600', fontStyle: 'italic', color: 'var(--text-secondary)' }}>{item.date}</span>
                        </div>
                        
                        <h4 style={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>[ {item.role} ]</h4>
                        
                        <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.8', maxWidth: '800px', marginBottom: '2rem' }}>
                            {item.description}
                        </p>
                        
                        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                            {item.tags.map(tag => (
                                <span key={tag} style={{ padding: '0.4rem 1.2rem', border: '1px solid var(--border-color)', borderRadius: '2rem', fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.05em', color: 'var(--text-primary)' }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .journey-header { padding: 4rem 6rem 0rem; }
                .journey-list { padding: 0 6rem 4rem 6rem; }
                .journey-title { font-size: clamp(3.5rem, 8vw, 7rem); }

                @media (max-width: 768px) {
                    .journey-header { padding: 3rem 2rem 1rem 2rem !important; }
                    .journey-list { padding: 0 2rem 2rem 2rem !important; }
                    .journey-title { font-size: 3.5rem !important; }
                    .journey-row { flex-direction: column; align-items: flex-start !important; gap: 0.5rem; }
                }
            `}</style>
        </div>
    );
}

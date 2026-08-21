"use client";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function ExperiencePage() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const experiences = [
        {
            id: '01',
            type: 'ON-SITE',
            date: 'July 2026 – Present',
            companyLine1: 'RMJ IT',
            companyLine2: 'SOLUTIONS',
            role: 'Frontend Developer & QA Engineer',
            description: 'Building intuitive user interfaces and performing robust testing workflows using Playwright to ensure high-quality software delivery. Focusing on scalable frontend architecture and automated quality assurance to streamline deployments.',
            tags: ["Frontend", "Playwright", "QA Automation", "React"]
        }
    ];

    return (
        <>
            <Navbar />
            <main style={{ paddingTop: '140px', backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingBottom: '6rem' }}>
                <section style={{ padding: '0 4rem', maxWidth: '1400px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '2rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>PROFESSIONAL RECORD</span>
                        <h1 style={{ fontSize: 'clamp(4rem, 11vw, 10rem)', fontWeight: '900', letterSpacing: '-0.06em', lineHeight: '0.9', color: 'var(--text-primary)', marginTop: '1rem', textTransform: 'uppercase' }}>
                            EXPERIENCE
                        </h1>
                    </div>

                    {/* Metadata bar */}
                    <div style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', padding: '1rem 0', display: 'flex', justifyContent: 'space-between', marginBottom: '4rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>{experiences.length} POSITION{experiences.length !== 1 ? 'S' : ''}</span>
                    </div>

                    {/* Jobs List */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {experiences.map((job, index) => (
                            <div 
                                key={job.id}
                                className="job-entry"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                style={{ 
                                    display: 'grid', 
                                    gridTemplateColumns: '1fr 2fr 1fr', 
                                    gap: '2rem', 
                                    paddingBottom: '4rem', 
                                    borderBottom: '1px solid var(--border-color)',
                                    cursor: 'pointer'
                                }}
                            >
                                {/* Left Column: Meta */}
                                <div style={{ display: 'flex', gap: '1.5rem', paddingTop: '1rem' }}>
                                    <span style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', fontWeight: '400' }}>{job.id}</span>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                        <span style={{ fontSize: '0.75rem', fontWeight: '900', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-primary)' }}>{job.type}</span>
                                        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{job.date}</span>
                                    </div>
                                </div>

                                {/* Middle Column: Title & Content */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: '900', color: 'var(--text-primary)', letterSpacing: '-0.04em', lineHeight: '0.95', textTransform: 'uppercase', margin: 0 }}>
                                        {job.companyLine1}<br/>{job.companyLine2}
                                    </h2>
                                    <span style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', fontWeight: '500', marginTop: '1rem' }}>{job.role}</span>
                                    
                                    {/* Expandable Content */}
                                    <div style={{ 
                                        display: 'grid',
                                        gridTemplateRows: hoveredIndex === index ? '1fr' : '0fr',
                                        transition: 'grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                        overflow: 'hidden'
                                    }}>
                                        <div style={{ minHeight: 0 }}>
                                            <div style={{ paddingTop: '2rem' }}>
                                                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem', maxWidth: '600px' }}>
                                                    {job.description}
                                                </p>
                                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                                    {job.tags.map(tag => (
                                                        <span key={tag} style={{ padding: '0.4rem 1rem', border: '1px solid var(--border-color)', borderRadius: '2rem', fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-primary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Hint */}
                                <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '1rem' }}>
                                    <span style={{ 
                                        fontSize: '0.7rem', 
                                        fontWeight: '800', 
                                        letterSpacing: '0.15em', 
                                        textTransform: 'uppercase', 
                                        color: hoveredIndex === index ? 'transparent' : 'var(--text-secondary)',
                                        transition: 'color 0.3s ease'
                                    }}>
                                        HOVER TO EXPAND
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <style>{`
                @media (max-width: 900px) {
                    section { padding: 0 2rem !important; }
                    .job-entry {
                        grid-template-columns: 1fr !important;
                        gap: 2rem !important;
                    }
                    .job-entry > div:last-child {
                        justify-content: flex-start !important;
                    }
                }
            `}</style>
            <Footer />
        </>
    );
}

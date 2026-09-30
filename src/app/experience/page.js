"use client";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ weight: ['400', '700', '800'], subsets: ['latin'], display: 'swap', style: ['normal', 'italic'] });

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
                        <h1 className={playfair.className} style={{ fontSize: 'clamp(4rem, 11vw, 10rem)', fontWeight: '400', fontStyle: 'italic', letterSpacing: '-0.02em', lineHeight: '0.9', color: '#6d3f52', marginTop: '1rem', textTransform: 'capitalize' }}>
                            Experience
                        </h1>
                    </div>

                    {/* Metadata bar */}
                    <div style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', padding: '1rem 0', display: 'flex', justifyContent: 'space-between', marginBottom: '4rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>{experiences.length} POSITION{experiences.length !== 1 ? 'S' : ''}</span>
                    </div>

                    {/* Massive Background Watermark */}
                    <div style={{
                        position: 'absolute',
                        top: '20%',
                        left: '-5%',
                        fontSize: '18rem',
                        fontWeight: '900',
                        color: 'rgba(0,0,0,0.02)',
                        lineHeight: 0.8,
                        pointerEvents: 'none',
                        letterSpacing: '-0.05em',
                        zIndex: 0,
                        whiteSpace: 'nowrap'
                    }}>
                        CAREER
                    </div>

                    {/* Jobs List */}
                    <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>
                        {experiences.map((job, index) => (
                            <div 
                                key={job.id}
                                className="job-entry"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                style={{ 
                                    display: 'grid', 
                                    gridTemplateColumns: '1fr 3fr', 
                                    gap: '4rem', 
                                    padding: '4rem',
                                    backgroundColor: hoveredIndex === index ? '#ebe6df' : '#f5f1ec',
                                    border: '1px solid var(--border-color)',
                                    transition: 'background-color 0.4s ease, transform 0.4s ease',
                                    transform: hoveredIndex === index ? 'translateY(-5px)' : 'translateY(0)',
                                }}
                            >
                                {/* Left Column: Meta & Date */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                    <div style={{ fontSize: '4rem', fontWeight: '900', color: 'rgba(0,0,0,0.06)', lineHeight: 0.8, letterSpacing: '-0.05em' }}>
                                        {job.id}
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                        <span style={{ fontSize: '0.75rem', fontWeight: '900', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-primary)' }}>{job.type}</span>
                                        <span style={{ fontSize: '0.9rem', color: '#6d3f52', fontWeight: 600 }}>{job.date}</span>
                                    </div>
                                </div>

                                {/* Right Column: Title & Content */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '900', color: 'var(--text-primary)', letterSpacing: '-0.03em', lineHeight: '1', textTransform: 'uppercase', margin: 0 }}>
                                        {job.companyLine1} {job.companyLine2}
                                    </h2>
                                    <span style={{ fontSize: '1.4rem', color: 'var(--text-primary)', fontWeight: '400', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                                        {job.role}
                                    </span>
                                    
                                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2rem', maxWidth: '700px' }}>
                                        {job.description}
                                    </p>

                                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                        {job.tags.map(tag => (
                                            <span key={tag} style={{ padding: '0.4rem 1rem', backgroundColor: '#fff', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '2rem', fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-primary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
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
                        padding: 2rem !important;
                    }
                }
            `}</style>
            <Footer />
        </>
    );
}

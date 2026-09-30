"use client";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ weight: ['400', '700', '800'], subsets: ['latin'], display: 'swap', style: ['normal', 'italic'] });

const projects = [
    {
        id: '01',
        title: 'VitaMirror',
        subtitle: 'AI-Powered Health Mirror',
        meta: 'Computer Vision',
        desc: 'Developed an AI-powered smart mirror that uses Computer Vision to provide real-time wellness insights, including stress, fatigue, and skin health analysis.',
        tech: ['Python', 'OpenCV']
    },
    {
        id: '02',
        title: 'RxSaathi',
        subtitle: 'Smart Prescription Assistant',
        meta: 'AI / ML',
        desc: 'Created an AI-driven healthcare solution that transforms prescriptions into voice and visual instructions, reducing medication errors for elderly and rural patients.',
        tech: ['Python', 'Machine Learning']
    },
    {
        id: '03',
        title: 'StakeUp',
        subtitle: 'Accountability Ecosystem',
        meta: 'Hackathon 1st Prize',
        desc: 'Developed frontend screens and integrated backend APIs for core features including accountability challenges, Stake Battles, ProofIQ verification, and analytical dashboards.',
        tech: ['Frontend', 'Testing']
    }
];

export default function ProjectsPage() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <>
            <Navbar />
            <main style={{ paddingTop: '140px', backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingBottom: '6rem' }}>
                <section style={{ padding: '0 4rem', maxWidth: '1400px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '2rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>SELECTED WORKS</span>
                        <h1 className={playfair.className} style={{ fontSize: 'clamp(4rem, 11vw, 10rem)', fontWeight: '400', fontStyle: 'italic', letterSpacing: '-0.02em', lineHeight: '0.9', color: '#6d3f52', marginTop: '1rem', textTransform: 'capitalize' }}>
                            Projects
                        </h1>
                    </div>

                    <div style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', padding: '1rem 0', display: 'flex', justifyContent: 'space-between', marginBottom: '4rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>{projects.length} CASE STUDIES</span>
                        <span style={{ fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>2024 – PRESENT</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2rem' }}>
                        {projects.map((proj, index) => {
                            // Asymmetric grid spanning
                            const colSpanDesktop = index === 0 ? 'span 7' : index === 1 ? 'span 5' : 'span 12';
                            const minHeight = index === 0 ? '550px' : index === 1 ? '550px' : '400px';
                            const bg = index === 0 ? '#ebe6df' : index === 1 ? '#e1dcd5' : '#d8d3cc';

                            return (
                                <div 
                                    key={proj.id}
                                    className="mag-card"
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    style={{ 
                                        gridColumn: colSpanDesktop,
                                        backgroundColor: bg,
                                        minHeight: minHeight,
                                        padding: '3rem',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                                        transform: hoveredIndex === index ? 'translateY(-5px)' : 'translateY(0)',
                                        boxShadow: hoveredIndex === index ? '0 20px 40px rgba(0,0,0,0.08)' : 'none',
                                    }}
                                >
                                    {/* Massive Background Number */}
                                    <div style={{
                                        position: 'absolute',
                                        top: '-2rem',
                                        right: '-1rem',
                                        fontSize: '15rem',
                                        fontWeight: '900',
                                        color: 'rgba(255,255,255,0.4)',
                                        lineHeight: 1,
                                        pointerEvents: 'none',
                                        letterSpacing: '-0.05em',
                                        zIndex: 0
                                    }}>
                                        {proj.id}
                                    </div>

                                    {/* Top Section */}
                                    <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                        <span style={{ fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                                            {proj.meta}
                                        </span>
                                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: hoveredIndex === index ? 1 : 0, transition: 'opacity 0.3s ease' }}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                        </div>
                                    </div>

                                    {/* Bottom Section */}
                                    <div style={{ position: 'relative', zIndex: 1, display: 'grid', gap: '1rem', marginTop: '4rem' }}>
                                        <div>
                                            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: '900', color: 'var(--text-primary)', letterSpacing: '-0.03em', lineHeight: '1', textTransform: 'uppercase', margin: '0 0 0.5rem 0' }}>
                                                {proj.title}
                                            </h2>
                                            <span style={{ fontSize: '1.2rem', color: '#6d3f52', fontWeight: '600' }}>
                                                {proj.subtitle}
                                            </span>
                                        </div>
                                        
                                        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6', maxWidth: index === 2 ? '800px' : '90%', margin: '1rem 0' }}>
                                            {proj.desc}
                                        </p>

                                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                            {proj.tech.map(tag => (
                                                <span key={tag} style={{ padding: '0.4rem 1rem', backgroundColor: '#fff', borderRadius: '2rem', fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-primary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </main>

            <style>{`
                @media (max-width: 900px) {
                    section { padding: 0 2rem !important; }
                    .mag-card { grid-column: span 12 !important; min-height: 400px !important; }
                }
            `}</style>
            <Footer />
        </>
    );
}

'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence, useMotionValue, useSpring, useVelocity, useTransform } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], style: ['italic'] });

const certs = [
    { title: "AWS Certified Developer", category: "Cloud Development", issuer: "AWS", type: "cloud", file: "/aws-developer.png" },
    { title: "AWS Certified AI Practitioner", category: "Artificial Intelligence", issuer: "AWS", type: "ai", file: "/aws-ai.png" },
    { title: "AWS Cloud Practitioner", category: "Cloud Foundations", issuer: "AWS", type: "cloud", file: "/aws-cloud.png" },
    { title: "Google Cloud Digital Leader", category: "Cloud Foundations", issuer: "Google", type: "cloud", file: "/google-cloud.png" },
    { title: "Oracle Agentic AI", category: "Artificial Intelligence", issuer: "Oracle", type: "ai", file: "/oracle-agentic-ai.png" },
    { title: "Oracle Java", category: "Software Engineering", issuer: "Oracle", type: "software", file: "/oracle-java.png" },
    { title: "Enterprise-grade AI", category: "Artificial Intelligence", issuer: "IBM", type: "ai", file: "/ibm-enterprise-ai.png" },
    { title: "Cybersecurity Analyst", category: "Security", issuer: "Forage", type: "software", file: "/forage-cybersecurity.png" },
    { title: "Cambridge Lingua Skills", category: "Language", issuer: "Cambridge", type: "software" }
];

export default function CertificatesPage() {
    const [selectedPdf, setSelectedPdf] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    
    // Framer Motion native physics for incredibly smooth mouse tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    
    // Spring physics configuration for the floating image position
    const springConfig = { damping: 20, stiffness: 150, mass: 0.6 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    // Track mouse velocity to create dynamic 3D tilting
    const velocityX = useVelocity(smoothX);
    const velocityY = useVelocity(smoothY);

    // Map velocity to rotation degrees (-15 to 15 degrees max)
    const tiltX = useTransform(velocityY, [-1000, 1000], [15, -15]);
    const tiltY = useTransform(velocityX, [-1000, 1000], [-15, 15]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Offset the image so the mouse is roughly in the center
            mouseX.set(e.clientX - 200);
            mouseY.set(e.clientY - 150);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            
            <main style={{ flexGrow: 1, paddingTop: '180px', paddingBottom: '100px', position: 'relative' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
                    
                    {/* Ultra-minimal Header with Editorial Typography */}
                    <div style={{ 
                        marginBottom: '8rem', 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        justifyContent: 'space-between', 
                        alignItems: 'flex-end', 
                        gap: '4rem' 
                    }}>
                        <div>
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}
                            >
                                <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--text-secondary)' }} />
                                <span style={{ fontSize: '0.85rem', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                                    Credentials
                                </span>
                            </motion.div>
                            <motion.h1 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className={playfair.className}
                                style={{ 
                                    fontSize: 'clamp(4rem, 10vw, 10rem)', 
                                    fontWeight: '400', 
                                    fontStyle: 'italic',
                                    letterSpacing: '-0.02em', 
                                    lineHeight: '0.9', 
                                    color: '#6d3f52', 
                                    margin: 0
                                }}
                            >
                                Certifications.
                            </motion.h1>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            style={{
                                maxWidth: '420px',
                                fontSize: '1.1rem',
                                lineHeight: '1.7',
                                color: 'var(--text-secondary)',
                                fontWeight: '500',
                                paddingBottom: '1rem',
                                margin: 0
                            }}
                        >
                            A curated collection of professional credentials reflecting a continuous pursuit of mastery in cloud architecture, artificial intelligence, and robust software engineering.
                        </motion.p>
                    </div>

                    {/* Interactive List */}
                    <div style={{ borderTop: '2px solid var(--text-primary)', display: 'flex', flexDirection: 'column' }}>
                        {certs.map((cert, index) => {
                            const isHovered = hoveredIndex === index;
                            const isDimmed = hoveredIndex !== null && hoveredIndex !== index;

                            return (
                                <motion.div 
                                    key={index}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    onClick={() => cert.file && setSelectedPdf(cert.file)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: isDimmed ? 0.15 : 1, y: 0 }}
                                    transition={{ 
                                        y: { duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] },
                                        opacity: { duration: 0.4 } 
                                    }}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        padding: '3.5rem 0',
                                        borderBottom: '1px solid var(--border-color)',
                                        cursor: 'pointer',
                                        position: 'relative',
                                    }}
                                >
                                    {/* Left side: Massive Title */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
                                        <span className={playfair.className} style={{ 
                                            fontSize: '1.5rem', 
                                            fontWeight: '400', 
                                            fontStyle: 'italic',
                                            color: 'var(--text-secondary)', 
                                            opacity: 0.8
                                        }}>
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <motion.h2 
                                            className={playfair.className}
                                            animate={{ 
                                                x: isHovered ? 40 : 0,
                                                color: isHovered ? 'var(--text-secondary)' : 'var(--text-primary)'
                                            }} 
                                            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                                            style={{ 
                                                fontSize: 'clamp(2rem, 5vw, 4.5rem)', 
                                                fontWeight: '400', 
                                                fontStyle: 'italic',
                                                letterSpacing: '-0.01em', 
                                                margin: 0,
                                                lineHeight: '1'
                                            }}
                                        >
                                            {cert.title}
                                        </motion.h2>
                                    </div>
                                    
                                    {/* Right side: Category & Arrow */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6rem' }}>
                                        <motion.span 
                                            animate={{ x: isHovered ? -20 : 0, opacity: isHovered ? 1 : 0.6 }}
                                            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                                            style={{ 
                                                fontSize: '1rem', 
                                                fontWeight: '800', 
                                                letterSpacing: '0.15em', 
                                                textTransform: 'uppercase', 
                                                color: 'var(--text-primary)',
                                                fontFamily: 'monospace'
                                            }}
                                        >
                                            [ {cert.category} ]
                                        </motion.span>
                                        
                                        <motion.div 
                                            animate={{ 
                                                rotate: isHovered ? 0 : -45, 
                                                scale: isHovered ? 1.2 : 1,
                                                backgroundColor: isHovered ? 'var(--text-primary)' : 'rgba(0,0,0,0)',
                                            }}
                                            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                                            style={{ 
                                                width: '60px', height: '60px', 
                                                borderRadius: '50%', 
                                                border: '1.5px solid var(--text-primary)', 
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                color: isHovered ? 'var(--bg-primary)' : 'var(--text-primary)'
                                            }}
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                                <polyline points="12 5 19 12 12 19"></polyline>
                                            </svg>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* VELOCITY TILTING IMAGE REVEAL */}
                <motion.div 
                    style={{ 
                        position: 'fixed', 
                        top: 0, left: 0, 
                        pointerEvents: 'none', 
                        zIndex: 100,
                        x: smoothX,
                        y: smoothY,
                        rotateX: tiltX,
                        rotateY: tiltY,
                        perspective: '1000px'
                    }}
                >
                    <AnimatePresence>
                        {hoveredIndex !== null && certs[hoveredIndex].file && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5, rotateZ: -10 }}
                                animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
                                exit={{ opacity: 0, scale: 0.5, rotateZ: 10 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                style={{
                                    width: '400px',
                                    height: '300px',
                                    borderRadius: '1rem',
                                    overflow: 'hidden',
                                    boxShadow: '0 40px 80px -10px rgba(0,0,0,0.5)',
                                    backgroundColor: 'var(--text-primary)',
                                    border: '2px solid rgba(255,255,255,0.1)'
                                }}
                            >
                                <img 
                                    src={encodeURI(certs[hoveredIndex].file)} 
                                    alt={certs[hoveredIndex].title} 
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

            </main>

            <Footer />

            {/* Cinematic Modal Viewer */}
            <AnimatePresence>
                {selectedPdf && (
                    <motion.div 
                        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
                        exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        style={{
                            position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh',
                            backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 9999,
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                        }}
                    >
                        <motion.div 
                            initial={{ scale: 0.9, y: 40 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 40 }}
                            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                            style={{ 
                                width: '90%', maxWidth: '1000px', height: '85vh', 
                                backgroundColor: 'var(--bg-primary)', borderRadius: '1rem', 
                                overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column',
                                boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)'
                            }}
                        >
                            <div style={{ padding: '1.5rem 2rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
                                <span style={{ fontWeight: '900', fontSize: '1.4rem', color: 'var(--text-primary)', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
                                    Certificate Viewer
                                </span>
                                <button onClick={() => setSelectedPdf(null)} style={{ background: 'none', border: '1px solid var(--border-color)', cursor: 'pointer', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.75rem', borderRadius: '50%', transition: 'all 0.3s ease' }} onMouseEnter={e => { e.currentTarget.style.background = 'var(--text-primary)'; e.currentTarget.style.color = 'var(--bg-primary)'; }} onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = 'var(--text-primary)'; }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                            </div>
                            <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', backgroundColor: 'var(--bg-secondary)', padding: '2rem' }}>
                                {selectedPdf.toLowerCase().endsWith('.pdf') ? (
                                    <iframe src={encodeURI(selectedPdf)} style={{ width: '100%', height: '100%', border: 'none', borderRadius: '0.5rem' }} title="Certificate Viewer" />
                                ) : (
                                    <img src={encodeURI(selectedPdf)} alt="Certificate" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: '0.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

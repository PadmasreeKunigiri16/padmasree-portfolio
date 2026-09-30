"use client";
import { Playfair_Display, Inter } from 'next/font/google';
import Link from 'next/link';

const playfair = Playfair_Display({ weight: ['400','600','700','800','900'], subsets: ['latin'], display: 'swap' });
const inter = Inter({ weight: ['300','400','500','600'], subsets: ['latin'], display: 'swap' });

export default function ContactPage() {
    return (
        <main className={inter.className} style={{
            position: 'relative',
            width: '100%',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#f5f1ec',
            backgroundImage: "url('/contact-bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            overflow: 'hidden',
        }}>
            {/* Overlay to soften the background, stronger on the left for readability */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to right, rgba(245,241,236,0.96) 0%, rgba(245,241,236,0.88) 55%, rgba(245,241,236,0.2) 100%)',
                zIndex: 0
            }} />

            {/* Content Container */}
            <div style={{ position: 'relative', zIndex: 10, padding: '8rem 6% 4rem 6%', flex: 1, display: 'flex', flexDirection: 'column' }}>
                
                {/* Back to Home */}
                <div style={{ marginBottom: '4rem' }}>
                    <Link href="/" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: '#6d3f52',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        transition: 'opacity 0.2s ease',
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                    >
                        ← Back to Home
                    </Link>
                </div>

                {/* Main Center Content */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '600px', margin: '0 auto', width: '100%' }}>
                    
                    {/* Top Label */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div style={{ width: '40px', height: '1px', background: 'rgba(0,0,0,0.3)' }} />
                        <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.22em', color: '#555', textTransform: 'uppercase' }}>
                            GET IN TOUCH
                        </span>
                        <div style={{ width: '40px', height: '1px', background: 'rgba(0,0,0,0.3)' }} />
                    </div>

                    {/* Headline */}
                    <h1 className={playfair.className} style={{ 
                        fontSize: 'clamp(4rem, 8vw, 8rem)', 
                        fontWeight: 900, 
                        lineHeight: 1, 
                        letterSpacing: '-0.03em', 
                        color: '#111', 
                        margin: '0 0 1.5rem 0' 
                    }}>
                        Let&apos;s <span style={{ color: '#6d3f52' }}>Talk.</span>
                    </h1>

                    {/* Subheadline */}
                    <h2 className={playfair.className} style={{ 
                        fontSize: '1.8rem', 
                        fontWeight: 700, 
                        color: '#2a2f3a', 
                        margin: '0 0 1rem 0' 
                    }}>
                        Open to opportunities
                    </h2>

                    {/* Description */}
                    <p style={{ 
                        fontSize: '0.95rem', 
                        lineHeight: 1.6, 
                        color: '#666', 
                        margin: '0 0 3rem 0',
                        maxWidth: '500px'
                    }}>
                        Whether you have a question, a project idea, or just want to say hi, I&apos;ll try my best to get back to you!
                    </p>

                    {/* Contact Cards */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
                        
                        {/* Email Card */}
                        <a href="mailto:kunigiripadmasri16@gmail.com" style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            padding: '1.2rem',
                            borderRadius: '1rem',
                            border: '1px solid rgba(0,0,0,0.08)',
                            backgroundColor: 'rgba(255,255,255,0.4)',
                            textDecoration: 'none',
                            color: 'inherit',
                            transition: 'all 0.2s ease',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.8)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.4)';
                            e.currentTarget.style.transform = 'none';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                {/* Icon box */}
                                <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '0.8rem', backgroundColor: '#eaddd5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6d3f52" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                </div>
                                {/* Text info */}
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.2rem' }}>
                                    <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#111' }}>Email</span>
                                    <span style={{ fontSize: '0.85rem', color: '#666' }}>kunigiripadmasri16@gmail.com</span>
                                </div>
                            </div>
                            {/* Arrow circle */}
                            <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', border: '1px solid rgba(0,0,0,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </div>
                        </a>

                        {/* LinkedIn Card */}
                        <a href="https://www.linkedin.com/in/padmasree-kunigiri-19859630a/" target="_blank" rel="noreferrer" style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            padding: '1.2rem',
                            borderRadius: '1rem',
                            border: '1px solid rgba(0,0,0,0.08)',
                            backgroundColor: 'rgba(255,255,255,0.4)',
                            textDecoration: 'none',
                            color: 'inherit',
                            transition: 'all 0.2s ease',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.8)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.4)';
                            e.currentTarget.style.transform = 'none';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                {/* Icon box */}
                                <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '0.8rem', backgroundColor: '#0a66c2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                </div>
                                {/* Text info */}
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.2rem' }}>
                                    <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#111' }}>LinkedIn</span>
                                    <span style={{ fontSize: '0.85rem', color: '#666' }}>padmasree-kunigiri</span>
                                </div>
                            </div>
                            {/* Arrow circle */}
                            <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', border: '1px solid rgba(0,0,0,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </div>
                        </a>
                    </div>
                </div>



            </div>
        </main>
    );
}

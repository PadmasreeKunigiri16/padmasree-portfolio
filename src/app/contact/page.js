'use client';

import { useState } from 'react';

import Link from 'next/link';

export default function ContactPage() {
    return (
        <main style={{ 
            minHeight: '100vh', 
            paddingTop: '120px', 
            paddingBottom: '80px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <div style={{ maxWidth: '1000px', width: '100%', padding: '0 2rem' }}>
                
                {/* Back to Home Link */}
                <div style={{ marginBottom: '2rem' }} className="animate-up">
                    <Link 
                        href="/" 
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            color: 'var(--text-secondary)',
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            fontWeight: '500',
                            transition: 'color 0.2s ease',
                        }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                    >
                        ← Back to Home
                    </Link>
                </div>

                {/* Header */}
                <div style={{ marginBottom: '4rem', textAlign: 'center' }} className="animate-up">
                    <p style={{ 
                        fontSize: '0.85rem', 
                        fontFamily: 'monospace', 
                        letterSpacing: '0.3em', 
                        textTransform: 'uppercase', 
                        color: 'var(--text-secondary)', 
                        marginBottom: '1rem' 
                    }}>
                        Get in touch
                    </p>
                    <h1 style={{ 
                        fontSize: 'clamp(3rem, 8vw, 5rem)', 
                        fontWeight: '800', 
                        letterSpacing: '-0.04em', 
                        lineHeight: '1.1',
                        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        color: 'var(--text-primary)'
                    }}>
                        Let&apos;s Talk.
                    </h1>
                </div>

                <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center',
                    maxWidth: '600px',
                    margin: '0 auto',
                    gap: '4rem',
                    animation: 'fadeInUp 0.6s ease forwards',
                    animationDelay: '0.2s',
                    opacity: 0,
                    textAlign: 'center'
                }}>
                    
                    {/* Info & Links */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', width: '100%' }}>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>Open to opportunities</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                Whether you have a question, a project idea, or just want to say hi, I&apos;ll try my best to get back to you!
                            </p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
                            {/* Email Link */}
                            <a
                                href="mailto:kunigiripadmasri16@gmail.com"
                                style={{ 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    gap: '1rem', 
                                    padding: '1.25rem 1.5rem', 
                                    border: '1px solid var(--border-color)', 
                                    borderRadius: '1rem', 
                                    background: 'rgba(0,0,0,0.02)', 
                                    color: 'var(--text-primary)', 
                                    textDecoration: 'none', 
                                    transition: 'all 0.2s ease' 
                                }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--text-primary)'; e.currentTarget.style.background = 'var(--text-primary)'; e.currentTarget.style.color = '#fff'; }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.background = 'rgba(0,0,0,0.02)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
                            >
                                <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '0.5rem', background: 'currentColor', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, filter: 'invert(1)' }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                </div>
                                <div>
                                    <div style={{ fontWeight: '600', fontSize: '0.95rem' }}>Email</div>
                                    <div style={{ fontSize: '0.85rem', opacity: 0.7 }}>kunigiripadmasri16@gmail.com</div>
                                </div>
                            </a>

                            {/* LinkedIn Link */}
                            <a
                                href="https://www.linkedin.com/in/padmasree-kunigiri-19859630a/"
                                target="_blank" rel="noreferrer"
                                style={{ 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    gap: '1rem', 
                                    padding: '1.25rem 1.5rem', 
                                    border: '1px solid var(--border-color)', 
                                    borderRadius: '1rem', 
                                    background: 'rgba(0,0,0,0.02)', 
                                    color: 'var(--text-primary)', 
                                    textDecoration: 'none', 
                                    transition: 'all 0.2s ease' 
                                }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = '#0a66c2'; e.currentTarget.style.background = '#0a66c2'; e.currentTarget.style.color = '#fff'; }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.background = 'rgba(0,0,0,0.02)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
                            >
                                <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '0.5rem', background: '#0a66c2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                </div>
                                <div>
                                    <div style={{ fontWeight: '600', fontSize: '0.95rem' }}>LinkedIn</div>
                                    <div style={{ fontSize: '0.85rem', opacity: 0.7 }}>padmasree-kunigiri</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <style>{`
                @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
                @keyframes fadeInUp { from { transform: translateY(20px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
                .animate-up { animation: fadeInUp 0.6s ease forwards; }
            `}</style>
        </main>
    );
}

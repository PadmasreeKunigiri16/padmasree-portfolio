'use client';
import { useEffect, useState } from 'react';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], style: ['italic', 'normal'] });

function StatBar({ label, value, total, color }) {
    const pct = total > 0 ? Math.round((value / total) * 100) : 0;
    return (
        <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {label}
                </span>
                <span className={playfair.className} style={{ fontSize: '2.5rem', fontStyle: 'italic', color: 'var(--text-primary)', lineHeight: '1' }}>
                    {value}
                </span>
            </div>
            <div style={{ height: '1px', background: 'var(--border-color)', width: '100%', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: `${pct}%`, height: '2px', background: color, transition: 'width 1.5s cubic-bezier(0.16, 1, 0.3, 1)' }} />
            </div>
        </div>
    );
}

export default function LeetCodeStats({ isBookLayout }) {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch('/api/leetcode')
            .then(r => r.json())
            .then(data => {
                if (data.error) throw new Error(data.error);
                setStats(data);
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, []);

    const wrapperStyle = isBookLayout 
        ? { minHeight: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }
        : { borderBottom: '1px solid var(--border-color)' };

    return (
        <section className={isBookLayout ? 'stats-pad-box' : 'stats-default-pad'} style={wrapperStyle}>
            
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--text-secondary)' }} />
                    <span style={{ fontSize: '0.85rem', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                        Live Statistics
                    </span>
                </div>
                <a
                    href="https://leetcode.com/u/padmasree16_kunigiri/"
                    target="_blank" rel="noreferrer"
                    style={{ 
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem', 
                        fontSize: '0.75rem', color: 'var(--text-secondary)', fontFamily: 'monospace', 
                        letterSpacing: '0.1em', textDecoration: 'none', 
                        border: '1px solid var(--border-color)', borderRadius: '2rem', padding: '0.5rem 1.2rem',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--text-primary)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                >
                    LeetCode Profile ↗
                </a>
            </div>

            {loading && (
                <div style={{ display: 'flex', gap: '2rem', height: '300px', alignItems: 'center' }}>
                    <div style={{ flex: 1, height: '100%', background: 'var(--border-color)', borderRadius: '1rem', animation: 'pulse 1.5s ease infinite alternate' }} />
                    <div style={{ flex: 1, height: '100%', background: 'var(--border-color)', borderRadius: '1rem', animation: 'pulse 1.5s ease infinite alternate', animationDelay: '0.2s' }} />
                    <style>{`@keyframes pulse { from { opacity: 0.2 } to { opacity: 0.6 } }`}</style>
                </div>
            )}

            {error && (
                <div style={{ padding: '3rem', border: '1px solid var(--border-color)', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '1rem' }}>
                    Data temporarily unavailable. <a href="https://leetcode.com/u/padmasree16_kunigiri/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)', fontWeight: '600' }}>View directly ↗</a>
                </div>
            )}

            {stats && !loading && (
                <div className="stats-layout" style={{ display: 'flex', gap: '6rem', alignItems: 'center' }}>
                    
                    {/* Left: Massive Total Typography */}
                    <div style={{ flex: '1.2', display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '0.85rem', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-primary)' }}>
                            Total Problems Solved
                        </span>
                        
                        <div className={playfair.className} style={{ 
                            fontSize: 'clamp(6rem, 15vw, 15rem)', 
                            fontWeight: '400',
                            fontStyle: 'italic',
                            color: '#6d3f52', // Plum color to match Experience/Certificates
                            lineHeight: '1',
                            margin: '1rem 0 2rem -1rem' // Slight negative margin to optically align the italic text
                        }}>
                            {stats.totalSolved}
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                            <div style={{ padding: '0.5rem 1.2rem', border: '1px solid var(--border-color)', borderRadius: '2rem', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.1em', color: 'var(--text-primary)' }}>
                                Rank #{stats.ranking?.toLocaleString()}
                            </div>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5', maxWidth: '250px' }}>
                                Consistently refining algorithmic thinking and data structure optimization.
                            </span>
                        </div>
                    </div>

                    {/* Right: Elegant Difficulty Breakdown */}
                    <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '3rem', borderLeft: '1px solid var(--border-color)', paddingLeft: '4rem' }} className="stats-breakdown">
                        <StatBar label="Easy" value={stats.easySolved} total={stats.totalSolved} color="var(--text-secondary)" />
                        <StatBar label="Medium" value={stats.mediumSolved} total={stats.totalSolved} color="var(--text-primary)" />
                        <StatBar label="Hard" value={stats.hardSolved} total={stats.totalSolved} color="#6d3f52" />
                    </div>
                </div>
            )}

            <style jsx>{`
                .stats-pad-box { padding: 0 6rem; }
                .stats-default-pad { padding: 6rem 6rem; }

                @media (max-width: 1024px) {
                    .stats-layout { flex-direction: column !important; align-items: flex-start !important; gap: 4rem !important; }
                    .stats-breakdown { border-left: none !important; padding-left: 0 !important; width: 100%; border-top: 1px solid var(--border-color); padding-top: 4rem; }
                }

                @media (max-width: 768px) {
                    .stats-pad-box { padding: 3rem 2rem !important; }
                    .stats-default-pad { padding: 4rem 2rem !important; }
                }
            `}</style>
        </section>
    );
}

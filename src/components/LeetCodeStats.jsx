'use client';
import { useEffect, useState } from 'react';

function StatBar({ label, value, total, color }) {
    const pct = total > 0 ? Math.round((value / total) * 100) : 0;
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '500' }}>{label}</span>
                <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-primary)' }}>{value}</span>
            </div>
            <div style={{ height: '4px', background: 'var(--border-color)', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ width: `${pct}%`, height: '100%', background: color, borderRadius: '2px', transition: 'width 1s ease' }} />
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
        ? { minHeight: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }
        : { borderBottom: '1px solid var(--border-color)' };

    return (
        <section className={isBookLayout ? 'stats-pad-box' : 'stats-default-pad'} style={wrapperStyle}>
            {/* Header */}
            <div className="stats-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3rem' }}>
                <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                    LeetCode — Live Stats
                </span>
                <a
                    href="https://leetcode.com/u/padmasree16_kunigiri/"
                    target="_blank" rel="noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--text-secondary)', fontFamily: 'monospace', letterSpacing: '0.1em', textDecoration: 'none', border: '1px solid var(--border-color)', borderRadius: '2rem', padding: '0.35rem 0.9rem' }}
                >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    padmasree16_kunigiri
                </a>
            </div>

            {loading && (
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    {[1,2,3,4].map(i => (
                        <div key={i} style={{ flex: 1, height: '120px', background: 'var(--border-color)', borderRadius: '1rem', animation: 'pulse 1.5s ease infinite alternate' }} />
                    ))}
                    <style>{`@keyframes pulse { from { opacity: 0.4 } to { opacity: 0.8 } }`}</style>
                </div>
            )}

            {error && (
                <div style={{ padding: '2rem', border: '1px dashed var(--border-color)', borderRadius: '1rem', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Could not load LeetCode data — <a href="https://leetcode.com/u/padmasree16_kunigiri/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)', fontWeight: '600' }}>view profile directly ↗</a>
                </div>
            )}

            {stats && !loading && (
                <div className="stats-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
                    {/* Left: Big numbers */}
                    <div className="stats-numbers" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        {[
                            { label: 'Total Solved', value: stats.totalSolved, sub: 'Problems' },
                            { label: 'Global Rank', value: `#${stats.ranking?.toLocaleString()}`, sub: 'Ranking' },
                            { label: 'Easy', value: stats.easySolved, sub: 'Solved' },
                            { label: 'Hard', value: stats.hardSolved, sub: 'Solved' },
                        ].map(item => (
                            <div key={item.label} style={{ padding: '1.5rem', border: '1px solid var(--border-color)', borderRadius: '1rem', background: 'rgba(0,0,0,0.01)' }}>
                                <div style={{ fontSize: '0.6rem', fontFamily: 'monospace', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{item.label}</div>
                                <div style={{ fontSize: '2rem', fontWeight: '900', letterSpacing: '-0.04em', lineHeight: 1, color: 'var(--text-primary)' }}>{item.value}</div>
                                <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>{item.sub}</div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Difficulty bars */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2rem', border: '1px solid var(--border-color)', borderRadius: '1rem' }}>
                        <div style={{ fontSize: '0.65rem', fontFamily: 'monospace', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Difficulty Breakdown</div>
                        <StatBar label="Easy"   value={stats.easySolved}   total={stats.totalSolved} color="#22c55e" />
                        <StatBar label="Medium" value={stats.mediumSolved} total={stats.totalSolved} color="#f59e0b" />
                        <StatBar label="Hard"   value={stats.hardSolved}   total={stats.totalSolved} color="#ef4444" />
                        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Total Solved</span>
                            <span style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--text-primary)' }}>{stats.totalSolved}</span>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                .stats-pad-box { padding: 0 6rem; }
                .stats-default-pad { padding: 5rem 6rem; }

                @media (max-width: 768px) {
                    .stats-pad-box { padding: 2rem !important; }
                    .stats-default-pad { padding: 2rem !important; }
                    .stats-layout { grid-template-columns: 1fr !important; gap: 2rem !important; }
                    .stats-numbers { grid-template-columns: 1fr 1fr !important; }
                    .stats-header { flex-direction: column; align-items: flex-start !important; gap: 1.5rem; marginBottom: 2rem !important; }
                }
                
                @media (max-width: 480px) {
                    .stats-numbers { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </section>
    );
}

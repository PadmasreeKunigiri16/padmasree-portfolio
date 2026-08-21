'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    return (
        <>
            <header className="navbar">
                <div className="logo">
                    <Link href="/" style={{ fontWeight: '700', fontSize: '1.2rem', letterSpacing: '1px', textDecoration: 'none', color: 'inherit' }}>PADMASREE KUNIGIRI</Link>
                </div>
                <nav className="nav-links">
                    {pathname !== '/' && <Link href="/">Home</Link>}
                    <Link href="/experience">Experience</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/certificates">Certificates</Link>
                    <Link href="/about">About</Link>
                </nav>
                <Link
                    href="/contact"
                    className="btn btn-outline"
                    style={{ 
                        border: 'none', 
                        cursor: 'pointer', 
                        background: 'var(--text-primary)', 
                        color: '#fff', 
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '0.5rem 1rem',
                        borderRadius: '0.5rem'
                    }}
                >
                    Let&apos;s Talk →
                </Link>
            </header>
        </>
    );
}

"use client";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const reasons = [
    {
        name: 'JavaScript',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        category: 'Core Language',
        whyChose: "I chose JavaScript because it is the universal language of the web. It allows me to maintain a single language mindset across the entire stack.",
        whyBetter: "It is incredibly versatile and boasts the largest ecosystem of libraries and community support in the world.",
        howHelpful: "It helps me rapidly build full-stack applications without context-switching between different languages for frontend and backend."
    },
    {
        name: 'TypeScript',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        category: 'Core Language',
        whyChose: "I chose TypeScript to bring strict typing to my JavaScript codebases, ensuring that bugs are caught during development, not in production.",
        whyBetter: "It is significantly better than plain JavaScript for large codebases because it makes code self-documenting and refactoring fearless.",
        howHelpful: "It helps me deliver robust, enterprise-grade software by completely eliminating entire classes of runtime errors."
    },
    {
        name: 'React',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        category: 'Frontend',
        whyChose: "I chose React for its brilliant component-based architecture and declarative UI model.",
        whyBetter: "It outperforms traditional DOM manipulation by using a highly optimized Virtual DOM, ensuring smooth and fast user interfaces.",
        howHelpful: "It helps me build complex, highly interactive frontend experiences that remain maintainable and scalable as the project grows."
    },
    {
        name: 'Next.js',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
        category: 'Frontend Framework',
        whyChose: "I chose Next.js because it unites React with server-side rendering (SSR), static site generation (SSG), and API routes in one cohesive package.",
        whyBetter: "It is vastly superior for SEO and initial load times compared to standard single-page applications.",
        howHelpful: "It helps me deploy lightning-fast, production-ready web apps instantly. In fact, this very portfolio is built on Next.js!"
    },
    {
        name: 'Node.js',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        category: 'Backend',
        whyChose: "I chose Node.js to run JavaScript on the server, closing the full-stack loop and keeping the development environment unified.",
        whyBetter: "Its non-blocking, event-driven architecture makes it incredibly efficient for handling thousands of concurrent connections.",
        howHelpful: "It helps me build scalable APIs and real-time backend services quickly, sharing types and utility logic with the frontend."
    },
    {
        name: 'Python',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        category: 'Backend & AI',
        whyChose: "I chose Python as my primary tool for anything involving heavy data processing, automation, or artificial intelligence.",
        whyBetter: "It is the undisputed king of AI and Machine Learning, with a clean, highly readable syntax that speeds up development.",
        howHelpful: "It helps me seamlessly integrate AI features, data pipelines, and intelligent automation into standard web applications."
    },
    {
        name: 'FastAPI',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
        category: 'Backend Framework',
        whyChose: "I chose FastAPI to build high-performance Python backends, specifically when working with AI models.",
        whyBetter: "It is blazing fast (comparable to NodeJS and Go), provides automatic OpenAPI documentation, and strictly validates data using Pydantic.",
        howHelpful: "It helps me instantly spin up secure, robust, and lightning-fast REST APIs for AI services with minimal boilerplate code."
    },
    {
        name: 'PostgreSQL',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        category: 'Database',
        whyChose: "I chose PostgreSQL as my primary relational database because data integrity is paramount in production.",
        whyBetter: "It is universally respected as the most advanced, ACID-compliant open-source relational database, offering unparalleled reliability.",
        howHelpful: "It helps me structure complex, interconnected data models safely, ensuring that user data is never corrupted or lost."
    },
    {
        name: 'MongoDB',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        category: 'Database',
        whyChose: "I chose MongoDB for projects that require highly flexible, document-oriented data structures.",
        whyBetter: "It allows for rapid schema evolution without painful migrations, making it perfect for agile development and unstructured data.",
        howHelpful: "It helps me quickly iterate on APIs that deal with deeply nested, varied, or frequently changing data shapes."
    },
    {
        name: 'Docker',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        category: 'DevOps',
        whyChose: "I chose Docker because 'it works on my machine' is not an acceptable standard for professional software engineering.",
        whyBetter: "It isolates applications into self-contained environments, ensuring they run exactly the same way in development, testing, and production.",
        howHelpful: "It helps me containerize everything I ship, making deployments predictable, secure, and incredibly easy to scale."
    },
    {
        name: 'AWS',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
        category: 'Cloud',
        whyChose: "I chose AWS because it is the industry standard cloud provider where serious production applications live.",
        whyBetter: "It offers unmatched global infrastructure, security, and a massive suite of managed services for databases, AI, and serverless computing.",
        howHelpful: "As a certified AWS Developer, it helps me architect highly available, scalable infrastructure so I can focus on the product rather than managing servers."
    },
    {
        name: 'Playwright',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg',
        category: 'Testing',
        whyChose: "I chose Playwright because automated End-to-End testing is the last line of defense before a product reaches the user.",
        whyBetter: "It is significantly faster and more reliable than older testing tools, offering first-class multi-browser support and auto-waiting.",
        howHelpful: "It helps me guarantee that critical user flows always work perfectly, catching regressions before they ever make it to production."
    },
    {
        name: 'Git',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        category: 'Tooling',
        whyChose: "I chose Git because tracking every line of code is the foundational requirement for professional software development.",
        whyBetter: "It is the undisputed global standard for version control, allowing for safe branching, flawless collaboration, and code review.",
        howHelpful: "It helps me manage complex projects safely, ensuring I can always revert mistakes, track history, and collaborate seamlessly with teams."
    },
    {
        name: 'TailwindCSS',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
        category: 'Styling',
        whyChose: "I chose TailwindCSS to style applications at maximum speed using a utility-first approach.",
        whyBetter: "It eliminates entire classes of CSS drift, dead code, and naming fatigue by keeping styles perfectly colocated with the markup.",
        howHelpful: "It helps me rapidly prototype and build stunning, responsive user interfaces without ever sacrificing design consistency."
    }
];

export default function StackPage() {
    return (
        <>
            <Navbar />
            <main style={{ paddingTop: '80px', backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>

                {/* Hero */}
                <section style={{ padding: '8rem 6rem 6rem', borderBottom: '1px solid var(--border-color)', position: 'relative', overflow: 'hidden' }}>
                    <div className="stack-hero-bg" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontSize: '18vw', fontWeight: '900', color: 'var(--text-primary)', opacity: 0.05, whiteSpace: 'nowrap', pointerEvents: 'none', userSelect: 'none', letterSpacing: '-0.05em' }}>WHY</div>
                    <div style={{ maxWidth: '900px', position: 'relative', zIndex: 10 }}>
                        <Link href="/#stack" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)', textDecoration: 'none', marginBottom: '2.5rem', transition: 'color 0.2s ease' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                            Back to Tech Stack
                        </Link>
                        <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', marginBottom: '1.5rem' }}>The Stack — A deliberate choice by PadmaSree</span>
                        <h1 className="stack-hero-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', fontWeight: '900', letterSpacing: '-0.04em', lineHeight: '1.0', color: 'var(--text-primary)', marginBottom: '2rem' }}>
                            Why I chose<br/>
                            <span style={{ color: 'transparent', WebkitTextStroke: '2px var(--text-primary)' }}>this stack.</span>
                        </h1>
                        <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.8', maxWidth: '700px' }}>
                            I don&apos;t use technologies just because they&apos;re trendy. Every tool here was carefully selected because it is <strong>better suited for modern development</strong> and <strong>helpful in solving real-world problems reliably</strong>. From frontend interfaces to backend automation, here is exactly why I rely on these technologies to engineer products people can trust.
                        </p>
                    </div>
                </section>

                {/* Tech cards */}
                <section style={{ maxWidth: '1400px', margin: '0 auto', padding: '6rem 4rem' }}>
                    <div className="stack-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '2rem' }}>
                        {reasons.map((tech) => (
                            <div key={tech.name} style={{
                                border: '1px solid var(--border-color)',
                                borderRadius: '1.25rem',
                                padding: '2.5rem',
                                background: 'rgba(0,0,0,0.01)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '2rem',
                                transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                            }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--text-primary)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)'; }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.boxShadow = 'none'; }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    <div style={{ flexShrink: 0, width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-secondary)', borderRadius: '1rem', border: '1px solid var(--border-color)' }}>
                                        <img src={tech.logo} alt={tech.name} style={{ width: '36px', height: '36px', objectFit: 'contain' }} />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: '900', color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: '0.25rem' }}>{tech.name}</h3>
                                        <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>{tech.category}</span>
                                    </div>
                                </div>
                                
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <div>
                                        <div style={{ fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <span style={{ color: '#3b82f6' }}>■</span> Why I chose this
                                        </div>
                                        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{tech.whyChose}</p>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <span style={{ color: '#10b981' }}>■</span> Why it&apos;s better
                                        </div>
                                        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{tech.whyBetter}</p>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <span style={{ color: '#8b5cf6' }}>■</span> How it&apos;s helpful
                                        </div>
                                        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{tech.howHelpful}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            
            <style>{`
                @media (max-width: 768px) {
                    section { padding-left: 2rem !important; padding-right: 2rem !important; }
                    .stack-grid { grid-template-columns: 1fr !important; }
                    .stack-hero-bg { font-size: 30vw !important; }
                }
            `}</style>
            
            <Footer />
        </>
    );
}

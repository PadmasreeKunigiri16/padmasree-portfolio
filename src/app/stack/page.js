"use client";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Playfair_Display, Inter } from 'next/font/google';
import { motion } from 'framer-motion';

const playfair = Playfair_Display({ weight: ['400', '700', '800', '900'], subsets: ['latin'], display: 'swap', style: ['normal', 'italic'] });
const inter = Inter({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'], display: 'swap' });

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
        <div className={inter.className} style={{ backgroundColor: '#f5f1ec', minHeight: '100vh', color: '#111' }}>
            <Navbar />
            
            <main style={{ paddingTop: '80px', paddingBottom: '120px', overflow: 'hidden' }}>
                
                {/* Hero Section */}
                <section style={{ padding: '2rem 5% 0', position: 'relative' }}>
                    
                    <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                        <Link href="/#stack" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#888', textDecoration: 'none', marginBottom: '3rem', borderBottom: '1px solid transparent', transition: 'all 0.3s ease' }} onMouseEnter={e => { e.currentTarget.style.color = '#111'; e.currentTarget.style.borderBottomColor = '#111'; }} onMouseLeave={e => { e.currentTarget.style.color = '#888'; e.currentTarget.style.borderBottomColor = 'transparent'; }}>
                            ← Return
                        </Link>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', maxWidth: '1000px' }}>
                            <h1 className={playfair.className} style={{ fontSize: 'clamp(3.5rem, 8vw, 7.5rem)', fontWeight: '400', letterSpacing: '-0.02em', lineHeight: '0.95', color: '#111', margin: 0 }}>
                                The Logic Behind <br />
                                <span style={{ color: '#6d3f52', fontStyle: 'italic' }}>The Code.</span>
                            </h1>
                            
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', paddingTop: '1rem' }}>
                                <div style={{ width: '60px', height: '1px', backgroundColor: 'rgba(0,0,0,0.2)', marginTop: '0.8rem' }} />
                                <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8', margin: 0, maxWidth: '550px' }}>
                                    I don&apos;t use technologies just because they&apos;re trendy. Every tool here was carefully selected because it is better suited for modern development and solves real-world problems reliably.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <div style={{ height: '8rem' }} />

                {/* The Tech List - Asymmetrical Editorial Layout */}
                <section style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
                        {reasons.map((tech, i) => {
                            const isEven = i % 2 === 0;
                            return (
                                <motion.div 
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    key={tech.name} 
                                    className="tech-block"
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(12, 1fr)',
                                        gap: '4rem',
                                        alignItems: 'center'
                                    }}
                                >
                                    {/* Logo & Title Block */}
                                    <div style={{
                                        gridColumn: isEven ? '1 / 6' : '8 / 13',
                                        gridRow: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        order: isEven ? 1 : 2
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', marginBottom: '2.5rem' }}>
                                            <span style={{ fontSize: '1rem', fontFamily: 'monospace', fontWeight: '600', color: '#888' }}>
                                                {String(i + 1).padStart(2, '0')}
                                            </span>
                                            <div style={{ width: '70px', height: '70px', background: '#fff', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                                                <img src={tech.logo} alt={tech.name} style={{ width: '35px', height: '35px', objectFit: 'contain' }} />
                                            </div>
                                        </div>
                                        <h3 className={playfair.className} style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: '800', color: '#111', letterSpacing: '-0.04em', lineHeight: '0.9', margin: '0 0 1rem 0' }}>
                                            {tech.name}
                                        </h3>
                                        <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#6d3f52' }}>
                                            {tech.category}
                                        </span>
                                    </div>

                                    {/* Descriptions Block */}
                                    <div style={{
                                        gridColumn: isEven ? '6 / 13' : '1 / 8',
                                        gridRow: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '3rem',
                                        order: isEven ? 2 : 1,
                                        padding: '4rem',
                                        backgroundColor: 'rgba(255,255,255,0.4)',
                                        border: '1px solid rgba(0,0,0,0.05)',
                                        borderRadius: '1.5rem',
                                        boxShadow: 'inset 0 0 20px rgba(255,255,255,0.5)'
                                    }}>
                                        <div>
                                            <h4 style={{ fontSize: '0.7rem', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                <span style={{ display: 'inline-block', width: '30px', height: '1px', backgroundColor: '#888' }}></span> Why I chose it
                                            </h4>
                                            <p style={{ fontSize: '1.25rem', color: '#111', lineHeight: '1.6', fontWeight: '400', fontStyle: 'italic', fontFamily: 'Georgia, serif' }}>"{tech.whyChose}"</p>
                                        </div>
                                        
                                        <div className="details-subgrid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                                            <div>
                                                <h4 style={{ fontSize: '0.65rem', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888', marginBottom: '1rem' }}>
                                                    Why it's better
                                                </h4>
                                                <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.7' }}>{tech.whyBetter}</p>
                                            </div>
                                            <div>
                                                <h4 style={{ fontSize: '0.65rem', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888', marginBottom: '1rem' }}>
                                                    How it's helpful
                                                </h4>
                                                <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.7' }}>{tech.howHelpful}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </section>
            </main>
            
            <style>{`
                @media (max-width: 1024px) {
                    .hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
                    .tech-block {
                        display: flex !important;
                        flex-direction: column !important;
                        align-items: flex-start !important;
                        gap: 3rem !important;
                    }
                    .tech-block > div {
                        width: 100% !important;
                        order: unset !important;
                    }
                    .tech-block > div:nth-child(2) {
                        padding: 2.5rem !important;
                    }
                }
                @media (max-width: 600px) {
                    .details-subgrid { grid-template-columns: 1fr !important; gap: 2rem !important; }
                }
            `}</style>
            
            <Footer />
        </div>
    );
}

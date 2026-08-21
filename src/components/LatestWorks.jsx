export default function LatestWorks() {
    return (
        <section className="latest-works relative">
            <div className="section-indicator font-mono">04</div>
            <h2 className="section-title text-center animate-up" style={{marginBottom: '3rem'}}>Certifications & Achievements</h2>
            <div className="grid-3">
                <div className="clean-card animate-up">
                    <div className="card-meta">Cloud</div>
                    <h4>Google Cloud Digital Leader</h4>
                    <p>Validated knowledge of core Google Cloud data and technology concepts and their benefits.</p>
                </div>
                <div className="clean-card animate-up" style={{ animationDelay: '0.1s' }}>
                    <div className="card-meta">Cloud & AI</div>
                    <h4>AWS Certified Developer & AI Practitioner</h4>
                    <p>Comprehensive understanding of AWS core services, uses, and basic AWS architecture best practices.</p>
                </div>
                <div className="clean-card animate-up" style={{ animationDelay: '0.2s' }}>
                    <div className="card-meta">Software & AI</div>
                    <h4>Oracle Java & AI Foundations</h4>
                    <p>Certified in Oracle Agentic AI and core Java fundamentals, demonstrating strong problem-solving skills.</p>
                </div>
            </div>
            <div className="text-center mt-2 animate-up">
                <a href="#about" className="btn btn-outline">Learn More About Me →</a>
            </div>
        </section>
    );
}

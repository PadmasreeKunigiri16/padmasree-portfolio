export default function Blog() {
    return (
        <section className="insights relative" id="blog">
            <div className="section-indicator font-mono">03</div>
            <div className="text-center section-header animate-up">
                <span className="font-mono tracking-widest uppercase" style={{fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem'}}>Powered By</span>
                <h2 className="section-title tracking-tight" style={{fontSize: '3.5rem'}}>BUILT <span style={{textDecoration: 'underline', textDecorationColor: 'var(--accent)', textUnderlineOffset: '8px'}}>WITH THIS</span> STACK</h2>
            </div>
            
            <div className="stack-grid">
                <div className="stack-item animate-up">
                    <img src="https://cdn.simpleicons.org/python/000000" alt="Python" />
                    <span className="stack-name">Python</span>
                </div>
                <div className="stack-item animate-up" style={{ animationDelay: '0.1s' }}>
                    <img src="https://cdn.simpleicons.org/java/000000" alt="Java" />
                    <span className="stack-name">Java</span>
                </div>
                <div className="stack-item animate-up" style={{ animationDelay: '0.2s' }}>
                    <img src="https://cdn.simpleicons.org/javascript/000000" alt="JavaScript" />
                    <span className="stack-name">JavaScript</span>
                </div>
                <div className="stack-item animate-up" style={{ animationDelay: '0.3s' }}>
                    <img src="https://cdn.simpleicons.org/react/000000" alt="React" />
                    <span className="stack-name">React</span>
                </div>
                <div className="stack-item animate-up">
                    <img src="https://cdn.simpleicons.org/opencv/000000" alt="OpenCV" />
                    <span className="stack-name">OpenCV</span>
                </div>
                <div className="stack-item animate-up" style={{ animationDelay: '0.1s' }}>
                    <img src="https://cdn.simpleicons.org/pytorch/000000" alt="PyTorch" />
                    <span className="stack-name">PyTorch</span>
                </div>
                <div className="stack-item animate-up" style={{ animationDelay: '0.2s' }}>
                    <img src="https://cdn.simpleicons.org/mysql/000000" alt="MySQL" />
                    <span className="stack-name">MySQL</span>
                </div>
                <div className="stack-item animate-up" style={{ animationDelay: '0.3s' }}>
                    <img src="https://cdn.simpleicons.org/playwright/000000" alt="Playwright" />
                    <span className="stack-name">Playwright</span>
                </div>
            </div>
            
            <div className="text-center animate-up" style={{marginTop: '4rem'}}>
                <a href="#work" className="btn btn-dark font-mono tracking-widest text-xs uppercase" style={{padding: '1rem 2rem'}}>View Complete Experience &rarr;</a>
            </div>
        </section>
    );
}

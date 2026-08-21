export default function Portfolio() {
    return (
        <section className="portfolio-grid relative" id="services">
            <div className="section-indicator font-mono">02</div>
            <h2 className="section-title text-center animate-up" style={{marginBottom: '3rem'}}>Projects</h2>
            <div className="grid-3">
                <div className="clean-card animate-up">
                    <div className="card-meta">Computer Vision</div>
                    <h4>VitaMirror – AI-Powered Health Mirror</h4>
                    <p>Developed an AI-powered smart mirror that uses Computer Vision to provide real-time wellness insights, including stress, fatigue, and skin health analysis.</p>
                    <div className="journey-tags" style={{marginTop: 'auto'}}>
                        <span className="tag">Python</span>
                        <span className="tag">OpenCV</span>
                    </div>
                </div>
                <div className="clean-card animate-up" style={{ animationDelay: '0.1s' }}>
                    <div className="card-meta">AI / ML</div>
                    <h4>RxSaathi – Smart Prescription Assistant</h4>
                    <p>Created an AI-driven healthcare solution that transforms prescriptions into voice and visual instructions, reducing medication errors for elderly and rural patients.</p>
                    <div className="journey-tags" style={{marginTop: 'auto'}}>
                        <span className="tag">Python</span>
                        <span className="tag">Machine Learning</span>
                    </div>
                </div>
                <div className="clean-card animate-up" style={{ animationDelay: '0.2s' }}>
                    <div className="card-meta">Hackathon 1st Prize</div>
                    <h4>StakeUp – Accountability Ecosystem</h4>
                    <p>Developed frontend screens and integrated backend APIs for core features including accountability challenges, Stake Battles, ProofIQ verification, and analytical dashboards.</p>
                    <div className="journey-tags" style={{marginTop: 'auto'}}>
                        <span className="tag">Frontend</span>
                        <span className="tag">Testing</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

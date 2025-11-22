import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { domains } from '../data/domains';

const DomainDetail = () => {
    const { id } = useParams();
    const domain = domains.find(d => d.id === id);

    if (!domain) {
        return (
            <div className="container" style={{ textAlign: 'center', padding: '4rem' }}>
                <h2>Domain not found</h2>
                <Link to="/" className="btn btn-primary">Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="detail-header">
                <Link to="/" className="btn btn-outline" style={{ marginBottom: '1rem' }}>← Back</Link>
                <h1>{domain.title}</h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>{domain.description}</p>
            </div>

            <div className="detail-grid">
                {/* Skills & Tools */}
                <div className="info-box">
                    <h3 className="section-title">Skills & Tools</h3>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <h4 style={{ marginBottom: '0.5rem' }}>Languages</h4>
                        <div className="tag-container">
                            {domain.languages.map((lang, i) => (
                                <span key={i} className="tag">{lang}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '0.5rem' }}>Environment</h4>
                        <ul style={{ listStyle: 'disc', paddingLeft: '1.2rem', color: 'var(--text-muted)' }}>
                            {domain.environment.map((env, i) => (
                                <li key={i}>{env}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Career Paths */}
                <div className="info-box">
                    <h3 className="section-title">Career Paths</h3>
                    <div className="tag-container">
                        {domain.jobs.map((job, i) => (
                            <span key={i} className="tag" style={{ background: 'rgba(236, 72, 153, 0.1)', color: 'var(--secondary)' }}>
                                {job}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="detail-grid">
                {/* Learning Resources */}
                <div className="info-box">
                    <h3 className="section-title">Learning Resources</h3>

                    <h4 style={{ marginBottom: '0.5rem' }}>YouTube Channels</h4>
                    <div style={{ marginBottom: '1.5rem' }}>
                        {domain.youtube.map((yt, i) => (
                            <a key={i} href={yt.url} target="_blank" rel="noopener noreferrer" className="resource-link">
                                ▶ {yt.name}
                            </a>
                        ))}
                    </div>

                    <h4 style={{ marginBottom: '0.5rem' }}>Websites</h4>
                    <div>
                        {domain.websites.map((web, i) => (
                            <a key={i} href={web.url} target="_blank" rel="noopener noreferrer" className="resource-link">
                                🌐 {web.name}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Projects */}
                <div className="info-box">
                    <h3 className="section-title">Project Ideas</h3>
                    {domain.projects.map((proj, i) => (
                        <div key={i} className="project-card">
                            <div className="project-level">{proj.level}</div>
                            <div style={{ fontWeight: 'bold' }}>{proj.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DomainDetail;

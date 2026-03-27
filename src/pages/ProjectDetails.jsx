import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find(p => p.id === parseInt(id));

    if (!project) {
        return (
            <div style={{ padding: '2rem var(--page-padding)', color: 'white' }}>
                <h2>Project not found</h2>
                <button onClick={() => navigate('/portfolio')} style={{
                    marginTop: '1rem',
                    background: 'var(--accent-color)',
                    color: '#000',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    cursor: 'pointer'
                }}>Back to Portfolio</button>
            </div>
        );
    }

    return (
        <div className="fade-in" style={{ padding: '2rem var(--page-padding)', color: 'var(--text-primary)' }}>
            <button onClick={() => navigate('/portfolio')} style={{
                marginBottom: '2rem',
                background: 'transparent',
                color: 'var(--text-secondary)',
                border: '1px solid var(--text-secondary)',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
            }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--text-primary)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--text-secondary)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                }}
            >
                ← Back to Portfolio
            </button>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
                <div style={{ width: '100%', aspectRatio: '9/16', overflow: 'hidden', borderRadius: '8px' }}>
                    <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--accent-color)' }}>{project.title}</h1>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                        {project.categories.map(cat => (
                            <span key={cat} style={{
                                padding: '0.25rem 0.75rem',
                                border: '1px solid var(--text-secondary)',
                                borderRadius: '1rem',
                                fontSize: '0.8rem',
                                color: 'var(--text-secondary)'
                            }}>{cat}</span>
                        ))}
                    </div>
                    <p style={{ lineHeight: '1.6', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                        {project.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;

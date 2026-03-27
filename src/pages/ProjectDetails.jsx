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
        <div className="fade-in" style={{ padding: '2rem var(--page-padding)', color: 'var(--text-primary)', maxWidth: '1000px', margin: '0 auto' }}>
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

            {/* Header Section */}
            <div style={{ marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--accent-color)', lineHeight: '1.1' }}>{project.title}</h1>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
                    {project.categories.map(cat => (
                        <span key={cat} style={{
                            padding: '0.35rem 1rem',
                            border: '1px solid var(--text-secondary)',
                            borderRadius: '2rem',
                            fontSize: '0.85rem',
                            color: 'var(--text-secondary)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                        }}>{cat}</span>
                    ))}
                </div>

                <p style={{ lineHeight: '1.7', fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px' }}>
                    {project.description}
                </p>
            </div>

            {/* Vertical "Blog" Images Section */}
            {project.detailImages && project.detailImages.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center' }}>
                    {project.detailImages.map((img, index) => (
                        <div key={index} style={{
                            width: '100%',
                            maxWidth: '700px', // Restricts to a tasteful column width
                            aspectRatio: '3/4', // Portrait orientation
                            overflow: 'hidden',
                            borderRadius: '8px',
                            background: 'rgba(255, 255, 255, 0.05)' // Subtle background while loading
                        }}>
                            <img src={img} alt={`${project.title} detail ${index + 1}`} style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProjectDetails;

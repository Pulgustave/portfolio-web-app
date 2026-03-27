import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

const Portfolio = () => {
    const navigate = useNavigate();
    const [filter, setFilter] = useState('All');

    // Dynamically get unique categories
    const categories = useMemo(() => {
        const allCats = projects.flatMap(p => p.categories);
        return ['All', ...new Set(allCats)];
    }, []);

    // Filter projects based on selection
    const filteredProjects = useMemo(() => {
        if (filter === 'All') return projects;
        return projects.filter(p => p.categories.includes(filter));
    }, [filter]);

    return (
        <div style={{ padding: '2rem var(--page-padding)' }}>
            <h1 className="title-hero fade-in">Selected Works</h1>

            {/* Filter UI */}
            <div className="fade-in" style={{
                marginBottom: '3rem',
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                animationDelay: '0.1s'
            }}>
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        style={{
                            background: filter === cat ? 'var(--accent-color)' : 'rgba(255, 255, 255, 0.05)',
                            color: filter === cat ? '#000' : 'var(--text-secondary)',
                            border: `1px solid ${filter === cat ? 'var(--accent-color)' : 'rgba(255, 255, 255, 0.1)'}`,
                            padding: '0.5rem 1.5rem',
                            borderRadius: '2rem',
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            transition: 'all 0.3s ease',
                            fontFamily: 'var(--font-main)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                        }}
                        onMouseEnter={(e) => {
                            if (filter !== cat) {
                                e.currentTarget.style.borderColor = 'var(--text-primary)';
                                e.currentTarget.style.color = 'var(--text-primary)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (filter !== cat) {
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                e.currentTarget.style.color = 'var(--text-secondary)';
                            }
                        }}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '2rem',
            }}>
                {filteredProjects.map((project, index) => (
                    <div key={project.id} className="fade-in" style={{
                        animationDelay: `${0.2 + (index * 0.1)}s`,
                        background: project.image ? `linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 100%), url(${project.image})` : 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(20,20,20,1) 100%)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        padding: '2rem',
                        aspectRatio: '1',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                        onClick={() => navigate(`/portfolio/${project.id}`)}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'var(--accent-color)';
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 240, 255, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', zIndex: 2 }}>{project.title}</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', zIndex: 2 }}>
                            {project.categories.join(' / ')}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;

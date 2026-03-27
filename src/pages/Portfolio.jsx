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
                            background: filter === cat ? 'var(--text-primary)' : 'rgba(255, 255, 255, 0.03)',
                            color: filter === cat ? 'var(--bg-color)' : 'var(--text-secondary)',
                            border: `1px solid ${filter === cat ? 'var(--text-primary)' : 'rgba(255, 255, 255, 0.08)'}`,
                            padding: '0.6rem 1.8rem',
                            borderRadius: '2rem',
                            cursor: 'pointer',
                            fontSize: '0.85rem',
                            fontWeight: '600',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            fontFamily: 'var(--font-main)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em'
                        }}
                        onMouseEnter={(e) => {
                            if (filter !== cat) {
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                                e.currentTarget.style.color = 'var(--text-primary)';
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (filter !== cat) {
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                                e.currentTarget.style.color = 'var(--text-secondary)';
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
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
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        padding: '2.5rem',
                        aspectRatio: '1',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                        cursor: 'pointer',
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: '0.5rem'
                    }}
                        onClick={() => navigate(`/portfolio/${project.id}`)}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '0.5rem', zIndex: 2, letterSpacing: '-0.02em', lineHeight: '1.2' }}>{project.title}</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', zIndex: 2, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
                            {project.categories.join(' / ')}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;

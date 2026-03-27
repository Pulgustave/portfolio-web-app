import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import projectPlaceholder from '../assets/project_placeholder.png';

const Portfolio = () => {
    const navigate = useNavigate();
    const [filter, setFilter] = useState('All');
    
    // Instead of coordinate tracking, we just track which item is hovered 
    // to fade in the bottom-left pill box.
    const [hoveredProject, setHoveredProject] = useState(null);

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
        <div style={{ padding: '2rem var(--page-padding)', position: 'relative', minHeight: '100vh' }}>
            <h1 className="title-hero fade-in">Selected Works</h1>

            {/* Filter UI */}
            <div className="fade-in" style={{
                marginBottom: '4rem',
                display: 'flex',
                gap: '1.5rem',
                flexWrap: 'wrap',
                animationDelay: '0.1s'
            }}>
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        style={{
                            background: filter === cat ? 'rgba(255,255,255,0.1)' : 'transparent',
                            color: filter === cat ? 'var(--text-primary)' : 'var(--text-secondary)',
                            border: '1px solid',
                            borderColor: filter === cat ? 'rgba(255,255,255,0.2)' : 'transparent',
                            padding: '0.4rem 1.2rem',
                            borderRadius: '2rem',
                            cursor: 'pointer',
                            fontSize: '0.85rem',
                            fontWeight: '500',
                            transition: 'all 0.3s ease',
                            fontFamily: 'var(--font-main)',
                            letterSpacing: '0.05em'
                        }}
                        onMouseEnter={(e) => {
                            if (filter !== cat) {
                                e.currentTarget.style.color = 'var(--text-primary)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (filter !== cat) {
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
                // Larger columns for a premium 3-column feel on wide screens
                gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
                gap: '2.5rem',
            }}>
                {filteredProjects.map((project, index) => {
                    const isHovered = hoveredProject === project.id;
                    const hasRealImage = project.image && project.image !== projectPlaceholder;
                    
                    return (
                        <div key={project.id} className="fade-in" style={{
                            animationDelay: `${0.2 + (index * 0.1)}s`,
                            // Remove the gradient. If there's an image, use it perfectly clean. 
                            // Otherwise, fallback to a sleek solid black as requested.
                            background: hasRealImage ? `url(${project.image})` : '#0d0d0f',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            aspectRatio: '1.33 / 1', // standard 4:3
                            borderRadius: '1.2rem', // sleek rounded corners
                            display: 'flex',
                            transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                            cursor: 'pointer',
                            position: 'relative',
                            overflow: 'hidden',
                            border: hasRealImage ? 'none' : '1px solid rgba(255, 255, 255, 0.05)'
                        }}
                            onClick={() => navigate(`/portfolio/${project.id}`)}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            {/* Robert Licau style: Bottom left absolute pill box */}
                            <div style={{
                                position: 'absolute',
                                bottom: '1.5rem',
                                left: '1.5rem',
                                maxWidth: 'calc(100% - 3rem)', // Prevent from overflowing the right edge
                                padding: '0.6rem 1rem',
                                background: 'rgba(50, 50, 50, 0.5)', 
                                backdropFilter: 'blur(12px)',
                                WebkitBackdropFilter: 'blur(12px)',
                                borderRadius: '1.5rem', // Slightly smaller radius to accommodate multiple lines gracefully
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                opacity: isHovered ? 1 : 0,
                                transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
                                transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
                                pointerEvents: 'none'
                            }}>
                                <span style={{
                                    color: '#ffffff',
                                    fontSize: '0.85rem',
                                    fontWeight: '500',
                                    fontFamily: 'var(--font-main)',
                                    textAlign: 'left', // Keep text left aligned when wrapping
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2, // Restrict to maximum 2 lines
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                    lineHeight: '1.3'
                                }}>
                                    {project.title}
                                </span>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{color: '#ffffff', flexShrink: 0}}>
                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                    <polyline points="7 7 17 7 17 17"></polyline>
                                </svg>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Portfolio;

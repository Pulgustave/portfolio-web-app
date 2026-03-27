import React from 'react';

const About = () => {
    const skills = ['Structural Analysis', 'FEA', 'Complex Geometry', 'Python Scripting', 'C#', 'Rhino', 'Grasshopper', 'Design_for_Fabrication', 'API_s', 'Visual Studio', 'React', 'Three.js', 'P5.js', 'WebGL', 'Node.js', 'Design Systems'];

    return (
        <div style={{ padding: '2rem var(--page-padding)', maxWidth: '800px' }}>
            <h1 className="title-hero fade-in">About</h1>
            <div className="fade-in" style={{ animationDelay: '0.2s' }}>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    I’m a structural and computational engineer working at the intersection of geometry, code, and construction.
                    My practice focuses on the development of structural systems through parametric workflows,
                    advanced analysis, and a close engagement with fabrication and assembly.
                </p>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    I’m drawn to complexity not as an aesthetic goal, but as a natural condition. Structure, like astronomy or biology,
                    follows rules that are both strict and poetic. Forces propagate, systems interact, patterns repeat at different scales.
                    A beam, a canopy, or a façade is never isolated; it belongs to a larger ecosystem of material, fabrication, economy, and use.
                    My work tries to remain attentive to these connections.
                </p>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    My thinking is influenced by engineers such as Peter Rice, by systems theory, and by scientific fields where intuition
                    and rigor coexist. Computation, for me, is not about efficiency alone, nor about automation as an end goal. It is a way to extend
                    intuition, to test assumptions, to explore variation, and to reveal relationships that would otherwise remain invisible.
                </p>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                    I work across scales and design stages, from early conceptual geometry to detailed structural design and fabrication logic.
                    This often involves developing custom digital tools, prototyping assemblies, and working closely with architects and fabricators.
                    I’m interested in structures that are efficient but not mute, rational yet expressive, and that make legible the forces and
                    constraints that shape them.
                </p>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                    At its core, my practice treats engineering as a form of thinking about life: how systems organize, how matter resists and adapts,
                    and how clarity can emerge from complexity.
                </p>
            </div>

            <div className="fade-in" style={{ animationDelay: '0.4s' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', marginTop: '2rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>
                    Technical Arsenal
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                    {skills.map((skill, index) => (
                        <span key={index} style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            padding: '0.5rem 1rem',
                            borderRadius: '2px',
                            fontFamily: 'monospace',
                            fontSize: '0.9rem',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            color: 'var(--accent-color)'
                        }}>
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default About;

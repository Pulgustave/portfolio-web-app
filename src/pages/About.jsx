import React from 'react';

const About = () => {
    const skills = ['Structural Analysis', 'FEA', 'Complex Geometry', 'Python Scripting', 'C#', 'Rhino', 'Grasshopper', 'Design_for_Fabrication', 'API_s', 'Visual Studio', 'React', 'Three.js', 'P5.js', 'WebGL', 'Node.js', 'Design Systems'];

    return (
        <div style={{ padding: '2rem var(--page-padding)', maxWidth: '800px' }}>
            <h1 className="title-hero fade-in">About</h1>
            <div className="fade-in" style={{ animationDelay: '0.2s' }}>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    I want to understand the world.
                </p>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    A learner first — pequeño saltamontes — always pulling at threads to see what unravels. Not because I expect to find the end of them, but because the pulling itself is the point. I've accepted that. Took longer than I'd like to admit.
                </p>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    Engineer by chance, computational designer by choice, after a long and occasionally painful search for problems interesting enough to justify the attention. The path wasn't straight. It rarely is when you're guided more by curiosity than by plan.
                </p>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    I'd call myself a breaker rather than a fixer. It took me a while to admit that too. For a long time I tried to be useful in the ways people expected — contained, reliable, solving the problem as stated. But the only thing that truly feeds me is to experiment, push, stay uncontained — by systems, by disciplines, by my own previous conclusions. Breaking things is how I learn what they're actually made of.
                </p>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    By day I work on design: forces, systems, algorithms. The kind of work that lives at the edge of what computers can describe and what humans can intuit. It's interesting enough. Fun enough. It keeps me going, and some days it's genuinely beautiful.
                </p>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                    The rest of the time I follow my own threads — projects, ideas, half-finished obsessions that probably look like chaos from the outside but feel like breathing from the inside. It's how I keep my sanity. How I stay honest with myself. How I let the world be what it is rather than what I think it should be. A way to lose control, on purpose, without apology.
                </p>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                    Music, art, astronomy, bikes, and calisthenics — when I'm not trying to talk to computers, or when the computers aren't listening.<br />
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

import React from 'react';

const About = () => {
    const skills = ['Structural Analysis', 'FEA', 'Complex Geometry', 'Python Scripting', 'C#', 'Rhino', 'Grasshopper', 'Design_for_Fabrication', 'API_s', 'Visual Studio', 'React', 'Three.js', 'P5.js', 'WebGL', 'Node.js', 'Design Systems'];

    return (
        <div style={{ padding: '2rem var(--page-padding)', maxWidth: '800px' }}>
            <h1 className="title-hero fade-in">About</h1>
            <div className="fade-in" style={{ animationDelay: '0.2s' }}>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    I conceive the scaffolding of the world other people dream about.
                    That's the closest I've found to an honest answer when someone asks what I do. I make strange things — complex geometries,
                     unlikely arrangements — that somehow end up being beautiful. I make them stand. I make them work. And I do it while holding the hand of the designer,
                     quietly steering through the constraints of physics, making sure no one in the room ever feels those constraints exist at all.
                   
                </p>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                     I am an engineer. But I am also a person who would rather be watching the stars, carving wood, or disappearing into the Jura mountains on a bike for 300 kilometers with my wife.
                     These things are not separate from my work. They are why my work looks the way it does.
                    
                </p>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                   I write code that generates steel reinforcement for concrete shells from principal stress fields at mesh vertices.
                   I also assemble IKEA furniture with genuine satisfaction. Both of these feel like the same thing to me — understanding a system well
                    enough to make it do exactly what you need.
                    
                </p>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                    I am drawn to organic forms and to minimalism. To the richness of architecture built before someone decided repetition was progress. I believe Thomas Heatherwick
                     is right: design needs to be humanized. We have spent decades formatting people into a one-size-fits-all world, and it is making everything — our buildings,
                      our cities, our tools, our lives — quietly unbearable. I want to push against that, one project at a time.
                </p>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                    Music saved my life. I'll leave that there because it deserves its own space.
What I want, professionally, is for engineers to stop being calculators. The calculator part is the easy part. The hard part is having taste,
 conviction, and the courage to drive something — not just verify it.
That's what I'm here to do.
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

import React from 'react';

const Home = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            textAlign: 'center',
            padding: '0 2rem'
        }}>
            <h1 className="title-hero fade-in" style={{ animationDelay: '0.2s' }}>
                Gustavo Avellaneda M.
            </h1>
            <h2 className="fade-in" style={{
                fontSize: '2rem',
                fontWeight: 300,
                letterSpacing: '0.1em',
                marginBottom: '3rem',
                animationDelay: '0.5s',
                color: 'var(--accent-color)'
            }}>
                COMPUTATION <span style={{ color: 'var(--text-secondary)' }}>×</span> ENGINEERING
            </h2>
            <p className="fade-in" style={{
                fontSize: '1.25rem',
                maxWidth: '600px',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                animationDelay: '0.8s'
            }}>
                Exploring the space between code and design. Creating digital possibilities that emerge in the physical world.
            </p>
        </div>
    );
};

export default Home;

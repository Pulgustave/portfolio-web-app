import React from 'react';

const Contact = () => {
    return (
        <div style={{ padding: '2rem var(--page-padding)', maxWidth: '800px' }}>
            <h1 className="title-hero fade-in">Contact</h1>
            <p className="fade-in" style={{ fontSize: '1.2rem', marginBottom: '2rem', animationDelay: '0.2s', color: 'var(--text-secondary)' }}>
                Interested in collaboration? Let's build something interstellar.
            </p>

            <form className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', animationDelay: '0.4s' }}>
                <input
                    type="text"
                    placeholder="Name"
                    style={{
                        background: 'transparent',
                        border: 'none',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                        padding: '1rem 0',
                        color: 'white',
                        fontSize: '1.1rem',
                        outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}
                />
                <input
                    type="email"
                    placeholder="Email"
                    style={{
                        background: 'transparent',
                        border: 'none',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                        padding: '1rem 0',
                        color: 'white',
                        fontSize: '1.1rem',
                        outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}
                />
                <textarea
                    placeholder="Message"
                    rows="4"
                    style={{
                        background: 'transparent',
                        border: 'none',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                        padding: '1rem 0',
                        color: 'white',
                        fontSize: '1.1rem',
                        outline: 'none',
                        resize: 'vertical'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}
                />
                <button
                    type="button"
                    style={{
                        alignSelf: 'flex-start',
                        background: 'transparent',
                        border: '1px solid var(--accent-color)',
                        color: 'var(--accent-color)',
                        padding: '1rem 3rem',
                        fontSize: '1rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        marginTop: '1rem'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.background = 'var(--accent-color)';
                        e.target.style.color = 'black';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.color = 'var(--accent-color)';
                    }}
                >
                    TRANSMIT
                </button>
            </form>
        </div>
    );
};

export default Contact;

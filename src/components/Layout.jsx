import React from 'react';
import Navigation from './Navigation';
import Background from './Background';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Navigation />
            <main className={styles.main}>
                {children}
            </main>
            <div className={styles.backgroundPlaceholder}>
                <Background />
            </div>
        </div>
    );
};

export default Layout;

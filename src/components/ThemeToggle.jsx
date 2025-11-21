import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = ({ isDark, toggleTheme }) => {
    return (
        <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle Theme"
            style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-primary)',
                fontSize: '1.2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.5rem',
                transition: 'transform 0.3s ease, color 0.3s ease'
            }}
        >
            {isDark ? <FaSun /> : <FaMoon />}
        </button>
    );
};

export default ThemeToggle;

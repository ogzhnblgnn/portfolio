import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import logo from '../assets/logo.png';
import logoLight from '../assets/logo_light.png';

const Header = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,
                padding: '1rem 0',
            }}
        >
            <div
                className="container"
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.75rem 1.5rem',
                    borderRadius: scrolled ? 'var(--radius-xl)' : '0',
                    background: scrolled ? 'var(--glass-bg)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(20px)' : 'none',
                    WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
                    border: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
                    transition: 'all 0.3s ease',
                    maxWidth: scrolled ? '90%' : '1200px',
                    margin: '0 auto',
                }}
            >
                <a href="#" style={{ display: 'block' }}>
                    <img
                        src={theme === 'light' ? logoLight : logo}
                        alt="Logo"
                        style={theme === 'light' ? {
                            height: '33px',
                            width: 'auto',
                            marginLeft: '25px',
                            position: 'relative',
                            zIndex: 10,
                        } : {
                            height: '120px',
                            width: 'auto',
                            margin: '-45px 0',
                            position: 'relative',
                            zIndex: 10
                        }}
                    />
                </a>

                {/* Desktop Nav */}
                <nav className="desktop-nav" style={{ display: 'none', gap: '2rem', '@media (min-width: 768px)': { display: 'flex' } }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            style={{
                                fontSize: '0.9rem',
                                color: 'var(--text-secondary)',
                                fontWeight: '500',
                                transition: 'color 0.2s'
                            }}
                            className="nav-link"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className="btn btn-primary" style={{ fontSize: '0.9rem', padding: '0.5rem 1.2rem' }}>
                        Let's Talk
                    </a>
                    <ThemeToggle isDark={theme === 'dark'} toggleTheme={toggleTheme} />
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ color: 'var(--text-primary)', fontSize: '1.25rem', display: 'none' }}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            width: '100%',
                            background: 'var(--bg-secondary)',
                            padding: '2rem',
                            borderBottom: '1px solid var(--glass-border)',
                        }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    style={{ color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: '500' }}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; align-items: center; }
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        .nav-link:hover { color: var(--text-primary) !important; }
      `}</style>
        </motion.header>
    );
};

export default Header;

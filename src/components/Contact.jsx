import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

const Contact = () => {
    return (
        <footer id="contact" style={{ background: 'var(--contact-gradient)', color: 'var(--text-primary)', padding: '6rem 0 3rem' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '2rem' }}
                >
                    Let's Connect.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ marginBottom: '3rem', fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem' }}
                >
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', marginBottom: '4rem' }}
                >
                    <MagneticButton href="mailto:oguzhanbilgin@yahoo.com" className="btn btn-outline" style={{ border: 'none', background: 'rgba(255,255,255,0.05)' }}>
                        <FaEnvelope style={{ marginRight: '0.5rem' }} /> oguzhanbilgin@yahoo.com
                    </MagneticButton>
                    <MagneticButton href="tel:+905453855998" className="btn btn-outline" style={{ border: 'none', background: 'rgba(255,255,255,0.05)' }}>
                        <FaPhone style={{ marginRight: '0.5rem' }} /> +90 545 385 59 98
                    </MagneticButton>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '4rem' }}
                >
                    <MagneticButton href="https://github.com/ogzhnblgnn" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.8rem', color: 'var(--text-secondary)', transition: 'color 0.3s' }} className="social-icon">
                        <FaGithub />
                    </MagneticButton>
                    <MagneticButton href="https://linkedin.com/in/ogzhnblgnn" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.8rem', color: 'var(--text-secondary)', transition: 'color 0.3s' }} className="social-icon">
                        <FaLinkedin />
                    </MagneticButton>
                </motion.div>

            </div>
            <style>{`
        .social-icon:hover { color: var(--text-primary) !important; }
      `}</style>
        </footer>
    );
};

export default Contact;

import React from 'react';
import { FaTrophy } from 'react-icons/fa';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import RevealOnScroll from './RevealOnScroll';

const ProjectCard = ({ children }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="relative h-full w-full"
        >
            <SpotlightCard className="glass-panel h-full" spotColor="rgba(255, 215, 0, 0.15)">
                {children}
            </SpotlightCard>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects">
            <div className="container">
                <RevealOnScroll>
                    <h2 style={{ marginBottom: '2rem' }}>Featured Projects.</h2>
                </RevealOnScroll>

                <RevealOnScroll>
                    <div style={{ perspective: '1000px' }}>
                        <ProjectCard>
                            <div style={{
                                padding: '3rem',
                                position: 'relative',
                                overflow: 'hidden',
                                borderTop: '1px solid rgba(255,255,255,0.1)',
                                transform: 'translateZ(50px)'
                            }}>
                                {/* Background Gradient */}
                                <div style={{
                                    position: 'absolute',
                                    top: '-50%',
                                    right: '-20%',
                                    width: '600px',
                                    height: '600px',
                                    background: 'radial-gradient(circle, rgba(255, 215, 0, 0.05) 0%, rgba(0,0,0,0) 70%)',
                                    filter: 'blur(60px)',
                                    zIndex: 0,
                                    pointerEvents: 'none'
                                }} />

                                <div style={{ position: 'relative', zIndex: 1 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                        <FaTrophy style={{ fontSize: '2.5rem', color: '#FFD700' }} />
                                        <h3 style={{ margin: 0, fontSize: '2rem' }}>TUBITAK 2209-A Project</h3>
                                    </div>

                                    <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '700px' }}>
                                        Developed a real-time Sign Language Recognition app using <strong>Python (Keras)</strong> and <strong>React Native</strong>.
                                        This project was awarded <span style={{ color: '#FFD700', fontWeight: '600' }}>2nd place</span> in the graduation project competition.
                                    </p>

                                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                                        {['Python', 'Keras', 'React Native', 'Computer Vision'].map((tag, idx) => (
                                            <span key={idx} style={{
                                                padding: '0.5rem 1rem',
                                                background: 'rgba(255,255,255,0.1)',
                                                borderRadius: 'var(--radius-sm)',
                                                fontSize: '0.9rem',
                                                color: 'var(--text-primary)',
                                                fontWeight: '500'
                                            }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                                        <a href="#" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>
                                            View Details
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </ProjectCard>
                    </div>
                </RevealOnScroll>

            </div>
        </section>
    );
};

export default Projects;

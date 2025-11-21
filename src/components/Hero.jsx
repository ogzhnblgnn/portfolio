import React, { useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from './MagneticButton';

const Hero = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

    const text = "Building the future with AI & Full Stack Engineering.";
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <section
            ref={targetRef}
            id="hero"
            style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Dynamic Glow Effect */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    x: '-50%',
                    y: '-50%',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(41,151,255,0.15) 0%, rgba(0,0,0,0) 70%)',
                    filter: 'blur(60px)',
                    zIndex: -1
                }}
            />

            <motion.div
                className="container"
                style={{
                    textAlign: 'center',
                    maxWidth: '900px',
                    zIndex: 1,
                    opacity,
                    scale
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
                >
                    <h1 style={{ marginBottom: '1.5rem', letterSpacing: '-0.03em', position: 'relative' }}>
                        <span style={{ display: 'block', fontSize: '1.5rem', fontWeight: '500', color: 'var(--accent-blue)', marginBottom: '1rem' }}>
                            Hello, I'm Oğuzhan.
                        </span>

                        {/* Text Glow Reflection */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '120%',
                            height: '100%',
                            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0) 70%)',
                            filter: 'blur(40px)',
                            zIndex: -1,
                            pointerEvents: 'none'
                        }} />

                        <motion.div
                            style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", justifyContent: "center" }}
                            variants={container}
                            initial="hidden"
                            animate="visible"
                        >
                            {words.map((word, index) => (
                                <motion.span variants={child} style={{ marginRight: "0.5rem" }} key={index} className={index > 3 ? "text-gradient" : ""}>
                                    {word}
                                </motion.span>
                            ))}
                        </motion.div>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
                    style={{
                        fontSize: '1.5rem',
                        lineHeight: '1.6',
                        color: 'var(--text-secondary)',
                        marginBottom: '3rem',
                        maxWidth: '700px',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}
                >
                    Full-Stack Developer & MSc Student in AI Technologies. Specializing in scalable projects and AI integration.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
                    style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}
                >
                    <MagneticButton href="https://github.com/ogzhnblgnn" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                        <FaGithub style={{ marginRight: '0.5rem' }} /> GitHub
                    </MagneticButton>
                    <MagneticButton href="https://linkedin.com/in/ogzhnblgnn" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        <FaLinkedin style={{ marginRight: '0.5rem' }} /> LinkedIn
                    </MagneticButton>
                    <MagneticButton href="mailto:oguzhanbilgin@yahoo.com" className="btn btn-outline">
                        <FaEnvelope style={{ marginRight: '0.5rem' }} /> Email
                    </MagneticButton>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;

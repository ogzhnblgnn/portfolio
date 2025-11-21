import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });

    const experiences = [
        {
            title: 'Full Stack Developer',
            company: 'Multimedya Atölyesi',
            date: 'Mar 2024 / Jun 2024',
            description: [
                'Architected a social media analysis app integrating AI for sentiment analysis.',
                'Built complex backend structures using Vue.js, PHP Symfony and relational databases.',
                'Implemented E2E and Unit Tests.'
            ]
        },
        {
            title: 'Full Stack Developer (Freelance)',
            company: 'Dopinggo',
            date: 'Jun 2024 / Nov 2024',
            description: [
                'Designed a custom CRM dashboard using Next.js and TypeScript.',
                'Integrated AWS S3 for scalable cloud storage solutions.',
                'Translated business needs into technical specs.'
            ]
        },
        {
            title: 'Full Stack Java Developer',
            company: 'IND Bilişim',
            date: 'Sep 2022 / Jan 2024',
            description: [
                'Developed critical backend/frontend modules for large-scale Municipal Management Systems.',
                'Enhanced ERP Systems for enterprise clients, customizing Java Spring Boot & Vue.js workflows.',
                'Developed Microservices and worked frontend updates for "Commerscope," an integration platform.',
                'Engineered "Sehrin Gozu" (disaster assessment) by integrating Python AI models and OpenCV.'
            ]
        },
        {
            title: 'Frontend Developer Intern',
            company: 'Jaliri',
            date: 'Apr 2021 / Aug 2021',
            description: [
                'Built responsive UI components with React.js for an e-commerce platform.',
                'Created API documentation using Swagger.'
            ]
        },
        {
            title: 'Backend Developer Intern',
            company: 'Site Destek',
            date: 'Jun 2020 / Sep 2020',
            description: [
                'Developed RESTful APIs using PHP (CodeIgniter) and MySQL.',
                'Optimized database queries to improve system performance.'
            ]
        }
    ];

    return (
        <section id="experience">
            <div className="container">
                <RevealOnScroll>
                    <h2 style={{ marginBottom: '2rem' }}>Experience.</h2>
                </RevealOnScroll>

                <div ref={ref} style={{ position: 'relative', paddingLeft: '2rem' }}>
                    {/* Vertical Line with Scroll Progress */}
                    <motion.div
                        style={{
                            position: 'absolute',
                            left: '0',
                            top: '0',
                            bottom: '0',
                            width: '2px',
                            background: 'var(--accent-blue)',
                            originY: 0,
                            scaleY: scrollYProgress
                        }}
                    />

                    {/* Background Line (Faint) */}
                    <div style={{
                        position: 'absolute',
                        left: '0',
                        top: '0',
                        bottom: '0',
                        width: '2px',
                        background: 'rgba(255,255,255,0.1)',
                        zIndex: -1
                    }} />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        {experiences.map((exp, index) => (
                            <RevealOnScroll key={index}>
                                <div style={{ position: 'relative' }}>
                                    {/* Dot */}
                                    <div
                                        style={{
                                            position: 'absolute',
                                            left: '-2.6rem',
                                            top: '0.5rem',
                                            width: '1.2rem',
                                            height: '1.2rem',
                                            borderRadius: '50%',
                                            background: 'var(--bg-primary)',
                                            border: '2px solid var(--accent-blue)',
                                            zIndex: 1
                                        }}
                                    />

                                    <div className="glass-panel-liquid" style={{ padding: '2rem' }}>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1rem' }}>
                                            <h3 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--text-primary)' }}>{exp.title}</h3>
                                            <span style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--accent-blue)' }}>{exp.date}</span>
                                        </div>
                                        <h4 style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontWeight: '500' }}>{exp.company}</h4>

                                        <ul style={{ paddingLeft: '1.2rem', listStyleType: 'disc', color: 'var(--text-secondary)' }}>
                                            {exp.description.map((item, idx) => (
                                                <li key={idx} style={{ marginBottom: '0.5rem' }}>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

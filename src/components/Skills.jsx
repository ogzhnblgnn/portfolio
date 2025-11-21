import React from 'react';
import { FaServer, FaCode, FaDatabase, FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import RevealOnScroll from './RevealOnScroll';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Backend',
            icon: <FaServer />,
            skills: ['Java', 'Spring Boot', 'Python', 'Node.js', 'PHP (Symfony)'],
            color: 'var(--accent-blue)',
            spotColor: 'rgba(41, 151, 255, 0.15)'
        },
        {
            title: 'Frontend',
            icon: <FaCode />,
            skills: ['React.js', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
            color: 'var(--accent-purple)',
            spotColor: 'rgba(191, 90, 242, 0.15)'
        },
        {
            title: 'Data & AI',
            icon: <FaDatabase />,
            skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Keras', 'TensorFlow'],
            color: 'var(--accent-indigo)',
            spotColor: 'rgba(94, 92, 230, 0.15)'
        },
        {
            title: 'DevOps',
            icon: <FaTools />,
            skills: ['Docker', 'AWS (S3)', 'Git/GitHub', 'Agile', 'CI/CD'],
            color: 'var(--text-secondary)',
            spotColor: 'rgba(255, 255, 255, 0.1)'
        }
    ];

    return (
        <section id="skills">
            <div className="container">
                <RevealOnScroll>
                    <h2 style={{ marginBottom: '2rem' }}>Technical Arsenal.</h2>
                </RevealOnScroll>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {skillCategories.map((category, index) => (
                        <RevealOnScroll key={index}>
                            <div style={{ height: '100%' }}>
                                <SpotlightCard
                                    className="glass-panel"
                                    spotColor={category.spotColor}
                                >
                                    <div style={{
                                        padding: '2rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: '100%',
                                    }}>
                                        <div style={{
                                            fontSize: '2.5rem',
                                            color: category.color,
                                            marginBottom: '1.5rem',
                                            background: `rgba(255,255,255,0.05)`,
                                            width: '60px',
                                            height: '60px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: 'var(--radius-md)'
                                        }}>
                                            {category.icon}
                                        </div>
                                        <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{category.title}</h3>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                            {category.skills.map((skill, idx) => (
                                                <span
                                                    key={idx}
                                                    style={{
                                                        padding: '0.4rem 0.8rem',
                                                        background: 'rgba(255,255,255,0.05)',
                                                        borderRadius: 'var(--radius-sm)',
                                                        fontSize: '0.9rem',
                                                        color: 'var(--text-secondary)',
                                                        border: '1px solid rgba(255,255,255,0.05)'
                                                    }}
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </SpotlightCard>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <RevealOnScroll>
                    <h2 style={{ marginBottom: '2rem' }}>About & Education.</h2>
                </RevealOnScroll>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                    {/* Bio */}
                    <RevealOnScroll>
                        <div>
                            <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-blue)' }}>My Journey</h3>
                            <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                                I am an innovative Full Stack Developer currently pursuing an <strong style={{ color: 'var(--text-primary)' }}>MSc in Computer Engineering</strong> with a focus on <strong style={{ color: 'var(--text-primary)' }}>Data Analysis, Data Visualization, Machine Learning, Deep Learning and Artificial Intelligence. </strong>
                                I have a proven track record in large-scale projects, microservices architecture, and AI integration.
                            </p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                                My passion lies in bridging the gap between complex backend systems and intuitive frontend experiences, leveraging modern technologies like <strong style={{ color: 'var(--text-primary)' }}>Java Spring Boot, React.js, Vue.js, Next.js and Python.</strong>
                            </p>
                        </div>
                    </RevealOnScroll>

                    {/* Education */}
                    <RevealOnScroll>
                        <div>
                            <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-purple)' }}>Education</h3>

                            <div className="glass-panel-liquid" style={{
                                padding: '1.5rem',
                                marginBottom: '1.5rem',
                                borderLeft: '4px solid var(--accent-purple)'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <div>
                                        <h4 style={{ margin: 0, fontSize: '1.2rem' }}>M.Sc. Computer Engineering in AI</h4>
                                        <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>Ondokuz Mayıs University</p>
                                        <p style={{ fontSize: '0.9rem', marginTop: '0.75rem', color: 'var(--text-tertiary)' }}>Working on <strong style={{ color: 'rgba(191, 90, 242, 0.7)' }}>Computer Vision in Healthcare</strong> and <strong style={{ color: 'rgba(191, 90, 242, 0.7)' }}>ML Based Applications</strong></p>
                                    </div>
                                    <span style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--accent-purple)', background: 'rgba(191, 90, 242, 0.1)', padding: '0.25rem 0.75rem', borderRadius: '999px' }}>Current</span>
                                </div>
                            </div>

                            <div className="glass-panel-liquid" style={{
                                padding: '1.5rem',
                                borderLeft: '4px solid var(--accent-blue)'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <div>
                                        <h4 style={{ margin: 0, fontSize: '1.2rem' }}>B.Sc. Computer Science</h4>
                                        <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>Dokuz Eylül University</p>
                                        <p style={{ fontSize: '0.9rem', marginTop: '0.75rem', color: 'var(--text-tertiary)' }}>Grad Project:<strong style={{ color: 'rgba(41, 151, 255, 0.7)' }}>AI Based Sign Language Recognition App</strong></p>
                                    </div>
                                    <span style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--accent-blue)', background: 'rgba(41, 151, 255, 0.1)', padding: '0.25rem 0.75rem', borderRadius: '999px' }}>2020-2024</span>
                                </div>
                            </div>

                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
};

export default About;

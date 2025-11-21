import React from 'react';
import { motion } from 'framer-motion';

const RevealOnScroll = ({ children, width = "100%", className = "" }) => {
    return (
        <div className={className} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-20px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{ height: '100%' }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default RevealOnScroll;

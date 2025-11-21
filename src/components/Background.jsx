import React, { useEffect, useRef } from 'react';

const Background = ({ theme }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resize);
        resize();

        // Define colors based on theme
        const isLight = theme === 'light';

        const orbs = isLight ? [
            { x: Math.random() * canvas.width, y: Math.random() * canvas.height, radius: 600, color: 'rgba(41, 151, 255, 0.2)', vx: (Math.random() - 0.5) * 0.8, vy: (Math.random() - 0.5) * 0.8 }, // Blue
            { x: Math.random() * canvas.width, y: Math.random() * canvas.height, radius: 500, color: 'rgba(191, 90, 242, 0.2)', vx: (Math.random() - 0.5) * 0.6, vy: (Math.random() - 0.5) * 0.6 }, // Purple
            { x: Math.random() * canvas.width, y: Math.random() * canvas.height, radius: 400, color: 'rgba(0, 200, 255, 0.15)', vx: (Math.random() - 0.5) * 1.0, vy: (Math.random() - 0.5) * 1.0 }, // Cyan
            { x: Math.random() * canvas.width, y: Math.random() * canvas.height, radius: 700, color: 'rgba(200, 200, 255, 0.1)', vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4 }, // Light Indigo
            { x: Math.random() * canvas.width, y: Math.random() * canvas.height, radius: 300, color: 'rgba(255, 200, 100, 0.1)', vx: (Math.random() - 0.5) * 1.2, vy: (Math.random() - 0.5) * 1.2 }, // Warm highlight
        ] : [
            { x: Math.random() * canvas.width, y: Math.random() * canvas.height, radius: 600, color: 'rgba(41, 151, 255, 0.4)', vx: (Math.random() - 0.5) * 0.8, vy: (Math.random() - 0.5) * 0.8 }, // Blue
            { x: Math.random() * canvas.width, y: Math.random() * canvas.height, radius: 500, color: 'rgba(191, 90, 242, 0.3)', vx: (Math.random() - 0.5) * 0.6, vy: (Math.random() - 0.5) * 0.6 }, // Purple
            { x: Math.random() * canvas.width, y: Math.random() * canvas.height, radius: 400, color: 'rgba(0, 255, 255, 0.2)', vx: (Math.random() - 0.5) * 1.0, vy: (Math.random() - 0.5) * 1.0 }, // Cyan
            { x: Math.random() * canvas.width, y: Math.random() * canvas.height, radius: 700, color: 'rgba(94, 92, 230, 0.2)', vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4 }, // Indigo
            { x: Math.random() * canvas.width, y: Math.random() * canvas.height, radius: 300, color: 'rgba(255, 255, 255, 0.1)', vx: (Math.random() - 0.5) * 1.2, vy: (Math.random() - 0.5) * 1.2 }, // White highlight
        ];

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Background fill
            ctx.fillStyle = isLight ? '#f5f5f7' : '#050505';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Use screen blending for "light" effect in dark mode, multiply/normal for light mode
            ctx.globalCompositeOperation = isLight ? 'multiply' : 'screen';

            orbs.forEach(orb => {
                orb.x += orb.vx;
                orb.y += orb.vy;

                // Bounce off walls smoothly
                if (orb.x < -orb.radius) orb.vx *= -1;
                if (orb.x > canvas.width + orb.radius) orb.vx *= -1;
                if (orb.y < -orb.radius) orb.vy *= -1;
                if (orb.y > canvas.height + orb.radius) orb.vy *= -1;

                const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
                gradient.addColorStop(0, orb.color);
                gradient.addColorStop(1, 'rgba(0,0,0,0)');

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            // Reset composite operation
            ctx.globalCompositeOperation = 'source-over';

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none',
                filter: 'blur(80px)', // Heavy blur for liquid effect
                opacity: 0.6 // Adjust intensity
            }}
        />
    );
};

export default Background;

import React from 'react';
import { motion } from 'framer-motion';

const TechAnimation = () => {
    return (
        <div className="flex items-center justify-center w-full h-full min-h-[240px] lg:min-h-[400px]">
            <svg
                viewBox="0 0 400 400"
                className="w-full h-full max-w-[240px] max-h-[240px] lg:max-w-[400px] lg:max-h-[400px]"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Central Hexagon Pulse */}
                <motion.path
                    d="M200,100 L286,150 L286,250 L200,300 L114,250 L114,150 Z"
                    fill="none"
                    stroke="#8b5cf6" // Purple-500
                    strokeWidth="4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                        pathLength: [0, 1, 1, 0],
                        opacity: [0, 1, 1, 0],
                        rotate: [0, 0, 180, 180]
                    }}
                    transition={{
                        duration: 8,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "loop"
                    }}
                />

                {/* Inner Circle Scan */}
                <motion.circle
                    cx="200"
                    cy="200"
                    r="60"
                    stroke="#06b6d4" // Cyan-500
                    strokeWidth="2"
                    fill="none"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                />

                {/* NEW: Central Reactor Core */}
                {/* 1. Rotating Dashed Ring */}
                <motion.circle
                    cx="200"
                    cy="200"
                    r="35"
                    stroke="#a855f7" // Purple-500
                    strokeWidth="3"
                    strokeDasharray="10 15"
                    fill="none"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    style={{ originX: "200px", originY: "200px" }}
                />

                {/* 2. Solid Pulsing Core */}
                <motion.circle
                    cx="200"
                    cy="200"
                    r="15"
                    fill="#06b6d4" // Cyan-500
                    animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Outer Orbiting Dots */}
                {[0, 120, 240].map((angle, i) => (
                    <motion.circle
                        key={i}
                        cx="200"
                        cy="50"
                        r="8"
                        fill="#a855f7" // Purple-500
                        initial={{ rotate: angle }}
                        animate={{ rotate: angle + 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        style={{ originX: "200px", originY: "200px" }} // Rotate around center
                    />
                ))}

                {/* Connecting Lines (Circuit paths) */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                    <motion.line
                        key={i}
                        x1="200" y1="200"
                        x2="200" y2="100" // Length 100
                        stroke="#4b5563"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                        initial={{ rotate: angle, opacity: 0.3 }}
                        animate={{ opacity: [0.3, 0.8, 0.3] }}
                        transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                        style={{ originX: "200px", originY: "200px" }}
                    />
                ))}
            </svg>
        </div>
    );
};

export default TechAnimation;

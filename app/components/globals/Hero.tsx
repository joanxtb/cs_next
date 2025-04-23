'use client';
import React from 'react';
import BlackOverlay from "./BlackOverlay";
import { motion } from 'motion/react';

interface HeroProps {
    background: string,
    title: string,
    subtitle?: string
}

const Hero: React.FC<HeroProps> = ({ background, title, subtitle }) => {

    const backgroundStyle = {
        position: 'relative',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        backgroundColor: 'black',
        backgroundSize: 'cover',
    };

    return (<div className="hero3" style={backgroundStyle}>
        <BlackOverlay />
        {/* Animate this */}
        {title && <motion.div
            animate={{
                scale: [1, 1.5, 1.5, 1, 1],
                //rotate: [0, 0, 180, 180, 0],
                //borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
                duration: 1,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                //repeat: Infinity,
                //repeatDelay: 1,
            }}
            className="hero3 d-flex flex-column justify-content-center"
        >
            {title && <span className="align-self-center hero-text text-center w-100 line1 text-white text-bold anton font-[120px]">{title}</span>}
            {subtitle && <span className="align-self-center heroish-text text-center w-100 line1 text-white text-uppercase anton font-[60px]" >{subtitle}</span>}
        </motion.div>}
    </div>)
}
export default Hero;
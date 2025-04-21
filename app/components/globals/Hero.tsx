'use client';

import BlackOverlay from "./BlackOverlay";
import { motion } from 'motion/react';

const Hero = () => {
    return (<div className="hero3" style={{ position: 'relative', background: 'url(/images/backgrounds/little-girl-dribling.jpg) no-repeat center top', backgroundSize: 'cover' }}>
        <BlackOverlay />
        {/* Animate this */}
        <motion.div
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

            <span className="align-self-center hero-text text-center w-100 line1 text-white text-bold anton" style={{ fontSize: 120 }}>3v3</span>
            <span className="align-self-center heroish-text text-center w-100 line1 text-white anton" style={{ fontSize: 60 }}>AT ITS BEST</span>

        </motion.div>
    </div>)
}
export default Hero;
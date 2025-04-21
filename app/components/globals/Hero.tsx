'use client';
import BlackOverlay from "./BlackOverlay";
import { motion } from 'motion/react';

const Hero = () => {
    return (<div className="hero3" style={{ position: 'relative', background: 'url(/images/backgrounds/little-girl-dribling.jpg) no-repeat center top', backgroundSize: 'cover' }}>
        <BlackOverlay />
        {/* Animate this */}
        <div className="hero3 d-flex flex-column justify-content-center">
            <span className="align-self-center hero-text text-center w-100 line1 text-white text-bold anton" style={{ fontSize: 120 }}>3v3</span>
            <span className="align-self-center heroish-text text-center w-100 line1 text-white anton" style={{ fontSize: 60 }}>AT ITS BEST</span>
        </div>
    </div>)
}
export default Hero;
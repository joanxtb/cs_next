'use client';
import Navigation from "./Navigation";
import Hero from "./Hero";
import { useInView } from "motion/react"
import { useRef } from "react";

const TheHero = () => {
    const ref = useRef(null)
    const isInView = useInView(ref)
    console.log({ isInView });
    return <>
        <div ref={ref} style={{ position: 'absolute', top: 150, height: 50 }} />
        <Navigation medal={null} transparent={isInView} />
        <Hero />

    </>
}

export default TheHero;
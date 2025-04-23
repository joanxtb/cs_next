'use client';
import Navigation from "./Navigation";
import Hero from "./Hero";
import { useInView } from "motion/react"
import { useRef } from "react";

const NavBar = () => {
    const ref = useRef(null)
    const isInView = useInView(ref)
    return <>
        <div ref={ref} style={{ position: 'absolute', top: 150, height: 50 }} />
        <Navigation medal={null} transparent={isInView} />        
    </>
}

export default NavBar;
'use client';

import Link from "next/link";
import Title from "../globals/Title";
import { motion } from 'motion/react';

const RankingsHome = () => {
    
    return <>
        <div className={`bg-black`} style={{ position: 'relative', minHeight: 700 }} id="rankings-home">

            <div className="d-flex row-into-column w-100 h-100 rankings-gender-background" style={{ position: 'absolute' }}>
                <div className="w-100" style={{ background: `url("/images/backgrounds/soccer-boy-dark.jpg") no-repeat center center`, backgroundSize: 'cover' }} />
                <div className="w-100" style={{ background: `url("/images/backgrounds/soccer-girl-dark.jpg") no-repeat center center`, backgroundSize: 'cover' }} />
            </div>            
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                className="d-flex flex-row justify-content-center"
                style={{ position: 'absolute', top: 20, bottom: 20, left: 20, right: 20, border: `1px solid white` }}
            >
                <span className="align-self-center hero-text anton">RANKINGS</span>
            </motion.div>

            <Link href='/rankings/b'>
                <div className="d-flex flex-row justify-content-center left pointer" >
                    <motion.div
                        className="align-self-end"
                        style={{ marginBottom: '5em' }}
                        initial={{ opacity: 0, marginRight: 30 }}
                        whileInView={{ opacity: 1, marginRight: 0 }}
                        viewport={{ amount: 0.8 }}
                    >
                        <Title message="VIEW BOYS RANKINGS" className="text-white font-20" sub={null} />
                    </motion.div>
                </div>
            </Link>

            <Link href='/rankings/g'>
                <div className="d-flex flex-row justify-content-center right pointer" >
                    <motion.div
                        className="align-self-end"
                        style={{ marginBottom: '5em' }}
                        initial={{ opacity: 0, marginLeft: 30 }}
                        whileInView={{ opacity: 1, marginLeft: 0 }}
                        viewport={{ amount: 0.8 }}
                    >
                        <Title message="VIEW GIRLS RANKINGS" className="text-white font-20" sub={null} />
                    </motion.div>
                </div>
            </Link>
        </div>
    </>
}
export default RankingsHome;

'use client';

import Link from "next/link";
import Title from "../globals/Title";
import { motion } from 'motion/react';

const InformationHome = () => {

    return (
        <div className="w3-content mx-auto py-4">
            <Title message="Information" sub={null} className={null} />
            <div className="d-flex flex-column mt-4">
                <div className="d-flex">
                    <Link href="/about" className="w-100" style={{ textDecoration: 'none' }}>
                        <motion.div
                            initial={{ opacity: 0, marginRight: 30 }}
                            whileInView={{ opacity: 1, marginRight: 0 }}
                            viewport={{ amount: 0.5, once: true }}
                            className="w-100 d-flex flex-row"
                            style={{ height: 226, margin: 1, background: 'url(/images/backgrounds/mud.jpg) no-repeat center top', backgroundSize: 'cover' }}>
                            <span className="text-white align-self-center w-100 text-center font-20">ABOUT US</span>
                        </motion.div>
                    </Link>
                    <div style={{ width: 4 }} />
                    <Link href="/information" className="w-100" style={{ textDecoration: 'none' }}>
                        <motion.div
                            initial={{ opacity: 0, marginLeft: 30 }}
                            whileInView={{ opacity: 1, marginLeft: 0 }}
                            viewport={{ amount: 0.5, once: true }}
                            className="w-100  d-flex flex-row" style={{ height: 226, margin: 1, backgroundColor: '#252525' }}>
                            <span className="text-white align-self-center w-100 text-center font-20">GENERAL<br />INFORMATION</span>
                        </motion.div>
                    </Link>
                </div>
                <div className="d-flex row-into-column">
                    <div className="d-flex w-100">
                        <Link href="/divisions" className="w-100" style={{ textDecoration: 'none' }}>
                            <motion.div
                                initial={{ opacity: 0, marginRight: 30 }}
                                whileInView={{ opacity: 1, marginRight: 0 }}
                                viewport={{ amount: 0.5, once: true }}
                                className="w-100  d-flex flex-row" style={{ height: 226, margin: 1, backgroundColor: '#d92229' }}>
                                <span className="text-white align-self-center w-100 text-center font-20">1ST | 2ND DIVISION</span>
                            </motion.div></Link>
                        <div style={{ width: 4 }} />
                        <Link href="/rules" className="w-100" style={{ textDecoration: 'none' }}>
                            <motion.div initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ amount: 0.5, once: true }}
                                className="w-100  d-flex flex-row" style={{ height: 226, margin: 1, background: 'url("/images/backgrounds/red-card.jpg") no-repeat center top', backgroundSize: 'cover' }}>
                                <span className="text-white align-self-center w-100 text-center font-20">RULES</span>
                            </motion.div></Link>
                    </div>
                    <div style={{ width: 4 }} />
                    <div className="d-flex w-100">
                        <Link href="/express" className="w-100" style={{ textDecoration: 'none' }}>
                            <motion.div initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ amount: 0.5, once: true }}
                                className="w-100 d-flex flex-row" style={{ height: 226, margin: 1, backgroundColor: '#d92229' }}>
                                <span className="text-white align-self-center w-100 text-center font-20">EXPRESS<br />CHECK IN</span>
                            </motion.div>
                        </Link>
                        <div style={{ width: 4 }} />
                        <Link href="/passport" className="w-100" style={{ textDecoration: 'none' }}>
                            <motion.div
                                initial={{ opacity: 0, marginLeft: 30 }}
                                whileInView={{ opacity: 1, marginLeft: 0 }}
                                viewport={{ amount: 0.5, once: true }}
                                className="w-100  d-flex flex-row" style={{ height: 226, margin: 1, background: 'url("/images/others/medals.jpg") no-repeat center bottom', backgroundSize: 'cover' }}>
                                <span className="text-white align-self-center w-100 text-center font-20">PASSPORT</span>
                            </motion.div>
                        </Link>
                    </div>
                </div>
                <div className="d-flex flex-row">
                    <a href="https://www.thesqwad.com" className="w-100" style={{ textDecoration: 'none' }}>
                        <motion.div initial={{ opacity: 0, marginRight: 30 }}
                            whileInView={{ opacity: 1, marginRight: 0 }}
                            viewport={{ amount: 0.5, once: true }}
                            className="w-100  d-flex flex-row" style={{ height: 226, margin: 1, backgroundColor: '#252525' }}>
                            <span className="text-white align-self-center w-100 text-center font-20">SQWAD TEAM APP</span>
                        </motion.div>
                    </a>
                    <div style={{ width: 4 }} />
                    <Link href="/weather" className="w-100" style={{ textDecoration: 'none' }}>
                        <motion.div initial={{ opacity: 0, marginLeft: 30 }}
                            whileInView={{ opacity: 1, marginLeft: 0 }}
                            viewport={{ amount: 0.5, once: true }}
                            className="w-100 d-flex flex-row" style={{
                                height: 226, margin: 1,
                                background: 'url("/images/others/storm-final.jpg") no-repeat center bottom', backgroundSize: 'cover'
                            }}>
                            <span className="text-white align-self-center w-100 text-center font-20">GUARANTEE &<br />WEATHER POLICY<br />PROCEDURES</span>
                        </motion.div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default InformationHome;

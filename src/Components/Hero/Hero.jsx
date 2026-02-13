"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="md:h-screen h-[80vh] flex flex-col border-b-2 border-primary/10 justify-center px-6 lg:px-24 relative overflow-hidden">
            {/* Background Decorative Glow */}
            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[130px] rounded-full" />
            <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-purple-600/10 blur-[110px] rounded-full" />

            <div className="z-10">
                {/* Animated Badge */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-mono tracking-widest mb-8 uppercase"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    Open for Collaborations
                </motion.div>

                {/* Main Name & Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-gray-500 text-lg md:text-2xl font-medium mb-2 tracking-tight">
                        I'm <span className="text-white">Abu Rayhan</span> —
                    </h1>
                    <h2 className="text-5xl md:text-6xl lg:text-[8.5rem] text-primary font-black leading-[0.85] tracking-tighter italic">
                        DIGITAL <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-blue-200 to-secondary">
                            CRAFTSMAN.
                        </span>
                    </h2>
                </motion.div>

                {/* Skills Sub-text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-10 text-gray-400 max-w-xl text-lg md:text-xl font-light leading-relaxed"
                >
                    একজন **Full-Stack Developer** যে React, Next.js এবং MongoDB দিয়ে ইন্টারঅ্যাক্টিভ এবং হাই-পারফরম্যান্স ওয়েব অ্যাপ্লিকেশন তৈরি করতে ভালোবাসে।
                </motion.p>

                {/* CTA & Socials */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 flex flex-wrap gap-6 items-center"
                >
                    <button className="group bg-white text-black md:px-10 px-6 md:py-4 py-2 rounded-2xl font-bold flex items-center gap-2 hover:bg-primary cursor-pointer hover:text-white transition-all duration-300">
                        আমার কাজ দেখুন <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
                    </button>

                    <div className="flex gap-5 border-l border-white/10 pl-6 items-center">
                        <Link href="https://github.com/rayhan309" target="_blank" className="text-gray-500 hover:text-blue-500 transition-colors"><Github size={24} /></Link>
                        <Link href="https://www.linkedin.com/in/abu-rayhan-undefined-2514b5390/"
                            target="_blank" className="text-gray-500 hover:text-blue-500 transition-colors"><Linkedin size={24} /></Link>
                        {/* <Link
                            href="mailto:ihaveawonderfull@gmail.com"
                            target="_blank"
                            className="text-gray-500 hover:text-blue-500 transition-colors duration-300"
                            title="ইমেইল করুন"
                        >
                            <Mail size={24} />
                        </Link> */}
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=ihaveawonderfull@email.com"
                            target="_blank"
                            className="text-gray-500 hover:text-blue-500 transition-colors duration-300"
                            title="ইমেইল করুন"
                        >
                            <Mail size={24} />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Side Decorative Text (Optional) */}
            <div className="absolute right-[-100px] bottom-72 rotate-90 hidden lg:block">
                <p className="text-[10rem] font-black text-white/[0.02] select-none tracking-tighter">
                    RAYHAN
                </p>
            </div>
        </section>
    );
}
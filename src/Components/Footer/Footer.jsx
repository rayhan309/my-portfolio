"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Linkedin, Github, Facebook, ArrowUpRight, Heart, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const Footer = () => {
    const footerRef = useRef(null);
    const textRef = useRef(null);
    const [time, setTime] = useState("");

    // Real-time Clock logic
    useEffect(() => {
        const updateClock = () => {
            setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
        };
        updateClock();
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, []);

    // GSAP Animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Big Watermark Animation
            gsap.from(".watermark", {
                y: 100,
                opacity: 0,
                duration: 2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 90%",
                }
            });

            // "LET'S TALK" Text reveal
            gsap.from(".footer-cta", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 85%",
                }
            });
        }, footerRef);
        return () => ctx.revert();
    }, []);

    const currentYear = new Date().getFullYear();

    return (
        <footer ref={footerRef} className="relative bg-white pt-32 pb-10 px-6 lg:px-24 overflow-hidden border-t border-slate-50">

            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-50/50 blur-[120px] rounded-full -mr-32 -mt-32 pointer-events-none" />

            <div className="container mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-16">

                    {/* Left: Big CTA Section */}
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 "
                        >
                            <div className="h-px w-8 bg-blue-600" />
                            <h2 className="text-blue-600 font-mono text-xs uppercase tracking-[0.4em] font-black">
                                Next Chapter
                            </h2>
                        </motion.div>

                        <div className="overflow-hidden mb-8">
                            <a
                                href="mailto:ihaveawonderfull@gmail.com"
                                className="footer-cta group relative inline-block text-5xl md:text-8xl font-black tracking-tighter text-slate-900 hover:text-blue-600 transition-colors duration-700 uppercase italic leading-none"
                            >
                                LET'S <br className="md:hidden" /> TALK.
                                <span className="absolute -bottom-2 left-0 w-0 h-2 bg-blue-600 group-hover:w-full transition-all duration-700" />
                            </a>
                        </div>

                        <p className="footer-cta text-slate-500 text-lg md:text-xl max-w-sm leading-relaxed font-medium italic">
                            আপনার কি কোনো দারুণ আইডিয়া আছে? চলুন সেটাকে কোডের মাধ্যমে বাস্তবে রূপ দেই।
                        </p>
                    </div>

                    {/* Right: Social Connections */}
                    <div className="flex flex-col gap-10 min-w-[240px]">
                        <div>
                            <h3 className="text-slate-400 font-black uppercase text-[10px] tracking-[0.3em] italic border-b border-slate-100 pb-2">Connect</h3>
                            <ul className="space-y-6">
                                {[
                                    { name: "LinkedIn", icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/abu-rayhan-undefined-2514b5390/" },
                                    { name: "GitHub", icon: <Github size={20} />, url: "https://github.com/rayhan309" },
                                    { name: "Facebook", icon: <Facebook size={20} />, url: "https://www.facebook.com/profile.php?id=100082830604559" },
                                    { name: "Whatsapp", icon: <FaWhatsapp size={20} />, url: "https://wa.me/8801621807642" }
                                ].map((social) => (
                                    <li key={social.name}>
                                        <motion.a
                                            href={social.url}
                                            whileHover={{ x: 10 }}
                                            target="_blank"
                                            className="flex items-center gap-4 text-slate-900 hover:text-blue-600 transition-all group font-bold uppercase italic tracking-tighter text-xl"
                                        >
                                            <span className="p-3 bg-slate-50 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                                                {social.icon}
                                            </span>
                                            <span className="text-[14px]">{social.name}</span>
                                            <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </motion.a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-32 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Brand Info */}
                    <div className="text-slate-400 font-mono text-[10px] uppercase tracking-widest">
                        Handcrafted by <span className="text-slate-900 font-black hover:text-blue-600 transition-colors cursor-help">Abu Rayhan</span>
                    </div>

                    {/* Status & Time */}
                    <div className="hidden lg:flex gap-12 text-[10px] text-slate-400 font-mono uppercase tracking-[0.2em]">
                        <div className="flex items-center gap-3">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            Available for projects
                        </div>
                        <div className="flex items-center gap-2">
                            Gopalganj, BD / {time}
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="flex items-center gap-2 text-slate-900 text-[10px] font-black uppercase tracking-widest">
                        © {currentYear} <Heart size={14} className="text-rose-500 fill-rose-500" /> All Rights Reserved.
                    </div>
                </div>
            </div>

            {/* Large Watermark Text */}
            <div className="absolute -bottom-10 left-0 right-0 select-none pointer-events-none opacity-[0.03] text-center overflow-hidden z-0">
                <h2 className="watermark text-[24vw] font-black leading-none text-slate-950 tracking-tighter italic">
                    RAYHAN
                </h2>
            </div>
        </footer>
    );
};

export default Footer;
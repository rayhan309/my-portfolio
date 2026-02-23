"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Github, Linkedin, Mail, Facebook, Zap, ArrowRight } from "lucide-react";
import { Button, IconButton, Tooltip } from "@mui/material";
import { useRouter } from "next/navigation";

export default function HeroSection() {
    const imageRef = useRef(null);
    const router = useRouter();

    // GSAP Floating Animation for Image
    useEffect(() => {
        gsap.to(imageRef.current, {
            y: -20,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
    }, []);

    return (
        <section className="relative min-h-screen w-full flex items-center bg-[#fdfdfd] overflow-hidden pt-20 pb-12">

            {/* Background Mesh Gradient */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-100/40 blur-[100px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[10%] w-[30vw] h-[30vw] bg-indigo-50/50 blur-[100px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 lg:px-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Content */}
                    <div className="flex flex-col items-start text-left space-y-8 order-2 lg:order-1">

                        {/* Status Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white shadow-sm border border-slate-100 px-5 py-2 rounded-full flex items-center gap-3 group"
                        >
                            <Zap size={14} className="text-yellow-500 fill-yellow-500" />
                            <span className="text-slate-500 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
                                Available for <span className="text-blue-600">Full-Stack</span> Roles
                            </span>
                        </motion.div>

                        <div className="space-y-4">
                            <motion.h1
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-blue-600 text-sm md:text-base font-black tracking-[0.4em] uppercase"
                            >
                                Abu Rayhan
                            </motion.h1>

                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-[clamp(2.5rem,6vw,5rem)] font-black text-slate-900 leading-[1] tracking-tighter uppercase italic"
                            >
                                Building <br />
                                <span className="text-transparent" style={{ WebkitTextStroke: "1.5px #2563eb" }}>
                                    Future Apps.
                                </span>
                            </motion.h2>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-500 max-w-lg text-lg md:text-xl font-medium leading-relaxed italic"
                        >
                            আমি একজন ফুল-স্ট্যাক ডেভেলপার। <span className="text-slate-900 font-bold underline decoration-blue-500/30">Next.js, Gatsby.js & React.js</span>-এর আধুনিক ফিচার এবং <span className="text-slate-900 font-bold underline decoration-blue-500/30">Backend Scalability</span> ব্যবহার করে জটিল আইডিয়াকে সহজ ডিজিটাল সলিউশনে রূপান্তর করি।
                        </motion.p>

                        {/* Action Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap items-center gap-6"
                        >
                            <Button
                                variant="contained"
                                onClick={() => window.location.replace("#works")}
                                endIcon={<ArrowRight size={18} />}
                                sx={{
                                    bgcolor: '#0f172a',
                                    color: 'white',
                                    px: 5,
                                    py: 2,
                                    borderRadius: '1rem',
                                    textTransform: 'uppercase',
                                    fontWeight: '900',
                                    fontStyle: 'italic',
                                    letterSpacing: '0.1em',
                                    boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.3)',
                                    '&:hover': { bgcolor: '#2563eb' }
                                }}
                            >
                                View My Work
                            </Button>

                            <div className="flex items-center gap-2 p-1.5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                <SocialIconButton Icon={Github} link="https://github.com/rayhan309" title="Github" />
                                <SocialIconButton Icon={Linkedin} link="https://www.linkedin.com/in/abu-rayhan-undefined-2514b5390/" title="LinkedIn" />
                                <SocialIconButton Icon={Facebook} link="https://www.facebook.com/profile.php?id=100082830604559" title="Facebook" />
                                <div className="w-[1px] h-6 bg-slate-200 mx-1" />
                                <SocialIconButton Icon={Mail} link="mailto:ihaveawonderfull@gmail.com" title="Email" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Image with Decorative Elements */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative flex justify-center items-center order-1 lg:order-2"
                    >
                        {/* Decorative Circle behind image */}
                        <div className="absolute w-[80%] h-[80%] border-[1px] border-dashed border-blue-200 rounded-full animate-[spin_20s_linear_infinite]" />

                        <div ref={imageRef} className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
                            {/* Glassmorphism Card on image */}
                            <div className="absolute -right-4 top-20 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl z-20 border border-white/50 hidden md:block">
                                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Experience</p>
                                <p className="text-xl font-black text-slate-900 leading-none">Creative Dev</p>
                            </div>

                            {/* Main Image Wrapper */}
                            <div className="w-full h-full rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl relative z-10 rotate-3 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="/logo.png" // এখানে আপনার ছবির পাথ দিন
                                    alt="Abu Rayhan"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Scroll Hint */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
            >
                <span className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em] rotate-90 mb-10">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent" />
            </motion.div>
        </section>
    );
}

function SocialIconButton({ Icon, link, title }) {
    return (
        <Tooltip title={title}>
            <IconButton
                href={link}
                target="_blank"
                sx={{
                    color: '#94a3b8',
                    transition: '0.3s',
                    '&:hover': { color: '#2563eb', transform: 'translateY(-3px)' }
                }}
            >
                <Icon size={18} />
            </IconButton>
        </Tooltip>
    );
}
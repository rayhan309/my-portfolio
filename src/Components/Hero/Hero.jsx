"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Facebook, Zap } from "lucide-react";
import { Button, IconButton, Tooltip, Box } from "@mui/material";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center bg-[#fdfdfd] overflow-hidden pt-20">

            {/* Background Mesh Gradient - Premium Look */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-100/40 blur-[100px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[30vw] h-[30vw] bg-purple-100/40 blur-[100px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center space-y-8">

                    {/* Floating Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white shadow-xl shadow-blue-500/5 border border-slate-100 px-6 py-2 rounded-full flex items-center gap-3 group cursor-default"
                    >
                        <Zap size={16} className="text-yellow-500 fill-yellow-500 group-hover:scale-125 transition-transform" />
                        <span className="text-slate-500 text-sm font-semibold tracking-wide uppercase">
                            Available for <span className="text-blue-600">Full-Stack</span> Roles
                        </span>
                    </motion.div>

                    {/* Main Title - Responsive sizing focus */}
                    <div className="space-y-4">
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-slate-400 text-lg md:text-xl font-medium tracking-[0.3em] uppercase"
                        >
                            Abu Rayhan
                        </motion.h1>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-5xl"
                        >
                            <h2 className="text-[clamp(2.5rem,10vw,8rem)] font-black text-slate-900 leading-[1.1] tracking-tighter">
                                BUILDING <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-700">
                                    FUTURE APPS.
                                </span>
                            </h2>
                        </motion.div>
                    </div>

                    {/* Description - Adjusted for readability */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-slate-500 max-w-2xl text-base md:text-xl font-normal leading-relaxed px-4"
                    >
                        আমি একজন ফুল-স্ট্যাক ডেভেলপার যে আপনার আইডিয়াকে বাস্তবে রূপান্তর করতে আধুনিক ওয়েব টেকনোলজি যেমন <span className="text-slate-900 font-bold">Next.js</span> এবং <span className="text-slate-900 font-bold">Node.js</span> ব্যবহার করে।
                    </motion.p>

                    {/* Action Buttons - Fully Responsive Grid/Flex */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
                    >
                        <Button
                            variant="contained"
                            size="large"
                            className="w-full sm:w-auto"
                            sx={{
                                bgcolor: '#1e293b',
                                color: 'white',
                                px: 6,
                                py: 2,
                                borderRadius: '100px',
                                textTransform: 'none',
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                boxShadow: '0 20px 40px -10px rgba(30, 41, 59, 0.3)',
                                '&:hover': {
                                    bgcolor: '#2563eb',
                                    transform: 'scale(1.05)',
                                }
                            }}
                        >
                            আমার পোর্টফোলিও
                        </Button>

                        <div className="flex items-center gap-3 p-2 bg-slate-50 rounded-full border border-slate-200 shadow-inner">
                            <SocialIconButton Icon={Github} link="https://github.com/rayhan309" title="Github" />
                            <SocialIconButton Icon={Linkedin} link="https://www.linkedin.com/in/abu-rayhan-undefined-2514b5390/" title="LinkedIn" />
                            <SocialIconButton Icon={Facebook} link="https://www.facebook.com/profile.php?id=100082830604559" title="Facebook" />
                            <div className="w-[1px] h-6 bg-slate-300 mx-1" />
                            <SocialIconButton Icon={Mail} link="mailto:email@example.com" title="Email" />
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Decorative Scroll Hint */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent" />
                <span className="text-[10px] text-slate-400 uppercase tracking-widest">Scroll Down</span>
            </motion.div>
        </section>
    );
}

// Reusable IconButton Component
function SocialIconButton({ Icon, link, title }) {
    return (
        <Tooltip title={title}>
            <IconButton
                href={link}
                target="_blank"
                sx={{
                    color: '#64748b',
                    '&:hover': { color: '#2563eb', bgcolor: 'white' }
                }}
            >
                <Icon size={20} />
            </IconButton>
        </Tooltip>
    );
}
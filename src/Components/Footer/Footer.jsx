"use client";
import { motion } from "framer-motion";
import { Linkedin, Github, Twitter, ArrowUpRight, Heart, FacebookIcon } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-[#F8FAFC] pt-40 pb-10 px-10 lg:px-4 overflow-hidden">

            {/* Top Border Line with Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">

                    {/* Big CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <h2 className="text-blue-600 font-mono text-sm mb-6 uppercase tracking-[0.3em] font-bold">
                            // Next Chapter
                        </h2>
                        <a
                            href="mailto:ihaveawonderfull@gmail.com"
                            className="group relative inline-block text-6xl md:text-8xl font-black tracking-tighter text-slate-900 hover:text-blue-600 transition-colors duration-500"
                        >
                            LET'S TALK.
                            <motion.span
                                className="absolute -bottom-2 left-0 w-0 h-2 bg-blue-600 group-hover:w-full transition-all duration-500 shadow-[0_4px_20px_rgba(37,99,235,0.3)]"
                            />
                        </a>
                        <p className="mt-8 text-slate-500 text-lg max-w-sm leading-relaxed">
                            আপনার কি কোনো দারুণ আইডিয়া আছে? চলুন সেটাকে কোডের মাধ্যমে বাস্তবে রূপ দেই।
                        </p>
                    </motion.div>

                    {/* Navigation & Social Links */}
                    <div className="flex flex-col gap-10 min-w-[200px]">
                        <div>
                            <h3 className="text-slate-900 font-bold mb-6 uppercase text-xs tracking-widest">Connect</h3>
                            <ul className="space-y-4">
                                {[
                                    { name: "LinkedIn", icon: <Linkedin size={18} />, url: "https://www.linkedin.com/in/abu-rayhan-undefined-2514b5390/" },
                                    { name: "GitHub", icon: <Github size={18} />, url: "https://github.com/rayhan309" },
                                    { name: "Facebook", icon: <FacebookIcon size={18} />, url: "https://www.facebook.com/profile.php?id=100082830604559" }
                                ].map((social) => (
                                    <li key={social.name}>
                                        <a
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 text-slate-400 hover:text-blue-600 transition-all group font-semibold"
                                        >
                                            <span className="p-2 bg-white rounded-lg border border-slate-100 shadow-sm group-hover:shadow-md transition-all">
                                                {social.icon}
                                            </span>
                                            {social.name}
                                            <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-32 pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-slate-400 font-mono text-xs uppercase tracking-tighter">
                        Designed & Developed by <span className="text-slate-900 font-black tracking-normal uppercase hover:text-blue-600 cursor-default transition-colors">Abu Rayhan</span>
                    </div>

                    {/* Time & Location Display */}
                    <div className="hidden lg:flex gap-10 text-[10px] text-slate-400 font-mono uppercase tracking-[0.2em]">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Dhaka, Gopalganj, Bangladesh
                        </div>
                        <div>Time: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} GMT+6</div>
                    </div>

                    <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                        © {currentYear} <Heart size={14} className="text-rose-500 fill-rose-500 animate-pulse" /> All Rights Reserved.
                    </div>
                </div>
            </div>

            {/* Large Watermark Text (Subtle for Light Mode) */}
            <div className="absolute -bottom-10 left-0 right-0 select-none pointer-events-none opacity-[0.03] text-center overflow-hidden">
                <h2 className="text-[22rem] font-black leading-none text-slate-900 tracking-tighter">
                    RAYHAN
                </h2>
            </div>
        </footer>
    );
};

export default Footer;
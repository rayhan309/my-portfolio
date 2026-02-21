"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Github, ExternalLink, Box, Zap } from "lucide-react";
import Link from "next/link";

// Individual Project Card Component
const ProjectCard = ({ item, index }) => {
    return (
        <motion.div
            className="flex-shrink-0 w-full lg:w-[500px] group "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
        >
            <div className="relative h-full lg:h-[550px] rounded-[2rem] lg:rounded-[3rem] bg-white border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 flex flex-col ">

                {/* Project Color Header */}
                <div className={`h-32  lg:h-40 bg-gradient-to-br ${item.color} flex items-center justify-center relative`}>
                    <Box size={40} className="text-slate-900/10 group-hover:scale-125 transition-transform duration-700 my-5" />
                </div>

                {/* Content */}
                <div className="p-6 lg:p-10 flex flex-col flex-grow">
                    <span className="text-blue-600 font-mono text-[10px] uppercase tracking-widest font-bold mb-3 px-3 py-1 bg-blue-50 w-fit rounded-full">
                        {item.category}
                    </span>

                    <h3 className="text-xl lg:text-3xl font-black mb-3 text-slate-900 tracking-tighter leading-tight">
                        {item.title}
                    </h3>

                    <p className="text-slate-500 text-xs lg:text-sm leading-relaxed mb-6 line-clamp-3">
                        {item.desc}
                    </p>

                    {/* Features Highlights */}
                    <div className="space-y-2 mb-6 flex-grow">
                        {item.feature?.slice(0, 3).map((f, i) => (
                            <div key={i} className="flex items-center gap-2 text-[10px] lg:text-[11px] text-slate-400 font-medium">
                                <Zap size={12} className="text-amber-500" /> {f}
                            </div>
                        ))}
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {item.tech?.map((t) => (
                            <span key={t} className="text-[9px] lg:text-[10px] font-bold text-slate-500 bg-slate-50 border border-slate-100 px-2 py-1 rounded-md">
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center justify-between pt-5 border-t border-slate-50">
                        <a href={item.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] lg:text-xs font-black text-slate-900 hover:text-blue-600 transition-colors tracking-widest uppercase">
                            Live Link <ExternalLink size={14} />
                        </a>
                        <a href={item.github} target="_blank" rel="noopener noreferrer" className="p-2 lg:p-3 bg-slate-900 text-white rounded-xl lg:rounded-2xl hover:bg-blue-600 transition-all">
                            <Github size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default function ProfessionalProjects({ allProjects }) {
    const scrollRef = useRef(null);

    // Desktop scroll animation logic
    const { scrollYProgress } = useScroll({ target: scrollRef });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);
    const springX = useSpring(x, { stiffness: 100, damping: 30 });

    return (
        <>
            {/* Mobile & Tablet Version (Vertical Stack) */}
            <section className="lg:hidden py-20 px-6 bg-[#F8FAFC] container mx-auto">
                <div className="mb-12 text-center">
                    <span className="text-blue-600 font-mono text-xs font-bold tracking-widest uppercase">// My Portfolio</span>
                    <h2 className="text-4xl font-black tracking-tighter text-slate-900 mt-2 italic">SELECTED WORKS</h2>
                </div>
                <div className="flex flex-col gap-8">
                    {allProjects.map((item, index) => (
                        <ProjectCard key={index} item={item} index={index} />
                    ))}
                </div>
            </section>

            {/* Desktop Version (Horizontal Scroll) */}
            <section ref={scrollRef} className="relative h-[500vh] hidden lg:block bg-[#F8FAFC]">
                <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

                    {/* Header */}
                    <div className="px-24 mb-12">
                        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} className="flex items-center gap-4 mb-2">
                            <div className="h-[2px] w-12 bg-blue-600" />
                            <span className="text-blue-600 font-mono tracking-widest uppercase text-xs font-bold">// Portfolio</span>
                        </motion.div>
                        <h2 className="text-8xl font-black tracking-tighter text-slate-900 leading-none">
                            SELECTED <span className="text-transparent" style={{ WebkitTextStroke: "1.5px #cbd5e1" }}>WORKS</span>
                        </h2>
                    </div>

                    {/* Scroller */}
                    <motion.div style={{ x: springX }} className="flex gap-12 px-24">
                        {allProjects.map((item, index) => (
                            <ProjectCard key={index} item={item} index={index} />
                        ))}

                        {/* View Archive Card */}
                        <div className="flex-shrink-0 w-[400px] h-[550px] flex items-center justify-center border-2 border-dashed border-slate-200 rounded-[3rem] bg-white/40 group hover:border-blue-600 transition-colors">
                            <div className="text-center">
                                <Link href="https://github.com/rayhan309" target="_blank" className="w-20 h-20 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-500">
                                    <ArrowRight size={32} className="-rotate-45" />
                                </Link>
                                <h4 className="text-xl font-black text-slate-900 italic">VIEW ARCHIVE</h4>
                            </div>
                        </div>
                    </motion.div>

                    {/* Progress Indicator */}
                    <div className="absolute bottom-12 left-24 right-24 h-[2px] bg-slate-200">
                        <motion.div style={{ scaleX: scrollYProgress }} className="h-full bg-blue-600 origin-left" />
                    </div>
                </div>
            </section>
        </>
    );
}
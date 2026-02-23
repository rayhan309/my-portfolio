"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import Link from "next/link";

/* ---------------- Motion Variants ---------------- */
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smooth reveal
            delay: i * 0.1,
        },
    }),
};

/* ---------------- Project Card ---------------- */
const ProjectCard = ({ item, index }) => {
    return (
        <motion.article
            custom={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="group relative bg-white border border-slate-100 rounded-2xl p-6 lg:p-10
                       transition-all duration-500 ease-out
                       hover:shadow-[0_40px_80px_-30px_rgba(15,23,42,0.15)]
                       hover:-translate-y-2 overflow-hidden"
        >
            {/* Background Decorative Gradient on Hover */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Header Section */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-blue-600 group-hover:w-12 transition-all duration-500" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600/70">
                        {item.category}
                    </span>
                </div>
                <span className="text-[12px] font-mono text-slate-300 font-bold italic">
                    //{index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>
            </div>

            {/* Title & Arrow */}
            <Link href={item.live} target="_blank" className="flex justify-between items-start gap-4 mb-5">
                <h3 className="text-3xl lg:text-4xl font-black tracking-tighter text-slate-900 leading-[0.9] uppercase italic group-hover:text-blue-600 transition-colors">
                    {item.title}
                </h3>
                <div className="p-3 rounded-full bg-slate-50 text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shrink-0">
                    <ArrowUpRight size={20} />
                </div>
            </Link>

            {/* Description */}
            <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-10 line-clamp-3 font-medium">
                {item.desc}
            </p>

            {/* Tech Stack - Stylish Pills */}
            <div className="flex flex-wrap gap-2 mb-12">
                {item.tech?.map((t) => (
                    <span
                        key={t}
                        className="text-[9px] font-black uppercase tracking-widest
                                   text-slate-400 border border-slate-100
                                   px-3 py-1.5 rounded-full group-hover:border-blue-100 group-hover:text-blue-500 transition-colors"
                    >
                        {t}
                    </span>
                ))}
            </div>

            {/* Footer Action Links */}
            <div className="flex items-center gap-8 pt-6 border-t border-slate-50">
                <Link
                    href={item.live}
                    target="_blank"
                    className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-900 flex items-center gap-2 group/link"
                >
                    Live Demo
                    <span className="w-4 h-4 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover/link:bg-blue-600 transition-colors">
                        <ExternalLink size={8} />
                    </span>
                </Link>

                <Link
                    href={item.github}
                    target="_blank"
                    className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-slate-900 transition-colors flex items-center gap-2"
                >
                    Source Code <Github size={14} />
                </Link>
            </div>
        </motion.article>
    );
};

/* ---------------- Main Section ---------------- */
export default function ScrollProject({ allProjects }) {
    return (
        <section className="bg-white py-32 px-6 lg:px-20 relative overflow-hidden">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            <div className="container mx-auto relative z-10">
                {/* Section Header */}
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8" id="works">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 60 }}
                            className="h-1 bg-blue-600 mb-6"
                        />
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-7xl font-black uppercase"
                        >
                            <span className="text-slate-900">my</span> <span className="italic text-transparent" style={{ WebkitTextStroke: "1.5px #2563eb" }}> Works.</span>
                        </motion.h2>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-slate-400 font-mono text-xs uppercase tracking-[0.3em] max-w-[200px] leading-loose"
                    >
                        A selection of projects that define my coding journey.
                    </motion.p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {allProjects.map((item, index) => (
                        <ProjectCard
                            key={index}
                            item={item}
                            index={index}
                        />
                    ))}

                    {/* Enhanced Archive Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="flex flex-col justify-between bg-slate-900 rounded-2xl p-10 lg:p-12 transition-transform hover:scale-[1.02] duration-500"
                    >
                        <div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-slate-500 mb-8">
                            <Github size={24} />
                        </div>

                        <div>
                            <h4 className="text-3xl font-black tracking-tight text-white mb-4 uppercase italic">
                                More on <br /> GitHub
                            </h4>
                            <p className="text-slate-400 text-sm leading-relaxed mb-10 max-w-[240px]">
                                Explore my open-source experiments, scripts, and daily code snippets.
                            </p>
                        </div>

                        <Link
                            href="https://github.com/rayhan309"
                            target="_blank"
                            className="group flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-white"
                        >
                            Explore Archive
                            <span className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center group-hover:translate-x-2 transition-transform">
                                <ArrowUpRight size={16} />
                            </span>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
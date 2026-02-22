"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

/* ---------------- Motion Variants ---------------- */
const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            ease: "easeOut",
            delay: i * 0.06,
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
            viewport={{ once: true, margin: "-60px" }}
            className="group relative bg-white border border-slate-200/70 rounded-xl p-7 lg:p-9
                       transition-all duration-300
                       hover:border-slate-900
                       hover:shadow-[0_20px_40px_-20px_rgba(15,23,42,0.25)]"
        >
            {/* Meta */}
            <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
                    {item.category}
                </span>
                <span className="text-[10px] font-mono text-slate-300">
                    0{index + 1}
                </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl lg:text-[28px] font-black tracking-tight text-slate-900 leading-tight mb-4">
                {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm leading-relaxed text-slate-500 mb-8 line-clamp-4">
                {item.desc}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-10">
                {item.tech?.map((t) => (
                    <span
                        key={t}
                        className="text-[10px] font-mono uppercase tracking-wide
                                   text-slate-500 bg-slate-50 border border-slate-200/70
                                   px-2.5 py-1 rounded-md"
                    >
                        {t}
                    </span>
                ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-5 border-t border-slate-200/70">
                <motion.a
                    href={item.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 3 }}
                    className="text-xs font-mono uppercase tracking-widest text-slate-900 flex items-center gap-1"
                >
                    Live <ExternalLink size={13} />
                </motion.a>

                <motion.a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="text-xs font-mono uppercase tracking-widest text-slate-400 hover:text-slate-900"
                >
                    GitHub
                </motion.a>
            </div>
        </motion.article>
    );
};

/* ---------------- Main Section ---------------- */
export default function ScrollProject({ allProjects }) {
    return (
        <section className="bg-[#FAFAFA] py-28 px-4">
            {/* Header */}
            <div className="container mx-auto mb-24">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="block text-xs font-mono uppercase tracking-widest text-slate-400 mb-4"
                >
                    Selected Work
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl lg:text-7xl font-black tracking-tight text-slate-900"
                >
                    Projects
                </motion.h2>
            </div>

            {/* Projects Grid */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {allProjects.map((item, index) => (
                    <ProjectCard
                        key={index}
                        item={item}
                        index={index}
                    />
                ))}

                {/* Archive Card */}
                <motion.div
                    whileHover={{ y: -4 }}
                    className="flex flex-col justify-between border border-dashed border-slate-300/80
                               rounded-xl p-9 hover:border-slate-900 transition-colors"
                >
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                        Archive
                    </span>

                    <div>
                        <h4 className="text-2xl font-black tracking-tight mb-2">
                            View All Projects
                        </h4>
                        <p className="text-sm text-slate-500">
                            Open-source work & experiments
                        </p>
                    </div>

                    <Link
                        href="https://github.com/rayhan309"
                        target="_blank"
                        className="text-xs font-mono uppercase tracking-widest text-slate-900 hover:underline"
                    >
                        Open GitHub →
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
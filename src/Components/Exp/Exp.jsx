"use client";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const experiences = [
    {
        company: "FlexshipIT",
        role: "Full-Stack Developer",
        location: "Gopalganj, Bangladesh",
        duration: "2025 - Present",
        description: "FlexshipIT-te ami full-stack developer hishebe scalable web applications ebong client-focused solutions toiri korchi.",
        skills: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
        highlights: [
            "Modern MERN stack bebohar kore full-cycle web development.",
            "Scalable API architecture ebong database design optimization.",
            "User experience (UX) improve korar jonno high-performance frontend components toiri."
        ]
    }
];

export default function Experience() {
    return (
        <section className="py-24 px-6 lg:px-24 bg-[#F8FAFC]">
            <div className="container mx-auto">
                {/* Header */}
                <div className="mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-blue-600 font-mono text-sm tracking-[0.3em] uppercase font-bold"
                    >
            // Career Path
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black tracking-tighter mt-4 italic text-slate-900"
                    >
                        PROFESSIONAL <span className="text-slate-200">EXPERIENCE.</span>
                    </motion.h2 >
                </div>

                {/* Experience List */}
                <div className="max-w-4xl">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="relative pl-8 md:pl-12 border-l-2 border-slate-200 pb-12 group"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-blue-600 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_15px_rgba(37,99,235,0.4)]" />

                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                <div>
                                    <h3 className="text-3xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                        {exp.role}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-4 mt-2 text-slate-500 font-medium">
                                        <span className="flex items-center gap-1.5 text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full text-sm">
                                            <Briefcase size={14} /> {exp.company}
                                        </span>
                                        <span className="flex items-center gap-1.5 text-sm">
                                            <MapPin size={14} /> {exp.location}
                                        </span>
                                        <span className="flex items-center gap-1.5 text-sm">
                                            <Calendar size={14} /> {exp.duration}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-blue-900/5 group-hover:border-blue-100 transition-all duration-500">
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    {exp.description}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {exp.highlights.map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <CheckCircle2 size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                                            <p className="text-slate-500 text-sm italic">{item}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Tech Badges */}
                                <div className="mt-8 flex flex-wrap gap-2">
                                    {exp.skills.map((skill) => (
                                        <span key={skill} className="px-3 py-1 bg-slate-50 text-slate-600 text-[10px] font-mono rounded-md border border-slate-100">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, CheckCircle2, Terminal, Zap, Activity, Database, Globe } from "lucide-react";

const experiences = [
    {
        company: "FlexshipIT",
        role: "Full-Stack Developer",
        location: "Gopalganj, Bangladesh",
        duration: "2025 - Present",
        description: "FlexshipIT-তে আমি একজন ফুল-স্ট্যাক ডেভেলপার হিসেবে কাজ করছি, যেখানে স্কেলেবল ওয়েব অ্যাপ্লিকেশন এবং ইন্টারঅ্যাকটিভ ক্লায়েন্ট সল্যুশন তৈরি করছি। এখানে রিয়েল-টাইম কমিউনিকেশন ও জটিল অ্যানিমেশনকে বিশেষ গুরুত্ব দেওয়া হয়।",
        // Updated Stack
        skills: ["Next.js", "React", "Gatsby", "Node.js", "Express.js", "WebSocket", "Wordpress", "Socket.io", "MongoDB", "Tailwind", "MUI", "Framer Motion", "GSAP", "Lottie"],
        highlights: [
            "Next.js এবং React ব্যবহার করে উচ্চ-ক্ষমতাসম্পন্ন ক্লায়েন্ট-সাইড ও সার্ভার-সাইড অ্যাপ্লিকেশন ডেভেলপ করছি।",
            "MongoDB Atlas ব্যবহার করে ডাইনামিক ডাটা ম্যানেজমেন্ট এবং অপ্টিমাইজড স্কিমা ডিজাইন করছি।",
            "Gatsby ব্যবহার করে অত্যন্ত দ্রুতগতির স্ট্যাটিক সাইট এবং SEO-ফ্রেন্ডলি ওয়েব সল্যুশন তৈরি করছি।",
            "Socket.io ব্যবহার করে রিয়েল-টাইম ফিচার এবং GSAP/Framer Motion দিয়ে প্রিমিয়াম UI অ্যানিমেশন নিশ্চিত করছি।"
        ]
    }
];

export default function Experience() {
    return (
        <section className="py-32 px-6 lg:px-24 bg-[#F8FAFC] relative">
            <div className="container mx-auto">
                {/* Header */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3 mb-4"
                    >
                        <span className="p-2 bg-blue-600 rounded-lg text-white">
                            <Activity size={16} className="animate-pulse" />
                        </span>
                        <span className="text-blue-600 font-mono text-xs tracking-[0.3em] uppercase font-bold">
                            // Expertise & Journey
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[0.9]"
                    >
                        TECH <span className="text-transparent" style={{ WebkitTextStroke: "1.5px #cbd5e1" }}>EVOLUTION.</span>
                    </motion.h2>
                </div>

                {/* Experience Card */}
                <div className="max-w-6xl">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="relative pl-10 md:pl-16 border-l-2 border-slate-200 pb-16 group"
                        >
                            {/* Glow Node */}
                            <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-white border-4 border-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.4)] z-10" />

                            <div className="flex flex-col gap-8">
                                <div>
                                    <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
                                        {exp.role}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-6 text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em]">
                                        <span className="flex items-center gap-2 text-blue-600 px-3 py-1 bg-blue-50 rounded-lg">
                                            <Terminal size={14} /> {exp.company}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <MapPin size={14} /> {exp.location}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <Globe size={14} className="text-emerald-500" /> {exp.duration}
                                        </span>
                                    </div>
                                </div>

                                {/* Main Experience Card */}
                                <div className="bg-white p-8 md:p-12 rounded-[3.5rem] border border-slate-100 shadow-2xl shadow-slate-200/40 relative group/card">
                                    <p className="text-slate-600 text-lg leading-relaxed mb-10 font-medium border-l-4 border-blue-600 pl-6 italic">
                                        {exp.description}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {exp.highlights.map((item, i) => (
                                            <div key={i} className="flex items-start gap-4 p-4 rounded-3xl hover:bg-blue-50/50 transition-colors duration-300">
                                                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center border border-slate-100">
                                                    <CheckCircle2 size={16} className="text-blue-600" />
                                                </div>
                                                <p className="text-slate-500 text-sm font-semibold leading-relaxed">{item}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Tech Stack - Power Grid */}
                                    <div className="mt-12 pt-10 border-t border-slate-100">
                                        <div className="flex items-center gap-2 mb-6">
                                            <Database size={16} className="text-slate-400" />
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Core Technologies</p>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-5 py-2 bg-slate-50 text-slate-800 text-[11px] font-bold rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-900 hover:text-white transition-all duration-300 cursor-default"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
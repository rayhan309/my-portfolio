"use client";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, CheckCircle2, Terminal, Zap, Activity, Database, Globe, Layers } from "lucide-react";

const experiences = [
    {
        company: "FlexshipIT",
        role: "Full-Stack Developer",
        location: "Gopalganj, Bangladesh",
        duration: "2025 - Present",
        description: "FlexshipIT-তে আমি একজন ফুল-স্ট্যাক ডেভেলপার হিসেবে স্কেলেবল ওয়েব অ্যাপ্লিকেশন এবং ইন্টারঅ্যাকটিভ ক্লায়েন্ট সল্যুশন তৈরি করছি। রিয়েল-টাইম কমিউনিকেশন ও জটিল অ্যানিমেশন আমার কাজের প্রধান কেন্দ্রবিন্দু।",
        skills: ["Next.js", "React", "Gatsby", "Node.js", "Express.js", "WebSocket", "Socket.io", "MongoDB", "MUI", "Shadcn UI", "Tailwind", "GSAP", "Framer Motion",],
        highlights: [
            "উচ্চ-ক্ষমতাসম্পন্ন ক্লায়েন্ট-সাইড ও সার্ভার-সাইড আর্কিটেকচার ডেভেলপমেন্ট।",
            "MongoDB Atlas ব্যবহার করে অপ্টিমাইজড স্কিমা ও ডাটা ম্যানেজমেন্ট।",
            "Socket.io এর মাধ্যমে রিয়েল-টাইম ফিচার ইমপ্লিমেন্টেশন।",
            "GSAP এবং Framer Motion দিয়ে প্রিমিয়াম UI ইন্টারঅ্যাকশন নিশ্চিত করা।"
        ]
    }
];

export default function Experience() {
    return (
        <section className="py-24 px-6 lg:px-24 bg-[#fdfdfd] relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-50/50 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto">
                {/* --- Section Header --- */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-600 text-white mb-6"
                    >
                        <Activity size={14} className="animate-pulse" />
                        <span className="text-[10px] font-mono tracking-[0.2em] uppercase font-bold">Expertise & Journey</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[0.8] uppercase"
                    >
                        Work <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Experience.</span>
                    </motion.h2>
                </div>

                {/* --- Timeline Layout --- */}
                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                        >
                            {/* Left Side: Meta Info (4 Columns) */}
                            <div className="lg:col-span-4 space-y-4">
                                <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm">
                                    <h3 className="text-2xl font-black text-slate-900 leading-tight mb-2 uppercase italic tracking-tight">
                                        {exp.role}
                                    </h3>
                                    <div className="space-y-3 mt-6">
                                        <div className="flex items-center gap-3 text-blue-600 font-bold text-xs uppercase tracking-widest">
                                            <Terminal size={16} /> {exp.company}
                                        </div>
                                        <div className="flex items-center gap-3 text-slate-400 text-xs font-semibold">
                                            <MapPin size={16} /> {exp.location}
                                        </div>
                                        <div className="flex items-center gap-3 text-slate-400 text-xs font-semibold">
                                            <Globe size={16} className="text-emerald-500" /> {exp.duration}
                                        </div>
                                    </div>
                                </div>

                                {/* Quick Stats/Status */}
                                <div className="px-6 py-4 rounded-2xl bg-slate-900 text-white flex items-center justify-between">
                                    <span className="text-[10px] font-mono uppercase tracking-widest opacity-60">Status</span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" /> Active Role
                                    </span>
                                </div>
                            </div>

                            {/* Right Side: Detailed Card (8 Columns) */}
                            <div className="lg:col-span-8">
                                <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-blue-900/5 relative overflow-hidden group">
                                    {/* Abstract Decoration */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-[100px] -z-0 transition-transform group-hover:scale-110" />

                                    <div className="relative z-10">
                                        <p className="text-slate-600 text-lg leading-relaxed mb-10 font-light border-l-4 border-blue-600 pl-6">
                                            {exp.description}
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                            {exp.highlights.map((item, i) => (
                                                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50/50 hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-slate-100">
                                                    <CheckCircle2 size={18} className="text-blue-600 mt-1 shrink-0" />
                                                    <p className="text-slate-600 text-sm font-medium leading-snug">{item}</p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Tech Stack Grid */}
                                        <div className="pt-8 border-t border-slate-100">
                                            <div className="flex items-center gap-2 mb-6">
                                                <Layers size={16} className="text-blue-500" />
                                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Technology Toolkit</span>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.skills.map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="px-4 py-1.5 cursor-pointer bg-white text-slate-700 text-[10px] font-bold rounded-lg border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-all cursor-default uppercase tracking-wider shadow-sm"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
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
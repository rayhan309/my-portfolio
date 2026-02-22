"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code2, Rocket, Heart, Coffee, Terminal, Sparkles } from "lucide-react";

const milestones = [
  {
    year: "2025",
    title: "The Awakening",
    desc: "২০২৫ সালে কোডিংয়ের অফুরন্ত সমুদ্রে আমার যাত্রা শুরু। প্রথম কোড যখন ব্রাউজারে সফলভাবে কাজ করলো, সেই মুহূর্তটাই আমার জীবনের মোড় ঘুরিয়ে দেয়।",
    icon: <Terminal size={20} />,
    color: "blue",
  },
  {
    year: "Early 2026",
    title: "Full-Stack Evolution",
    desc: "অদম্য কৌতূহল থেকে আমি React, Node.js এবং MongoDB-তে দক্ষতা অর্জন করি। ডেটাবেস থেকে ইন্টারফেস—সবকিছুই আমার নিয়ন্ত্রণে আসতে থাকে।",
    icon: <Code2 size={20} />,
    color: "purple",
  },
  {
    year: "Present",
    title: "Interactive Architect",
    desc: "বর্তমানে আমি Next.js এবং আধুনিক অ্যানিমেশন লাইব্রেরি ব্যবহার করে এমন ডিজিটাল অভিজ্ঞতা তৈরি করছি যা ইউজারকে মুগ্ধ করে।",
    icon: <Rocket size={20} />,
    color: "emerald",
  },
];

export default function AboutStory() {
  return (
    <section id="about" className="py-24 px-6 lg:px-24 relative bg-[#fdfdfd] overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-50/50 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto">
        {/* --- Header Section --- */}
        <div className="flex flex-col gap-4 mb-20 border-l-4 border-blue-600 pl-6 md:pl-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-blue-600 font-mono text-sm tracking-widest uppercase font-bold"
          >
            <Sparkles size={16} /> My Narrative
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black tracking-tighter text-slate-900 leading-none uppercase"
          >
            Beyond the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 italic">
              Pixels & Logic.
            </span>
          </motion.h3>
        </div>

        {/* --- Main Content Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Side: Bio Narrative (5 Columns) */}
          <div className="lg:col-span-5 space-y-8">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-slate-500 leading-relaxed font-light"
            >
              "কোডিং আমার কাছে শুধু কাজ নয়, এটি একটি <span className="text-slate-900 font-medium italic">ক্রাফটsmanship</span>—যেখানে প্রতিটা সেমিকোলন একটি বড় পরিবর্তনের অংশ।"
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white border border-slate-100 shadow-2xl shadow-blue-900/5 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                <Terminal size={80} />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-slate-900">আমি কে?</h4>
              <p className="text-slate-600 leading-relaxed text-lg">
                আমি আবু রায়হান, একজন প্যাশনেট ফুল-স্ট্যাক ডেভেলপার। আমি জটিল টেকনিক্যাল সমস্যাগুলোকে সহজ এবং সুন্দর ডিজিটাল সমাধানে রূপান্তর করতে পছন্দ করি। যখন আমি কোড করি না, তখন আমাকে কফি মগ হাতে নতুন কোনো টেকনোলজি নিয়ে রিসার্চ করতে দেখা যায়।
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
                  <Coffee size={14} className="text-amber-600" /> Espresso Addict
                </span>
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
                  <Heart size={14} className="text-rose-500" /> UX Focused
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Modern Interactive Timeline (7 Columns) */}
          <div className="lg:col-span-7 pl-0 md:pl-10">
            <div className="space-y-12 relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 w-[2px] h-full bg-slate-100 hidden md:block" />

              {milestones.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative flex flex-col md:flex-row gap-8 group"
                >
                  {/* Icon Node */}
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-white border-2 border-slate-50 shadow-lg flex items-center justify-center z-10 group-hover:scale-110 group-hover:border-blue-500 transition-all duration-500 text-slate-700 group-hover:text-blue-600">
                    {item.icon}
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-blue-600 font-mono font-bold text-sm tracking-widest">{item.year}</span>
                      <div className="h-[1px] w-8 bg-blue-100" />
                    </div>
                    <h4 className="text-2xl font-black text-slate-900 group-hover:translate-x-2 transition-transform duration-300 uppercase italic tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
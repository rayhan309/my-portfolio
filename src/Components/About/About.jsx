"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code2, Rocket, Heart, Coffee, Terminal } from "lucide-react";

const milestones = [
  {
    year: "2025",
    title: "The Beginning",
    desc: "২০২৫ সালে কোডিংয়ের সমুদ্রে যাত্রা শুরু। প্রথম যখন ব্রাউজারে নিজের লেখা কোডটি জীবন্ত হতে দেখলাম, তখনই বুঝেছিলাম এটিই আমার গন্তব্য।",
    icon: <Terminal className="text-blue-500" />,
  },
  {
    year: "Early 2026",
    title: "MERN Stack Mastery",
    desc: "খুব অল্প সময়েই আমি React, Node.js এবং MongoDB ব্যবহার করে ফুল-স্ট্যাক অ্যাপ্লিকেশন তৈরিতে দক্ষ হয়ে উঠি।",
    icon: <Code2 className="text-purple-500" />,
  },
  {
    year: "Present",
    title: "Abu Rayhan - Interactive Developer",
    desc: "বর্তমানে আমি Next.js এবং Framer Motion ব্যবহার করে এমন ওয়েব অ্যাপ তৈরি করছি যা একইসাথে পাওয়ারফুল এবং দৃষ্টিনন্দন।",
    icon: <Rocket className="text-green-500" />,
  },
];

export default function AboutStory() {
  return (
    <section id="about" className="py-24 bg-[#050505] px-6 lg:px-24 relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4">// My Journey</h2>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter italic uppercase">
              Beyond the <span className="text-white/20">Pixels.</span>
            </h3>
          </div>
          <div className="text-gray-500 font-mono text-xs uppercase hidden md:block tracking-widest leading-loose">
            Abu Rayhan <br /> Based in Bangladesh
          </div>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Side: Bio */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <p className="text-xl text-gray-300 leading-relaxed font-light italic">
              "আমি বিশ্বাস করি কোড শুধুমাত্র মেশিনকে ইনস্ট্রাকশন দেওয়া নয়, এটি একটি শিল্প যার মাধ্যমে মানুষের সমস্যার সমাধান করা সম্ভব।"
            </p>
            <div className="p-8 rounded-[2.5rem] bg-[#0c0c0c] border border-white/5 relative overflow-hidden group">
               <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
               <h4 className="text-2xl font-bold mb-4">কে আমি?</h4>
               <p className="text-gray-400 leading-relaxed">
                আমি আবু রায়হান, একজন ফুল-স্ট্যাক ডেভেলপার যে ক্লিন কোড এবং অসাধারণ ইউজার এক্সপেরিয়েন্সের মিশেল ঘটাতে পছন্দ করে। কোডিংয়ের বাইরে আমি নতুন টেকনোলজি নিয়ে রিসার্চ করতে এবং কফি হাতে মিউজিক শুনতে ভালোবাসি। 
               </p>
               <div className="flex gap-4 mt-8">
                  <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                    <Coffee size={14} className="text-orange-400" /> Coffee Lover
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                    <Heart size={14} className="text-red-500" /> Detail Oriented
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Right Side: Timeline Milestones */}
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-500">
                    {milestone.icon}
                  </div>
                  {index !== milestones.length - 1 && (
                    <div className="w-[1px] h-24 bg-gradient-to-b from-white/10 to-transparent mt-2" />
                  )}
                </div>
                <div className="pb-10">
                  <span className="text-blue-500 font-mono text-sm font-bold">{milestone.year}</span>
                  <h4 className="text-xl font-bold text-white mt-1 group-hover:text-blue-400 transition-colors">{milestone.title}</h4>
                  <p className="text-gray-500 text-sm mt-3 leading-relaxed max-w-sm">
                    {milestone.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Layers, ChevronDown, ChevronUp } from "lucide-react";

const allProjects = [
  // প্রথম ৩টি প্রজেক্ট (সবসময় দেখা যাবে)
  {
    title: "Eco-Commerce OS",
    category: "Full-Stack Development",
    desc: "হাই-পারফরম্যান্স ই-কমার্স প্ল্যাটফর্ম যেখানে Real-time Inventory এবং Stripe পেমেন্ট গেটওয়ে আছে।",
    tech: ["Next.js", "MongoDB", "Stripe"],
    live: "#",
    github: "#",
    color: "from-blue-600/20 to-cyan-500/20",
  },
  {
    title: "Motion Dashboard",
    category: "Animated SaaS UI",
    desc: "জটিল ডেটা ভিজ্যুয়ালাইজেশনের জন্য একটি অ্যানিমেটেড ড্যাশবোর্ড। এতে Framer Motion ব্যবহার করা হয়েছে।",
    tech: ["React", "Framer Motion", "Recharts"],
    live: "#",
    github: "#",
    color: "from-purple-600/20 to-pink-500/20",
  },
  {
    title: "TaskFlow Pro",
    category: "Productivity Tool",
    desc: "টিম কোলাবোরেশনের জন্য রিয়েল-টাইম আপডেটসহ একটি ড্র্যাগ-এন্ড-ড্রপ টাস্ক ম্যানেজমেন্ট সিস্টেম।",
    tech: ["Next.js", "Socket.io", "Prisma"],
    live: "#",
    github: "#",
    color: "from-green-600/20 to-emerald-500/20",
  },
  // হিডেন প্রজেক্টস (বাটনে ক্লিক করলে দেখা যাবে)
  {
    title: "AI Image Generator",
    category: "AI Integration",
    desc: "OpenAI API ব্যবহার করে টেক্সট থেকে ইমেজ তৈরির একটি ডাইনামিক ওয়েব অ্যাপ্লিকেশন।",
    tech: ["Next.js", "OpenAI", "Cloudinary"],
    live: "#",
    github: "#",
    color: "from-orange-600/20 to-red-500/20",
  },
  {
    title: "Crypto Portfolio",
    category: "Web3/Fintech",
    desc: "ক্রিপ্টোকারেন্সি পোর্টফোলিও ট্র্যাকার যা লাইভ মার্কেট ডেটা এবং চার্ট প্রদর্শন করে।",
    tech: ["React", "Tailwind", "Coingecko API"],
    live: "#",
    github: "#",
    color: "from-yellow-600/20 to-amber-500/20",
  }
];

export default function ProjectSection() {
  const [showAll, setShowAll] = useState(false);

  // প্রথম ৩টি প্রজেক্ট সবসময় দেখাবে, বাকিগুলো লজিক অনুযায়ী
  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 3);

  return (
    <section className="py-32 px-6 lg:px-24">
      <div className="container mx-auto">
        
        {/* Header */}
        <div className="mb-20">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-blue-500 font-mono text-sm tracking-[0.3em] uppercase underline decoration-2 underline-offset-8 decoration-blue-500/50">// Selected Works</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-black tracking-tighter mt-6 italic uppercase">CRAFTED WITH <span className="text-white/20">PRECISION.</span></motion.h2>
        </div>

        {/* Projects Grid with Animation */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                whileHover={{ y: -10 }}
                className="group relative flex flex-col h-full rounded-[2.5rem] bg-[#0c0c0c] border border-white/5 overflow-hidden transition-all hover:border-blue-500/30"
              >
                {/* Visual Header */}
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center opacity-40 group-hover:opacity-60 transition-opacity`}>
                  <Layers size={60} className="text-white opacity-20 group-hover:scale-110 transition-transform duration-500" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-blue-500 font-mono text-[10px] uppercase tracking-widest mb-2">{project.category}</span>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{project.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] font-mono text-gray-400 border border-white/5 bg-white/[0.02] px-2 py-1 rounded">#{t}</span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <a href={project.live} className="flex items-center gap-2 text-xs font-bold hover:text-blue-400 transition-colors tracking-widest">LIVE <ExternalLink size={14} /></a>
                    <a href={project.github} className="p-2 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all"><Github size={18} /></a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More / Show Less Button */}
        <div className="mt-20 text-center">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="px-10 py-4 rounded-full border border-white/10 hover:border-blue-500 text-gray-400 hover:text-white transition-all font-bold tracking-widest text-xs uppercase flex items-center gap-3 mx-auto group shadow-lg"
          >
            {showAll ? (
              <>Show Less <ChevronUp size={16} className="group-hover:-translate-y-1 transition-transform" /></>
            ) : (
              <>See all experiments <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" /></>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
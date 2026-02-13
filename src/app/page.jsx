"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Github, Linkedin, Twitter, ExternalLink, Layers, Zap, ArrowUpRight, Heart, ArrowRight } from "lucide-react";
// ... (অন্যান্য ইমপোর্ট আগের মতোই থাকবে)


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
  },
  {}
];

export default function FixedPortfolio() {
  const scrollRef = useRef(null);
  const currentYear = new Date().getFullYear();

  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  // Smooth Scroll Physics
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  const springX = useSpring(x, { stiffness: 100, damping: 20 });

  // Background color interpolation for a "Liquid" feel
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#000000", "#050a15", "#000000"]
  );

  return (
    <motion.div style={{ backgroundColor: bgColor }} className="text-primary transition-colors duration-700">

      {/* ... Hero, About, Process Sections ... */}

      {/* --- Unique Horizontal Scroll Section --- */}
      <section ref={scrollRef} className="relative h-[400vh]">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

          {/* Section Header with Reveal Animation */}
          <div className="px-6 lg:px-24 mb-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <div className="h-[1px] w-12 bg-blue-500" />
              <span className="text-blue-500 font-mono tracking-widest uppercase text-sm">Portfolio</span>
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mt-2">
              SELECTED <span className="text-transparent stroke-text">WORKS</span>
            </h2>
          </div>

          <motion.div style={{ x: springX }} className="flex gap-12 px-6 lg:px-24">
            {allProjects.map((item, index) => (
              <ProjectCard key={index} item={item} index={index} />
            ))}

            {/* Final "Let's Work" Card */}
            <div className="flex-shrink-0 w-[400px] h-[500px] flex items-center justify-center border-2 border-dashed border-white/10 rounded-[2.5rem] group hover:border-blue-500/50 transition-colors">
              <button className="flex flex-col items-center gap-4 group">
                <div className="p-6 bg-blue-600 rounded-full group-hover:scale-110 transition-transform">
                  <ArrowRight size={40} className="-rotate-45" />
                </div>
                <span className="text-2xl font-bold">View All Projects</span>
              </button>
            </div>
          </motion.div>

          {/* Progress Bar at Bottom */}
          <div className="absolute bottom-12 left-6 lg:left-24 right-6 lg:right-24 h-[2px] bg-white/5">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="h-full bg-blue-600 origin-left"
            />
          </div>
        </div>
      </section>

      {/* ... Rest of the Sections (Services, Contact, Footer) ... */}

      {/* Custom Global CSS for Stroke Text */}
      <style jsx global>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.3);
        }
      `}</style>
    </motion.div>
  );
}

// Separate Component for cleaner code
const ProjectCard = ({ item, index }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="flex-shrink-0 w-[350px] md:w-[650px] h-[450px] md:h-[550px] rounded-[3rem] bg-[#0A0A0A] border border-white/5 p-10 flex flex-col justify-between relative group overflow-hidden"
    >
      {/* Background Tech Text Overlay (Unique Touch) */}
      <div className="absolute -right-10 -top-10 text-[10rem] font-black text-white/[0.02] select-none pointer-events-none group-hover:text-blue-500/[0.05] transition-colors">
        0{index + 1}
      </div>

      <div className="z-10">
        <div className="flex justify-between items-start">
          <span className="px-4 py-1 rounded-full border border-white/10 text-xs font-mono text-gray-400">
            {item?.category}
          </span>
          <div className="flex gap-2">
            {item?.tech?.map((t, i) => (
              <span key={i} className="text-[10px] uppercase tracking-widest text-blue-400 font-bold">{t}</span>
            ))}
          </div>
        </div>
        <h3 className="text-4xl md:text-5xl font-bold mt-6 group-hover:text-blue-500 transition-colors">
          {item?.title}
        </h3>
        <p className="text-gray-400 mt-4 max-w-sm text-lg leading-relaxed">
          {item?.desc}
        </p>
      </div>

      <div className="z-10 flex items-center gap-6">
        <a href={item?.live} className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all duration-300">
          Live Preview <ExternalLink size={18} />
        </a>
        <a href={item?.github} className="text-white/50 hover:text-white transition-colors">
          <Github size={24} />
        </a>
      </div>

      {/* Hover Image Reveal or Gradient Glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${item?.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0`} />
    </motion.div>
  );
};
"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Github, Linkedin, Twitter, ExternalLink, Layers, Zap, ArrowUpRight, Heart, ArrowRight } from "lucide-react";
import HeroSection from "@/Components/Hero/Hero";
import AboutStory from "@/Components/About/About";
import MyProcess from "@/Components/MyProcess/MyProcess";
import Services from "@/Components/Services/Services";
import ProfessionalContact from "@/Components/Contact/Contact";
import Footer from "@/Components/Footer/Footer";
import ProjectSection from "@/Components/ProjectSection/ProjectSection";
import Experience from "@/Components/Exp/Exp";
import HorizontalProjects from "@/Components/ScrollProject/ScrollProject";
// ... (অন্যান্য ইমপোর্ট আগের মতোই থাকবে)


const allProjects = [
  // প্রথম ৩টি প্রজেক্ট (সবসময় দেখা যাবে)
  {
    title: "Flexship IT Company Management System",
    category: "Full-Stack Development",
    desc: "একটি সম্পূর্ণ কোম্পানি ম্যানেজমেন্ট সিস্টেম যেখানে কর্মচারী, বিভাগ, বেতন, ছুটি, দৈনিক হাজিরা এবং অন্যান্য প্রশাসনিক কাজ পরিচালনা করা যায়।",
    tech: ["React", "Node.js", "Express", "Socket.io", "MongoDB"],
    feature: ["Group Chat", "File Sharing", "File Sharing", "File Sharing", "File Sharing"],
    live: "https://flexship-it.vercel.app",
    github: "https://github.com/rayhan309/flexshipit-group-chats-clint",
    color: "from-blue-600/20 to-cyan-500/20",
  },
  {
    title: "FairBazar E-Commerce",
    category: "Full-Stack Development",
    desc: "পোশাক কেনা-বেচার একটি পূর্ণাঙ্গ প্ল্যাটফর্ম যেখানে কাস্টমার হোম ডেলিভারি ও ক্যাশ অন ডেলিভারি (COD) অথবা SSL Commarz-এর মাধ্যমে নিরাপদ পেমেন্ট সুবিধা রয়েছে।",
    tech: ["React", "Node.js", "Express", "SSL Commarz", "MongoDB"],
    feature: ["Group Chat", "File Sharing", "File Sharing", "File Sharing", "File Sharing"],
    live: "https://fairbazar.vercel.app",
    github: "https://github.com/rayhan309",
    color: "from-purple-600/20 to-pink-500/20",
  },
  {
    title: "ChatNest - Real-time Chat App",
    category: "Full-Stack Development",
    desc: "Socket.io এবং React.js ব্যবহার করে তৈরি একটি রিয়েল-টাইম মেসেজিং প্ল্যাটফর্ম, যেখানে ব্যবহারকারীরা গ্রুপ  চ্যাটের মাধ্যমে যুক্ত থাকতে পারেন।",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    feature: ["Group Chat", "File Sharing", "Voice Chat", "Video Chat", "File Sharing"],
    live: "https://chatsnest.vercel.app",
    github: "https://github.com/rayhan309/flexshipit-group-chats-clint",
    color: "from-green-600/20 to-emerald-500/20",
  },
  // হিডেন প্রজেক্টস (বাটনে ক্লিক করলে দেখা যাবে)
  {
    title: "Land Office Automation System Portal",
    category: "Full-Stack Development",
    feature: [
      "Dynamic Service Showcase",
      "High-Performance Optimization",
      "Interactive User Interface",
      "Seamless Client Experience",
      "Fully Responsive Design"
    ],
    desc: "ভূমি অফিসের দাপ্তরিক কার্যক্রম এবং নাগরিক সেবা ডিজিটালাইজ করার একটি স্মার্ট প্ল্যাটফর্ম, যা ভূমির রেকর্ড ব্যবস্থাপনা ও সেবা প্রদান প্রক্রিয়াকে দ্রুততর করে।",
    tech: ["Next.js", "Socket.io", "ImageKit", "Secure Auth", "MongoDB"],
    live: "https://gvmportal.vercel.app",
    github: "https://github.com/rayhan309/",
    color: "from-orange-600/20 to-red-500/20",
  },
  {
    title: "Xorit - Skill Development Academy",
    category: "Full-Stack Development",
    feature: [
      "Advanced Course Curriculum",
      "Software Development Roadmap",
      "Cyber Security Modules",
      "AI & Machine Learning Insights",
      "Student Progress Tracking"
    ],
    desc: "এভবিষ্যতের টেক লিডার তৈরির জন্য একটি আধুনিক লার্নিং প্ল্যাটফর্ম, যেখানে সফটওয়্যার ডেভেলপমেন্ট, সাইবার সিকিউরিটি এবং AI/ML-এর মতো ডিমান্ডিং স্কিল শেখানো হয়।",
    tech: ["React", "Tailwind", "Coingecko API"],
    live: "https://xorit.vercel.app",
    github: "https://github.com/rayhan309/",
    color: "from-yellow-600/20 to-amber-500/20",
  }
];

export default function FixedPortfolio() {
  // const scrollRef = useRef(null);
  // // const currentYear = new Date().getFullYear();

  // const { scrollYProgress } = useScroll({
  //   target: scrollRef,
  // });

  // Smooth Scroll Physics
  // const x = useTransform(scrollYProgress, [0, 1], ["0%", "-150%"]);
  // const springX = useSpring(x, { stiffness: 100, damping: 20 });

  // // Background color interpolation for a "Liquid" feel
  // const bgColor = useTransform(
  //   scrollYProgress,
  //   [0, 0.5, 1],
  //   ["#000000", "#050a15", "#000000"]
  // );

  return (
    <motion.div className="text-primary transition-colors duration-700">

      {/* ... Hero, About, Process Sections ... */}
      <HeroSection />



      <AboutStory />

      <Experience />

      <MyProcess />

      {/* --- Unique Horizontal Scroll Section --- */}
      <HorizontalProjects allProjects={allProjects} />

      {/* ... Rest of the Sections (Services, Contact, Footer) ... */}
      {/* <ProjectSection /> */}

      <Services />

      <ProfessionalContact />

      {/* Skills Bento Section */}

      {/* <section className="py-32 px-6 lg:px-24">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="p-10 rounded-[2rem] bg-[#111] border border-white/5 md:col-span-2">

            <Layers className="text-blue-500 mb-6" />

            <h3 className="text-3xl text-primary font-bold mb-4">Frontend Architecture</h3>

            <p className="text-gray-500">React এবং Next.js এর মাধ্যমে আমি হাই-পারফরম্যান্স ফ্রন্টএন্ড তৈরি করি।</p>

          </div>

          <div className="p-10 rounded-[2rem] bg-blue-600 text-white flex flex-col justify-center items-center text-center">

            <Zap size={40} className="mb-4" />

            <h3 className="text-2xl font-bold">Fast Performance</h3>

          </div>

        </div>

      </section> */}

      <Footer />

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
      className="flex-shrink-0 w-[350px] md:w-[650px] max-h-[450px] md:h-[550px] rounded-[3rem] bg-[#0A0A0A] border border-white/5 p-10 flex flex-col justify-between relative group overflow-hidden"
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
        <a href={item?.live} target="_blank" className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all duration-300">
          Live Preview <ExternalLink size={18} />
        </a>
        <a href={item?.github} target="_blank" className="text-white/50 hover:text-white transition-colors">
          <Github size={24} />
        </a>
      </div>

      {/* Hover Image Reveal or Gradient Glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${item?.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0`} />
    </motion.div>
  );
};
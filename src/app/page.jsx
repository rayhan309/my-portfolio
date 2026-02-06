"use client";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Twitter, ExternalLink, Layers, Zap, ArrowUpRight, Heart  } from "lucide-react";
import MyProcess from "@/Components/MyProcess/MyProcess";
import Services from "@/Components/Services/Services";
import AboutStory from "@/Components/About/About";
import ProfessionalContact from "@/Components/Contact/Contact";
import HeroSection from "@/Components/Hero/Hero";
import ProjectSection from "@/Components/ProjectSection/ProjectSection";

export default function FixedPortfolio() {
  const scrollRef = useRef(null);
  const currentYear = new Date().getFullYear();

  // Horizontal scroll logic
  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  // কার্ডগুলো কতটুকু সরবে তা এখানে ঠিক করা হয়েছে (-70% মানে বামে সরে যাবে)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);


  return (
    <div className="text-primary">

      {/* Hero Section */}
    <HeroSection />


      {/* about sections */}
      <AboutStory />

      {/* MyProcess */}
      <MyProcess />



      {/* --- Horizontal Scroll Section Start --- */}
      {/* sticky container এর হাইট বাড়ানো হয়েছে যাতে স্ক্রল করার জায়গা পাওয়া যায় */}
      <section ref={scrollRef} className="relative h-[250vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-10 px-6 lg:px-24">

            {/* Title Card */}
            <div className="flex-shrink-0 w-[300px] md:w-[500px] flex items-center">
              <h2 className="text-5xl md:text-7xl font-bold leading-tight italic">
                Selected <br /> <span className="text-blue-500">Works_</span>
              </h2>
            </div>

            {/* Project Cards - আপনি এখানে আপনার প্রজেক্ট যোগ করবেন */}
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="flex-shrink-0 w-[350px] md:w-[600px] h-[400px] md:h-[500px] rounded-[2.5rem] glass-card border border-white/10 p-8 flex flex-col justify-between relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="z-10">
                  <span className="text-blue-500 font-mono">0{item} / Project</span>
                  <h3 className="text-3xl font-bold mt-2">Premium Web App</h3>
                </div>

                <div className="z-10 flex justify-between items-end">
                  <p className="text-gray-500 max-w-[200px]">Next.js, MongoDB & Tailwind integration.</p>
                  <button className="p-4 bg-white text-black rounded-full hover:bg-blue-600 hover:text-white transition">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
            ))}

            {/* End Spacer */}
            <div className="flex-shrink-0 w-[100px]" />
          </motion.div>
        </div>
      </section>
      {/* --- Horizontal Scroll Section End --- */}


      {/* productions app */}
      <ProjectSection />


      {/* services section */}
      <Services />


      {/* contact sections */}
            <ProfessionalContact />


      {/* Skills Bento Section */}
      <section className="py-32 px-6 lg:px-24">
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
      </section>

      <footer className="relative bg-[#050505] pt-40 pb-10 px-6 lg:px-24 overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">

            {/* Big CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <h2 className="text-gray-500 font-mono text-sm mb-6 uppercase tracking-[0.3em]">
                Next Chapter
              </h2>
              <a
                href="mailto:abu.rayhan@email.com"
                className="group relative inline-block text-5xl md:text-8xl font-black tracking-tighter hover:text-blue-500 transition-colors duration-500"
              >
                LET'S TALK.
                <motion.span
                  className="absolute -bottom-2 left-0 w-0 h-2 bg-blue-600 group-hover:w-full transition-all duration-500"
                />
              </a>
              <p className="mt-8 text-gray-400 text-lg max-w-sm leading-relaxed">
                আপনার কি কোনো দারুণ আইডিয়া আছে? চলুন সেটাকে কোডের মাধ্যমে বাস্তবে রূপ দেই।
              </p>
            </motion.div>

            {/* Navigation & Social Links */}
            <div className="flex flex-col gap-10 min-w-[200px]">
              <div>
                <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Connect</h3>
                <ul className="space-y-3">
                  {[
                    { name: "LinkedIn", icon: <Linkedin size={16} />, url: "#" },
                    { name: "GitHub", icon: <Github size={16} />, url: "#" },
                    { name: "Twitter", icon: <Twitter size={16} />, url: "#" }
                  ].map((social) => (
                    <li key={social.name}>
                      <a href={social.url} className="flex items-center gap-2 text-gray-500 hover:text-white transition group font-medium">
                        {social.icon} {social.name}
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>


          {/* Bottom Bar */}
          <div className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-500 font-mono text-xs uppercase tracking-tighter">
              Designed & Developed by <span className="text-white font-bold tracking-normal uppercase">Abu Rayhan</span>
            </div>

            {/* Time & Location Display (Adds a pro touch) */}
            <div className="hidden lg:flex gap-10 text-[10px] text-gray-600 font-mono uppercase tracking-[0.2em]">
              <div>Loc: Dhaka, BD</div>
              <div>Time: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} GMT+6</div>
            </div>

            <div className="flex items-center gap-2 text-gray-600 text-xs">
              © {currentYear} <Heart size={12} className="text-red-600 animate-pulse" /> All Rights Reserved.
            </div>
          </div>
        </div>

        {/* Large Watermark Text */}
        <div className="absolute -bottom-8 select-none pointer-events-none opacity-[0.02]">
          <h2 className="text-[20rem] font-black leading-none">RAYHAN</h2>
        </div>
      </footer>

    </div>
  );
}
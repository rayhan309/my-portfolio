"use client";
import { motion } from "framer-motion";
import { Globe, Smartphone, Zap, Code, ShieldCheck, BarChart3 } from "lucide-react";

const services = [
  {
    title: "Full-Stack Web Apps",
    desc: "Next.js, Node.js এবং MongoDB ব্যবহার করে স্কেলেবল এবং পাওয়ারফুল ওয়েব অ্যাপ্লিকেশন তৈরি করি।",
    icon: <Globe size={32} className="text-blue-500" />,
  },
  {
    title: "Animated Web Experiences",
    desc: "Framer Motion ব্যবহার করে জীবন্ত এবং ইন্টারঅ্যাক্টিভ ইউজার ইন্টারফেস তৈরি করি যা ইউজারকে মুগ্ধ করবে।",
    icon: <Zap size={32} className="text-yellow-500" />,
  },
  {
    title: "E-commerce Solutions",
    desc: "পেমেন্ট গেটওয়ে সহ পূর্ণাঙ্গ অনলাইন শপ এবং ইনভেন্টরি ম্যানেজমেন্ট সিস্টেম ডেভেলপ করি।",
    icon: <Smartphone size={32} className="text-purple-500" />,
  },
  {
    title: "Custom API Development",
    desc: "নিরাপদ এবং ফাস্ট RESTful বা GraphQL API তৈরি করি আপনার অ্যাপ্লিকেশনের নিরবচ্ছিন্ন ডেটা প্রবাহের জন্য।",
    icon: <Code size={32} className="text-green-500" />,
  },
  {
    title: "Performance Optimization",
    desc: "আপনার বর্তমান সাইটের স্পিড এবং SEO অপ্টিমাইজ করে গুগল র‍্যাঙ্কিং এবং ইউজার রিটেনশন বৃদ্ধি করি।",
    icon: <BarChart3 size={32} className="text-cyan-500" />,
  },
  {
    title: "Secure Auth & Databases",
    desc: "JWT বা Auth.js ব্যবহার করে সিকিউর লগইন সিস্টেম এবং দক্ষ ডেটাবেস আর্কিটেকচার ডিজাইন করি।",
    icon: <ShieldCheck size={32} className="text-red-500" />,
  },
];

export default function Services() {
  return (
    <section className="py-32 px-6 lg:px-24 relative overflow-hidden">
      <div className=" container mx-auto">
        
        {/* Header */}
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-500 font-mono text-sm tracking-[0.3em] uppercase"
          >
            // What I Offer
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter mt-4 italic"
          >
            SERVICES <span className="text-white/20">&</span> SOLUTIONS.
          </motion.h2 >
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[2.5rem] glass-card border border-white/5 group relative overflow-hidden transition-all hover:border-blue-500/50"
            >
              {/* Decorative Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="mb-8 w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600/10 transition-all duration-500">
                {service.icon}
              </div>
              
              <h4 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-blue-400 transition-colors">
                {service.title}
              </h4>
              <p className="text-gray-500 leading-relaxed text-sm">
                {service.desc}
              </p>

              <div className="mt-8 flex items-center gap-2 text-xs font-bold text-gray-400 group-hover:text-white transition-colors">
                LEARN MORE <span className="group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
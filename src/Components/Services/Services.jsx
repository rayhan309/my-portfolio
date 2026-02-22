"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  Globe, Smartphone, Zap, Code, ShieldCheck,
  BarChart3, X, CheckCircle2, ArrowRight, Terminal
} from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    title: "High-Performance Full-Stack Systems",
    desc: "Next.js, Node.js এবং MongoDB-এর শক্তি কাজে লাগিয়ে আমি আধুনিক, এন্টারপ্রাইজ-গ্রেড ও স্কেলেবল ওয়েব অ্যাপ্লিকেশন ডেভেলপ করি।",
    icon: <Globe />,
    color: "text-blue-600",
    bg: "bg-blue-50/50",
    features: ["SSR & ISR Support", "Node.js Backend", "MongoDB Aggregation", "Admin Dashboards"]
  },
  {
    title: "Immersive Creative Development",
    desc: "Framer Motion ও GSAP ব্যবহার করে আমি ইউনিক, ব্র্যান্ড-ফোকাসড ও ইমার্সিভ ইউজার এক্সপেরিয়েন্স তৈরি করি।",
    icon: <Zap />,
    color: "text-amber-500",
    bg: "bg-amber-50/50",
    features: ["GSAP Timelines", "Framer Motion", "Lottie Animations", "Micro-interactions"]
  },
  {
    title: "Real-time Messaging Systems",
    desc: "Socket.io ও WebSockets-এর মাধ্যমে আমি হাই-পারফরম্যান্স রিয়েল-টাইম চ্যাট অ্যাপ এবং লাইভ নোটিফিকেশন সিস্টেম তৈরি করি।",
    icon: <Code />,
    color: "text-emerald-600",
    bg: "bg-emerald-50/50",
    features: ["Bi-directional Sync", "WebSocket Events", "Live Chat Apps", "Real-time Analytics"]
  },
  {
    title: "E-Commerce & FinTech Solutions",
    desc: "Secure Payment Gateway ইন্টিগ্রেশনসহ আমি স্কেলেবল ইনভেন্টরি ম্যানেজমেন্ট এবং মাল্টি-ভেন্ডর মার্কেটপ্লেস তৈরি করি।",
    icon: <Smartphone />,
    color: "text-purple-600",
    bg: "bg-purple-50/50",
    features: ["SSLCommerz/Stripe", "Inventory Automation", "Custom Workflows", "High Conversion UI"]
  },
  {
    title: "Headless CMS & Architecture",
    desc: "Gatsby ও WordPress ব্যবহার করে আমি দ্রুতগতির স্ট্যাটিক সাইট এবং সহজে ম্যানেজযোগ্য কনটেন্ট প্ল্যাটফর্ম ডেভেলপ করি।",
    icon: <BarChart3 />,
    color: "text-cyan-600",
    bg: "bg-cyan-50/50",
    features: ["Gatsby Optimization", "Headless WP", "SEO Ready", "Fast CDN Delivery"]
  },
  {
    title: "Security & Auth Infrastructure",
    desc: "JWT ও NextAuth ব্যবহার করে আমি শক্তিশালী রোল-বেইজড অ্যাক্সেস কন্ট্রোল এবং ডাটা সিকিউরিটি নিশ্চিত করি।",
    icon: <ShieldCheck />,
    color: "text-rose-600",
    bg: "bg-rose-50/50",
    features: ["OAuth Integration", "RBAC Control", "Data Encryption", "Session Security"]
  }
];

const ServiceCard = ({ service, index, onSelect }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    // শুধুমাত্র ডেস্কটপে ৩ডি ইফেক্ট কাজ করবে
    if (window.innerWidth < 1024) return;

    const card = cardRef.current;
    const onMove = (e) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 25;
      const y = (e.clientY - top - height / 2) / 25;
      gsap.to(card, { rotateY: x, rotateX: -y, duration: 0.5, ease: "power2.out" });
    };
    const onLeave = () => {
      gsap.to(card, { rotateY: 0, rotateX: 0, duration: 1, ease: "elastic.out(1,0.3)" });
    };

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="perspective-1000 h-full"
    >
      <div
        ref={cardRef}
        onClick={() => onSelect(service)}
        className="group relative h-full p-8 lg:p-12 rounded-[2.5rem] lg:rounded-[3.5rem] bg-white border border-slate-100 cursor-pointer transition-all duration-500 hover:shadow-2xl hover:border-blue-100 flex flex-col justify-between"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div>
          <div className={`mb-8 w-16 h-16 lg:w-20 lg:h-20 rounded-2xl lg:rounded-3xl ${service.bg} ${service.color} flex items-center justify-center transition-all duration-500 group-hover:bg-slate-900 group-hover:text-white`}>
            {React.cloneElement(service.icon, { size: 32, strokeWidth: 2 })}
          </div>
          <h4 className="text-2xl lg:text-3xl font-black mb-4 tracking-tighter text-slate-900 uppercase italic leading-none group-hover:text-blue-600 transition-colors">
            {service.title}
          </h4>
          <p className="text-slate-500 text-sm lg:text-base leading-relaxed font-medium line-clamp-3">
            {service.desc}
          </p>
        </div>

        <div className="mt-8 flex items-center gap-3">
          <div className="h-px w-8 bg-blue-600 transition-all group-hover:w-12" />
          <span className="text-[10px] font-black text-slate-400 group-hover:text-blue-600 uppercase tracking-widest">View More</span>
        </div>
      </div>
    </motion.div>
  );
};

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  // মোডাল ওপেন থাকলে বডি স্ক্রল বন্ধ করা
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedService]);

  return (
    <section className="py-20 lg:py-32 px-4 md:px-12 lg:px-24 bg-[#fdfdfd]">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <Terminal size={18} className="text-blue-600" />
            <span className="text-blue-600 font-mono text-[10px] font-black uppercase tracking-[0.4em]">Expertise</span>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-[8vw] font-black tracking-tighter text-slate-900 uppercase italic leading-[0.8]">
            MY <span className="text-transparent" style={{ WebkitTextStroke: "1px #cbd5e1" }}>SERVICES.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} index={i} onSelect={setSelectedService} />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence mode="wait">
        {selectedService && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-white rounded-[2.5rem] lg:rounded-[4rem] p-8 lg:p-16 overflow-y-auto max-h-[90vh] shadow-2xl"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 lg:top-10 lg:right-10 w-12 h-12 flex items-center justify-center bg-slate-50 rounded-full hover:bg-red-50 hover:text-red-500 transition-all z-10 shadow-sm"
              >
                <X size={20} />
              </button>

              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
                <div>
                  <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl lg:rounded-3xl ${selectedService.bg} ${selectedService.color} flex items-center justify-center mb-8`}>
                    {React.cloneElement(selectedService.icon, { size: 36 })}
                  </div>
                  <h3 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic leading-none">
                    {selectedService.title}
                  </h3>
                  <p className="text-slate-500 text-base lg:text-lg leading-relaxed font-medium">
                    {selectedService.desc}
                  </p>
                </div>

                <div className="flex flex-col justify-between">
                  <div className="space-y-3">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 border-b pb-2">What's included</p>
                    {selectedService.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-800 font-bold text-sm lg:text-base">
                        <CheckCircle2 className="text-blue-600" size={18} /> {f}
                      </div>
                    ))}
                  </div>

                  {/* ফিক্সড লিঙ্ক: setSelectedService(null) যোগ করা হয়েছে যাতে লিঙ্ক ক্লিকের পর মোডাল বন্ধ হয় */}
                  <Link
                    href="#contact"
                    onClick={() => setSelectedService(null)}
                    className="mt-10 w-full py-5 lg:py-7 bg-slate-900 text-white rounded-[1.5rem] lg:rounded-[2rem] font-black uppercase italic tracking-widest hover:bg-blue-600 transition-all flex items-center justify-center gap-3 group shadow-xl"
                  >
                    Let's Talk <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe, Smartphone, Zap, Code, ShieldCheck,
  BarChart3, X, CheckCircle2, ArrowRight
} from "lucide-react";

const services = [
  {
    title: "High-Performance Full-Stack Systems",
    desc: "Next.js, Node.js এবং MongoDB-এর শক্তি কাজে লাগিয়ে আমি আধুনিক, এন্টারপ্রাইজ-গ্রেড ও স্কেলেবল ওয়েব অ্যাপ্লিকেশন ডেভেলপ করি, যেখানে স্পিড, সিকিউরিটি ও ইউজার এক্সপেরিয়েন্স সর্বোচ্চ গুরুত্ব পায়।",
    icon: <Globe size={32} className="text-blue-600" />,
    color: "blue",
    features: [
      "SSR & ISR for Lightning Speed",
      "Robust Node.js & Express Backend",
      "Dynamic MongoDB Aggregations",
      "MUI & Tailwind Styled Dashboards"
    ]
  },
  {
    title: "Immersive Creative Development",
    desc: "Framer Motion, GSAP ও Lottie-এর শক্তিশালী অ্যানিমেশন ব্যবহার করে আমি ইউনিক, ব্র্যান্ড-ফোকাসড ও ইমার্সিভ ইউজার এক্সপেরিয়েন্স তৈরি করি, যা আপনার ডিজিটাল প্রেজেন্সকে আলাদা মাত্রায় নিয়ে যায়।",
    icon: <Zap size={32} className="text-amber-500" />,
    color: "amber",
    features: [
      "Advanced GSAP Scroll Timelines",
      "Complex Framer Motion Layouts",
      "Lottie Vector Animations",
      "Micro-interactions & UX Delight"
    ]
  },
  {
    title: "Real-time Messaging & Automation",
    desc: "Socket.io ও WebSockets-এর মাধ্যমে আমি হাই-পারফরম্যান্স রিয়েল-টাইম চ্যাট অ্যাপ, লাইভ নোটিফিকেশন এবং স্কেলেবল কোলাবোরেটিভ সিস্টেম তৈরি করি।",
    icon: <Code size={32} className="text-emerald-600" />,
    color: "emerald",
    features: [
      "Bi-directional Real-time Sync",
      "WebSocket Event Architecture",
      "Live Chat & Notification Systems",
      "Real-time Dashboard Analytics"
    ]
  },
  {
    title: "E-Commerce & FinTech Solutions",
    desc: "SSLCommerz ও Stripe-এর সিকিউর পেমেন্ট ইন্টিগ্রেশনসহ আমি স্কেলেবল ইনভেন্টরি ম্যানেজমেন্ট এবং মাল্টি-ভেন্ডর ই-কমার্স মার্কেটপ্লেস তৈরি করি।",
    icon: <Smartphone size={32} className="text-purple-600" />,
    color: "purple",
    features: [
      "Secure Payment Gateway Setup",
      "Inventory & Order Automation",
      "Custom E-commerce Workflows",
      "High-Conversion UI/UX Patterns"
    ]
  },
  {
    title: "Static Sites & Headless CMS",
    desc: "Gatsby ও WordPress-এর শক্তিশালী কম্বিনেশন ব্যবহার করে আমি অত্যন্ত দ্রুতগতির স্ট্যাটিক সাইট এবং সহজে ম্যানেজযোগ্য, ফ্লেক্সিবল CMS-ভিত্তিক কনটেন্ট প্ল্যাটফর্ম ডেভেলপ করি।",
    icon: <BarChart3 size={32} className="text-cyan-600" />,
    color: "cyan",
    features: [
      "Gatsby Optimized Static Sites",
      "Headless WordPress Integration",
      "SEO Ready Architecture",
      "Fast Content Delivery (CDN)"
    ]
  },
  {
    title: "Modern Auth & Data Security",
    desc: "JWT, NextAuth, Auth.js ও কাস্টম অথেনটিকেশন আর্কিটেকচার ব্যবহার করে আমি শক্তিশালী রোল-বেইজড অ্যাক্সেস কন্ট্রোল এবং এন্ড-টু-এন্ড ডাটা সিকিউরিটি বাস্তবায়ন করি।",
    icon: <ShieldCheck size={32} className="text-rose-600" />,
    color: "rose",
    features: [
      "OAuth (Google, FB, GitHub) Login",
      "Role-based Access (RBAC)",
      "Encrypted Data Transactions",
      "Modern JWT Session Management"
    ]
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="py-32 px-6 lg:px-24 relative overflow-hidden bg-[#F8FAFC]">
      <div className="container mx-auto">

        {/* Header */}
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-600 font-mono text-sm tracking-[0.3em] uppercase font-bold"
          >
            // What I Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter mt-4 italic text-slate-900"
          >
            SERVICES <span className="text-slate-200">&</span> SOLUTIONS.
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              onClick={() => setSelectedService(service)}
              className="p-10 rounded-[2.5rem] bg-white border border-slate-100 group relative overflow-hidden transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="mb-8 w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-500 relative z-10">
                {service.icon}
              </div>

              <h4 className="text-2xl font-bold mb-4 tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors relative z-10">
                {service.title}
              </h4>
              <p className="text-slate-500 leading-relaxed text-sm relative z-10">
                {service.desc}
              </p>

              <button className="mt-8 flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-blue-600 transition-all relative z-10">
                LEARN MORE <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal / Popup Overlay */}
      <AnimatePresence>
        {selectedService && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100] cursor-zoom-out"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-x-6 top-[15%] md:left-1/2 md:ml-[-300px] md:w-[600px] bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl z-[101] border border-slate-100"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-8 right-8 p-2 cursor-pointer bg-slate-50 rounded-full hover:bg-slate-100 transition-colors"
              >
                <X size={20} className="text-slate-500" />
              </button>

              <div className="mb-6 w-20 h-20 rounded-3xl bg-blue-50 flex items-center justify-center">
                {selectedService.icon}
              </div>

              <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tighter">
                {selectedService.title}
              </h3>

              <p className="text-slate-500 leading-relaxed mb-8">
                {selectedService.desc}
              </p>

              <div className="space-y-4 mb-10">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Service Includes:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedService.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0" />
                      <span className="text-sm font-semibold text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedService(null);
                  window.location.href = "#contact";
                }}
                className="w-full py-5 bg-slate-900 text-white cursor-pointer rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-all group"
              >
                DISCUSS THIS PROJECT <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
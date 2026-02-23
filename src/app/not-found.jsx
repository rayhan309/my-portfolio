"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
    useEffect(() => {
        // Floating animation for the 404 text
        gsap.to(".big-404", {
            y: -15,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });

        // Subtle movement for the background blur
        gsap.to(".glow-bg", {
            scale: 1.2,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }, []);

    return (
        <main className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#F8FAFC] overflow-hidden px-6">

            {/* Soft Ambient Glows */}
            <div className="glow-bg absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-blue-100/50 blur-[120px] rounded-full pointer-events-none" />
            <div className="glow-bg absolute bottom-[20%] left-[10%] w-[300px] h-[300px] bg-indigo-50/60 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 text-center">

                {/* 404 Branding */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6"
                >
                    <span className="text-blue-600 font-mono text-xs uppercase tracking-[0.5em] font-black">
                        Error // Page Not Found
                    </span>
                </motion.div>

                {/* Main 404 Display */}
                <div className="relative mb-12">
                    <h1 className="big-404 text-[clamp(8rem,25vw,18rem)] font-black leading-none text-slate-900 tracking-tighter italic select-none">
                        4<span className="text-transparent" style={{ WebkitTextStroke: "2px #cbd5e1" }}>0</span>4
                    </h1>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
                    >
                        <p className="text-blue-600 text-lg md:text-2xl font-black uppercase italic tracking-[0.2em]">
                            রাস্তা হারিয়ে ফেলেছেন?
                        </p>
                    </motion.div>
                </div>

                {/* Content & Actions */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="max-w-md mx-auto space-y-8"
                >
                    <p className="text-slate-500 text-base md:text-lg font-medium italic leading-relaxed">
                        আপনি যে পেজটি খুঁজছেন তা হয়তো সরানো হয়েছে অথবা এটি কখনও ছিলই না। চিন্তার কিছু নেই, নিচে গিয়ে মূল রাস্তায় ফিরে যান।
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="/">
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-3 cursor-pointer bg-slate-900 text-white px-10 py-4 rounded-full font-black uppercase italic tracking-widest text-[11px] transition-all shadow-xl shadow-slate-200"
                            >
                                <Home size={16} /> মূল পাতায় ফিরুন
                            </motion.button>
                        </Link>

                        <button
                            onClick={() => window.history.back()}
                            className="flex items-center gap-2 cursor-pointer text-slate-400 hover:text-slate-900 font-black uppercase italic tracking-widest text-[11px] transition-colors group"
                        >
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> পেছনে যান
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Tech Details */}
            <div className="absolute bottom-10 w-full px-10 flex justify-between items-center opacity-30">
                <p className="font-mono text-[9px] uppercase tracking-widest text-slate-400 italic">
                    Abu Rayhan // Portfolio 2026
                </p>
                <div className="h-px flex-1 mx-8 bg-slate-200 hidden md:block" />
                <p className="font-mono text-[9px] uppercase tracking-widest text-slate-400">
                    Lat: 23.01 | Long: 89.82
                </p>
            </div>
        </main>
    );
}
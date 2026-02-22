"use client";
import React from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Code, TestTube, Rocket, ChevronRight } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Discovery",
    label: "Planning",
    desc: "প্রজেক্টের গোল এবং ইউজার রিকোয়ারমেন্টস নিয়ে গভীর রিসার্চ ও ব্লুপ্রিন্ট তৈরি করি।",
    icon: <Search size={24} />,
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: "02",
    title: "Design",
    label: "Architecture",
    desc: "স্কেলেবল কোডিংয়ের জন্য অ্যাপ্লিকেশনের মজবুত আর্কিটেকচার এবং ইউজার ফ্লো ডিজাইন করি।",
    icon: <PenTool size={24} />,
    color: "from-purple-500 to-pink-400",
  },
  {
    id: "03",
    title: "Agile",
    label: "Development",
    desc: "Next.js এবং আধুনিক স্ট্যাক ব্যবহার করে ক্লিন, অপ্টিমাইজড এবং ফিউচার-প্রুফ কোড লিখি।",
    icon: <Code size={24} />,
    color: "from-indigo-600 to-blue-500",
  },
  {
    id: "04",
    title: "Quality",
    label: "Testing",
    desc: "পারফরম্যান্স অপ্টিমাইজেশন এবং বাগ ফিক্সিংয়ের মাধ্যমে সুপার ফাস্ট স্পিড নিশ্চিত করি।",
    icon: <TestTube size={24} />,
    color: "from-emerald-500 to-teal-400",
  },
  {
    id: "05",
    title: "Launch",
    label: "Support",
    desc: "Vercel-এ লাইভ ডিপ্লয়মেন্ট এবং ভবিষ্যতে যেকোনো টেকনিক্যাল সাপোর্টের নিশ্চয়তা দেই।",
    icon: <Rocket size={24} />,
    color: "from-orange-500 to-red-400",
  },
];

export default function MyProcess() {
  return (
    <section className="py-24 px-6 lg:px-24 bg-[#fdfdfd] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-slate-100 hidden lg:block" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-slate-100 hidden lg:block" />

      <div className="container mx-auto relative z-10">

        {/* --- Section Header --- */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-4 border border-blue-100"
          >
            Execution Strategy
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 uppercase italic"
          >
            How I <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Work.</span>
          </motion.h2>
        </div>

        {/* --- Process Steps Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-2">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {/* Desktop Connecting Arrow */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/4 -right-4 z-20 text-slate-200">
                  <ChevronRight size={32} strokeWidth={1} />
                </div>
              )}

              <div className="h-full p-8 rounded-[2.5rem] bg-white border border-slate-100 hover:border-blue-200 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/5 group/card relative overflow-hidden">

                {/* Step Number Background */}
                <div className="absolute -top-4 -right-4 text-8xl font-black text-slate-50 opacity-[0.03] group-hover/card:opacity-[0.08] transition-opacity uppercase italic">
                  {step.id}
                </div>

                {/* Icon Box */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white mb-8 shadow-lg group-hover/card:scale-110 group-hover/card:rotate-3 transition-transform duration-500`}>
                  {step.icon}
                </div>

                {/* Content */}
                <div className="space-y-2 relative z-10">
                  <span className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest block">
                    Step {step.id}
                  </span>
                  <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight leading-none group-hover/card:text-blue-600 transition-colors">
                    {step.title} <br />
                    <span className="text-slate-400 font-medium text-sm normal-case tracking-normal italic">{step.label}</span>
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed pt-4 font-medium opacity-80 group-hover/card:opacity-100">
                    {step.desc}
                  </p>
                </div>

                {/* Hover Bottom Bar */}
                <div className={`absolute bottom-0 left-0 h-1.5 w-0 bg-gradient-to-r ${step.color} group-hover/card:w-full transition-all duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Bottom Call to Action --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-8 rounded-[3rem] bg-slate-900 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
          <p className="text-slate-400 font-mono text-xs tracking-[0.2em] uppercase mb-2 relative z-10 italic">
            // Ready to start a project?
          </p>
          <h3 className="text-2xl md:text-4xl font-bold text-white relative z-10">
            আপনার স্বপ্নকে বাস্তবে রূপান্তর করতে <br className="hidden md:block" /> আমি প্রস্তুত।
          </h3>
        </motion.div>

      </div>
    </section>
  );
}
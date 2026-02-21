"use client";
import { motion } from "framer-motion";
import { Search, PenTool, Code, TestTube, Rocket } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Discovery & Planning",
    desc: "আমি প্রথমে আপনার প্রয়োজনগুলো বোঝার চেষ্টা করি। প্রজেক্টের গোল, ইউজার এবং টেকনিক্যাল রিকোয়ারমেন্টস নিয়ে রিসার্চ করি।",
    icon: <Search className="text-blue-600" />,
  },
  {
    id: "02",
    title: "Design & Architecture",
    desc: "কোডিং শুরু করার আগে আমি অ্যাপ্লিকেশনের আর্কিটেকচার এবং ইউজার ফ্লো ডিজাইন করি যাতে ডেভেলপমেন্ট সহজ হয়।",
    icon: <PenTool className="text-purple-600" />,
  },
  {
    id: "03",
    title: "Agile Development",
    desc: "আমি Next.js এবং আধুনিক স্ট্যাক ব্যবহার করে ক্লিন এবং স্কেলেবল কোড লিখি। প্রতিটি ফিচারে ইউজার ইন্টারঅ্যাকশন প্রাধান্য পায়।",
    icon: <Code className="text-indigo-600" />,
  },
  {
    id: "04",
    title: "Testing & QA",
    desc: "প্রজেক্টটি লাইভ করার আগে আমি বাগ চেক করি এবং পারফরম্যান্স অপ্টিমাইজ করি যাতে লোডিং স্পিড সুপার ফাস্ট হয়।",
    icon: <TestTube className="text-emerald-600" />,
  },
  {
    id: "05",
    title: "Deployment & Support",
    desc: "সবশেষে Vercel বা আপনার পছন্দমতো সার্ভারে সাইট লাইভ করি এবং ভবিষ্যতে সব ধরণের টেকনিক্যাল সাপোর্ট দেই।",
    icon: <Rocket className="text-orange-600" />,
  },
];

export default function MyProcess() {
  return (
    <section className="py-24 px-6 lg:px-24 bg-[#F8FAFC]">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-slate-900"
          >
            How I <span className="text-blue-600">Work_</span>
          </motion.h2>
          <p className="text-slate-400 mt-4 font-mono text-sm tracking-widest uppercase italic">
            // My Development Workflow
          </p>
        </div>

        {/* Responsive Grid: Desktop e 5 column, Tablet e 3, Mobile e 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="mb-6 text-slate-300 font-mono text-2xl group-hover:text-blue-600 transition-colors font-bold">
                {step.id}
              </div>
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-300">
                {step.icon}
              </div>
              <h4 className="text-lg font-bold mb-4 text-slate-900 leading-tight">{step.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
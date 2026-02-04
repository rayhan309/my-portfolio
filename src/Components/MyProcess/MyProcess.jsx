"use client";
import { motion } from "framer-motion";
import { Search, PenTool, Code, TestTube, Rocket } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Discovery & Planning",
    desc: "আমি প্রথমে আপনার প্রয়োজনগুলো বোঝার চেষ্টা করি। প্রজেক্টের গোল, ইউজার এবং টেকনিক্যাল রিকোয়ারমেন্টস নিয়ে রিসার্চ করি।",
    icon: <Search className="text-blue-500" />,
  },
  {
    id: "02",
    title: "Design & Architecture",
    desc: "কোডিং শুরু করার আগে আমি অ্যাপ্লিকেশনের আর্কিটেকচার এবং ইউজার ফ্লো ডিজাইন করি যাতে ডেভেলপমেন্ট সহজ হয়।",
    icon: <PenTool className="text-purple-500" />,
  },
  {
    id: "03",
    title: "Agile Development",
    desc: "আমি Next.js এবং আধুনিক স্ট্যাক ব্যবহার করে ক্লিন এবং স্কেলেবল কোড লিখি। প্রতিটি ফিচারে ইউজার ইন্টারঅ্যাকশন প্রাধান্য পায়।",
    icon: <Code className="text-blue-400" />,
  },
  {
    id: "04",
    title: "Testing & QA",
    desc: "প্রজেক্টটি লাইভ করার আগে আমি বাগ চেক করি এবং পারফরম্যান্স অপ্টিমাইজ করি যাতে লোডিং স্পিড সুপার ফাস্ট হয়।",
    icon: <TestTube className="text-green-500" />,
  },
  {
    id: "05",
    title: "Deployment & Support",
    desc: "সবশেষে Vercel বা আপনার পছন্দমতো সার্ভারে সাইট লাইভ করি এবং ভবিষ্যতে সব ধরণের টেকনিক্যাল সাপোর্ট দেই।",
    icon: <Rocket className="text-yellow-500" />,
  },
];

export default function MyProcess() {
  return (
    <section className="py-32 bg-[#080808] px-6 lg:px-24">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tighter uppercase"
          >
            How I <span className="text-blue-500">Work_</span>
          </motion.h2>
          <p className="text-gray-500 mt-4 font-mono text-sm tracking-widest uppercase italic">
            // My Development Workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-[2.5rem] bg-[#0c0c0c] border border-white/5 flex flex-col items-center text-center group"
            >
              <div className="mb-6 text-gray-500 font-mono text-2xl group-hover:text-blue-500 transition-colors">
                {step.id}
              </div>
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{step.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
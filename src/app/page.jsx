"use client";
import { motion } from "framer-motion";
import HeroSection from "@/Components/Hero/Hero";
import AboutStory from "@/Components/About/About";
import MyProcess from "@/Components/MyProcess/MyProcess";
import Services from "@/Components/Services/Services";
import ProfessionalContact from "@/Components/Contact/Contact";
import Footer from "@/Components/Footer/Footer";
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

  return (
    <motion.div className="text-primary transition-colors duration-700">

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutStory />

      {/* Experience Section */}
      <Experience />

      {/* My Process Section */}
      <MyProcess />

      {/* --- Unique Horizontal Scroll Section --- */}
      <HorizontalProjects allProjects={allProjects} />

      {/* Services Section */}
      <Services />

      {/* Professional Contact Section */}
      <ProfessionalContact />

      {/* Footer Section */}
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
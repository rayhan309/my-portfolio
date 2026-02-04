"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare, CheckCircle } from "lucide-react";

export default function ProfessionalContact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // এখানে আপনার API call (যেমন: Formspree বা Nodemailer) হবে
    await new Promise((resolve) => setTimeout(resolve, 2000)); // সিমুলেশন
    console.log(data);
    reset();
  };

  return (
    <section className="py-24 px-6 lg:px-24 bg-[#050505] relative overflow-hidden">
      {/* Background Blur Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className=" container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Info */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
            LET'S START <br /> A <span className="text-blue-500 text-outline">PROJECT.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-md leading-relaxed">
            আপনার কি কোনো প্রশ্ন আছে বা নতুন কোনো আইডিয়া নিয়ে কথা বলতে চান? নিচের ফর্মটি পূরণ করুন, আমি খুব শীঘ্রই যোগাযোগ করব।
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Mail size={20} className="text-blue-500" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest">Email me at</p>
                <p className="font-bold">abu.rayhan@email.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative p-8 md:p-12 rounded-[2.5rem] bg-[#0c0c0c] border border-white/5 shadow-2xl"
        >
          {isSubmitSuccessful ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <CheckCircle size={80} className="text-green-500 mx-auto mb-6" />
              <h3 className="text-3xl font-bold italic">ধন্যবাদ, আবু রায়হান!</h3>
              <p className="text-gray-400 mt-2">আপনার মেসেজটি আমি পেয়েছি।</p>
              <button onClick={() => reset()} className="mt-8 text-blue-500 underline uppercase tracking-widest text-xs">Send another message</button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div className="relative group">
                <User className="absolute left-4 top-4 text-gray-600 group-focus-within:text-blue-500 transition-colors" size={20} />
                <input
                  {...register("name", { required: "আপনার নামটি লিখুন" })}
                  placeholder="আপনার নাম"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all"
                />
                {errors.name && <span className="text-red-500 text-xs mt-1 block pl-4">{errors.name.message}</span>}
              </div>

              {/* Email Field */}
              <div className="relative group">
                <Mail className="absolute left-4 top-4 text-gray-600 group-focus-within:text-blue-500 transition-colors" size={20} />
                <input
                  {...register("email", { 
                    required: "ইমেইল প্রয়োজন", 
                    pattern: { value: /^\S+@\S+$/i, message: "সঠিক ইমেইল দিন" } 
                  })}
                  placeholder="আপনার ইমেইল"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all"
                />
                {errors.email && <span className="text-red-500 text-xs mt-1 block pl-4">{errors.email.message}</span>}
              </div>

              {/* Message Field */}
              <div className="relative group">
                <MessageSquare className="absolute left-4 top-4 text-gray-600 group-focus-within:text-blue-500 transition-colors" size={20} />
                <textarea
                  {...register("message", { required: "মেসেজ লিখুন", minLength: { value: 10, message: "মেসেজটি একটু বড় করুন" } })}
                  placeholder="আপনার প্রজেক্ট আইডিয়া..."
                  rows="4"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all resize-none"
                />
                {errors.message && <span className="text-red-500 text-xs mt-1 block pl-4">{errors.message.message}</span>}
              </div>

              {/* Submit Button */}
              <button
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
              >
                {isSubmitting ? "পাঠানো হচ্ছে..." : "মেসেজ পাঠান"}
                {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
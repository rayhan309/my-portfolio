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
    // Simulaltion of API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    // reset() is usually handled after success message
  };

  return (
    <section className="py-24 px-6 lg:px-24 relative overflow-hidden bg-[#F8FAFC]">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Side: Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-slate-900">
            LET'S START <br /> A <span className="text-blue-600 italic">PROJECT.</span>
          </h2>
          <p className="text-slate-500 text-lg mb-8 max-w-md leading-relaxed">
            আপনার কি কোনো প্রশ্ন আছে বা নতুন কোনো আইডিয়া নিয়ে কথা বলতে চান? নিচের ফর্মটি পূরণ করুন, আমি খুব শীঘ্রই যোগাযোগ করব।
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center">
                <Mail size={24} className="text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Email me at</p>
                <p className="font-bold text-slate-900 text-lg">ihaveawonderfull@gmail.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative p-8 md:p-12 rounded-[2.5rem] bg-white border border-slate-100 shadow-2xl shadow-blue-900/5"
        >
          {isSubmitSuccessful ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} className="text-green-500" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900">ধন্যবাদ!</h3>
              <p className="text-slate-500 mt-2">আপনার মেসেজটি আমি পেয়েছি। খুব শীঘ্রই কথা হবে।</p>
              <button
                onClick={() => reset()}
                className="mt-8 text-blue-600 font-bold uppercase tracking-widest text-xs hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name Field */}
              <div className="relative group">
                <User className="absolute left-4 top-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                <input
                  {...register("name", { required: "আপনার নামটি লিখুন" })}
                  placeholder="আপনার নাম"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-blue-500/50 focus:bg-white focus:ring-4 focus:ring-blue-500/5 transition-all text-slate-900"
                />
                {errors.name && <span className="text-red-500 text-xs mt-1 block pl-2 font-medium">{errors.name.message}</span>}
              </div>

              {/* Email Field */}
              <div className="relative group">
                <Mail className="absolute left-4 top-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                <input
                  {...register("email", {
                    required: "ইমেইল প্রয়োজন",
                    pattern: { value: /^\S+@\S+$/i, message: "সঠিক ইমেইল দিন" }
                  })}
                  placeholder="আপনার ইমেইল"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-blue-500/50 focus:bg-white focus:ring-4 focus:ring-blue-500/5 transition-all text-slate-900"
                />
                {errors.email && <span className="text-red-500 text-xs mt-1 block pl-2 font-medium">{errors.email.message}</span>}
              </div>

              {/* Message Field */}
              <div className="relative group">
                <MessageSquare className="absolute left-4 top-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                <textarea
                  {...register("message", { required: "মেসেজ লিখুন", minLength: { value: 10, message: "মেসেজটি একটু বড় করুন" } })}
                  placeholder="আপনার প্রজেক্ট আইডিয়া..."
                  rows="4"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-blue-500/50 focus:bg-white focus:ring-4 focus:ring-blue-500/5 transition-all resize-none text-slate-900"
                />
                {errors.message && <span className="text-red-500 text-xs mt-1 block pl-2 font-medium">{errors.message.message}</span>}
              </div>

              {/* Submit Button */}
              <button
                disabled={isSubmitting}
                className="w-full bg-slate-900 hover:bg-blue-600 cursor-pointer text-white font-bold py-5 rounded-2xl transition-all flex items-center justify-center gap-2 group disabled:opacity-50 shadow-xl shadow-blue-900/10"
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
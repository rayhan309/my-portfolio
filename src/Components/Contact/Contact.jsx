"use client";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Send, User, Mail, MessageSquare, CheckCircle, ArrowRight } from "lucide-react";
import { TextField, InputAdornment } from "@mui/material";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProfessionalContact() {
  const sectionRef = useRef(null);
  const infoRef = useRef(null);
  const formRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

  // GSAP Entrance Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-title", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });

      gsap.from(".info-item", {
        x: -30,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  };

  return (
    <section ref={sectionRef} id="contact" className="py-24 lg:py-32 px-6 lg:px-24 relative overflow-hidden bg-white">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 blur-[120px] rounded-full -mr-64 -mt-32" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/20 blur-[120px] rounded-full -ml-64 -mb-32" />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* Left Side: Brand Identity */}
        <div ref={infoRef} className="space-y-12">
          <div className="overflow-hidden">
            <h2 className="contact-title text-6xl md:text-8xl font-black tracking-tighter text-slate-900 uppercase italic leading-[0.85]">
              LET'S START <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "1px #0f172a" }}>A </span>
              <span className="text-blue-600">PROJECT.</span>
            </h2>
          </div>

          <p className="info-item text-slate-500 text-xl max-w-md font-medium leading-relaxed italic">
            নতুন কোনো আইডিয়া বা প্রজেক্ট নিয়ে কথা বলতে চান? আমি আপনার সপ্নকে বাস্তবে রূপ দিতে প্রস্তুত।
          </p>

          <div className="space-y-8">
            <motion.div whileHover={{ x: 10 }} className="info-item flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-[2rem] bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                <Mail size={28} />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-[0.3em] font-black mb-1">Send an Email</p>
                <p className="font-bold text-slate-900 text-xl lg:text-2xl italic tracking-tight">ihaveawonderfull@gmail.com</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side: MUI Powered Form Card */}
        <motion.div
          ref={formRef}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-white p-8 md:p-14 rounded-[3.5rem] border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] relative"
        >
          <AnimatePresence mode="wait">
            {isSubmitSuccessful ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center py-12"
              >
                <div className="w-24 h-24 bg-green-50 rounded-[2.5rem] flex items-center justify-center mx-auto mb-8">
                  <CheckCircle size={48} className="text-green-500" />
                </div>
                <h3 className="text-4xl font-black text-slate-900 uppercase italic tracking-tighter">Awesome!</h3>
                <p className="text-slate-500 mt-4 font-medium italic">আপনার মেসেজটি সফলভাবে পৌঁছেছে।</p>
                <button
                  onClick={() => reset()}
                  className="mt-10 px-8 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-blue-600 transition-all"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 gap-8">
                  <TextField
                    fullWidth
                    label="YOUR FULL NAME"
                    variant="standard"
                    {...register("name", { required: "নাম প্রয়োজন" })}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    InputProps={{
                      startAdornment: <InputAdornment position="start"><User size={18} className="mr-2 text-slate-400" /></InputAdornment>,
                    }}
                    sx={textFieldStyles}
                  />

                  <TextField
                    fullWidth
                    label="EMAIL ADDRESS"
                    variant="standard"
                    {...register("email", {
                      required: "ইমেইল প্রয়োজন",
                      pattern: { value: /^\S+@\S+$/i, message: "সঠিক ইমেইল দিন" }
                    })}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    InputProps={{
                      startAdornment: <InputAdornment position="start"><Mail size={18} className="mr-2 text-slate-400" /></InputAdornment>,
                    }}
                    sx={textFieldStyles}
                  />

                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="TELL ME ABOUT THE PROJECT"
                    variant="standard"
                    {...register("message", { required: "মেসেজ লিখুন" })}
                    error={!!errors.message}
                    helperText={errors.message?.message}
                    InputProps={{
                      startAdornment: <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 1.5 }}><MessageSquare size={18} className="mr-2 text-slate-400" /></InputAdornment>,
                    }}
                    sx={textFieldStyles}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full py-6 bg-slate-900 text-white rounded-[2rem] font-black uppercase italic tracking-[0.2em] flex items-center justify-center gap-4 group disabled:opacity-50 transition-all hover:bg-blue-600 shadow-2xl shadow-blue-900/20"
                >
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </motion.button>
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

// Custom MUI Styles to match your Brutalist/Modern UI
const textFieldStyles = {
  '& .MuiInput-underline:before': { borderBottomColor: '#f1f5f9' },
  '& .MuiInput-underline:after': { borderBottomColor: '#2563eb' },
  '& .MuiInputLabel-root': {
    color: '#94a3b8',
    fontWeight: 900,
    fontSize: '0.75rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase'
  },
  '& .MuiInputLabel-root.Mui-focused': { color: '#2563eb' },
  '& .MuiInputBase-input': { fontWeight: 700, fontSize: '1.1rem', color: '#0f172a', py: 2 }
};
import { motion } from "framer-motion";
import { Linkedin, Github, Twitter, ArrowUpRight, Heart } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="relative bg-[#050505] pt-40 pb-10 px-6 lg:px-24 overflow-hidden">

            {/* Background Decorative Element */}

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />



            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row justify-between items-start gap-12">



                    {/* Big CTA Section */}

                    <motion.div

                        initial={{ opacity: 0, y: 50 }}

                        whileInView={{ opacity: 1, y: 0 }}

                        viewport={{ once: true }}

                        className="flex-1"

                    >

                        <h2 className="text-gray-500 font-mono text-sm mb-6 uppercase tracking-[0.3em]">

                            Next Chapter

                        </h2>

                        <a

                            href="mailto:abu.rayhan@email.com"

                            className="group relative inline-block text-5xl md:text-8xl font-black tracking-tighter hover:text-blue-500 transition-colors duration-500"

                        >

                            LET'S TALK.

                            <motion.span

                                className="absolute -bottom-2 left-0 w-0 h-2 bg-blue-600 group-hover:w-full transition-all duration-500"

                            />

                        </a>

                        <p className="mt-8 text-gray-400 text-lg max-w-sm leading-relaxed">

                            আপনার কি কোনো দারুণ আইডিয়া আছে? চলুন সেটাকে কোডের মাধ্যমে বাস্তবে রূপ দেই।

                        </p>

                    </motion.div>



                    {/* Navigation & Social Links */}

                    <div className="flex flex-col gap-10 min-w-[200px]">

                        <div>

                            <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Connect</h3>

                            <ul className="space-y-3">

                                {[

                                    { name: "LinkedIn", icon: <Linkedin size={16} />, url: "#" },

                                    { name: "GitHub", icon: <Github size={16} />, url: "#" },

                                    { name: "Twitter", icon: <Twitter size={16} />, url: "#" }

                                ].map((social) => (

                                    <li key={social.name}>

                                        <a href={social.url} className="flex items-center gap-2 text-gray-500 hover:text-white transition group font-medium">

                                            {social.icon} {social.name}

                                            <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />

                                        </a>

                                    </li>

                                ))}

                            </ul>

                        </div>

                    </div>

                </div>





                {/* Bottom Bar */}

                <div className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">

                    <div className="text-gray-500 font-mono text-xs uppercase tracking-tighter">

                        Designed & Developed by <span className="text-white font-bold tracking-normal uppercase">Abu Rayhan</span>

                    </div>



                    {/* Time & Location Display (Adds a pro touch) */}

                    <div className="hidden lg:flex gap-10 text-[10px] text-gray-600 font-mono uppercase tracking-[0.2em]">

                        <div>Loc: Dhaka, BD</div>

                        <div>Time: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} GMT+6</div>

                    </div>



                    <div className="flex items-center gap-2 text-gray-600 text-xs">

                        © {currentYear} <Heart size={12} className="text-red-600 animate-pulse" /> All Rights Reserved.

                    </div>

                </div>

            </div>



            {/* Large Watermark Text */}

            <div className="absolute -bottom-8 select-none pointer-events-none opacity-[0.02]">

                <h2 className="text-[20rem] font-black leading-none">RAYHAN</h2>

            </div>

        </footer>
    );
};

export default Footer;
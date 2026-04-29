"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Hero() {
    return (
        <section className="relative min-h-screen lg:h-[80vh] overflow-hidden bg-[#020617] justify-items-center flex z-99">

            {/* BACKGROUND */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-black -z-20" />

            {/* ANIMATED GLOW */}
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute right-[10%] top-[30%] w-[280px] h-[280px] bg-cyan-400/10 blur-[120px] rounded-full"
            />

            {/* FLOATING RINGS */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute top-20 right-16 w-20 h-20 border border-cyan-400/30 rounded-full"
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-28 right-20 w-8 h-8 border border-purple-400/30 rounded-full"
            />

            {/* FLOATING DOT */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute right-10 top-[55%] w-3 h-3 bg-cyan-400 rounded-full"
            />

            {/* EXTRA CIRCULAR ELEMENTS */}

            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute w-[260px] h-[260px] border border-cyan-400/10 rounded-full top-[20%] left-[40%]"
            />

            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-[180px] h-[180px] border border-purple-400/10 rounded-full top-[30%] left-[45%]"
            />

            <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute w-[100px] h-[100px] bg-cyan-400/5 blur-[40px] rounded-full top-[40%] left-[50%]"
            />

            {/* PARTICLES */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{ y: [0, -15, 0], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 3 + i, repeat: Infinity }}
                    className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full"
                    style={{
                        left: `${20 + i * 10}%`,
                        top: `${60 + i * 3}%`,
                    }}
                />
            ))}

            {/* GRID */}
            <div className="w-full px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-3 items-center gap-8 ">
                {/* LEFT */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col justify-center min-h-auto lg:h-full max-w-[420px] pt-30 lg:pt-0"
                >
                    <div className="space-y-3">
                        <p className="text-[1.2rem] text-slate-400">I'm</p>

                        <h1 className="text-4xl sm:text-5xl lg:text-[2.8rem] font-semibold text-white leading-[1.1]">
                            Aastha Chaudhary,
                            <br />
                            <span className="text-[1.5rem] text-cyan-300 drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                                Full Stack Developer
                            </span>
                        </h1>

                        <p className="text-slate-400 text-[1.2rem] leading-6">
                            I build high-performance web applications and premium digital
                            experiences that help brands scale and grow.
                        </p>

                        <div className="flex gap-4 items-center">
                            <Link
                                href="/contact"
                                className="rounded-full bg-cyan-600 px-6 py-3 text-black text-sm font-semibold hover:scale-105 transition"
                            >
                                Hire Me →
                            </Link>

                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-12 h-12 rounded-full bg-cyan-400/20 flex items-center justify-center border border-cyan-400/30"
                            >
                                <Play size={16} className="text-cyan-300" />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* CENTER IMAGE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative flex justify-center items-end h-auto lg:h-full"
                >
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="relative translate-y-12"
                    >
                        <Image
                            src="/photo.png"
                            alt="Aastha"
                            width={420}
                            height={560}
                            className="object-contain"
                            priority
                        />
                    </motion.div>

                    {/* FLOATING BADGE */}
                    <motion.div
                        animate={{ y: [0, -12, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute right-[-20px] top-[40%] bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-xl text-xs text-white"
                    >
                        ⚡ Fast & Scalable
                    </motion.div>
                    <motion.div
                        animate={{ y: [0, -12, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute left-[-30px] top-[55%] bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-xl text-xs text-white"
                    >
                        🚀 Production Ready
                    </motion.div>
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="absolute right-[20%] bottom-[20%] bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-xl text-xs text-white"
                    >
                        🎯 Conversion Focused
                    </motion.div>
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity }}
                        className="absolute left-[10%] bottom-[15%] bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-xl text-xs text-white"
                    >
                        🔒 Secure Systems
                    </motion.div>
                </motion.div>

                {/* RIGHT */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex flex-col justify-center h-auto lg:h-full max-w-[360px] ml-auto pt-30 lg:pt-0"
                >
                    <div className="space-y-4">
                        <p className="text-[1.2rem] text-cyan-300 uppercase tracking-widest">
                            Specialized In
                        </p>

                        <h3 className="text-white font-semibold text-[1.5rem]">
                            Building scalable and high-performance web platforms
                        </h3>

                        <p className="text-slate-400 text-[1.2rem] leading-6">
                            Creating fast, modern, and conversion-focused digital experiences.
                        </p>

                        <div className="flex gap-3 pt-4">
                            {[
                                { Icon: FaGithub, link: "#" },
                                { Icon: FaXTwitter, link: "#" },
                                { Icon: FaLinkedinIn, link: "#" },
                            ].map(({ Icon, link }, i) => (
                                <motion.a
                                    key={i}
                                    whileHover={{ scale: 1.2 }}
                                    href={link}
                                    className="w-10 h-10 rounded-full bg-[#0f172a] border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition"
                                >
                                    <Icon size={14} />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
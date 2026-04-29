"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Folder, Briefcase, User, Mail } from "lucide-react";

const items = [
    { title: "Projects", href: "/projects", icon: Folder },
    { title: "Services", href: "/services", icon: Briefcase },
    { title: "About", href: "/experience", icon: User },
    { title: "Contact", href: "/contact", icon: Mail },
];

export default function GatewaySection() {
    return (
        <section className="mx-auto max-w-6xl px-6 py-10">

            {/* TEXT */}
            {/* TEXT BLOCK */}
            <div className="text-center mb-10 max-w-2xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                    Explore the work behind the experience
                </h2>

                <p className="text-sm text-slate-400 mt-3 leading-6">
                    From product-focused websites to scalable platforms, each section reflects how design and engineering come together to deliver real-world impact.
                </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

                {items.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.08 }}
                        >
                            <Link
                                href={item.href}
                                className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-5 h-[140px] hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-1"
                            >
                                {/* ICON */}
                                <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center border border-cyan-400/20 group-hover:scale-110 transition">
                                    <Icon size={18} className="text-cyan-300" />
                                </div>

                                {/* TEXT */}
                                <div>
                                    <h3 className="text-white font-medium text-sm">
                                        {item.title}
                                    </h3>

                                    <p className="text-xs text-slate-400 mt-1 group-hover:text-cyan-300 transition">
                                        Explore →
                                    </p>
                                </div>

                                {/* HOVER GLOW */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-xl" />
                            </Link>
                        </motion.div>
                    );
                })}

            </div>
        </section>
    );
}
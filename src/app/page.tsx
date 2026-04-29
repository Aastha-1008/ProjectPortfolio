"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FreelanceMarquee } from "@/components/freelance-marquee";
import { FreelanceSpotlight } from "@/components/freelance-spotlight";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { freelanceWork, fullTimeExperience, metrics } from "@/lib/data";
import Hero from "./Hero/page";
import GatewaySection from "./Hero/gateway";
import WorkProcess from "./Hero/workprocess";


export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#020617] overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-black -z-20" />

      {/* GLOBAL GLOW (optional but 🔥) */}
      <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-cyan-400/10 blur-[140px] rounded-full -z-10" />
      <div className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] bg-purple-400/10 blur-[120px] rounded-full -z-10" />

      {/* CONTENT */}
      <div className="relative z-10">

        {/* ================= HERO ================= */}
        <Hero />

        {/* ================= METRICS ================= */}
        <section className="mx-auto max-w-6xl px-6 grid grid-cols-2 md:grid-cols-3 gap-6 mt-16 lg:mt-0">

          {metrics.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}

              className={`
        rounded-2xl border border-white/10 bg-white/5 p-6 text-center 
        backdrop-blur-md transition hover:-translate-y-1

        ${index === 2 ? "col-span-2 md:col-span-1" : ""}
      `}
            >
              <p className="text-4xl font-bold text-cyan-400">
                {item.value}
              </p>

              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                {item.label}
              </p>
            </motion.div>
          ))}

        </section>

        {/* ================= MARQUEE ================= */}
        <div className="px-6 py-6">
          <FreelanceMarquee />
        </div>

        {/* ================= GATEWAY ================= */}
        <GatewaySection />

        {/* ================= SPOTLIGHT ================= */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <FreelanceSpotlight />
        </section>

        {/* ================= WORK PROCESS ================= */}
        <WorkProcess />

        {/* ================= TESTIMONIAL ================= */}
        <section className="mx-auto max-w-6xl px-6 ">
          <TestimonialCarousel />
        </section>
      </div>
    </main>
  );
}
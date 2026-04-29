"use client";

import { useState } from "react";
import Image from "next/image";
import { featuredProjects } from "@/lib/data";

export default function ProjectsPage() {
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  return (
    <main className="px-6 py-16 bg-[#0b1220] min-h-screen">

      {/* ================= HEADER ================= */}
      <section className="mb-16 max-w-5xl">
        <p className="text-sm text-cyan-400 uppercase tracking-widest mb-3">
          Projects
        </p>

        <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
          Production-ready work, not side experiments.
        </h1>

        <p className="text-slate-400 mt-6 max-w-2xl">
          Highlights actual live work from coffee brands, elder care, leadership
          events, and industry campaigns so visitors can see the breadth of your
          design and development output.
        </p>
      </section>

      {/* ================= GRID ================= */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, idx) => (
          <ProjectCard
            key={project.title}
            project={project}
            onClick={() => setModalIndex(idx)}
          />
        ))}
      </div>

      {/* ================= MODAL ================= */}
      {modalIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur p-4">
          <div className="relative w-full max-w-3xl rounded-[28px] bg-[#020617] border border-white/10 overflow-hidden">

            {/* CLOSE */}
            <button
              onClick={() => setModalIndex(null)}
              className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black"
            >
              ✕
            </button>

            {/* IMAGE */}
            <div className="relative h-64 w-full">
              <Image
                src={featuredProjects[modalIndex].image}
                alt={featuredProjects[modalIndex].title}
                fill
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h2 className="text-white text-2xl font-semibold">
                {featuredProjects[modalIndex].title}
              </h2>

              <p className="text-slate-400 mt-3">
                {featuredProjects[modalIndex].outcome}
              </p>

              <a
                href={featuredProjects[modalIndex].url}
                target="_blank"
                className="inline-block mt-5 px-5 py-2 rounded-full bg-cyan-400 text-black font-semibold"
              >
                Visit Live →
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

/* ================= CARD COMPONENT ================= */

function ProjectCard({ project, onClick }: any) {
  return (
    <div
      onClick={onClick}
      className="group relative h-[260px] cursor-pointer"
    >
      {/* CARD */}
      <div className="relative h-full w-full rounded-[20px] overflow-hidden border border-white/10 bg-[#020617]">

        {/* IMAGE */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        {/* TEXT */}
        <div className="absolute bottom-5 left-5 right-20 z-10">
          <h3 className="text-white text-lg font-semibold">
            {project.title}
          </h3>
          <p className="text-slate-300 text-xs mt-1">
            Designing the Beauty Behind the Data.
          </p>
        </div>

        {/* ================= CORNER NOTCH ================= */}

        {/* CUT (same as page bg) */}
        <div className="absolute bottom-0 right-0 w-[70px] h-[70px] bg-[#0b1220] rounded-tl-[30px] z-20" />

        {/* BUTTON */}
        <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center text-black text-sm shadow-lg z-30 group-hover:scale-110 transition">
          →
        </div>
      </div>
    </div>
  );
}
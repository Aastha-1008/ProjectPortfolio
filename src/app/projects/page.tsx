"use client";
import { useState } from "react";
import Image from "next/image";
import { featuredProjects } from "@/lib/data";
import { CheckCircle, Layout, Zap } from "lucide-react";

export default function ProjectsPage() {
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const getTechColor = (tech: string) => {
    const t = tech.toLowerCase();

    if (["react", "next", "javascript", "typescript", "html", "css"].some(k => t.includes(k))) {
      return "bg-blue-50 text-blue-700 border-blue-200";
    }

    if (["node", "express", "spring", "java"].some(k => t.includes(k))) {
      return "bg-green-50 text-green-700 border-green-200";
    }

    if (["mongodb", "mysql", "postgres", "firebase"].some(k => t.includes(k))) {
      return "bg-purple-50 text-purple-700 border-purple-200";
    }

    if (["figma", "design", "ui", "ux"].some(k => t.includes(k))) {
      return "bg-pink-50 text-pink-700 border-pink-200";
    }

    return "bg-orange-50 text-orange-700 border-orange-200";
  };

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">

      {/* HEADER */}
      <section className="mb-12 flex flex-col gap-4">
        <p className="section-kicker">Projects</p>
          <h1 className="page-title">Production-ready work, not side experiments.</h1>
          <p className="page-copy max-w-2xl">
            Highlights actual live work from coffee brands, elder care, leadership events, and industry campaigns so visitors can see the breadth of your design and development output.
          </p>
      </section>

      {/* GRID */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, idx) => (
          <button
            key={project.title}
            onClick={() => setModalIndex(idx)}
            className="group rounded-[28px] overflow-hidden border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-cyan-200/70"
          >
            {/* IMAGE */}
            <div className="relative h-52 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              {/* CATEGORY */}
              <span className="absolute bottom-3 left-3 rounded-full bg-black/40 px-3 py-1 text-xs text-white backdrop-blur">
                {project.category}
              </span>
            </div>

            {/* CONTENT */}
            <div className="p-5 text-left">
              <h2 className="text-lg font-semibold text-slate-900 group-hover:text-cyan-600 transition">
                {project.title}
              </h2>
              <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                {project.outcome}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* MODAL */}
      {modalIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">

          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[32px] bg-white shadow-2xl">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setModalIndex(null)}
              className="absolute top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-md shadow-lg transition hover:scale-105 hover:bg-black"
            >
              ✕
            </button>

            {/* IMAGE */}
            <div className="relative h-64 w-full">
              <Image
                src={featuredProjects[modalIndex].image}
                alt={featuredProjects[modalIndex].title}
                fill
                className="object-cover rounded-t-[32px]"
              />
            </div>

            {/* CONTENT */}
            <div className="p-8">
              <span className="inline-block rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700 mb-3">
                {featuredProjects[modalIndex].category}
              </span>

              <div className="mb-6">

                {/* TITLE */}
                <h2 className="font-display text-2xl lg:text-3xl font-semibold text-slate-950 tracking-tight">
                  {featuredProjects[modalIndex].title}
                </h2>

                {/* DIVIDER */}
                <div className="mt-3 h-[2px] w-12 bg-cyan-400 rounded-full" />

                {/* DESCRIPTION */}
                <p className="mt-4 text-[15px] leading-7 text-slate-600 max-w-2xl">
                  {featuredProjects[modalIndex].outcome}
                </p>

              </div>

              {/* STACK */}
              <div className="flex flex-wrap gap-2 mb-4">
                {featuredProjects[modalIndex].stack.split(",").map((tech) => (
                  <span
                    key={tech}
                    className={`rounded-full px-3 py-1 text-xs font-medium border transition hover:scale-105 ${getTechColor(tech)}`}
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>

              {/* HIGHLIGHTS */}
              <div className="grid gap-3 mb-2 sm:grid-cols-2">
                {featuredProjects[modalIndex].highlights.map((h, i) => {
                  const icons = [
                    <Layout className="h-4 w-4" />,
                    <Zap className="h-4 w-4" />,
                    <CheckCircle className="h-4 w-4" />,
                  ];

                  return (
                    <div
                      key={h}
                      className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm transition hover:border-cyan-200 hover:shadow-md"
                    >
                      {/* ICON */}
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600">
                        {icons[i % icons.length]}
                      </div>

                      {/* TEXT */}
                      <p className="leading-6">{h}</p>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <a
                href={featuredProjects[modalIndex].url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Visit Live Site →
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
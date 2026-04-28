"use client";
import Image from "next/image";
import { useState } from "react";
import { featuredProjects } from "@/lib/data";


export function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState(0);
  const project = featuredProjects[activeProject];

  return (
    <div className="grid gap-6 lg:grid-cols-[0.42fr_0.58fr]">
      <div className="panel p-4 max-h-[calc(100vh-120px)] overflow-y-auto pr-2">
        <div className="grid gap-3">
          {featuredProjects.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActiveProject(index)}
              className={`cursor-pointer rounded-[24px] border px-5 py-5 text-left transition duration-300
                ${activeProject === index
                  ? "border-cyan-300/40 bg-slate-950 text-white shadow-[0_18px_50px_rgba(8,16,29,0.28)]"
                  : "border-slate-100 bg-slate-50/80 text-slate-900 hover:-translate-y-0.5 hover:border-cyan-200/60 hover:bg-cyan-50/40 hover:shadow-md"}
              `}
              style={{ boxShadow: activeProject === index ? undefined : '0 2px 8px rgba(8,16,29,0.06)' }}
            >
              <p
                className={`text-xs font-semibold uppercase tracking-[0.24em] ${
                  activeProject === index ? "text-cyan-300" : "text-cyan-700/80"
                }`}
              >
                {item.category}
              </p>
              <h3 className={`mt-3 text-xl font-semibold ${activeProject === index ? "" : "text-slate-900"}`}>{item.title}</h3>
              <p
                className={`mt-3 text-sm leading-7 ${
                  activeProject === index ? "text-slate-300" : "text-slate-700"
                }`}
              >
                {item.outcome}
              </p>
            </button>
          ))}
        </div>
      </div>

      <article className="panel overflow-hidden p-4">
        <div className="relative overflow-hidden rounded-[30px] border border-slate-200">
          <Image
            src={project.image}
            alt={project.title}
            width={1400}
            height={900}
            className="h-[340px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,10,20,0.1),rgba(5,10,20,0.78))]" />
          <div className="absolute bottom-5 left-5 right-5">
            <span className="inline-flex rounded-full border border-white/12 bg-black/35 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100 backdrop-blur-sm">
              {project.category}
            </span>
            <h3 className="mt-4 font-display text-4xl tracking-[-0.03em] text-white">
              {project.title}
            </h3>
            <p className="mt-3 max-w-2xl text-base leading-8 text-slate-200">
              {project.outcome}
            </p>
          </div>
        </div>

        <div className="grid gap-6 p-4 pt-6 sm:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-500">
              Tech Stack
            </p>
            <p className="mt-3 text-base leading-8 text-slate-700">{project.stack}</p>
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Visit Live Site
            </a>
          </div>
          <div className="grid gap-3">
            {project.highlights.map((item) => (
              <div
                key={item}
                className="rounded-[20px] bg-[var(--soft)] px-4 py-4 text-sm leading-7 text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/lib/data";

export function TestimonialCarousel() {
  const totalPages = Math.ceil(testimonials.length / 2);
  const [pageIndex, setPageIndex] = useState(0);
  const visibleReviews = [
    testimonials[pageIndex * 2],
    testimonials[(pageIndex * 2 + 1) % testimonials.length],
  ];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPageIndex((current) => (current + 1) % totalPages);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [totalPages]);

  return (
    <div className="panel panel-dark overflow-hidden rounded-[28px] p-8">
      <div className="mb-8 max-w-3xl">
        <p className="section-kicker text-cyan-300">Client Feedback</p>
        <h2 className="mt-3 text-3xl font-semibold text-white">What clients say about working together</h2>
        <p className="mt-4 text-sm leading-7 text-slate-300">
          Highlights the quality, clarity, and speed behind the sites and event platforms I build.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {visibleReviews.map((review, idx) => (
          <article key={`${review.name}-${idx}`} className="rounded-[24px] border border-slate-700/30 bg-slate-950/90 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.18)]">
            <p className="text-base leading-8 text-slate-200">“{review.quote}”</p>
            <div className="mt-5">
              <p className="text-sm font-semibold text-white">{review.name}</p>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{review.role}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-slate-700/40 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={`page-${idx}`}
              type="button"
              onClick={() => setPageIndex(idx)}
              className={`h-2.5 w-8 rounded-full transition ${idx === pageIndex ? "bg-cyan-300" : "bg-slate-600 hover:bg-slate-500"}`}
              aria-label={`Show page ${idx + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setPageIndex((pageIndex - 1 + totalPages) % totalPages)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-200 transition hover:bg-slate-800"
            aria-label="Previous testimonials"
          >
            <span aria-hidden="true">‹</span>
          </button>
          <button
            type="button"
            onClick={() => setPageIndex((pageIndex + 1) % totalPages)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-200 transition hover:bg-slate-800"
            aria-label="Next testimonials"
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>
      </div>
    </div>
  );
}

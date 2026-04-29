"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { testimonials } from "@/lib/data";

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const review = testimonials[index];

  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] min-h-[70vh] flex items-center overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10" />

      {/* GLOW */}
      <div className="absolute left-[20%] top-[40%] w-[500px] h-[500px] bg-green-400/10 blur-[150px] rounded-full" />

      {/* FULL WIDTH CONTAINER */}
      <div className="w-full px-6 lg:px-20 grid lg:grid-cols-3 gap-10 items-center">

        {/* LEFT IMAGE */}
        <div className="relative">
          <div className="rounded-[28px] overflow-hidden border border-white/10 bg-black">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="client"
              width={500}
              height={600}
              className="object-cover w-full h-[420px] hover:scale-105 transition duration-700"
            />
          </div>

          {/* BADGE */}
          <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2 text-xs text-slate-300">
            10+ Happy Clients
          </div>
        </div>

        {/* CENTER CONTENT */}
        <div className="space-y-6 text-center lg:text-left">

          <p className="text-sm text-green-400 uppercase tracking-widest">
            Client Review
          </p>

          <h2 className="text-4xl lg:text-5xl font-semibold text-white leading-tight">
            Trusted by clients <br />
            <span className="text-yellow-400">worldwide.</span>
          </h2>

          <p className="text-slate-400 text-sm max-w-md mx-auto lg:mx-0">
            Real stories and heartfelt feedback from clients who trusted my work to deliver results.
          </p>

          {/* STARS */}
          <div className="flex justify-center lg:justify-start gap-1 text-yellow-400 text-xl">
            ★★★★★
          </div>

          {/* REVIEW CARD */}
          <div className="bg-black/60 border border-white/10 rounded-2xl p-6 backdrop-blur-md max-w-md mx-auto lg:mx-0">
            <p className="text-slate-200 leading-7 text-sm">
              “{review.quote}”
            </p>

            <div className="mt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center text-black font-bold">
                {review.name[0]}
              </div>
              <div>
                <p className="text-white text-sm font-semibold">{review.name}</p>
                <p className="text-xs text-slate-400">{review.role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="rounded-[28px] overflow-hidden border border-white/10 bg-black">
            <Image
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
              alt="client"
              width={500}
              height={600}
              className="object-cover w-full h-[420px] hover:scale-105 transition duration-700"
            />
          </div>

          {/* GOOGLE BADGE */}
          <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2 flex items-center gap-2">
            <span className="text-green-400 text-lg font-bold">G</span>
            <div>
              <p className="text-xs text-slate-400">5 ★ Ratings</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
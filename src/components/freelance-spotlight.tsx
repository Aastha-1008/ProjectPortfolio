"use client";

import { useEffect, useState } from "react";
import { freelanceWork } from "@/lib/data";

const palettes = [
  {
    shell: "from-[#1a1008] via-[#6f3415] to-[#f4a340]",
    accent: "Editorial Coffee Story",
    mood: "Warm, tactile, brand-led energy",
  },
  {
    shell: "from-[#0b1715] via-[#115746] to-[#7be7da]",
    accent: "Trust-First Service UX",
    mood: "Calm clarity with premium reassurance",
  },
  {
    shell: "from-[#121528] via-[#2f4698] to-[#9a6bff]",
    accent: "Campaign-Led Launch",
    mood: "Bold motion and high-visibility presence",
  },
  {
    shell: "from-[#10161f] via-[#244f79] to-[#86d8ff]",
    accent: "Structured Brand System",
    mood: "Modern polish with clear digital rhythm",
  },
  {
    shell: "from-[#0f1a2e] via-[#1a3a52] to-[#2d5a7b]",
    accent: "Enterprise Event Platform",
    mood: "Professional depth with global reach",
  },
];

export function FreelanceSpotlight() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = freelanceWork[activeIndex];
  const palette = palettes[activeIndex % palettes.length];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % freelanceWork.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="freelance-stage-new">
      <div className="freelance-header-new">
        <div className="freelance-header-new__content">
          <p className="section-kicker">Freelance Focus</p>
          <h2 className="mt-3 font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[-0.05em] text-white px-4 sm:px-0">
            Hand-crafted digital experiences.
          </h2>
        </div>
      </div>

       
    </section>
  );
}

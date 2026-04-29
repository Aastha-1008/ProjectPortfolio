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

      <div className="freelance-showcase-new">
        <div className={`freelance-canvas-new bg-gradient-to-br ${palette.shell}`}>
          <div className="freelance-canvas-new__background">
            <div className="freelance-canvas-new__mesh" />
            <div className="freelance-canvas-new__glow" />
          </div>

          <div className="freelance-canvas-new__content" key={active.name}>
            <div className="freelance-canvas-new__header">
              <div className="freelance-canvas-new__chrome">
                <span />
                <span />
                <span />
              </div>
              <div className="freelance-canvas-new__url">{active.url}</div>
            </div>

            <div className="freelance-canvas-new__body">
              <span className="freelance-pill-new">{palette.accent}</span>
              <h3 className="freelance-canvas-new__title">{active.name}</h3>
              <p className="freelance-canvas-new__description">{active.summary}</p>

              <div className="freelance-features-new">
                <div className="freelance-feature-new">
                  <span className="freelance-feature-new__label">Mood</span>
                  <p className="freelance-feature-new__value">{palette.mood}</p>
                </div>
                <div className="freelance-feature-new">
                  <span className="freelance-feature-new__label">Focus</span>
                  <p className="freelance-feature-new__value">{active.focus}</p>
                </div>
              </div>

              <a
                href={active.url}
                target="_blank"
                rel="noreferrer"
                className="freelance-cta-new"
              >
                Explore Project
                <span className="freelance-cta-new__arrow">→</span>
              </a>
            </div>
          </div>

          <div className="freelance-canvas-new__footer">
            <div className="freelance-progress-new">
              {freelanceWork.map((item, index) => (
                <span
                  key={item.name}
                  className={`freelance-progress-new__bar ${
                    index === activeIndex ? "freelance-progress-new__bar--active" : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="freelance-controls-new">
          <p className="freelance-header-new__subtitle">
            Each project represents a unique creative direction, tailored to bring out the best in every brand.
          </p>
          <p className="freelance-controls-new__label">Featured Projects</p>
          <div className="freelance-items-new">
            {freelanceWork.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={item.name}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`freelance-item-new ${isActive ? "freelance-item-new--active" : ""}`}
                >
                  <div className="freelance-item-new__number">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="freelance-item-new__content">
                    <h4 className="freelance-item-new__name">{item.name}</h4>
                    <p className="freelance-item-new__focus">{item.focus}</p>
                  </div>
                  <div className={`freelance-item-new__indicator ${isActive ? "freelance-item-new__indicator--active" : ""}`} />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

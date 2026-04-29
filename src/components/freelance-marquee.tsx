"use client";

const items = [
  "Samarth Elder Care",
  "Conclave Techmedia",
  "Tresso Coffee",
  "Rural Coffee Works",
];

export function FreelanceMarquee() {
  return (
    <div className="marquee-shell overflow-hidden relative p-4">

      {/* FADE EDGES (optional but premium) */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#020617] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#020617] to-transparent z-10" />

      <div className="marquee-track flex w-max animate-marquee">
        {[...items, ...items].map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="marquee-chip flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 mx-2"
          >
            <span className="marquee-dot w-2 h-2 bg-cyan-400 rounded-full" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
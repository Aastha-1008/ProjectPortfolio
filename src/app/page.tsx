import Image from "next/image";
import Link from "next/link";
import { FreelanceMarquee } from "@/components/freelance-marquee";
import { FreelanceSpotlight } from "@/components/freelance-spotlight";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { freelanceWork, fullTimeExperience, metrics } from "@/lib/data";

const gatewayItems = [
  {
    title: "Services",
    copy: "A clear breakdown of what I offer and how I help brands, businesses, and founders online.",
    href: "/services",
    label: "What I build",
    icon: "services",
  },
  {
    title: "Projects",
    copy: "A curated showcase of real websites with stronger storytelling and project presentation.",
    href: "/projects",
    label: "Selected work",
    icon: "projects",
  },
  {
    title: "About",
    copy: "My story, approach, and the experience that shapes how I build websites and digital experiences.",
    href: "/experience",
    label: "Learn more",
    icon: "experience",
  },
  {
    title: "Contact",
    copy: "Simple ways to get in touch if you want to discuss a website, redesign, or custom build.",
    href: "/contact",
    label: "Start a conversation",
    icon: "contact",
  },
] as const;

function GatewayIcon({ type }: { type: (typeof gatewayItems)[number]["icon"] }) {
  const common = "h-5 w-5";

  switch (type) {
    case "services":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common} aria-hidden="true">
          <path d="M4 7h16" />
          <path d="M7 12h10" />
          <path d="M10 17h4" />
          <rect x="3" y="4" width="18" height="16" rx="4" />
        </svg>
      );
    case "projects":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common} aria-hidden="true">
          <path d="M7 7h10v10H7z" />
          <path d="M4 12V7a3 3 0 0 1 3-3h5" />
          <path d="M20 12v5a3 3 0 0 1-3 3h-5" />
        </svg>
      );
    case "experience":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common} aria-hidden="true">
          <path d="M12 6v12" />
          <path d="M6 12h12" />
          <circle cx="12" cy="12" r="8.5" />
        </svg>
      );
    case "contact":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common} aria-hidden="true">
          <path d="m5 8 7 5 7-5" />
          <rect x="3" y="5" width="18" height="14" rx="3" />
        </svg>
      );
  }
}

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.22),transparent_28%),radial-gradient(circle_at_85%_10%,rgba(249,115,22,0.18),transparent_24%),radial-gradient(circle_at_50%_80%,rgba(168,85,247,0.12),transparent_28%),linear-gradient(180deg,#07111f_0%,#0b1628_50%,#0d1421_100%)]" />
        <div className="hero-noise" />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-18 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-10">
          <div className="hero-collage">
            <div className="hero-collage__portrait">
              <div className="hero-collage__portrait-stage">
                <div className="hero-collage__portrait-orbit" />
                <Image
                  src="/photo.png"
                  alt="Aastha Chaudhary portrait"
                  width={400}
                  height={700}
                  className="hero-collage__portrait-image"
                  priority
                />
                <div className="hero-collage__portrait-badge">Designer & Full Stack Developer</div>
              </div>
            </div>
          </div>

          <div className="hero-copy space-y-8 text-white">
            <span className="inline-flex w-fit items-center rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100">
              Available for freelance web projects
            </span>
            <div className="space-y-5">
              <h1 className="max-w-4xl font-display text-3xl leading-[0.92] tracking-[-0.055em] text-white sm:text-6xl lg:text-[3.25rem]">
                Premium websites and product experiences with stronger conversion and cleaner execution
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                I build modern web experiences for founders, businesses, and brands who want something better than a generic template.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/projects" className="btn-primary">
                View Projects
              </Link>
              <Link href="/experience" className="btn-secondary">
                See Work Experience
              </Link>
              <Link href="/contact" className="btn-ghost">
                Client Review
              </Link>
            </div>

          </div>

        </div>
        <div className="mx-auto max-w-8xl px-6 lg:px-10">
          <div className="hero-collage__metrics">
            {metrics.map((item) => (
              <article key={item.label} className="hero-metric glass rounded-[26px] p-5 transition duration-500 hover:-translate-y-1 hover:border-white/20">
                <p className="text-3xl font-semibold tracking-tight text-white">
                  {item.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.label}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="px-6 pb-10 lg:px-10">
          <FreelanceMarquee />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 lg:px-10">
        <p className="hero-intro">
          Software engineer focused on polished marketing sites, event platforms, and business-facing web experiences.
        </p>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {gatewayItems.map((item) => (
            <Link key={item.title} href={item.href} className="gateway-card">
              <div className="gateway-card__icon">
                <GatewayIcon type={item.icon} />
              </div>
              <p className="gateway-card__label">{item.label}</p>
              <h2 className="gateway-card__title">{item.title}</h2>
              <p className="gateway-card__copy">{item.copy}</p>
              <span className="gateway-card__cta">
                Explore
                <span aria-hidden="true" className="gateway-card__arrow">
                  ↗
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-18 lg:px-10">
        <FreelanceSpotlight />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-18 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          <article className="panel panel-dark relative overflow-hidden p-8 flex flex-col h-full">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
            <p className="section-kicker text-cyan-300">Design & Development</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Full-stack expertise in web experiences.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300 flex-grow">
              From concept to launch - brand strategy, UX design, responsive development, and performance optimization.
            </p>
            <div className="mt-8 grid gap-4">
              <div className="rounded-[18px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 px-5 py-5 hover:border-cyan-400/40 hover:bg-cyan-500/15 transition duration-300">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Frontend</p>
                <p className="mt-3 text-sm leading-7 text-slate-200">React, Next.js, TypeScript, Tailwind CSS, Wordpress, Canva, Responsive Design</p>
              </div>
              <div className="rounded-[18px] border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-purple-500/5 px-5 py-5 hover:border-purple-400/40 hover:bg-purple-500/15 transition duration-300">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">Backend & Tools</p>
                <p className="mt-3 text-sm leading-7 text-slate-200">SpringBoot, Python, AI Agents , API Integration, Database Design, Docker, GKE Deployment, Git Workflows</p>
              </div>
              <div className="rounded-[18px] border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-orange-500/5 px-5 py-5 hover:border-orange-400/40 hover:bg-orange-500/15 transition duration-300">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">Design Approach</p>
                <p className="mt-3 text-sm leading-7 text-slate-200">Figma, Photoshop, Canva, Brand Systems, UX Research, Motion Design, Accessibility</p>
              </div>
            </div>
          </article>

          <article className="panel p-8 flex flex-col h-full">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-6">
              <div>
                <p className="section-kicker-dark">Production at Scale</p>
                <h2 className="text-[1.25rem] mt-2 text-3xl font-semibold text-slate-950">
                  Full-time execution across events and campaign ecosystems
                </h2>
              </div>
              <p className="max-w-lg text-sm leading-7 text-slate-600 mt-2">
                This work supports your credibility, but it no longer visually competes with the freelance story.
              </p>
            </div>
            <div className="mt-2 grid gap-4 md:grid-cols-2 flex-grow">
              {fullTimeExperience.slice(0, 6).map((item, idx) => {
                const colors = [
                  { badge: "bg-blue-100 text-blue-700", border: "border-blue-200", hover: "hover:bg-blue-50", accent: "text-blue-600" },
                  { badge: "bg-emerald-100 text-emerald-700", border: "border-emerald-200", hover: "hover:bg-emerald-50", accent: "text-emerald-600" },
                  { badge: "bg-amber-100 text-amber-700", border: "border-amber-200", hover: "hover:bg-amber-50", accent: "text-amber-600" },
                  { badge: "bg-rose-100 text-rose-700", border: "border-rose-200", hover: "hover:bg-rose-50", accent: "text-rose-600" },
                  { badge: "bg-indigo-100 text-indigo-700", border: "border-indigo-200", hover: "hover:bg-indigo-50", accent: "text-indigo-600" },
                  { badge: "bg-violet-100 text-violet-700", border: "border-violet-200", hover: "hover:bg-violet-50", accent: "text-violet-600" },
                ];
                const color = colors[idx % colors.length];
                return (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`group relative overflow-hidden rounded-[24px] border ${color.border} bg-gradient-to-br from-white to-slate-50 px-6 py-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)] ${color.hover} flex flex-col h-full`}
                  >
                    <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-gradient-to-br from-slate-100/30 to-slate-50/30" />
                    <div className="relative flex flex-col h-full">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <p className={`inline-flex text-[0.6rem] font-semibold uppercase tracking-[0.18em] ${color.badge} rounded-full px-3 py-1`}>
                          Event Platform
                        </p>
                        <svg className={`w-5 h-5 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${color.accent}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </div>
                      <p className="text-[0.8rem] font-semibold text-slate-950 mb-1 group-hover:text-slate-900 transition">{item.name}</p>
                      <p className="text-xs leading-5 text-slate-600 group-hover:text-slate-700 transition mb-2 flex-grow">{item.summary}</p>
                      <p className={`text-[0.55rem] leading-4 font-semibold uppercase tracking-[0.10em] transition ${color.accent}`}>
                        {item.focus} →
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-18 lg:px-10">
        <TestimonialCarousel />
      </section>
    </main>
  );
}

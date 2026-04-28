import { TestimonialCarousel } from "@/components/testimonial-carousel";
import {ProjectShowcase} from "@/components/project-showcase";
import { services, testimonials } from "@/lib/data";
import Link from "next/link";

function GatewayIcon() {
  const common = "h-5 w-5";

  return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common} aria-hidden="true">
          <path d="M7 7h10v10H7z" />
          <path d="M4 12V7a3 3 0 0 1 3-3h5" />
          <path d="M20 12v5a3 3 0 0 1-3 3h-5" />
        </svg>
      );
}


export default function ServicesPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <p className="section-kicker">Services</p>
        <h1 className="page-title">What I can build for your business or brand</h1>

      </section>

      <section className="page-grid-3">
        {services.map((service) => (
          <article key={service.title} className="panel panel-dark p-8">
            <div className="gateway-card__icon1">
              
                <GatewayIcon/>
              </div>

            <h2 className="mt-4 text-2xl font-semibold text-cyan-300">{service.title}</h2>
            <p className="mt-4 text-[0.8rem] leading-6 text-slate-300">{service.description}</p>
          </article>
        ))}
      </section>

      <section className="mt-12">

        <section className="page-hero flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
          <p className="section-kicker">Projects</p>
          <h1 className="page-title">Production-ready work, not side experiments.</h1>
          <p className="page-copy max-w-2xl">
            Highlights actual live work from coffee brands, elder care, leadership events, and industry campaigns so visitors can see the breadth of your design and development output.
          </p>
          </div>

        <Link
            href="/projects"
            className="group inline-flex items-center gap-2 mb-3 rounded-full border border-cyan-300/40 bg-slate-950 px-6 py-3 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:bg-cyan-400 hover:text-slate-950 hover:shadow-[0_10px_30px_rgba(34,211,238,0.35)]"
          >
            View All Projects
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
        </Link>
        </section>

        <ProjectShowcase />

      </section>

      <section className="mx-auto max-w-7xl px-6 pb-18 lg:px-10 mt-12">
        <TestimonialCarousel />
      </section>

    </main>
  );
}

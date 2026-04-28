import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="page-shell">

      {/* HERO */}
      <section className="page-hero max-w-4xl">
        <p className="section-kicker">About</p>

        <h1 className="page-title text-4xl lg:text-6xl leading-tight tracking-tight">
          Designing and building{" "}
          <span className="text-cyan-400">
            high-impact digital experiences
          </span>
        </h1>

        <p className="page-copy mt-6 text-lg leading-8 text-slate-400">
          I help brands and founders move beyond templates by creating websites
          that combine design clarity, technical depth, and real business impact.
        </p>
      </section>

      {/* IMAGE + INTRO */}
      <section className="grid gap-10 lg:grid-cols-2 items-center mt-14">

        {/* IMAGE */}
        <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-xl flex justify-center">
          <Image
            src="/photo.png"
            alt="Aastha Chaudhary"
            width={400}
            height={500}
            className="w-full max-w-[400px] h-auto object-cover rounded-[24px]"
          />
        </div>

        {/* TEXT */}
        <article className="space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
            About Me
          </p>

          <h2 className="text-3xl lg:text-4xl font-semibold text-white leading-tight">
            I build digital experiences where design and engineering work seamlessly together.
          </h2>

          <p className="text-slate-400 leading-7">
            My focus is on creating websites and platforms that feel premium, perform reliably, and contribute to real business growth - not just visual appeal.
          </p>

          <p className="text-slate-400 leading-7">
            I work with brands, founders, and teams who want more than a template. Every project is approached with clarity, intention, and attention to detail - from structure and user flow to performance and scalability.
          </p>

          {/* WHAT I DO */}
          <div className="grid gap-4 mt-6">
            {[
              {
                title: "Design",
                desc: "Clean, intuitive UI with strong visual hierarchy",
              },
              {
                title: "Development",
                desc: "Scalable, high-performance applications",
              },
              {
                title: "Strategy",
                desc: "Aligning product with business outcomes",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md hover:bg-white/10 transition"
              >
                <p className="text-sm font-semibold text-cyan-400">
                  {item.title}
                </p>
                <p className="text-sm text-slate-400 mt-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </article>
      </section>

      {/* STORY + APPROACH */}
      <section className="grid gap-8 lg:grid-cols-2 mt-16">

        {/* STORY */}
        <article className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
            My Story
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-white">
            Building experiences that matter
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-400">
            The best digital products are built where design and engineering come together.
            That’s the foundation of my work—bringing clarity to structure, precision to
            performance, and intention to every detail.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-400">
            Each project is designed to go beyond visuals—focusing on usability, speed, and
            outcomes that matter. The goal is simple: create experiences that feel premium,
            work seamlessly, and deliver real results.
          </p>
        </article>

        {/* PROCESS */}
        <article className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
            My Process
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-white">
            Clear process, quality execution
          </h2>

          <div className="space-y-6 mt-8">
            {[
              "Understand your business & goals",
              "Design meaningful user experience",
              "Build scalable and performant solution",
              "Refine for quality and conversion",
            ].map((step, i) => (
              <div key={step} className="flex gap-4 items-start">
                <div className="h-8 w-8 flex items-center justify-center rounded-full bg-cyan-400 text-slate-950 text-sm font-bold">
                  {i + 1}
                </div>
                <p className="text-slate-300">{step}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      {/* STATS */}
      <section className="grid gap-6 lg:grid-cols-3 mt-16">
        {[
          { value: "10+", label: "Projects Delivered" },
          { value: "2+", label: "Years Experience" },
          { value: "Multi", label: "Industries" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 text-center"
          >
            <p className="text-4xl font-bold text-cyan-400">
              {stat.value}
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-400">
              {stat.label}
            </p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="text-center mt-20">
        <h2 className="text-3xl font-semibold text-white">
          Let’s build something great
        </h2>

        <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
          I’m available for freelance projects, product collaborations, and
          full-time roles. Let’s discuss how I can help your next project succeed.
        </p>

        <a
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:scale-105 hover:shadow-[0_10px_30px_rgba(34,211,238,0.4)]"
        >
          Start a Project →
        </a>
      </section>
    </main>
  );
}
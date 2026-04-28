"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent!");
  };

  return (
    <main className="page-shell">
      
      {/* HERO */}
      <section className="page-hero">
        <p className="section-kicker">Contact</p>
        <h1 className="page-title">
          Let’s build something impactful together
        </h1>
        <p className="page-copy max-w-2xl">
          Whether you need a modern website, dashboard, or product interface — 
          I’m available for freelance projects and collaborations.
        </p>
      </section>

      {/* MAIN GRID */}
      <section className="grid gap-10 lg:grid-cols-2 mt-14">
        
        {/* LEFT: CONTACT CARDS */}
        <div className="grid gap-5">
          
          {/* EMAIL */}
          <a
            href="mailto:aastha.chaudhary237@gmail.com"
            className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:bg-white/10 hover:-translate-y-1"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-300">
              <Mail className="h-5 w-5" />
            </div>

            <div>
              <p className="text-xs tracking-[0.2em] text-slate-400 uppercase">Email</p>
              <h2 className="text-base font-semibold text-white">
                aastha.chaudhary237@gmail.com
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Best for project discussions and collaboration.
              </p>
            </div>
          </a>

          {/* PHONE */}
          <a
            href="tel:+919634805020"
            className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:bg-white/10 hover:-translate-y-1"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 text-green-300">
              <Phone className="h-5 w-5" />
            </div>

            <div>
              <p className="text-xs tracking-[0.2em] text-slate-400 uppercase">Phone</p>
              <h2 className="text-base font-semibold text-white">
                +91 9634805020
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Quick calls for scope or pricing discussion.
              </p>
            </div>
          </a>

          {/* LOCATION */}
          <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-300">
              <MapPin className="h-5 w-5" />
            </div>

            <div>
              <p className="text-xs tracking-[0.2em] text-slate-400 uppercase">Location</p>
              <h2 className="text-base font-semibold text-white">
                Ghaziabad, India
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Available for remote work worldwide.
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT: FORM */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
          
          <h2 className="text-xl font-semibold text-white mb-6">
            Send a message
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
            />

            <textarea
              name="message"
              placeholder="Tell me about your project..."
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
            />

            <button
              type="submit"
              className="mt-4 w-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(34,211,238,0.4)]"
            >
              Send Message →
            </button>
          </form>
        </div>

      </section>
    </main>
  );
}
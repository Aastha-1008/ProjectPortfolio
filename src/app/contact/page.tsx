"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Check } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="relative w-screen left-1/2 -ml-[50vw] py-20 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-black -z-10" />
      <div className="absolute right-[20%] top-[40%] w-[400px] h-[400px] bg-green-400/10 blur-[140px] rounded-full" />

      <div className="grid lg:grid-cols-2 gap-10 px-6 lg:px-20 items-center">

        {/* LEFT — FORM */}
        <div className="bg-black/60 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

          <h2 className="text-3xl font-semibold text-white mb-6">
            Connect With <span className="text-yellow-400">Us.</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div className="grid grid-cols-2 gap-4">
              <input
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                className="input"
              />
              <input
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                className="input"
              />
            </div>

            <select name="service" onChange={handleChange} className="input">
              <option>Select Service</option>
              <option>Web Development</option>
              <option>UI/UX Design</option>
              <option>SEO</option>
            </select>

            <input
              name="subject"
              placeholder="Subject"
              onChange={handleChange}
              className="input"
            />

            <textarea
              name="message"
              placeholder="Write Your Message"
              rows={4}
              onChange={handleChange}
              className="input resize-none"
            />

            <button className="w-full rounded-full bg-cyan-400 text-black py-3 font-semibold hover:scale-105 transition shadow-[0_0_25px_rgba(34,211,238,0.5)]">
              Send Message
            </button>

          </form>
        </div>

        {/* RIGHT — CONTENT */}
        <div className="space-y-6">

          <div>
            <p className="text-sm text-yellow-400 uppercase tracking-widest">
              Contact Us
            </p>

            <h2 className="text-4xl font-semibold text-white leading-tight mt-2">
              Get In Touch <br />
              <span className="text-yellow-400">With Me.</span>
            </h2>

            <p className="text-slate-400 mt-4 max-w-md">
              Have a project or question? Feel free to reach out anytime.
            </p>
          </div>

          {/* BENEFITS */}
          <div className="space-y-3">
            {[
              "Smart IT Planning for Better Results",
              "Deep Evaluation of Your Needs",
              "Expert Solutions for Every Challenge",
              "24/7 Support & Maintenance",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-300">
                <Check className="text-cyan-400" size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CONTACT INFO */}
          <div className="grid grid-cols-2 gap-6 pt-6">

            <div className="flex gap-3">
              <div className="icon-circle">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-white font-semibold">Our Address</p>
                <p className="text-slate-400 text-sm">
                  Ghaziabad, India
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="icon-circle">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-white font-semibold">Connect With Me</p>
                <p className="text-slate-400 text-sm">
                  +91 9634805020
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* REUSABLE STYLES */}
      <style jsx>{`
        .input {
          width: 100%;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 999px;
          padding: 12px 16px;
          color: white;
          font-size: 14px;
          outline: none;
          transition: 0.3s;
        }

        .input:focus {
          border-color: #84cc16;
          box-shadow: 0 0 0 1px #84cc16;
        }

        textarea.input {
          border-radius: 16px;
        }

        .icon-circle {
          width: 40px;
          height: 40px;
          background: #22d3ee;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: black;
          box-shadow: 0 0 20px rgba(34,211,238,0.5);
  }
      `}</style>
    </section>
  );
}
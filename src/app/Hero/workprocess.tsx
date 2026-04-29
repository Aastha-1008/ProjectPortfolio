"use client";

import { motion } from "framer-motion";

const steps = [
    {
        id: "01",
        title: "Research & Discovery",
        desc: "Understanding business goals, user needs, and market positioning before building.",
    },
    {
        id: "02",
        title: "Planning & Strategy",
        desc: "Defining structure, flow, and technical approach for scalable solutions.",
    },
    {
        id: "03",
        title: "Design & Concept",
        desc: "Crafting intuitive UI/UX with a focus on clarity and conversion.",
    },
    {
        id: "04",
        title: "Launch & Delivery",
        desc: "Deploying optimized, production-ready applications with performance in mind.",
    },
    {
        id: "05",
        title: "Testing & Review",
        desc: "Ensuring reliability through testing, feedback, and refinements.",
    },
    {
        id: "06",
        title: "Support & Maintenance",
        desc: "Continuous improvements, updates, and scaling as the product grows.",
    },
];

export default function WorkProcess() {
    return (
        <section className="py-24 px-6">

            {/* HEADER */}
            <div className="text-center max-w-3xl mx-auto mb-20">
                <p className="text-sm text-cyan-400 uppercase tracking-widest">
                    Work Process
                </p>

                <h2 className="text-4xl sm:text-5xl font-semibold text-white leading-tight mt-3">
                    Step-by-Step Process Behind <br />
                    <span className="text-cyan-400">Every Great Project.</span>
                </h2>

                <p className="text-slate-400 mt-4 text-sm">
                    A structured approach that ensures every project is built with clarity,
                    performance, and long-term scalability in mind.
                </p>
            </div>

            {/* PROCESS */}
            <div className="max-w-6xl mx-auto space-y-12">

                {/* ROW 1 */}
                <div className="grid md:grid-cols-2 gap-6">
                    <StepCard step={steps[0]} />
                    <StepCard step={steps[1]} />
                </div>

                {/* ROW 2 (IMPORTANT FIX) */}
                <div className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-6">

                    {/* LEFT */}
                    <StepCard step={steps[2]} />

                    {/* CENTER BADGE */}
                    <div className="flex items-center justify-center relative w-[120px] h-[120px] mx-auto">

                        <svg
                            className="absolute w-full h-full animate-spin-slow"
                            viewBox="0 0 120 120"
                        >
                            <defs>
                                <path
                                    id="circlePath"
                                    d="M 60,60 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
                                />
                            </defs>

                            <text fill="#94a3b8" fontSize="10" letterSpacing="3">
                                <textPath href="#circlePath">
                                    WORK PROCESS • WORK PROCESS • WORK PROCESS •
                                </textPath>
                            </text>
                        </svg>

                        <div className="w-16 h-16 rounded-full bg-cyan-400 flex items-center justify-center text-black text-xl shadow-[0_0_30px_rgba(34,211,238,0.5)]">
                            →
                        </div>

                    </div>

                    {/* RIGHT */}
                    <StepCard step={steps[3]} />

                </div>

                {/* ROW 3 */}
                <div className="grid md:grid-cols-2 gap-6">
                    <StepCard step={steps[4]} />
                    <StepCard step={steps[5]} />
                </div>

            </div>
        </section>
    );
}

/* CARD COMPONENT */
function StepCard({ step }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-10 py-6 flex items-start gap-6 hover:border-cyan-400/40 transition"
        >
            {/* NUMBER */}
            <div className="text-3xl font-bold text-white/20">
                {step.id}
            </div>

            {/* CONTENT */}
            <div>
                <h3 className="text-white font-semibold text-lg">
                    {step.title}
                </h3>
                <p className="text-sm text-slate-400 mt-1 leading-6">
                    {step.desc}
                </p>
            </div>
        </motion.div>
    );
}
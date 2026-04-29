"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#020617]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 font-bold text-slate-950">
              AC
            </span>
            <div>
              <p className="font-semibold text-white">Aastha Chaudhary</p>
              <p className="text-xs text-slate-300">
                Freelance-ready Software Engineer
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    active
                      ? "bg-white text-black"
                      : "text-slate-200 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/10 transition"
          >
            <Menu size={22} className="text-white" />
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="fixed inset-0 z-[999] bg-[#020617] flex flex-col">

          {/* TOP BAR */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 font-bold text-slate-950">
                AC
              </span>
              <div>
                <p className="font-semibold text-white">Aastha Chaudhary</p>
                <p className="text-xs text-slate-300">
                  Freelance-ready Software Engineer
                </p>
              </div>
            </div>

            <button
              onClick={() => setMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-cyan-400 text-white"
            >
              <X size={20} />
            </button>
          </div>

          {/* NAV ITEMS */}
          <nav className="flex flex-col px-6 pt-10 gap-5">

            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-5 py-4 rounded-xl text-base font-medium transition-all duration-300
                  
                  ${
                    active
                      ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-lg"
                      : "bg-gradient-to-r from-[#020617] to-[#0f172a] text-slate-300 hover:from-[#0f172a] hover:to-[#1e293b] hover:text-white"
                  }

                  hover:scale-[1.02]
                  `}
                >
                  {item.label}
                </Link>
              );
            })}

          </nav>
        </div>
      )}
    </>
  );
}
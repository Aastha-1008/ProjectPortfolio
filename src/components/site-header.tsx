"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[color:color-mix(in_srgb,var(--header-ink)_82%,transparent)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] font-bold text-slate-950">
            AC
          </span>
          <div>
            <p className="font-semibold text-white">Aastha Chaudhary</p>
            <p className="text-xs text-slate-300">Freelance-ready Software Engineer</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                style={active ? { color: "var(--header-ink)" } : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-white"
                    : "text-slate-200 hover:bg-white/8 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

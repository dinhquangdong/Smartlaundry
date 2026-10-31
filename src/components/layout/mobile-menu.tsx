"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/data/site";

/** Hamburger + slide-down panel for screens below lg. */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the panel whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Đóng menu" : "Mở menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>
      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full z-40 mx-3 mt-2 rounded-3xl bg-white p-5 shadow-2xl"
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className={`rounded-xl px-3 py-3 text-lg ${pathname === href ? "bg-brand-green/10 font-semibold text-brand-dark" : "text-black"}`}>
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/lien-he" className="mt-3 block rounded-full bg-brand-yellow py-3 text-center text-lg font-medium text-black">
          Báo giá miễn phí
        </Link>
        <a href={`tel:${SITE.phoneHref}`} className="mt-3 block text-center text-brand-dark">
          {SITE.phone}
        </a>
      </div>
    </div>
  );
}

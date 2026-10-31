"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/data/site";

/** Desktop nav — client component only so it can highlight the active route. */
export function MainNav() {
  const pathname = usePathname();
  return (
    <nav aria-label="Main" className="hidden flex-1 items-center justify-around bg-white px-6 lg:flex">
      {NAV_LINKS.map(({ href, label }) => {
        const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            className={`py-5 text-xl transition-colors hover:text-brand-dark ${active ? "font-semibold text-brand-dark" : "text-black"}`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}

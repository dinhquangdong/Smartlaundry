import { SITE } from "@/data/site";

type Item = { label: string; href: string; bg: string; wiggle?: boolean; external?: boolean; icon: React.ReactNode };

const ITEMS: Item[] = [
  {
    label: `Gọi ${SITE.phone}`,
    href: `tel:${SITE.phoneHref}`,
    bg: "bg-[#e53935]",
    wiggle: true,
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v3a2 2 0 01-2 2A14 14 0 013 6a2 2 0 012-2z" />
      </svg>
    ),
  },
  {
    label: "Chat Zalo",
    href: SITE.zalo,
    bg: "bg-[#0068ff]",
    external: true,
    icon: <span className="text-[13px] font-extrabold leading-none tracking-tight text-white">Zalo</span>,
  },
  {
    label: "Nhắn tin Messenger",
    href: SITE.messenger,
    bg: "bg-gradient-to-br from-[#00b2ff] to-[#a334fa]",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path fill="#fff" d="M12 2C6.5 2 2 6.2 2 11.5c0 2.9 1.3 5.5 3.5 7.2V22l3.2-1.8c1 .3 2.100.4 3.300.4 5.500 0 10-4.200 10-9.500S17.500 2 12 2z" />
        <path fill="#7b3ff2" d="M13 14.800l-2.500-2.700-4.900 2.700 5.400-5.700 2.600 2.700 4.800-2.700z" />
      </svg>
    ),
  },
  {
    label: `Gửi email ${SITE.email}`,
    href: `mailto:${SITE.email}`,
    bg: "bg-brand-dark",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="M3.500 7l8.500 6 8.500-6" />
      </svg>
    ),
  },
];

/** Vertical stack of pulsing contact shortcuts fixed to the right edge (phone → Zalo → Messenger → email). */
export function FloatingContact() {
  return (
    <ul aria-label="Liên hệ nhanh" className="fixed right-2 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-3 sm:right-5 sm:gap-4">
      {ITEMS.map((it, i) => (
        <li key={it.label} className="group relative">
          <a
            href={it.href}
            aria-label={it.label}
            {...(it.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="relative flex h-10 w-10 items-center justify-center sm:h-12 sm:w-12"
          >
            <span aria-hidden="true" className={`pulse-ring absolute inset-0 rounded-full ${it.bg}`} style={{ animationDelay: `${i * 0.4}s` }} />
            <span className={`relative flex h-10 w-10 items-center justify-center rounded-full shadow-lg sm:h-12 sm:w-12 ring-2 ring-white transition-transform group-hover:scale-110 ${it.bg} ${it.wiggle ? "wiggle" : ""}`}>
              {it.icon}
            </span>
          </a>
          <span className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-sm text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 md:block">
            {it.label}
          </span>
        </li>
      ))}
    </ul>
  );
}

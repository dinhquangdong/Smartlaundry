import Link from "next/link";

const VARIANTS = {
  navy: "bg-brand-dark text-white hover:bg-[#0a5a30]",
  sky: "bg-brand-green text-black shadow-[0_8px_16px_rgba(0,0,0,0.18)] hover:bg-[#1da04f]",
  yellow: "bg-brand-yellow text-black hover:bg-[#f5cb1f]",
  outline: "border-[3px] border-brand-dark bg-brand-green text-black hover:bg-[#1da04f]",
} as const;

type Props = {
  href: string;
  variant?: keyof typeof VARIANTS;
  className?: string;
  children: React.ReactNode;
};

/** Pill-shaped call-to-action rendered as a real <a> so crawlers can follow it. */
export function ButtonLink({ href, variant = "navy", className = "", children }: Props) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 text-base font-medium transition-colors sm:px-12 sm:py-4 sm:text-xl ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

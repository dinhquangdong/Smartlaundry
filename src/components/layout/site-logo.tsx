/** Smart Laundry logo: washing-machine drum badge + wordmark. Text is live HTML so it uses the site font. */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect x="4" y="4" width="56" height="56" rx="16" fill="#fff" />
      <rect x="12" y="11" width="6" height="4" rx="2" fill="#22b45a" />
      <rect x="21" y="11" width="6" height="4" rx="2" fill="#a8e6bd" />
      <circle cx="32" cy="36" r="17" fill="#0f6b3a" />
      <circle cx="32" cy="36" r="13" fill="#22b45a" />
      <path d="M19.5 36c4-5 8-5 12.500 0s8.500 5 12.500 0v8a13 13 0 01-25 0z" fill="#fff" opacity=".92" />
      <circle cx="38" cy="29" r="2" fill="#fff" opacity=".8" />
      <circle cx="27" cy="31" r="1.2" fill="#fff" opacity=".7" />
    </svg>
  );
}

export function SiteLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <LogoMark className="h-11 w-11 shrink-0 lg:h-14 lg:w-14" />
      <span className="leading-none">
        <span className="block text-2xl font-extrabold tracking-tight text-white lg:text-[32px]">
          Smart<span className="text-brand-light">Laundry</span>
        </span>
        <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.28em] text-white/80 lg:text-xs">
          Fresh · Clean · Smart
        </span>
      </span>
    </span>
  );
}

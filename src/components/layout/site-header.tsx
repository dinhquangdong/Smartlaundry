import Link from "next/link";
import { SITE } from "@/data/site";
import { SiteLogo } from "./site-logo";
import { MainNav } from "./main-nav";
import { MobileMenu } from "./mobile-menu";

/**
 * Navy top bar (logo, mạng xã hội) + overlapping white nav pill.
 * The nav row is transparent and the hero pulls itself up underneath it.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50">
      <div className="rounded-b-[32px] bg-brand-dark text-white lg:rounded-b-[48px]">
        <div className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between gap-6 px-5 sm:px-8 lg:h-[88px]">
          <Link href="/" aria-label={`${SITE.name} – trang chủ`} className="shrink-0">
            <SiteLogo />
          </Link>
          <MobileMenu />
        </div>
      </div>

      {/* Nav row: desktop only — mobile uses the hamburger above. */}
      <div className="pointer-events-none mx-auto hidden h-[76px] max-w-[1000px] px-4 lg:block">
        <div className="pointer-events-auto flex overflow-hidden rounded-b-[28px] shadow-[0_10px_24px_rgba(0,0,0,0.12)]">
          <MainNav />
          <Link href="/lien-he" className="flex items-center gap-3 bg-brand-yellow px-12 text-xl text-black transition-colors hover:bg-[#f5cb1f]">
            Báo giá miễn phí <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

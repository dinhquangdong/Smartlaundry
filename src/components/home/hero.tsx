import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { SITE } from "@/data/site";

const HIGHLIGHTS = ["Thân thiện môi trường", "Nhận & trả tận nơi", "Báo giá miễn phí"];

/**
 * Home hero: the full banner artwork (already contains its own headline and service icons) is shown
 * uncropped, with the real, crawlable H1 + intro + CTAs directly beneath it.
 */
export function Hero() {
  // Tagline is "<part 1>, <part 2>" — the second part gets the accent colour.
  const [lead, accent] = SITE.tagline.split(", ");

  return (
    <section aria-labelledby="hero-title" className="px-3 pt-2 sm:px-6">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[24px] shadow-xl ring-1 ring-black/5 sm:rounded-[36px]">
        <Image
          src="/images/hero-bg.png"
          alt="Smart Laundry: giặt sấy quần áo, giặt hấp, giặt ủi, giặt chăn ga, giặt giày, vệ sinh sofa, nệm và nhà cửa"
          width={1536}
          height={1024}
          priority
          sizes="(min-width: 1400px) 1400px, 100vw"
          className="h-auto w-full"
        />
      </div>

      <div className="mx-auto mt-8 grid max-w-[1400px] items-center gap-8 px-2 pb-4 sm:mt-10 sm:px-4 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-brand-green/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-dark sm:text-sm">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand-green" />
            {SITE.name}
          </p>
          <h1 id="hero-title" className="mt-4 text-[32px] font-bold leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-[52px]">
            {lead}, <span className="text-brand-dark">{accent}</span>
          </h1>
        </div>

        <div>
          <p className="text-base leading-7 text-body sm:text-lg sm:leading-8">{SITE.description}</p>
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink sm:text-base">
            {HIGHLIGHTS.map((h) => (
              <li key={h} className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22b45a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                {h}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/lien-he" variant="navy">Báo giá miễn phí</ButtonLink>
            <a
              href={`tel:${SITE.phoneHref}`}
              className="inline-flex items-center justify-center rounded-full border-2 border-brand-dark px-8 py-3 text-base font-medium text-brand-dark transition-colors hover:bg-brand-dark hover:text-white sm:px-10 sm:py-4 sm:text-xl"
            >
              Gọi ngay
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

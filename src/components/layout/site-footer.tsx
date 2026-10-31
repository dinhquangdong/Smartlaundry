import Link from "next/link";
import { NAV_LINKS, SITE } from "@/data/site";
import { SERVICES } from "@/data/services";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { FacebookIcon, GoogleIcon, YouTubeIcon } from "@/components/ui/social-icons";
import { LogoMark } from "./site-logo";

const heading = "mb-5 text-lg font-semibold text-white after:mt-2 after:block after:h-0.5 after:w-10 after:rounded after:bg-brand-green";
const link = "block py-1.5 text-white/75 transition-colors hover:translate-x-1 hover:text-white";
const social = "flex h-10 w-10 items-center justify-center rounded-full bg-white transition-transform hover:-translate-y-1";

function ContactRow({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 py-1.5 text-white/85">
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-light">{icon}</span>
      <span className="pt-1">{children}</span>
    </li>
  );
}
const svg = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-brand-deep text-white">
      <Container>
        {/* Call-to-action card straddling the top edge of the footer. */}
        <div className="-mt-16 flex flex-col items-center justify-between gap-6 rounded-[32px] bg-gradient-to-r from-brand-green to-brand-dark px-6 py-8 text-center shadow-2xl sm:px-12 md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Sẵn sàng cho đồ đạc sạch thơm như mới?</h2>
            <p className="mt-2 text-white/90">Nhận báo giá miễn phí — chúng tôi phản hồi trong 24 giờ.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href="/lien-he" variant="yellow" className="!px-8 !py-3 !text-base">Báo giá miễn phí</ButtonLink>
            <a href={`tel:${SITE.phoneHref}`} className="rounded-full border-2 border-white/70 px-8 py-3 text-base font-medium transition-colors hover:bg-white hover:text-brand-dark">
              {SITE.phone}
            </a>
          </div>
        </div>

        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <Link href="/" className="flex items-center gap-3" aria-label={`${SITE.name} – trang chủ`}>
              <LogoMark className="h-12 w-12" />
              <span className="text-2xl font-extrabold tracking-tight">Smart<span className="text-brand-light">Laundry</span></span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/75">{SITE.description}</p>
            <div className="mt-6 flex gap-3">
              <a href={SITE.social.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer" className={social}><FacebookIcon className="h-6 w-6" /></a>
              <a href={SITE.social.youtube} aria-label="YouTube" target="_blank" rel="noopener noreferrer" className={social}><YouTubeIcon className="h-4 w-auto" /></a>
              <a href={SITE.social.google} aria-label="Google" target="_blank" rel="noopener noreferrer" className={social}><GoogleIcon className="h-5 w-5" /></a>
            </div>
          </div>

          <nav aria-label="Dịch vụ">
            <h2 className={heading}>Dịch vụ</h2>
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/dich-vu/${s.slug}`} className={link}>{s.name}</Link>
            ))}
          </nav>

          <nav aria-label="Khám phá">
            <h2 className={heading}>Khám phá</h2>
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className={link}>{l.label}</Link>
            ))}
          </nav>

          <div>
            <h2 className={heading}>Liên hệ</h2>
            <ul>
              <ContactRow icon={<svg {...svg}><path d="M12 21s7-6.2 7-11.500A7 7 0 005 9.500C5 14.800 12 21 12 21z" /><circle cx="12" cy="9.500" r="2.500" /></svg>}>
                Phục vụ khắp {SITE.area}
              </ContactRow>
              <ContactRow icon={<svg {...svg}><path d="M5 4h3l2 5-2.500 1.500a11 11 0 005 5L14 13l5 2v3a2 2 0 01-2 2A14 14 0 013 6a2 2 0 012-2z" /></svg>}>
                <a href={`tel:${SITE.phoneHref}`} className="hover:text-white hover:underline">{SITE.phone}</a>
              </ContactRow>
              <ContactRow icon={<svg {...svg}><rect x="3" y="5" width="18" height="14" rx="2.500" /><path d="M3.500 7l8.500 6 8.500-6" /></svg>}>
                <a href={`mailto:${SITE.email}`} className="break-all hover:text-white hover:underline">{SITE.email}</a>
              </ContactRow>
              <ContactRow icon={<svg {...svg}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>}>
                Mở cửa 24/7, kể cả cuối tuần
              </ContactRow>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/15">
        <Container className="flex flex-col items-center justify-between gap-2 py-5 text-center text-sm text-white/60 sm:flex-row">
          <p>© {SITE.name}. Bảo lưu mọi quyền.</p>
          <p>Giặt sạch chuyên nghiệp · Thân thiện môi trường</p>
        </Container>
      </div>
    </footer>
  );
}

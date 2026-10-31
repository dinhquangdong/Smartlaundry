import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { SITE } from "@/data/site";
import { FloatingContact } from "@/components/layout/floating-contact";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLd } from "@/components/ui/json-ld";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} – Giặt thảm & ghế sofa thân thiện môi trường`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: SITE.name,
    title: `${SITE.name} – Giặt thảm & ghế sofa thân thiện môi trường`,
    description: SITE.description,
    images: [{ url: "/images/hero-bg.jpg", width: 1800, height: 1200, alt: SITE.name }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f6b3a",
};

/** LocalBusiness structured data — helps Google show phone/area in local results. */
const localBusiness = {
  "@context": "https://schema.org",
  "@type": "CleaningService",
  name: SITE.name,
  url: SITE.url,
  image: `${SITE.url}/images/hero-bg.jpg`,
  telephone: SITE.phoneHref,
  email: SITE.email,
  description: SITE.description,
  areaServed: SITE.area,
  priceRange: "££",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className={`${beVietnam.variable} antialiased`}>
      <body className="flex min-h-screen flex-col overflow-x-hidden">
        <JsonLd data={localBusiness} />
        <SiteHeader />
        <main id="main" className="flex-1">{children}</main>
        <SiteFooter />
        <FloatingContact />
      </body>
    </html>
  );
}

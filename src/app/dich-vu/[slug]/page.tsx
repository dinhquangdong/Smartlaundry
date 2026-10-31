import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { JsonLd } from "@/components/ui/json-ld";
import { PageIntro } from "@/components/sections/page-intro";
import { ServiceCard } from "@/components/sections/service-card";
import { NumberedItem } from "@/components/sections/numbered-item";
import { getService, PROCESS_STEPS, SERVICES } from "@/data/services";
import { SITE } from "@/data/site";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/dich-vu/[slug]">): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.intro,
    alternates: { canonical: `/dich-vu/${service.slug}` },
    openGraph: { images: [{ url: service.image }] },
  };
}

export default async function ServiceDetailPage({ params }: PageProps<"/dich-vu/[slug]">) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.intro,
    image: `${SITE.url}${service.image}`,
    areaServed: SITE.area,
    provider: { "@type": "CleaningService", name: SITE.name, url: SITE.url, telephone: SITE.phoneHref },
  };

  return (
    <Container className="pb-4">
      <JsonLd data={schema} />
      <PageIntro pill="Dịch vụ">
        <p className="mx-auto mt-5 max-w-[420px] text-xl leading-8 text-black sm:text-2xl">
          Bạn đã nghĩ đến việc thuê đội ngũ chuyên nghiệp để giữ ngôi nhà luôn sạch bóng chưa?
        </p>
      </PageIntro>

      <section className="mt-10 grid items-center gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl font-medium text-ink sm:text-5xl">{service.heroTitle}</h2>
          <ButtonLink href="/lien-he" variant="sky" className="mt-6 !py-3">Liên hệ ngay</ButtonLink>
          <h3 className="mt-6 text-2xl font-semibold text-black sm:text-[28px]">{service.heroSubtitle}</h3>
          <p className="mt-3 max-w-[520px] text-base leading-7 text-body sm:text-lg">{service.intro}</p>
        </div>
        <div className="relative aspect-[435/290] overflow-hidden rounded-[32px]">
          <Image src={service.image} alt={service.name} fill priority sizes="(min-width:1024px) 540px, 92vw" className="object-cover" />
        </div>
      </section>

      <section className="mt-16" aria-labelledby="why-service-title">
        <h2 id="why-service-title" className="text-center text-4xl font-semibold text-ink sm:text-5xl">Vì sao chọn chúng tôi?</h2>
        <ol className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {service.benefits.map((b, i) => <NumberedItem key={b.title} n={i + 1} title={b.title} text={b.text} />)}
        </ol>
      </section>

      <section className="mt-16" aria-labelledby="process-title">
        <h2 id="process-title" className="text-center text-4xl font-semibold text-ink sm:text-5xl">Quy trình giặt của chúng tôi</h2>
        <ol className="mx-auto mt-10 max-w-[720px] space-y-5">
          {PROCESS_STEPS.map((base, i) => {
            const s = { ...base, ...service.steps?.[i] };
            return (
            <li key={s.title} className="flex items-center gap-4 rounded-[40px] bg-gradient-to-r from-[#a8e6bd] from-60% to-[#6fb98c] px-6 py-5 sm:gap-6 sm:px-8">
              <Image src={s.icon} alt="" width={80} height={80} className="h-16 w-16 shrink-0 sm:h-20 sm:w-20" />
              <div>
                <h3 className="text-2xl font-medium text-brand-dark sm:text-[28px]">{s.title}</h3>
                <p className="mt-1 text-sm leading-6 text-black sm:text-base">{s.text}</p>
              </div>
            </li>
            );
          })}
        </ol>
      </section>

      <section className="mt-20" aria-labelledby="related-title">
        <h2 id="related-title" className="text-center text-3xl font-semibold text-ink sm:text-4xl">Dịch vụ khác của Smart Laundry</h2>
        <div className="mt-8 grid border-y border-brand-dark/40 sm:grid-cols-2 lg:grid-cols-3 lg:divide-x lg:divide-brand-dark/40">
          {SERVICES.filter((x) => x.slug !== service.slug).slice(0, 3).map((x) => (
            <ServiceCard key={x.slug} service={x} />
          ))}
        </div>
      </section>
    </Container>
  );
}

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { JsonLd } from "@/components/ui/json-ld";
import { FAQS } from "@/data/content";

/**
 * Native <details> accordion: works without JS, content stays in the HTML for crawlers,
 * and the FAQPage JSON-LD makes the answers eligible for rich results.
 */
export function Faq() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <section className="pt-16 lg:pt-24" aria-labelledby="faq-title">
      <JsonLd data={schema} />
      <Container>
        <h2 id="faq-title" className="text-center text-3xl font-bold text-brand-dark sm:text-[40px]">
          Câu hỏi thường gặp
        </h2>
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="relative mx-auto aspect-[4/3.2] w-full max-w-[460px]">
            <div className="absolute inset-0 overflow-hidden rounded-[48%_52%_45%_55%/55%_45%_55%_45%]">
              <Image src="/images/vacuum-carpet-cleaning.jpg" alt="Hút bụi làm sạch thảm" fill sizes="(min-width:1024px) 460px, 90vw" className="object-cover" />
            </div>
            <div className="absolute -right-2 -top-2 h-24 w-24 overflow-hidden rounded-full border-4 border-white sm:h-28 sm:w-28">
              <Image src="/images/hero-bg.jpg" alt="" fill sizes="112px" className="object-cover" />
            </div>
          </div>

          <div className="space-y-4">
            {FAQS.map((f, i) => (
              <details key={f.q} name="faq" open={i === 0} className="group rounded-xl border border-brand-dark/60 px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-medium text-black sm:text-lg [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span aria-hidden="true" className="text-2xl leading-none transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-black">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

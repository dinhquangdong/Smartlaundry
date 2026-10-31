import { Container } from "@/components/ui/container";
import { TESTIMONIALS } from "@/data/content";
import { TestimonialCard } from "@/components/sections/testimonial-card";

export function TestimonialsPreview() {
  return (
    <section className="pt-16 lg:pt-20" aria-labelledby="clients-title">
      <Container>
        <h2 id="clients-title" className="text-center text-3xl font-bold text-brand-dark sm:text-[40px]">
          Khách hàng nói gì về chúng tôi
        </h2>
        <div className="mt-10 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <TestimonialCard key={i} t={t} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

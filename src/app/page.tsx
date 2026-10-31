import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionPill } from "@/components/ui/section-pill";
import { ButtonLink } from "@/components/ui/button-link";
import { Hero } from "@/components/home/hero";
import { WhoWeAre } from "@/components/home/who-we-are";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { TestimonialsPreview } from "@/components/home/testimonials-preview";
import { Faq } from "@/components/home/faq";
import { ServicesGrid } from "@/components/sections/services-grid";

export const metadata: Metadata = {
  title: { absolute: "Smart Laundry | Giặt thảm & ghế sofa chuyên nghiệp, thân thiện môi trường" },
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <WhyChooseUs />
      <section className="pt-16 lg:pt-24" aria-labelledby="services-title">
        <Container>
          <SectionPill>
            <span id="services-title">Dịch vụ của chúng tôi</span>
          </SectionPill>
          <ServicesGrid />
          <div className="mt-8 text-center">
            <ButtonLink href="/dich-vu" variant="sky">Xem tất cả dịch vụ</ButtonLink>
          </div>
        </Container>
      </section>
      <TestimonialsPreview />
      <Faq />
    </>
  );
}

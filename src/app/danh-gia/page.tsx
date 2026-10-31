import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/sections/page-intro";
import { TestimonialCard } from "@/components/sections/testimonial-card";
import { TESTIMONIALS } from "@/data/content";

export const metadata: Metadata = {
  title: "Đánh giá của khách hàng",
  description: "Xem khách hàng nói gì về dịch vụ giặt thảm và ghế sofa của Smart Laundry.",
  alternates: { canonical: "/danh-gia" },
};

export default function TestimonialsPage() {
  return (
    <Container className="pb-4">
      <PageIntro pill="Đánh giá">
        <p className="mt-6 text-2xl text-black sm:text-[34px]">Đánh giá của bạn rất quan trọng với chúng tôi..</p>
      </PageIntro>
      <div className="mt-10 grid gap-14 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t, i) => <TestimonialCard key={i} t={t} index={i} />)}
      </div>
    </Container>
  );
}

import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/sections/page-intro";
import { ServicesGrid } from "@/components/sections/services-grid";
import { CoreValues } from "@/components/sections/core-values";

export const metadata: Metadata = {
  title: "Dịch vụ giặt thảm, thảm trải sàn & ghế sofa",
  description:
    "Giặt thảm trải sàn, giặt thảm tổng quát và giặt ghế sofa. Phương pháp hơi nước ít ẩm, thân thiện môi trường giúp đồ khô nhanh và sạch lâu hơn.",
  alternates: { canonical: "/dich-vu" },
};

export default function ServicesPage() {
  return (
    <Container className="pb-4">
      <PageIntro pill="Dịch vụ của chúng tôi" />
      <ServicesGrid showButton />
      <CoreValues />
    </Container>
  );
}

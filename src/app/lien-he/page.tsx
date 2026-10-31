import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/sections/page-intro";
import { ContactForm } from "@/components/sections/contact-form";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Liên hệ – Nhận báo giá giặt thảm & sofa miễn phí",
  description: `Nhận báo giá miễn phí cho dịch vụ giặt thảm và ghế sofa. Gọi ${SITE.phone} hoặc gửi lời nhắn, chúng tôi phản hồi trong 24 giờ.`,
  alternates: { canonical: "/lien-he" },
};

export default function ContactPage() {
  return (
    <Container className="pb-4">
      <PageIntro pill="Liên hệ">
        <p className="mt-6 text-2xl font-medium text-black sm:text-[32px]">Liên hệ với chúng tôi ngay hôm nay..</p>
      </PageIntro>

      <div className="mt-10 grid overflow-hidden rounded-[40px] lg:grid-cols-[0.75fr_1.25fr]">
        <div className="relative hidden min-h-[560px] lg:block">
          <Image src="/images/office-carpet-cleaning.jpg" alt="Nhân viên Smart Laundry hút bụi hành lang văn phòng" fill sizes="420px" className="object-cover" />
        </div>
        <div className="bg-gradient-to-b from-[#a8e6bd] to-[#7fbf98] p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </Container>
  );
}

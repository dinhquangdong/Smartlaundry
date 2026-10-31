import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionPill } from "@/components/ui/section-pill";
import { PageIntro } from "@/components/sections/page-intro";
import { NumberedItem } from "@/components/sections/numbered-item";
import { HOW_IT_WORKS, HOW_TEXT, MISSIONS } from "@/data/content";

export const metadata: Metadata = {
  title: "Giới thiệu – Smart Laundry, đơn vị giặt thảm & sofa đáng tin cậy",
  description:
    "Smart Laundry là đơn vị giặt thảm và ghế sofa chuyên nghiệp với hơn 5 năm kinh nghiệm, mang lại chất lượng vượt trội và dịch vụ đáng tin cậy.",
  alternates: { canonical: "/gioi-thieu" },
};

const tile = "relative overflow-hidden rounded-[40px]";

export default function AboutPage() {
  return (
    <Container className="pb-4">
      <PageIntro pill="Giới thiệu" />

      <section className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
        <div className="grid grid-cols-2 gap-4">
          <div className={`${tile} aspect-[3/2]`}>
            <Image src="/images/steam-chair-cleaning.jpg" alt="Nhân viên giặt hơi nước cho sàn nhà" fill sizes="(min-width:1024px) 270px, 45vw" className="object-cover" />
          </div>
          <div className={`${tile} aspect-[3/2]`}>
            <Image src="/images/upholstery-wall-cleaning.jpg" alt="Nhân viên xịt và lau bề mặt" fill sizes="(min-width:1024px) 270px, 45vw" className="object-cover" />
          </div>
          <div className={`${tile} col-span-2 aspect-[16/6.5]`}>
            <Image src="/images/vacuum-carpet-cleaning.jpg" alt="Hút bụi làm sạch thảm" fill sizes="(min-width:1024px) 550px, 90vw" className="object-cover" />
          </div>
        </div>
        <div>
          <h2 className="text-4xl font-medium leading-[1.1] text-ink sm:text-5xl lg:text-[56px]">
            Dịch vụ giặt chuyên nghiệp được tin cậy
          </h2>
          <p className="mt-5 text-base leading-7 text-body sm:text-lg">
            Smart Laundry là đơn vị hàng đầu về giặt thảm và ghế sofa chuyên nghiệp. Với hơn 5 năm kinh nghiệm, chúng tôi đã trở thành lựa chọn quen thuộc của khách hàng nhờ chất lượng, sự đáng tin cậy và kết quả vượt mong đợi.
          </p>
        </div>
      </section>

      <ol className="mt-16 grid gap-10 lg:grid-cols-3" aria-label="Sứ mệnh, tầm nhìn, giá trị">
        {MISSIONS.map((m, i) => <NumberedItem key={i} n={i + 1} title={m.title} text={m.text} />)}
      </ol>

      <section className="mt-16 text-center" aria-labelledby="how-title">
        <SectionPill><span id="how-title">Quy trình hoạt động</span></SectionPill>
        <p className="mx-auto mt-6 max-w-[620px] text-xl leading-9 text-black sm:text-[26px]">
          Chúng tôi cam kết mang đến dịch vụ giặt tốt nhất. Hãy xem quy trình thực tế của chúng tôi…
        </p>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {HOW_IT_WORKS.map((h) => (
            <article key={h.title} className="flex flex-col items-center">
              <Image src={h.icon} alt="" width={168} height={148} className="h-36 w-auto object-contain" />
              <h3 className="mt-4 text-2xl font-bold leading-7 text-brand-dark">
                <Link href={h.href}>{h.title}</Link>
              </h3>
              <p className="mt-3 max-w-[260px] text-sm leading-6 text-black">{HOW_TEXT}</p>
            </article>
          ))}
        </div>
        <ButtonLink href="/dich-vu" variant="sky" className="mt-10">Xem tất cả dịch vụ</ButtonLink>
      </section>

    </Container>
  );
}

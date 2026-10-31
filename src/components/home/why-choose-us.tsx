import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionPill } from "@/components/ui/section-pill";
import { STATS, WHY_CHOOSE_US } from "@/data/content";

function Feature({ title, icon, text }: { title: string; icon: string; text: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <Image src={icon} alt="" width={64} height={64} className="h-14 w-14 sm:h-16 sm:w-16" />
      <h3 className="mt-3 text-2xl font-semibold text-brand-dark">{title}</h3>
      <p className="mt-2 max-w-[260px] text-sm leading-6 text-black">{text}</p>
    </div>
  );
}

export function WhyChooseUs() {
  const left = WHY_CHOOSE_US.filter((f) => f.side === "left");
  const right = WHY_CHOOSE_US.filter((f) => f.side === "right");
  return (
    <section className="pt-16 lg:pt-24" aria-labelledby="why-title">
      <Container>
        <SectionPill>
          <span id="why-title">Vì sao chọn chúng tôi</span>
        </SectionPill>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_1.1fr_1fr]">
          <div className="order-2 grid gap-10 sm:grid-cols-2 lg:order-1 lg:grid-cols-1">
            {left.map((f) => <Feature key={f.title} title={f.title} icon={f.icon} text={f.text} />)}
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto aspect-[4/4.2] max-w-[420px] rounded-[48px] border-[3px] border-brand-green p-3">
              <div className="relative h-full w-full overflow-hidden rounded-[40px]">
                <Image src="/images/steam-chair-cleaning.jpg" alt="Nhân viên Smart Laundry giặt hơi nước dưới ghế văn phòng" fill sizes="(min-width:1024px) 420px, 90vw" className="object-cover" />
              </div>
            </div>
          </div>

          <div className="order-3 grid gap-10 sm:grid-cols-2 lg:grid-cols-1">
            {right.map((f) => <Feature key={f.title} title={f.title} icon={f.icon} text={f.text} />)}
          </div>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-3 rounded-2xl border border-gray-200 p-3 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col rounded-xl border px-6 py-6 sm:px-8 ${i === 0 ? "border-transparent bg-gradient-to-br from-[#16a34a] to-[#0b3d22] text-white" : "border-brand-green/60 bg-[#f3fbf6] text-ink"}`}
            >
              <dt className="order-2 mt-1 text-base sm:text-xl">{s.label}</dt>
              <dd className="order-1 text-3xl font-semibold sm:text-4xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

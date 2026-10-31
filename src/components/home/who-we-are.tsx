import Image from "next/image";
import { Container } from "@/components/ui/container";

const frame = "relative overflow-hidden rounded-[28px] border-[5px]";

/** "Who we are" collage + intro copy + feature photo with play-button overlay. */
export function WhoWeAre() {
  return (
    <section className="pt-14 lg:pt-20" aria-labelledby="who-title">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className={`${frame} aspect-[4/3] border-brand-yellow`}>
              <Image src="/images/steam-chair-cleaning.jpg" alt="Nhân viên giặt hơi nước cho sàn nhà" fill sizes="(min-width:1024px) 280px, 45vw" className="object-cover" />
            </div>
            <div className={`${frame} aspect-[4/3] border-brand-dark`}>
              <Image src="/images/vacuum-carpet-cleaning.jpg" alt="Hút bụi làm sạch thảm" fill sizes="(min-width:1024px) 280px, 45vw" className="object-cover" />
            </div>
            <div className={`${frame} aspect-[4/3] border-brand-dark`}>
              <Image src="/images/upholstery-wall-cleaning.jpg" alt="Nhân viên lau bề mặt với găng tay vàng" fill sizes="(min-width:1024px) 280px, 45vw" className="object-cover" />
            </div>
            <div className={`${frame} aspect-[4/3] border-brand-yellow`}>
              <Image src="/images/hero-bg.jpg" alt="Lau sàn nhà" fill sizes="(min-width:1024px) 280px, 45vw" className="object-cover" />
            </div>
          </div>

          <div>
            <p className="w-fit rounded-full bg-brand-green px-8 py-3 text-xl shadow-[0_8px_16px_rgba(0,0,0,0.18)] sm:text-2xl">về chúng tôi</p>
            <h2 id="who-title" className="mt-6 text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-[44px]">
              Người bạn đồng hành tin cậy cho không gian tươi mới, sạch bóng
            </h2>
            <p className="mt-5 text-base leading-8 text-body sm:text-lg">
              Tại Smart Laundry, sứ mệnh của chúng tôi là giúp việc giặt giũ trở nên nhẹ nhàng và dễ chịu, bằng cách kết nối bạn với đội ngũ chuyên nghiệp, đáng tin cậy, chăm chút ngôi nhà của bạn như chính nhà của họ.
            </p>
          </div>
        </div>

        <div className="relative mt-14 aspect-[16/10] overflow-hidden rounded-2xl sm:aspect-[100/42]">
          <Image src="/images/living-room-cleaning.jpg" alt="Nhân viên dọn dẹp phòng khách sáng sủa" fill sizes="(min-width:1200px) 1136px, 100vw" className="object-cover" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 sm:h-20 sm:w-20">
            <Image src="/images/icons/play.png" alt="" width={64} height={64} className="h-full w-full p-1" />
          </span>
        </div>
      </Container>
    </section>
  );
}

import Image from "next/image";

type T = { name: string; role: string; avatar: string; quote: string };

/** Blobby white card with offset sky-blue shadow shape, as in the design. */
export function TestimonialCard({ t, index = 0 }: { t: T; index?: number }) {
  const tilt = ["-rotate-[2deg]", "rotate-[1deg]", "rotate-[2deg]"][index % 3];
  return (
    <figure className="relative mx-auto w-full max-w-[360px] pt-14">
      <Image src={t.avatar} alt={`${t.name}, ${t.role}`} width={115} height={115} className="absolute left-1/2 top-0 z-10 h-[115px] w-[115px] -translate-x-1/2 rounded-full object-cover" />
      <div className={`relative ${tilt}`}>
        <span aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 rounded-[48px_32px_60px_36px] bg-brand-green" />
        <div className="relative rounded-[48px_32px_60px_36px] border-2 border-brand-dark bg-white px-7 pb-10 pt-16 text-center shadow-xl">
          <figcaption>
            <span className="block text-2xl font-semibold text-black">{t.name}</span>
            <span className="block text-xs tracking-[0.2em] text-body">{t.role}</span>
          </figcaption>
          <span aria-hidden="true" className="mt-2 block text-3xl leading-none text-brand-dark">“</span>
          <blockquote className="mt-1 text-sm leading-6 text-black">{t.quote}</blockquote>
        </div>
      </div>
    </figure>
  );
}

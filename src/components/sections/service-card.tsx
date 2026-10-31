import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/services";

/** Service tile: rounded photo, display title, blurb and optional "Learn More" button. */
export function ServiceCard({ service, showButton = false }: { service: Service; showButton?: boolean }) {
  return (
    <article className="group/card flex flex-col px-3 py-6 transition-colors hover:bg-brand-green/5 sm:px-5">
      <Link href={`/dich-vu/${service.slug}`} className="relative block aspect-[300/215] overflow-hidden rounded-[36px]">
        <Image src={service.image} alt={service.name} fill sizes="(min-width:1024px) 320px, (min-width:640px) 45vw, 90vw" className="object-cover transition-transform duration-500 hover:scale-105" />
      </Link>
      <h3 className="mt-6 font-display text-3xl font-medium leading-tight text-black sm:text-4xl">
        <Link href={`/dich-vu/${service.slug}`}>{service.name}</Link>
      </h3>
      <p className="mt-3 text-base leading-6 text-black">{service.summary}</p>
      {showButton && (
        <Link
          href={`/dich-vu/${service.slug}`}
          className="mt-5 flex w-full items-center gap-3 rounded-full border-[3px] border-brand-dark bg-brand-green px-5 py-3 text-base text-black transition-colors hover:bg-[#1da04f]"
        >
          <span aria-hidden="true" className="flex h-7 w-7 items-center justify-center rounded-full border border-black text-sm">↑</span>
          Tìm hiểu thêm<span className="sr-only"> về {service.name}</span>
        </Link>
      )}
    </article>
  );
}

import Image from "next/image";
import { CORE_VALUES } from "@/data/content";

/** Four gradient cards with a clipped top edge. */
export function CoreValues() {
  return (
    <section className="mt-16" aria-labelledby="values-title">
      <h2 id="values-title" className="text-center text-3xl font-bold text-brand-dark sm:text-[40px]">Giá trị cốt lõi</h2>
      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {CORE_VALUES.map((v) => (
          <li key={v.title} className="rounded-[40px] bg-gradient-to-b from-[#a8e6bd] to-[#7fbf98] px-6 pb-10 pt-8 [clip-path:polygon(0_9%,100%_0,100%_100%,0_100%)] sm:pt-14">
            <Image src={v.icon} alt="" width={56} height={56} className="h-14 w-14" />
            <h3 className="mt-5 text-xl font-medium text-black">{v.title}</h3>
            <p className="mt-4 text-lg leading-8 text-black">{v.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

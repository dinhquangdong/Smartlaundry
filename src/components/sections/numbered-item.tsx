/** Big outlined numeral beside a sky-blue rule, followed by title + text ("Our Mission", benefits…). */
export function NumberedItem({ n, title, text }: { n: number; title: string; text: string }) {
  return (
    <li className="flex items-stretch gap-4">
      <span aria-hidden="true" className="outline-number self-center font-display text-[96px] font-black leading-none sm:text-[120px]">
        {n}
      </span>
      <span className="w-[3px] shrink-0 rounded bg-brand-green" aria-hidden="true" />
      <div className="self-center">
        <h3 className="text-2xl font-medium text-ink sm:text-[28px]">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-black">{text}</p>
      </div>
    </li>
  );
}

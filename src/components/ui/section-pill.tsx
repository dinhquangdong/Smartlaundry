/** Sky-blue pill label that opens every section in the design ("Our Services", "Why Choose us"…). */
export function SectionPill({ children, as: Tag = "h2" }: { children: React.ReactNode; as?: "h1" | "h2" | "p" }) {
  return (
    <Tag className="mx-auto w-fit rounded-full bg-brand-green px-10 py-3 text-center text-xl font-normal text-black shadow-[0_8px_16px_rgba(0,0,0,0.18)] sm:px-14 sm:text-3xl">
      {children}
    </Tag>
  );
}

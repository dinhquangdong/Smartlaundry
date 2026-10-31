import { SectionPill } from "@/components/ui/section-pill";

/** Page opener: the sky pill doubles as the single <h1> for the page. */
export function PageIntro({ pill, children }: { pill: string; children?: React.ReactNode }) {
  return (
    <div className="pt-12 text-center sm:pt-16">
      <SectionPill as="h1">{pill}</SectionPill>
      {children}
    </div>
  );
}

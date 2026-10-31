import { SERVICES } from "@/data/services";
import { ServiceCard } from "./service-card";

/** 3-column grid divided by thin blue rules (stacks on mobile). */
export function ServicesGrid({ showButton = false }: { showButton?: boolean }) {
  return (
    <div className="mt-10 grid border-y border-brand-dark/40 sm:grid-cols-2 lg:grid-cols-3 lg:divide-x lg:divide-brand-dark/40 lg:[&>*:nth-child(n+4)]:border-t lg:[&>*:nth-child(n+4)]:border-brand-dark/40">
      {SERVICES.map((s) => (
        <ServiceCard key={s.slug} service={s} showButton={showButton} />
      ))}
    </div>
  );
}

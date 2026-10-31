/** Page-width wrapper; 1100px matches the 1800px design frame scaled to content width. */
export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 ${className}`}>{children}</div>;
}

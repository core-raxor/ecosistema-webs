import type { ReactNode } from "react";

type SectionContainerProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  noPaddingY?: boolean;
};

export function SectionContainer({
  id,
  children,
  className = "",
  noPaddingY = false,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`relative px-5 md:px-8 lg:px-12 ${
        noPaddingY ? "" : "py-20 md:py-28"
      } ${className}`}
    >
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}

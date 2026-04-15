import { type ReactNode } from "react";

type SectionHeaderProps = {
  label: string;
  title: string;
  children?: ReactNode;
};

export function SectionHeader({ label, title, children }: SectionHeaderProps) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="text-[0.7rem] uppercase tracking-[0.3em] font-semibold text-orange">
        {label}
      </p>
      <h2 className="mt-3 font-display text-[clamp(1.8rem,3.5vw,2.6rem)] leading-[1.15] tracking-tight text-white">
        {title}
      </h2>
      {children && (
        <p className="mt-4 text-base leading-7 text-text-muted">
          {children}
        </p>
      )}
    </div>
  );
}

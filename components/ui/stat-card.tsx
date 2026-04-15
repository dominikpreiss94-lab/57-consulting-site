import { type ReactNode } from "react";
import { AnimatedCounter } from "./animated-counter";

type StatCardProps = {
  label: string;
  value: string;
  children: ReactNode;
  animate?: boolean;
};

export function StatCard({ label, value, children, animate = true }: StatCardProps) {
  return (
    <div className="rounded-xl border border-border bg-bg-card p-7 transition-colors duration-250 hover:border-orange">
      <p className="text-[0.7rem] uppercase tracking-[0.25em] font-medium text-text-muted">
        {label}
      </p>
      <div className="mt-2 mb-1.5 font-display text-2xl font-bold text-orange">
        {animate ? <AnimatedCounter value={value} /> : value}
      </div>
      <p className="text-sm leading-6 text-text-muted">{children}</p>
    </div>
  );
}

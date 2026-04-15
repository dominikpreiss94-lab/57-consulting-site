import { type ReactNode } from "react";

type FeatureCardProps = {
  title: string;
  description: string;
  checklist: string[];
  invest: string;
};

export function FeatureCard({
  title,
  description,
  checklist,
  invest
}: FeatureCardProps) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-bg-card p-10">
      <div className="absolute right-0 top-0 h-[200px] w-[200px] rounded-full bg-orange-glow blur-[80px]" />
      <h3 className="relative text-xl font-semibold text-white mb-3">
        {title}
      </h3>
      <p className="relative text-base leading-7 text-text-muted max-w-2xl">
        {description}
      </p>
      <ul className="relative mt-6 grid gap-2.5 md:grid-cols-2 list-none">
        {checklist.map((item) => (
          <li
            key={item}
            className="relative pl-5 text-sm text-text-secondary before:content-[''] before:absolute before:left-0 before:top-[0.55rem] before:h-1.5 before:w-1.5 before:rounded-full before:bg-orange"
          >
            {item}
          </li>
        ))}
      </ul>
      <p className="relative mt-6 pt-4 border-t border-border text-sm text-text-muted">
        {invest}
      </p>
    </div>
  );
}

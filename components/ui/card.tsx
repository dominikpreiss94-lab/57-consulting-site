import { type ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-border bg-bg-card p-7 transition-all duration-250 hover:border-border-hover hover:bg-bg-card-hover ${className}`}
    >
      {children}
    </div>
  );
}

export function CardIcon({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-lg bg-orange-soft text-orange text-base">
      {children}
    </div>
  );
}

export function CardTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-2.5 text-[1.05rem] font-semibold text-text">
      {children}
    </h3>
  );
}

export function CardBody({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm leading-7 text-text-muted">{children}</p>
  );
}

export function CardPrice({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 text-sm font-semibold text-orange">{children}</p>
  );
}

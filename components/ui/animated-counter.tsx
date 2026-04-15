"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  value: string;
  className?: string;
};

function parseNumeric(val: string): { prefix: string; num: number; suffix: string } | null {
  const match = val.match(/^(.*?)(\d+)(.*?)$/);
  if (!match) return null;
  return { prefix: match[1], num: parseInt(match[2], 10), suffix: match[3] };
}

export function AnimatedCounter({ value, className = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const parsed = parseNumeric(value);
    if (!parsed) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1200;
          const start = performance.now();

          function tick(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            const current = Math.round(eased * parsed!.num);
            setDisplay(`${parsed!.prefix}${current}${parsed!.suffix}`);
            if (progress < 1) requestAnimationFrame(tick);
          }

          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

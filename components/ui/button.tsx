import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "ghost";

const base =
  "inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold transition-all duration-200 cursor-pointer";

const variants: Record<Variant, string> = {
  primary:
    "bg-orange text-white hover:bg-[#d45a08] hover:-translate-y-px",
  ghost:
    "bg-transparent text-text-secondary border border-border hover:border-orange hover:text-text"
};

type ButtonProps = {
  variant?: Variant;
} & (
  | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({ href?: never } & ButtonHTMLAttributes<HTMLButtonElement>)
);

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    return <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)} />;
  }

  return <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)} />;
}

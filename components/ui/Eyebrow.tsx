import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  tone?: "signal" | "soft";
  className?: string;
};

export function Eyebrow({
  children,
  tone = "signal",
  className,
}: EyebrowProps) {
  const classes = ["eyebrow", `eyebrow--${tone}`, className ?? ""]
    .filter(Boolean)
    .join(" ");

  return <span className={classes}>{children}</span>;
}

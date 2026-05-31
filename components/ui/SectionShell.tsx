import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

type SectionShellProps = {
  id: string;
  eyebrow?: string;
  title?: string;
  body?: string;
  children: ReactNode;
  className?: string;
  introAlign?: "start" | "center";
  introTone?: "default" | "accent";
};

export function SectionShell({
  id,
  eyebrow,
  title,
  body,
  children,
  className,
  introAlign = "start",
  introTone = "default",
}: SectionShellProps) {
  const classes = ["section", className ?? ""].filter(Boolean).join(" ");

  return (
    <section className={classes} id={id}>
      <div className="container">
        {eyebrow || title || body ? (
          <Reveal
            className={[
              "section-intro",
              `section-intro--${introAlign}`,
              introTone === "accent" ? "section-intro--accent" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {eyebrow ? (
              <Eyebrow className="section-intro__eyebrow" tone="signal">
                <span data-reveal-item>{eyebrow}</span>
              </Eyebrow>
            ) : null}
            {title ? (
              <h2 className="type-heading section-intro__title" data-reveal-item>
                {title}
              </h2>
            ) : null}
            {body ? (
              <p className="type-subheading section-intro__body" data-reveal-item>
                {body}
              </p>
            ) : null}
          </Reveal>
        ) : null}

        {children}
      </div>
    </section>
  );
}

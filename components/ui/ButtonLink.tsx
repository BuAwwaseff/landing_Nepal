import Link from "next/link";
import type { ButtonVariant } from "@/content/nepal-content";

type ButtonLinkProps = {
  label: string;
  href: string;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
  fullWidth?: boolean;
};

const isExternalHref = (href: string) =>
  href.startsWith("http://") ||
  href.startsWith("https://") ||
  href.startsWith("mailto:") ||
  href.startsWith("tel:");

export function ButtonLink({
  label,
  href,
  variant = "primary",
  external = false,
  className,
  fullWidth = false,
}: ButtonLinkProps) {
  const classes = [
    "button-link",
    `button-link--${variant}`,
    fullWidth ? "button-link--full" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  if (external || isExternalHref(href)) {
    return (
      <a
        className={classes}
        href={href}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        target={href.startsWith("http") ? "_blank" : undefined}
      >
        {label}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {label}
    </Link>
  );
}

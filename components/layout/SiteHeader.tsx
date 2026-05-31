"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { NepalLogo } from "@/components/brand/NepalLogo";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { nepalContent } from "@/content/nepal-content";
import type { NepalPage } from "@/config/nepal-globals";

type SiteHeaderProps = {
  page: NepalPage;
};

const isExternalHref = (href: string) =>
  href.startsWith("http://") ||
  href.startsWith("https://") ||
  href.startsWith("mailto:") ||
  href.startsWith("tel:");

const isTopLevelPageHref = (href: string) =>
  href === "/" || href === "/partnership";

export function SiteHeader({ page }: SiteHeaderProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const headerCta = nepalContent.chrome.headerCtas[page];
  const navItems = useMemo(() => nepalContent.chrome.nav, []);
  const a11y = nepalContent.chrome.a11y;

  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header__pill">
          <Link aria-label={a11y.homeLinkLabel} className="site-header__brand" href="/">
            <NepalLogo size="nav" />
          </Link>

          <nav aria-label={a11y.navLabel} className="site-header__nav">
            {navItems.map((item) => {
              const isActive = isTopLevelPageHref(item.href) && pathname === item.href;

              if (isExternalHref(item.href)) {
                return (
                  <a
                    className="site-header__link"
                    href={item.href}
                    key={item.label}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className="site-header__link"
                  href={item.href}
                  key={item.label}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="site-header__actions">
            <ButtonLink {...headerCta} className="site-header__cta" />
            <button
              aria-expanded={isOpen}
              aria-label={isOpen ? a11y.closeMenuLabel : a11y.openMenuLabel}
              className="site-header__toggle"
              onClick={() => setIsOpen((open) => !open)}
              type="button"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <div className={`site-header__drawer ${isOpen ? "is-open" : ""}`}>
          <div className="site-header__drawer-inner">
            {navItems.map((item) =>
              isExternalHref(item.href) ? (
                <a
                  className="site-header__drawer-link"
                  href={item.href}
                  key={item.label}
                  onClick={() => setIsOpen(false)}
                  rel="noreferrer"
                  target="_blank"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  className="site-header__drawer-link"
                  href={item.href}
                  key={item.label}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ),
            )}
            <ButtonLink {...headerCta} className="site-header__drawer-cta" fullWidth />
          </div>
        </div>
      </div>
    </header>
  );
}

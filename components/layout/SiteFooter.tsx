import Link from "next/link";
import { NepalLogo } from "@/components/brand/NepalLogo";
import { nepalContent } from "@/content/nepal-content";

const isExternalHref = (href: string) =>
  href.startsWith("http://") ||
  href.startsWith("https://") ||
  href.startsWith("mailto:") ||
  href.startsWith("tel:");

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__panel">
          <div className="site-footer__grid">
            <div className="site-footer__brand">
              <NepalLogo size="footer" />
              <p className="site-footer__description">{nepalContent.footer.description}</p>
              <ul className="site-footer__contact-list">
                {nepalContent.footer.contactLinks.map((link) => (
                  <li key={link.label}>
                    {isExternalHref(link.href) ? (
                      <a
                        className="site-footer__contact-link"
                        href={link.href}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link className="site-footer__contact-link" href={link.href}>
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="site-footer__columns">
              {nepalContent.footer.columns.map((column) => (
                <div className="site-footer__column" key={column.title}>
                  <h2 className="type-card-title site-footer__column-title">{column.title}</h2>
                  <ul className="site-footer__links">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        {isExternalHref(link.href) ? (
                          <a
                            className="site-footer__link"
                            href={link.href}
                            rel="noreferrer"
                            target="_blank"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link className="site-footer__link" href={link.href}>
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="site-footer__bottom">
            <p className="site-footer__note">{nepalContent.footer.note}</p>
            <p className="site-footer__legal">{nepalContent.footer.legalLine}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

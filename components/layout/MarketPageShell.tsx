import type { ReactNode } from "react";
import { getDirection } from "@/lib/direction";
import type { NepalPage } from "@/config/nepal-globals";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

type MarketPageShellProps = {
  page: NepalPage;
  children: ReactNode;
};

export function MarketPageShell({ page, children }: MarketPageShellProps) {
  return (
    <div className={`page-shell page-shell--${page}`} dir={getDirection()}>
      <div aria-hidden="true" className="page-shell__backdrop">
        <span className="page-shell__layer page-shell__layer--base" />
        <span className="page-shell__layer page-shell__layer--top" />
        <span className="page-shell__layer page-shell__layer--glow-one" />
        <span className="page-shell__layer page-shell__layer--glow-two" />
        <span className="page-shell__layer page-shell__layer--himalaya-atmosphere" />
        <span className="page-shell__layer page-shell__layer--himalaya-far" />
        <span className="page-shell__layer page-shell__layer--himalaya-mid" />
        <span className="page-shell__layer page-shell__layer--himalaya-near" />
        <span className="page-shell__layer page-shell__layer--ridge" />
        <span className="page-shell__layer page-shell__layer--grid" />
      </div>

      <div className="page-shell__chrome">
        <SiteHeader page={page} />
        <main className="page-main">{children}</main>
        <SiteFooter />
      </div>
    </div>
  );
}

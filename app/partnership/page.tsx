import type { Metadata } from "next";
import { MarketPageShell } from "@/components/layout/MarketPageShell";
import { BenefitsSection } from "@/components/sections/partnership/BenefitsSection";
import { PartnershipHero } from "@/components/sections/partnership/PartnershipHero";
import { PathsSection } from "@/components/sections/partnership/PathsSection";
import { StepsSection } from "@/components/sections/partnership/StepsSection";
import { nepalContent } from "@/content/nepal-content";

export const metadata: Metadata = {
  title: {
    absolute: nepalContent.seo.partnershipTitle,
  },
  description: nepalContent.seo.partnershipDescription,
};

export default function PartnershipPage() {
  return (
    <MarketPageShell page="partnership">
      <PartnershipHero content={nepalContent.partnership.hero} />
      <BenefitsSection content={nepalContent.partnership.benefits} />
      <StepsSection content={nepalContent.partnership.steps} />
      <PathsSection content={nepalContent.partnership.paths} />
    </MarketPageShell>
  );
}

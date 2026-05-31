import type { Metadata } from "next";
import { MarketPageShell } from "@/components/layout/MarketPageShell";
import { GamesSection } from "@/components/sections/home/GamesSection";
import { HomeFinalCta } from "@/components/sections/home/HomeFinalCta";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { OffersSection } from "@/components/sections/home/OffersSection";
import { SportsSection } from "@/components/sections/home/SportsSection";
import { nepalContent } from "@/content/nepal-content";

export const metadata: Metadata = {
  title: {
    absolute: nepalContent.seo.homeTitle,
  },
  description: nepalContent.seo.homeDescription,
};

export default function HomePage() {
  return (
    <MarketPageShell page="home">
      <HomeHero content={nepalContent.home.hero} />
      <GamesSection content={nepalContent.home.games} />
      <SportsSection content={nepalContent.home.sports} />
      <OffersSection content={nepalContent.home.offers} />
      <HomeFinalCta content={nepalContent.home.finalCta} />
    </MarketPageShell>
  );
}

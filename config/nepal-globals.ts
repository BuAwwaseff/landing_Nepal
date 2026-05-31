import { nepalTheme } from "@/themes/nepal-theme";

export type NepalLocale = "en";
export type NepalPage = "home" | "partnership";
export type Direction = "ltr" | "rtl";

export const sportsLink =
  "https://refpa3665.com/L?tag=d_4092175m_66329c_NepalSports";
export const gamesLink =
  "https://refpa3665.com/L?tag=d_4092175m_66329c_MLBNepal26";

export const nepalGlobals = {
  market: "Nepal",
  slug: "nepal",
  locales: ["en"] as const satisfies NepalLocale[],
  defaultLocale: "en" as const,
  directionByLocale: {
    en: "ltr",
  } as const,
  theme: nepalTheme.name,
  chrome: {
    anchors: {
      home: ["top", "games", "sports", "offers", "player-cta"],
      partnership: ["top", "benefits", "steps", "paths"],
    },
  },
  sizing: {
    density: "balanced",
    containerWidth: 1180,
    containerX: "clamp(1rem, 3vw, 1.5rem)",
    sectionY: "clamp(4rem, 7vw, 5.75rem)",
    sectionYMobile: "clamp(3rem, 9vw, 4rem)",
    heroTop: "clamp(5.5rem, 13vw, 8rem)",
    heroBottom: "clamp(3rem, 8vw, 4.5rem)",
    gridGap: "clamp(1rem, 2vw, 1.4rem)",
    cardPadding: "clamp(1rem, 2vw, 1.35rem)",
    radii: {
      sm: "12px",
      md: "18px",
      lg: "24px",
      xl: "34px",
      pill: "999px",
    },
    buttonMinHeight: "50px",
  },
  composition: {
    textMeasure: "md",
    surfaceMode: "glass-dominant",
    motionProfile: "subtle",
  },
  pages: {
    home: {
      enabledSections: ["hero", "games", "sports", "offers", "finalCta"] as const,
      variants: {
        hero: "home-hero-stage",
        games: "home-featured-grid",
        sports: "home-sports-showcase",
        offers: "home-offers-grid",
        finalCta: "final-cta-panel",
        footer: "footer-full",
      },
    },
    partnership: {
      enabledSections: ["hero", "benefits", "steps", "paths"] as const,
      variants: {
        hero: "hero-typographic",
        benefits: "benefits-glass-grid",
        steps: "steps-timeline",
        paths: "paths-dual-card",
        footer: "footer-full",
      },
    },
  },
} as const;

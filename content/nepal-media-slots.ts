export type NepalPageKey = "home" | "partnership";
export type MediaFitMode = "cover" | "contain";
export type MediaFallbackType =
  | "hero"
  | "games"
  | "sports"
  | "offers"
  | "partnership"
  | "cta";
export type OverlaySafeArea = "center" | "bottom" | "left" | "right";

export type MediaSlotConfig = {
  id: string;
  page: NepalPageKey;
  section: string;
  targetPath: string;
  ratio: string;
  fit: MediaFitMode;
  alt: string;
  fallbackType: MediaFallbackType;
  visualIntent: string;
  overlaySafeArea: OverlaySafeArea;
  decorative?: boolean;
};

export const nepalMediaSlots = {
  homeHeroStage: {
    id: "homeHeroStage",
    page: "home",
    section: "hero",
    targetPath: "/player/hero/hero.png",
    ratio: "16 / 11",
    fit: "cover",
    alt: "Player-ready Nepal hero visual with sports and casino energy.",
    fallbackType: "hero",
    visualIntent: "Stage-led player intro with crimson depth and premium mountain-ridge texture.",
    overlaySafeArea: "left",
  },
  casinoDiscoveryCard: {
    id: "casinoDiscoveryCard",
    page: "home",
    section: "games",
    targetPath: "/player/games/casino.png",
    ratio: "5 / 4",
    fit: "cover",
    alt: "Casino discovery visual for Nepal players.",
    fallbackType: "games",
    visualIntent: "Immersive casino stage with deep navy layers and a clean focal center.",
    overlaySafeArea: "bottom",
  },
  slotsCard: {
    id: "slotsCard",
    page: "home",
    section: "games",
    targetPath: "/player/games/slots.png",
    ratio: "5 / 4",
    fit: "cover",
    alt: "Slots discovery visual for Nepal players.",
    fallbackType: "games",
    visualIntent: "Sharp slot-energy product frame with contained subject and premium glow.",
    overlaySafeArea: "center",
  },
  liveGamesCard: {
    id: "liveGamesCard",
    page: "home",
    section: "games",
    targetPath: "/player/games/live.png",
    ratio: "5 / 4",
    fit: "cover",
    alt: "Live games discovery visual for Nepal players.",
    fallbackType: "games",
    visualIntent: "Live-table rhythm with stage lighting and controlled red highlights.",
    overlaySafeArea: "bottom",
  },
  sportsFootballCard: {
    id: "sportsFootballCard",
    page: "home",
    section: "sports",
    targetPath: "/player/sports/football.png",
    ratio: "4 / 5",
    fit: "cover",
    alt: "Football-focused sports visual for Nepal players.",
    fallbackType: "sports",
    visualIntent: "Football-led premium action card with stadium energy and safe crop edges.",
    overlaySafeArea: "bottom",
  },
  sportsBasketballCard: {
    id: "sportsBasketballCard",
    page: "home",
    section: "sports",
    targetPath: "/player/sports/basketball.png",
    ratio: "4 / 5",
    fit: "cover",
    alt: "Basketball-focused sports visual for Nepal players.",
    fallbackType: "sports",
    visualIntent: "Basketball-led action card with quick pace and clean crop safety.",
    overlaySafeArea: "center",
  },
  sportsTennisCard: {
    id: "sportsTennisCard",
    page: "home",
    section: "sports",
    targetPath: "/player/sports/tennis.png",
    ratio: "4 / 5",
    fit: "cover",
    alt: "Tennis-focused sports visual for Nepal players.",
    fallbackType: "sports",
    visualIntent: "Tennis-led action card with sharp point-play focus and balanced framing.",
    overlaySafeArea: "center",
  },
  sportsCricketCard: {
    id: "sportsCricketCard",
    page: "home",
    section: "sports",
    targetPath: "/player/sports/cricket.png",
    ratio: "4 / 5",
    fit: "cover",
    alt: "Cricket-focused sports visual for Nepal players.",
    fallbackType: "sports",
    visualIntent: "Cricket-led action card with regional energy and stable lower crop.",
    overlaySafeArea: "center",
  },
  offersWelcomeCard: {
    id: "offersWelcomeCard",
    page: "home",
    section: "offers",
    targetPath: "/offer/welcome.png",
    ratio: "16 / 10",
    fit: "cover",
    alt: "Welcome offer visual for Nepal players.",
    fallbackType: "offers",
    visualIntent: "Contained offer artwork with clean center weight and warm reward glow.",
    overlaySafeArea: "center",
  },
  rewardsGiftsCard: {
    id: "rewardsGiftsCard",
    page: "home",
    section: "offers",
    targetPath: "/offer/rewards.png",
    ratio: "16 / 10",
    fit: "cover",
    alt: "Rewards and gifts visual for Nepal players.",
    fallbackType: "offers",
    visualIntent: "Contained premium reward artwork with calm object emphasis.",
    overlaySafeArea: "center",
  },
  finalPlayerCtaVisual: {
    id: "finalPlayerCtaVisual",
    page: "home",
    section: "final-cta",
    targetPath: "/player/hero/hero.png",
    ratio: "16 / 10",
    fit: "cover",
    alt: "Player final CTA visual for Nepal landing.",
    fallbackType: "cta",
    visualIntent: "Closing player panel with crisp glow and stable lower overlay zone.",
    overlaySafeArea: "left",
  },
  partnershipHeroVisual: {
    id: "partnershipHeroVisual",
    page: "partnership",
    section: "hero",
    targetPath: "/partnership/partnership_hero.png",
    ratio: "16 / 10",
    fit: "cover",
    alt: "Partnership hero visual for Nepal routes.",
    fallbackType: "partnership",
    visualIntent: "Business-facing stage with dashboard depth, manager energy, and controlled shine.",
    overlaySafeArea: "center",
  },
  partnershipBenefitsVisual: {
    id: "partnershipBenefitsVisual",
    page: "partnership",
    section: "benefits",
    targetPath: "/partnership/nepal-benefits.png",
    ratio: "16 / 10",
    fit: "cover",
    alt: "Support and benefits visual for Nepal partnership page.",
    fallbackType: "partnership",
    visualIntent: "Operational trust surface with support-led lighting and layered depth.",
    overlaySafeArea: "right",
  },
  partnershipPartnerRouteVisual: {
    id: "partnershipPartnerRouteVisual",
    page: "partnership",
    section: "paths",
    targetPath: "/partnership/partner.png",
    ratio: "16 / 10",
    fit: "cover",
    alt: "Partner route visual for Nepal promotion path.",
    fallbackType: "partnership",
    visualIntent: "Audience-promotion route card with campaign-ready posture.",
    overlaySafeArea: "center",
  },
  partnershipAgentRouteVisual: {
    id: "partnershipAgentRouteVisual",
    page: "partnership",
    section: "paths",
    targetPath: "/partnership/agent.png",
    ratio: "16 / 10",
    fit: "cover",
    alt: "Agent route visual for Nepal local support path.",
    fallbackType: "partnership",
    visualIntent: "Local-operations route card with cashier and support emphasis.",
    overlaySafeArea: "center",
  },
} as const satisfies Record<string, MediaSlotConfig>;

export type NepalMediaSlotId = keyof typeof nepalMediaSlots;

export const getMediaSlot = (slotId: NepalMediaSlotId) => nepalMediaSlots[slotId];

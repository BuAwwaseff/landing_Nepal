import type { NepalMediaSlotId } from "@/content/nepal-media-slots";
import { gamesLink, sportsLink } from "@/config/nepal-globals";

export type ButtonVariant = "primary" | "secondary" | "ghost";

export type ContentCta = {
  label: string;
  href: string;
  variant?: ButtonVariant;
  external?: boolean;
};

export type MetricItem = {
  value: string;
  label: string;
  note?: string;
};

export type HighlightItem = {
  title: string;
  body: string;
};

export type MediaCard = {
  title: string;
  body: string;
  badge?: string;
  tags?: string[];
  mediaSlotId: NepalMediaSlotId;
  cta?: ContentCta;
};

export type SportsSpotlightCard = {
  badge?: string;
  accentLabel: string;
  title: string;
  body: string;
  tags: string[];
  footerLabel: string;
  mediaSlotId: NepalMediaSlotId;
  cta: ContentCta;
};

export type RouteCard = {
  title: string;
  body: string;
  bullets: string[];
  mediaSlotId: NepalMediaSlotId;
  ctas: ContentCta[];
  asideLabel?: string;
};

export type FooterLink = {
  label: string;
  href: string;
};

const placeholderContactHrefs = {
  telegram: "https://t.me/your_telegram",
  email: "mailto:your-email@example.com",
} as const;

export const nepalContent = {
  brand: {
    name: "MELBET Nepal",
    shortName: "Nepal",
    strapline: "Sports, casino, rewards, and partnership access for Nepal.",
  },
  seo: {
    homeTitle: "MELBET Nepal | Sports, Casino, Offers, and Mobile Access",
    homeDescription:
      "Follow football, explore casino games, check current offers, and start from a mobile-ready route built for Nepal.",
    partnershipTitle: "MELBET Nepal Partnership | Partner and Agent Routes",
    partnershipDescription:
      "Choose a partner or agent route in Nepal and start with manager support, promo tools, tracking, and local payment guidance.",
  },
  chrome: {
    nav: [
      { label: "Home", href: "/" },
      { label: "Games", href: gamesLink },
      { label: "Sports", href: sportsLink },
      { label: "Offers", href: "/#offers" },
      { label: "Partnership", href: "/partnership" },
      { label: "Contact", href: placeholderContactHrefs.telegram },
    ],
    headerCtas: {
      home: { label: "Start now", href: gamesLink, variant: "primary" as const },
      partnership: {
        label: "Talk to a manager",
        href: placeholderContactHrefs.telegram,
        variant: "primary" as const,
        external: true,
      },
    },
    a11y: {
      homeLinkLabel: "Go to MELBET Nepal home",
      navLabel: "Primary navigation",
      openMenuLabel: "Open navigation menu",
      closeMenuLabel: "Close navigation menu",
    },
  },
  home: {
    hero: {
      eyebrow: "For players in Nepal",
      title: "Start fast with football, casino games, and rewards that stay close to your next move.",
      body:
        "Open your account, follow live matches, try slots and live tables, and check the latest gifts, free bets, or free spins when available.",
      primaryCta: { label: "Explore games", href: gamesLink, variant: "primary" as const },
      secondaryCta: { label: "See offers", href: "/#offers", variant: "secondary" as const },
      supportCtas: [
        {
          label: "Telegram",
          href: placeholderContactHrefs.telegram,
          variant: "secondary" as const,
          external: true,
        },
        {
          label: "Email",
          href: placeholderContactHrefs.email,
          variant: "ghost" as const,
        },
      ] as ContentCta[],
      highlights: [
        "Football, live markets, and match-day action",
        "Slots, live tables, and casino picks in one account",
        "Offers and support that stay easy to reach",
      ] as string[],
      metrics: [
        { value: "Live", label: "football and match markets" },
        { value: "Casino", label: "slots and live tables" },
        { value: "Offers", label: "gifts, free bets, and more" },
      ] as MetricItem[],
      mediaSlotId: "homeHeroStage" as const,
      stageNotesLabel: "Why players start here",
      stageNotes: [
        "Fast sign-up and a simple first step",
        "Sports, casino, and rewards in one place",
        "Mobile-ready play with support nearby",
      ] as string[],
    },
    games: {
      eyebrow: "Casino games",
      title: "Pick the game that fits your mood and move straight into play.",
      body:
        "Move from slots to live tables or browse casino categories without a slow start. Keep the session simple and choose what you want next.",
      cards: [
        {
          badge: "Casino",
          title: "Casino picks for quick browsing",
          body: "Browse featured categories, open fresh tables, and reach the games you want without extra steps.",
          tags: ["Featured tables", "Fast browse", "Mobile-ready"],
          mediaSlotId: "casinoDiscoveryCard" as const,
          cta: {
            label: "Play now",
            href: gamesLink,
            variant: "primary" as const,
          },
        },
        {
          badge: "Slots",
          title: "Slots for short sessions or longer runs",
          body: "Spin through slot titles built for repeat visits, quick rounds, and reward-led play.",
          tags: ["Quick rounds", "Bonus-ready", "Easy to revisit"],
          mediaSlotId: "slotsCard" as const,
          cta: {
            label: "Play now",
            href: gamesLink,
            variant: "primary" as const,
          },
        },
        {
          badge: "Live",
          title: "Live tables when you want real-time pace",
          body: "Stay close to roulette, blackjack, and other live formats with a clear route into each table.",
          tags: ["Live action", "Table focus", "Smooth on mobile"],
          mediaSlotId: "liveGamesCard" as const,
          cta: {
            label: "Play now",
            href: gamesLink,
            variant: "primary" as const,
          },
        },
      ] as MediaCard[],
    },
    sports: {
      eyebrow: "Available sports",
      title: "Review the sports available before you pick your next market.",
      body:
        "Football, basketball, tennis, and cricket stay easy to review, compare, and open from one sports route.",
      cards: [
        {
          accentLabel: "Top market",
          title: "Football",
          body: "League nights, live odds, and match-day traffic in one place.",
          tags: ["Live leagues", "Accas"],
          footerLabel: "Top events",
          mediaSlotId: "sportsFootballCard" as const,
          cta: { label: "Review now", href: sportsLink, variant: "ghost" as const },
        },
        {
          accentLabel: "Fast lines",
          title: "Basketball",
          body: "Totals, quarters, and faster in-play movement on a shorter board.",
          tags: ["Quarter lines", "In play"],
          footerLabel: "Fast updates",
          mediaSlotId: "sportsBasketballCard" as const,
          cta: { label: "Review now", href: sportsLink, variant: "ghost" as const },
        },
        {
          accentLabel: "Point flow",
          title: "Tennis",
          body: "Set markets and point-by-point movement when you want quicker shifts.",
          tags: ["Set markets", "Sharp reads"],
          footerLabel: "Point markets",
          mediaSlotId: "sportsTennisCard" as const,
          cta: { label: "Review now", href: sportsLink, variant: "ghost" as const },
        },
        {
          accentLabel: "Asia favorite",
          title: "Cricket",
          body: "Regional match markets and live momentum when you want a familiar switch.",
          tags: ["Regional pick", "Live markets"],
          footerLabel: "Asia focus",
          mediaSlotId: "sportsCricketCard" as const,
          cta: { label: "Review now", href: sportsLink, variant: "ghost" as const },
        },
      ] as SportsSpotlightCard[],
    },
    offers: {
      eyebrow: "Offers and rewards",
      title: "Check the current offer, claim what fits, and keep the next session moving.",
      body:
        "Welcome deals, gifts, free bets, and free spins matter most when they are easy to understand. Check what is active and use the offer that suits your next game or match.",
      cards: [
        {
          badge: "Welcome",
          title: "Welcome offers that start the first session well",
          body: "Open your account, check the current welcome deal, and move straight into the game or match you want.",
          tags: ["Easy first step", "Simple claim path"],
          mediaSlotId: "offersWelcomeCard" as const,
          cta: {
            label: "Claim now",
            href: gamesLink,
            variant: "primary" as const,
          },
        },
        {
          badge: "Rewards",
          title: "Gifts and reload rewards for return visits",
          body: "Use match-day extras, repeat-play rewards, and other active promos without guessing which offer fits next.",
          tags: ["Gift offers", "Repeat sessions"],
          mediaSlotId: "rewardsGiftsCard" as const,
          cta: {
            label: "Claim now",
            href: gamesLink,
            variant: "primary" as const,
          },
        },
      ] as MediaCard[],
    },
    finalCta: {
      eyebrow: "Your next step",
      title: "Choose your game, check the offer, and start when you are ready.",
      body:
        "Go straight to sports, casino games, or support without losing time on extra steps.",
      primaryCta: { label: "Start now", href: gamesLink, variant: "primary" as const },
      mediaSlotId: "finalPlayerCtaVisual" as const,
      checklist: [
        "Football, casino games, and mobile access",
        "Gifts, free bets, and active offers",
        "Support that stays easy to reach",
      ] as string[],
    },
  },
  partnership: {
    hero: {
      eyebrow: "Partnership in Nepal",
      title: "Choose the route that fits how you work: promote as a partner or support players as a local agent.",
      body:
        "If you have an audience, traffic, or a local network, you can start with a clear role, manager support, and practical tools from day one.",
      primaryCta: {
        label: "Talk to a manager",
        href: placeholderContactHrefs.telegram,
        variant: "primary" as const,
        external: true,
      },
      secondaryCta: {
        label: "View both routes",
        href: "/partnership#paths",
        variant: "secondary" as const,
      },
      supportCtas: [
        {
          label: "TG",
          href: placeholderContactHrefs.telegram,
          variant: "secondary" as const,
          external: true,
        },
        {
          label: "Email",
          href: placeholderContactHrefs.email,
          variant: "ghost" as const,
        },
      ] as ContentCta[],
      metrics: [
        { value: "Partner", label: "for promoters and communities" },
        { value: "Agent", label: "for local payment support" },
        { value: "Manager", label: "direct contact from the start" },
      ] as MetricItem[],
      mediaSlotId: "partnershipHeroVisual" as const,
      railsLabel: "What you get",
      rails: [
        "Promo codes, campaign support, and tracking for partners",
        "Local payment guidance and player support for agents",
        "Direct follow-up from a manager when you need the next step",
      ] as string[],
    },
    benefits: {
      eyebrow: "Why join",
      title: "Start with a role that already has support behind it.",
      body:
        "Partners need promo tools, tracking, and campaign support. Agents need clear operating steps, local payment coverage, and fast follow-up when players need help.",
      items: [
        {
          title: "One manager from the start",
          body: "Speak with one clear contact who helps you choose the right route and move into the first steps.",
          metric: "Direct contact",
        },
        {
          title: "Tools that match the role",
          body: "Use promo materials, code-led offers, tracking, or local support guidance that fits how you work.",
          metric: "Promo + support",
        },
        {
          title: "Clear local responsibilities",
          body: "If you join as an agent, the work stays tied to deposits, withdrawals, and practical player support in your area.",
          metric: "Agent-ready",
        },
      ] as Array<{ title: string; body: string; metric: string }>,
      mediaSlotId: "partnershipBenefitsVisual" as const,
    },
    steps: {
      eyebrow: "Start in three steps",
      title: "Share how you work, confirm the route, and begin with a clear next action.",
      body:
        "The first step stays practical: tell us what you can bring, review the tools or operating details, and move into the route that fits.",
      items: [
        {
          step: "01",
          title: "Share what you bring",
          body: "Tell us whether you have traffic, a community, local payment access, or player support experience.",
        },
        {
          step: "02",
          title: "Confirm the route",
          body: "Review the role, contact flow, tools, and expectations with the manager before you begin.",
        },
        {
          step: "03",
          title: "Start with follow-up",
          body: "Launch promotion or local support with a clear next step and direct follow-up when you need it.",
        },
      ] as Array<{ step: string; title: string; body: string }>,
    },
    paths: {
      eyebrow: "Choose your route",
      title: "Keep promotion and local player support separate so each role stays clear.",
      body:
        "Pick the partner route if you bring an audience or traffic. Pick the agent route if you can handle deposits, withdrawals, and local player support.",
      cards: [
        {
          asideLabel: "Partner",
          title: "Partner route",
          body: "Best for promoters, creators, and community owners who can bring traffic, attention, or a loyal audience.",
          bullets: [
            "Private promo code and campaign support",
            "Marketing materials and manager guidance",
            "Tracking visibility for performance follow-up",
          ],
          mediaSlotId: "partnershipPartnerRouteVisual" as const,
          ctas: [
            {
              label: "Telegram",
              href: placeholderContactHrefs.telegram,
              variant: "primary",
              external: true,
            },
            {
              label: "Email",
              href: placeholderContactHrefs.email,
              variant: "ghost",
            },
          ],
        },
        {
          asideLabel: "Agent",
          title: "Agent route",
          body: "Best for local operators who can support deposits, withdrawals, and direct player guidance in their area.",
          bullets: [
            "Local transaction support and cashier-style work",
            "Player assistance tied to practical access",
            "Manager follow-up for the next operating step",
          ],
          mediaSlotId: "partnershipAgentRouteVisual" as const,
          ctas: [
            {
              label: "Telegram",
              href: placeholderContactHrefs.telegram,
              variant: "primary",
              external: true,
            },
            {
              label: "Email",
              href: placeholderContactHrefs.email,
              variant: "ghost",
            },
          ],
        },
      ] as RouteCard[],
    },
  },
  footer: {
    description:
      "Football, casino games, offers, support, and partnership routes for visitors in Nepal.",
    columns: [
      {
        title: "Home",
        links: [
          { label: "Top", href: "/#top" },
          { label: "Games", href: gamesLink },
          { label: "Sports", href: sportsLink },
          { label: "Offers", href: "/#offers" },
          { label: "Start now", href: gamesLink },
        ] as FooterLink[],
      },
      {
        title: "Partnership",
        links: [
          { label: "Top", href: "/partnership#top" },
          { label: "Why join", href: "/partnership#benefits" },
          { label: "How to start", href: "/partnership#steps" },
          { label: "Choose route", href: "/partnership#paths" },
        ] as FooterLink[],
      },
    ],
    contactLinks: [
      { label: "Telegram", href: placeholderContactHrefs.telegram },
      { label: "Email", href: placeholderContactHrefs.email },
    ] as FooterLink[],
    note: "Offers, support access, and partnership terms depend on availability and the route you choose.",
    legalLine: "© 2026 MELBET Nepal. All rights reserved.",
  },
} as const;

export type NepalContent = typeof nepalContent;

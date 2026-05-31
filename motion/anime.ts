import type { TargetsParam } from "animejs";
import { remove } from "animejs";

export const motionTokens = {
  duration: {
    fast: 220,
    base: 420,
    slow: 760,
    loop: 5200,
    marquee: 30000,
  },
  easing: {
    standard: "cubicBezier(0.2, 0.8, 0.2, 1)",
    entrance: "cubicBezier(0.22, 1, 0.36, 1)",
    emphasis: "easeOutExpo",
    linear: "linear",
  },
  distance: {
    xs: 8,
    sm: 14,
    md: 20,
    lg: 28,
  },
  scale: {
    hover: 1.02,
    lift: 1.01,
  },
} as const;

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const removeAnimations = (targets: TargetsParam) => {
  remove(targets);
};

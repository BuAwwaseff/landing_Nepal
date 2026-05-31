"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { removeAnimations, prefersReducedMotion } from "@/motion/anime";
import { observeOnce } from "@/motion/observers";
import { revealLeft, revealScale, revealUp } from "@/motion/presets";

type RevealVariant = "up" | "left" | "scale";

type RevealProps = {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  staggerAmount?: number;
  rootMargin?: string;
};

const revealMap = {
  up: revealUp,
  left: revealLeft,
  scale: revealScale,
} as const;

export function Reveal({
  children,
  className,
  variant = "up",
  delay = 0,
  staggerAmount = 56,
  rootMargin,
}: RevealProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = wrapperRef.current;

    if (!node || prefersReducedMotion()) {
      return;
    }

    const markedItems = Array.from(
      node.querySelectorAll<HTMLElement>("[data-reveal-item]"),
    );
    const targets = markedItems.length > 0 ? markedItems : [node];

    targets.forEach((target) => {
      target.style.opacity = "0";
    });

    let animation: { pause?: () => void } | undefined;
    const stopObserving = observeOnce(
      node,
      () => {
        animation = revealMap[variant](targets, delay, staggerAmount);
      },
      { rootMargin },
    );

    return () => {
      stopObserving();
      removeAnimations(targets);
      animation?.pause?.();

      targets.forEach((target) => {
        target.style.opacity = "";
        target.style.transform = "";
      });
    };
  }, [delay, rootMargin, staggerAmount, variant]);

  return (
    <div className={className} ref={wrapperRef}>
      {children}
    </div>
  );
}

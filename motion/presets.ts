import { animate, stagger } from "animejs";
import { motionTokens } from "@/motion/anime";

export const revealUp = (
  targets: Parameters<typeof animate>[0],
  delay = 0,
  staggerAmount = 56,
) =>
  animate(targets, {
    opacity: [0, 1],
    translateY: [motionTokens.distance.md, 0],
    duration: motionTokens.duration.slow,
    delay: stagger(staggerAmount, { start: delay }),
    easing: motionTokens.easing.entrance,
  });

export const revealLeft = (
  targets: Parameters<typeof animate>[0],
  delay = 0,
  staggerAmount = 56,
) =>
  animate(targets, {
    opacity: [0, 1],
    translateX: [-motionTokens.distance.md, 0],
    duration: motionTokens.duration.slow,
    delay: stagger(staggerAmount, { start: delay }),
    easing: motionTokens.easing.entrance,
  });

export const revealScale = (
  targets: Parameters<typeof animate>[0],
  delay = 0,
  staggerAmount = 52,
) =>
  animate(targets, {
    opacity: [0, 1],
    scale: [0.975, 1],
    duration: motionTokens.duration.slow,
    delay: stagger(staggerAmount, { start: delay }),
    easing: motionTokens.easing.entrance,
  });

export const floatLoop = (
  targets: Parameters<typeof animate>[0],
  amplitude = 6,
  duration = motionTokens.duration.loop,
) =>
  animate(targets, {
    translateY: [0, -amplitude],
    direction: "alternate",
    loop: true,
    easing: "easeInOutSine",
    duration,
  });

export const pulseGlow = (
  targets: Parameters<typeof animate>[0],
  duration = motionTokens.duration.loop,
) =>
  animate(targets, {
    opacity: [0.7, 1],
    scale: [1, 1.03],
    direction: "alternate",
    loop: true,
    easing: "easeInOutSine",
    duration,
  });

export const hoverLift = (targets: HTMLElement[]) => {
  const cleanups = targets.map((target) => {
    const onEnter = () =>
      animate(target, {
        translateY: -3,
        scale: motionTokens.scale.lift,
        duration: motionTokens.duration.fast,
        easing: motionTokens.easing.standard,
      });

    const onLeave = () =>
      animate(target, {
        translateY: 0,
        scale: 1,
        duration: motionTokens.duration.fast,
        easing: motionTokens.easing.standard,
      });

    target.addEventListener("mouseenter", onEnter);
    target.addEventListener("mouseleave", onLeave);

    return () => {
      target.removeEventListener("mouseenter", onEnter);
      target.removeEventListener("mouseleave", onLeave);
    };
  });

  return () => {
    cleanups.forEach((cleanup) => cleanup());
  };
};

import { nepalGlobals, type Direction, type NepalLocale } from "@/config/nepal-globals";

export const getDirection = (locale: NepalLocale = nepalGlobals.defaultLocale): Direction =>
  nepalGlobals.directionByLocale[locale];

export const isRtl = (locale: NepalLocale = nepalGlobals.defaultLocale) =>
  getDirection(locale) === "rtl";

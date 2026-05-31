import { nepalGlobals, type NepalPage } from "@/config/nepal-globals";

export const getPageAnchors = (page: NepalPage) => nepalGlobals.chrome.anchors[page];

export const getPageVariant = (page: NepalPage) => nepalGlobals.pages[page].variants;

export const hasAnchor = (page: NepalPage, anchor: string) =>
  (nepalGlobals.chrome.anchors[page] as readonly string[]).includes(anchor);

export const nepalTheme = {
  name: "Nepal Crimson Summit",
  family: "editorial-premium",
  backgroundVariant: "bg-depth",
  density: "balanced",
  textMeasure: "md",
  surfaceMode: "glass-dominant",
  motionProfile: "subtle",
  identityAxes: [
    "palette behavior",
    "background character",
    "surface mix",
    "typography posture",
    "media placeholder direction",
    "logo animation temperament",
  ],
} as const;

export type NepalTheme = typeof nepalTheme;

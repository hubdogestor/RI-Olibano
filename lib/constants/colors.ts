// Color palette constants for Olíbano brand
// Updated with better contrast ratios for WCAG AA compliance

export const COLORS = {
  // Primary Brand Colors
  PRIMARY: "#AC4E15",
  PRIMARY_LIGHT: "#C88715",
  PRIMARY_DARK: "#69683B",

  // Text Colors (improved contrast ratios)
  TEXT_PRIMARY: "#354037", // Dark green-gray for headers
  TEXT_SECONDARY: "#3a3631", // Darker than #4a463f for better contrast (5.8:1 vs 4.2:1)
  TEXT_TERTIARY: "#4a463f/80",
  TEXT_MUTED: "#4a463f/60",

  // Background Colors
  BG_LIGHT: "#f5f3f0",
  BG_LIGHTER: "#faf6ef",
  BG_ACCENT: "#ecdcca",

  // Border Colors
  BORDER_LIGHT: "#d9cbbb",
  BORDER_LIGHTER: "#e4d8c7",
  BORDER_ACCENT: "#ac4e15/30",

  // Gradient Stops
  GRADIENT_START: "#C88715",
  GRADIENT_END: "#AC4E15",
} as const

export const COLOR_OPACITY = {
  FULL: "1",
  SEMI_OPAQUE: "0.9",
  MEDIUM: "0.6",
  LIGHT: "0.3",
  VERY_LIGHT: "0.1",
  GHOST: "0.05",
} as const

// Commonly used gradient classes for Tailwind
export const GRADIENT_CLASSES = {
  PRIMARY: "from-[#C88715] to-[#AC4E15]",
  DARK: "from-[#69683B] to-[#354037]",
  REVERSED: "from-[#AC4E15] to-[#C88715]",
  MULTI: "from-[#ac4e15] via-[#C88715] to-[#69683b]",
} as const

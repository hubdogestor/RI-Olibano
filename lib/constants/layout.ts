// Layout constants for consistent spacing and sizing

export const CARD_HEIGHT = {
  SMALL: "300px",
  MEDIUM: "400px",
  LARGE: "500px",
  AUTO: "auto",
} as const

export const SPACING = {
  XS: "0.25rem",
  SM: "0.5rem",
  MD: "1rem",
  LG: "1.5rem",
  XL: "2rem",
  XXL: "3rem",
  // Responsive padding
  SECTION_PADDING: "p-4 sm:p-6 md:p-8 lg:p-12",
  CARD_PADDING: "p-4 sm:p-5 md:p-6 lg:p-8",
} as const

export const BREAKPOINTS = {
  MOBILE: "375px",
  TABLET: "768px",
  DESKTOP: "1024px",
} as const

export const Z_INDEX = {
  PROGRESS_BAR: 50,
  MODAL: 40,
  DROPDOWN: 30,
  TOOLTIP: 20,
  DEFAULT: 10,
} as const

export const TAP_TARGET_SIZE = {
  MINIMUM: 44, // Apple HIG & Material Design minimum
  COMFORTABLE: 48,
} as const

export const ANIMATION_DURATION = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
} as const

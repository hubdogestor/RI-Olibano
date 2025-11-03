// Animation constants for Framer Motion

export const ANIMATION_DURATION = {
  INSTANT: 0.1,
  FAST: 0.2,
  NORMAL: 0.3,
  MEDIUM: 0.4,
  SLOW: 0.5,
  VERY_SLOW: 0.6,
} as const

export const ANIMATION_DELAY = {
  NONE: 0,
  MINIMAL: 0.05,
  SMALL: 0.1,
  MEDIUM: 0.15,
  LARGE: 0.2,
} as const

export const EASING = {
  EASE_IN: "easeIn",
  EASE_OUT: "easeOut",
  EASE_IN_OUT: "easeInOut",
  LINEAR: "linear",
  CIRC_IN: "circIn",
  CIRC_OUT: "circOut",
  BACK_IN: "backIn",
  BACK_OUT: "backOut",
} as const

// Common animation variants for reuse across components
export const FADE_IN_VARIANTS = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
} as const

export const SLIDE_IN_UP_VARIANTS = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
} as const

export const SLIDE_IN_DOWN_VARIANTS = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
} as const

export const SLIDE_IN_LEFT_VARIANTS = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
} as const

export const SLIDE_IN_RIGHT_VARIANTS = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
} as const

export const SCALE_IN_VARIANTS = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
} as const

export const STAGGER_CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
} as const

export const STAGGER_ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: ANIMATION_DURATION.NORMAL },
  },
} as const

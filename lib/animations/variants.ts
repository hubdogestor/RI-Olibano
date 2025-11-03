/**
 * Centralized animation variants for consistent animations across all components
 * Extracted from section components to follow DRY principle
 */

// ============================================
// Container Variants (for staggered children)
// ============================================

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

export const containerVariantsStagger = {
  stagger_0_08: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  },
  stagger_0_12: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  },
  stagger_0_15: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  },
}

// ============================================
// Item/Child Variants
// ============================================

// Fade in with Y-offset (most common pattern)
export const fadeInY = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export const fadeInYEaseOut = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
}

// Slide in from left
export const slideInFromLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

export const slideInFromLeftShort = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35 } },
}

// Slide in from right
export const slideInFromRight = {
  hidden: { opacity: 0, x: 12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
}

// Scale and fade in
export const scaleAndFadeIn = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

// Simple scale
export const scale = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
}

export const scaleSmall = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
}

// ============================================
// Viewport-based Variants (whileInView)
// ============================================

export const viewportFadeInY = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 as const },
  transition: { duration: 0.4 },
}

export const viewportSlideInLeft = {
  initial: { opacity: 0, x: -16 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
}

export const viewportSlideInLeftShort = {
  initial: { opacity: 0, x: -12 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.35 },
}

export const viewportScaleAndFadeIn = {
  initial: { opacity: 0, scale: 0.9, y: 20 },
  whileInView: { opacity: 1, scale: 1, y: 0 },
  viewport: { once: true, amount: 0.3 as const },
  transition: { duration: 0.4 },
}

// ============================================
// Expand/Collapse Variants (for accordions)
// ============================================

export const expandCollapse = {
  initial: { height: 0, opacity: 0 },
  animate: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: { duration: 0.3 },
}

export const expandCollapseLonger = {
  initial: { height: 0, opacity: 0 },
  animate: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: { duration: 0.4 },
}

// ============================================
// Rotation Variants
// ============================================

export const rotateChevron = (isOpen: boolean) => ({
  animate: { rotate: isOpen ? 180 : 0 },
  transition: { duration: 0.2 },
})

export const rotateIconSpinner = {
  initial: { scale: 0, rotate: -180 },
  animate: { scale: 1, rotate: 0 },
  transition: { duration: 0.5 },
}

// ============================================
// Hover Effects
// ============================================

export const hoverLiftSmall = { whileHover: { y: -4 } }
export const hoverLiftMedium = { whileHover: { y: -6 } }
export const hoverLiftLarge = { whileHover: { y: -8 } }
export const hoverScaleSmall = { whileHover: { scale: 1.02 } }
export const hoverSlideRight = { whileHover: { x: 8 } }

// ============================================
// Page/Section Transitions
// ============================================

export const pageTransitionIn = {
  initial: { opacity: 0, x: 48 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -48 },
  transition: { duration: 0.4, ease: "easeInOut" as const },
}

export const pageTransitionInImmersive = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -32 },
  transition: { duration: 0.35 },
}

// ============================================
// Helper function for staggered animations with dynamic delays
// ============================================

export function createStaggeredDelay(index: number, delayFactor: number = 0.1): number {
  return index * delayFactor
}

export function createStaggeredTransition(
  index: number,
  baseDuration: number = 0.4,
  delayFactor: number = 0.1,
) {
  return {
    duration: baseDuration,
    delay: createStaggeredDelay(index, delayFactor),
  }
}

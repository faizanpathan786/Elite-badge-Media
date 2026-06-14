import { motion, useReducedMotion } from 'framer-motion'

/**
 * 3D scroll-entrance wrapper.
 *
 * Each card flies in with a subtle 3D tilt (rotateX + lift + scale + fade) the
 * moment it scrolls into view, and re-plays whenever it re-enters — so the
 * motion is clearly visible as you scroll the page.
 *
 * Pass-through `className` / `style` keep each call site's own card visuals.
 *
 * Reduced motion: users with `prefers-reduced-motion` get a plain opacity
 * fade (no 3D transform), which is accessible while still giving feedback.
 */
export default function Card3D({
  children,
  className,
  style,
  onClick,
  /** small per-card delay so rows resolve with a gentle stagger */
  index = 0,
  ...rest
}) {
  const reduce = useReducedMotion()

  const initial = reduce
    ? { opacity: 0 }
    : { opacity: 0, rotateX: 22, y: 64, scale: 0.9 }

  const inView = reduce
    ? { opacity: 1 }
    : { opacity: 1, rotateX: 0, y: 0, scale: 1 }

  return (
    <motion.div
      className={className}
      onClick={onClick}
      initial={initial}
      whileInView={inView}
      viewport={{ once: false, amount: 0.2, margin: '0px 0px -60px 0px' }}
      transition={{
        duration: 0.7,
        delay: (index % 6) * 0.09,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        height: '100%',
        transformPerspective: 900,
        transformStyle: 'preserve-3d',
        transformOrigin: '50% 100%',
        willChange: 'transform, opacity',
        ...style,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

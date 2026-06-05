# Premium SaaS Card Redesign — Design

**Date:** 2026-06-05
**Status:** Approved pending spec review

## Goal

Make the site's cards look like a polished, high-end SaaS product (Linear/Vercel
tier) instead of flat, generic cards — with material depth and subtle
scroll-driven 3D motion that matches the quality of the existing hero section.

## Scope

All card types:

| Card type | File | Current style |
|-----------|------|---------------|
| Services (6) | `client/src/components/Services.jsx` | `.glass-card` |
| Packages (pricing) | `client/src/components/InstagramPackages.jsx` | inline styles + `popular` variant |
| Publications | `client/src/components/PRPublications.jsx` | `.pub-card` + tier variants |
| Platform showcase | `client/src/components/PlatformCards.jsx` | rich internal animation (kept) |

## Decisions

- **Dependency:** add `framer-motion`.
- **3D motion:** scroll-driven only (no mouse-tilt / glow-border / spotlight).
- **Intensity:** subtle & premium — ~10° tilt, gentle resolve.
- **PlatformCards:** wrapped in the same 3D scroll entrance; its internal
  floating animations are left untouched.

## Design

### 1. Visual material upgrade (CSS, in `client/src/index.css`)

The cards read flat because the glass fill is uniform and the border is a single
hairline. Upgrade the shared card classes to give depth:

- **Gradient hairline border** (brighter top, fading down) using the same
  `::before` masked-gradient technique as `.liquid-glass`, replacing the single
  flat border.
- **Inner top sheen** — a faint top highlight (`inset 0 1px 0 rgba(255,255,255,.12)`)
  so light reads as hitting the top edge.
- **Layered ambient shadow** — multi-stop, purple-tinted drop shadow so cards
  float above the `hsl(260 87% 3%)` background.
- **Refined hover** — lift + small scale + intensified glow + border brighten,
  made consistent across `.glass-card`, `.popular-card`, and `.pub-card`.
- Keep existing type scale (Geist Sans / General Sans), radii rhythm, and the
  purple→pink→amber accent palette so it matches the hero.

Classes touched: `.glass-card`, `.popular-card`, `.pub-card` (+ tier variants).
The package cards in `InstagramPackages.jsx` use inline styles; they will be
migrated to use a shared `.glass-card`-based look (or have equivalent material
styles applied inline) so all cards share one visual language.

### 2. Scroll-driven 3D wrapper — `client/src/components/Card3D.jsx`

A reusable Framer Motion component wrapping any card's children.

Behavior:

- On entering the viewport, animate from a **receded 3D state** → **rest**:
  - `rotateX`: ~10° → 0°
  - `y`: ~40px → 0
  - `z` / scale: slightly back/smaller → full
  - `opacity`: 0 → 1
- Driven by `useScroll` (target = the card ref, `offset` mapped from
  enter→settle) + `useTransform`, so the 3D tracks scroll progress rather than a
  one-shot trigger.
- Accepts `index` for stagger and passes through `className` / `style` so each
  call site keeps its own card visuals.
- Parent grid containers receive `perspective` (~1000px) + `transform-style:
  preserve-3d` so rotation has real depth.
- **Reduced motion:** when `prefers-reduced-motion: reduce`, render a static
  element (no transforms), preserving content and accessibility.

### 3. Integration

- **Services.jsx** — wrap each `.glass-card` in `<Card3D index={i}>`; add
  `perspective` to the grid.
- **InstagramPackages.jsx** — wrap each `PackageCard` in `<Card3D>`; apply the
  new material styling; add `perspective` to `.pkg-grid`.
- **PRPublications.jsx** — wrap each `PubCard` in `<Card3D>`; add `perspective`
  to the tier grids.
- **PlatformCards.jsx** — wrap the card(s) in `<Card3D>` for the entrance only;
  internal animations untouched.

### 4. Interaction with existing scroll-reveal

The current `.scroll-reveal` IntersectionObserver (in `App.jsx`) handles
opacity/translate reveals for headings and cards. For cards now driven by
`Card3D`, the `scroll-reveal` class is removed from the card element (Card3D owns
its entrance) to avoid double-animation. Section headings keep `scroll-reveal`.

## Testing / Verification

- `npm run build` in `client/` succeeds (no TypeScript/lint/build errors).
- `npm run dev` — manual check: cards show the subtle 3D entrance on scroll, new
  material look renders, hover still works, layout unbroken on mobile widths
  (existing responsive breakpoints preserved).
- Verify `prefers-reduced-motion` disables the 3D transform.

## Out of scope

- Mouse-tilt / cursor-spotlight / animated glow-border (not selected).
- Content, copy, pricing, and data changes.
- Restructuring sections or navigation.

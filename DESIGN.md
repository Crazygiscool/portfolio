---
name: Obsidian Neon
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#cfc2d6'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#988d9f'
  outline-variant: '#4d4354'
  surface-tint: '#ddb7ff'
  primary: '#ddb7ff'
  on-primary: '#490080'
  primary-container: '#b76dff'
  on-primary-container: '#400071'
  inverse-primary: '#842bd2'
  secondary: '#ffb0cd'
  on-secondary: '#640039'
  secondary-container: '#aa0266'
  on-secondary-container: '#ffbad3'
  tertiary: '#adc6ff'
  on-tertiary: '#002e6a'
  tertiary-container: '#4d8eff'
  on-tertiary-container: '#00285d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#f0dbff'
  primary-fixed-dim: '#ddb7ff'
  on-primary-fixed: '#2c0051'
  on-primary-fixed-variant: '#6900b3'
  secondary-fixed: '#ffd9e4'
  secondary-fixed-dim: '#ffb0cd'
  on-secondary-fixed: '#3e0022'
  on-secondary-fixed-variant: '#8c0053'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a42'
  on-tertiary-fixed-variant: '#004395'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display:
    fontFamily: Sora
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  code-sm:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  stack-lg: 80px
  stack-md: 48px
  stack-sm: 24px
---

## Brand & Style

This design system establishes a sophisticated "Developer-Premium" aesthetic. It moves away from pure black backgrounds toward a layered, high-contrast dark mode that emphasizes depth and technical precision. 

The brand personality is **modern, expert, and creative**. It balances the clinical precision of a software engineer with the vibrant, expressive energy of a creative technologist.

**Visual Style: Modern-Cyber**
- **Deep Layering:** Using a scale of charcoal and obsidian tones to create structural hierarchy.
- **Vibrant Accents:** Utilizing high-saturation purples and magentas as functional signals and brand identifiers.
- **Glassmorphism:** Subtle translucent overlays with background blurs to suggest a high-end, layered software interface.
- **Technical Accents:** Strategic use of monospaced fonts and subtle grid-line borders to reinforce the "developer" identity.

## Colors

The palette is rooted in a deep "Ink" base with energetic neon highlights.

- **Primary (Electric Violet):** Used for primary actions, progress bars, and focal headings.
- **Secondary (Vivid Pink):** Used for supplementary highlights, hover states, and interactive accents.
- **Tertiary (Tech Blue):** Reserved for technical details, code blocks, or "informational" status indicators.
- **Neutral/Base:** A range of deep blues and grays (`#020617` to `#1E293B`) to provide more depth than pure black.
- **Surface Tints:** Cards and containers use a semi-transparent white (5-8%) to create a frosted glass effect against the dark background.

## Typography

The typographic hierarchy prioritizes bold, geometric shapes for headlines and high-utility monospaced fonts for labels.

- **Headlines:** Sora provides a tech-forward, wide-stance geometric look that feels substantial and modern.
- **Body:** Hanken Grotesk offers exceptional readability in dark mode, preventing "glow" fatigue.
- **Technical Elements:** Geist (Mono) is used for tags, chips, and small metadata to maintain the developer vibe without feeling dated.
- **Mobile Adjustments:** For mobile, `display` scales down to 40px and `headline-lg` to 32px to ensure readability without excessive scrolling.

## Layout & Spacing

The design system utilizes a **Fluid Grid** approach with generous vertical "stack" spacing to give projects breathing room.

- **Desktop:** A 12-column grid with a 1200px max-width. Content is centered. Gutters are fixed at 24px.
- **Vertical Rhythm:** Large sections (e.g., Projects vs. About) are separated by `stack-lg`. Related components (e.g., cards in a list) use `stack-sm`.
- **Containers:** Card padding is consistent (32px for desktop, 20px for mobile) to create a rhythmic internal flow.
- **Mobile:** Single column layout with 20px side margins. Horizontal scrolling is used for chip groups or small gallery items to save vertical space.

## Elevation & Depth

Visual hierarchy is established through **Tonal Elevation** and **Subtle Glassmorphism** rather than traditional heavy shadows.

- **Level 0 (Background):** Deepest navy/black.
- **Level 1 (Default Card):** A slightly lighter fill (`#1E293B` at 40% opacity) with a `16px` backdrop-blur. 
- **Level 2 (Hover/Active):** Increase opacity and add a `1px` stroke using a gradient of the primary and secondary colors at 30% opacity.
- **Borders:** Instead of solid lines, use low-contrast "ghost borders" (`rgba(255,255,255,0.1)`) to define shapes without creating visual noise.

## Shapes

The shape language is "Soft-Technical." It avoids the aggressive sharp corners of traditional brutalism but remains more structured than casual social apps.

- **Base Radius:** 0.5rem (8px) for standard buttons and input fields.
- **Container Radius:** 1rem (16px) for project cards and main sections to provide a modern, "app-like" feel.
- **Pill Radius:** Reserved exclusively for tags, status indicators, and toggle switches to differentiate them from actionable buttons.

## Components

### Buttons
- **Primary:** Solid Primary-to-Secondary gradient with white text. High-contrast and rounded.
- **Secondary (Ghost):** Transparent background with a 1px border. On hover, the border glows with a subtle outer shadow.
- **Tertiary (Monospace):** Plain text with an underline and an trailing arrow `->` using the Label font.

### Cards (Project/Repo)
- **Structure:** 16px border-radius, background blur, and a subtle top-left light source highlight.
- **Header:** Title in Sora Bold with a "Language Indicator" (small colored circle) in the top right.
- **Footer:** Tech stack chips using the Monospace font.

### Input Fields
- Dark backgrounds (slightly darker than the card level).
- Underline focus state using the primary color.
- Labels use the `label-caps` typography style.

### Chips/Tags
- Small, pill-shaped elements with a low-opacity background of the language color (e.g., Yellow for JS, Blue for TS) and high-contrast text.

### Code Blocks
- Deep black background with rounded corners.
- Syntax highlighting follows a "Neon" theme using the primary, secondary, and tertiary accent colors.

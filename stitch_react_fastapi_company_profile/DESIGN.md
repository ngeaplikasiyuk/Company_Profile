---
name: Deep Earth Tech
colors:
  surface: '#fff8f7'
  surface-dim: '#e5d7d7'
  surface-bright: '#fff8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0f0'
  surface-container: '#f9ebea'
  surface-container-high: '#f3e5e5'
  surface-container-highest: '#eddfdf'
  on-surface: '#211a1a'
  on-surface-variant: '#534344'
  inverse-surface: '#362e2f'
  inverse-on-surface: '#fceded'
  outline: '#857373'
  outline-variant: '#d8c1c2'
  surface-tint: '#8f4950'
  primary: '#3a0710'
  on-primary: '#ffffff'
  primary-container: '#561c24'
  on-primary-container: '#d38188'
  inverse-primary: '#ffb2b8'
  secondary: '#93474f'
  on-secondary: '#ffffff'
  secondary-container: '#fe9ea6'
  on-secondary-container: '#79323b'
  tertiary: '#002114'
  on-tertiary: '#ffffff'
  tertiary-container: '#003825'
  on-tertiary-container: '#71a289'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdadb'
  primary-fixed-dim: '#ffb2b8'
  on-primary-fixed: '#3b0711'
  on-primary-fixed-variant: '#73323a'
  secondary-fixed: '#ffdadb'
  secondary-fixed-dim: '#ffb2b8'
  on-secondary-fixed: '#3d0410'
  on-secondary-fixed-variant: '#763039'
  tertiary-fixed: '#baeed2'
  tertiary-fixed-dim: '#9ed2b7'
  on-tertiary-fixed: '#002114'
  on-tertiary-fixed-variant: '#1e4f3b'
  background: '#fff8f7'
  on-background: '#211a1a'
  surface-variant: '#eddfdf'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
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
  label-bold:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
---

## Brand & Style

This design system targets a sophisticated Gen Z audience by blending the raw energy of "Neo-Brutalism" with a high-end "Warm Minimalist" aesthetic. The personality is confident, grounded, and "premium tech"—moving away from cold, sterile blues toward earthy, organic tones that feel human yet technologically advanced.

The visual style is characterized by:
- **Brutalist Minimalism:** Bold strokes, structural clarity, and unapologetic use of scale.
- **Organic Textures:** Implementation of a subtle 2-3% monochromatic noise/grain overlay across all surfaces to remove the "plastic" feel of digital screens.
- **High Contrast:** Deep maroons against soft creams create a striking visual hierarchy that commands attention while remaining easy on the eyes.
- **Approachable Sophistication:** Heavy use of rounded corners and spacious layouts to ensure the "bold" elements don't feel aggressive.

## Colors

The palette revolves around a "Wine & Cream" foundation. 

- **Deep Maroon (#561C24):** Used for primary actions, high-level headings, and structural elements. It provides the "Premium" weight.
- **Brick Red (#6D2932):** Used for secondary interactions, hover states, and illustrative accents.
- **Cream/Beige (#E8D8C4):** The primary background color. It acts as a warm canvas that feels more bespoke than pure white.
- **Muted Taupe (#C7B7A3):** Used for borders, disabled states, and subtle UI dividers to maintain the earthy harmony.

**Usage Note:** Avoid pure blacks. Use the Deep Maroon or a highly desaturated dark version of it for body text to maintain the warmth of the palette.

## Typography

This design system utilizes **Hanken Grotesk** across all roles to achieve a cohesive, Swiss-inspired tech look. 

- **Display & Headlines:** Set with tight letter-spacing and heavy weights (Bold/ExtraBold). These should be oversized to create a "Editorial" feel.
- **Body Text:** Uses a Medium or Regular weight with generous line height (1.6x) to ensure readability against the textured beige backgrounds.
- **Labels:** Small caps or uppercase styling is encouraged for utility text to provide a clear contrast against body copy.

## Layout & Spacing

The system employs a **12-column fluid grid** for desktop and a **4-column grid** for mobile. 

- **Rhythm:** An 8px linear scale is used for all padding and margins.
- **Density:** The design favors "Low Density" with significant "White Space" (or "Cream Space") to evoke a premium feel. 
- **Alignment:** Elements should be aligned to a strict grid, but internal component padding should be generous. 
- **Breakpoints:**
  - Mobile: 0px - 767px (Margins: 20px)
  - Tablet: 768px - 1023px (Margins: 40px)
  - Desktop: 1024px+ (Margins: 64px, Max-width: 1280px)

## Elevation & Depth

Depth is created through **Tonal Stacking** and **Hard Shadows** rather than soft, ambient blurs.

- **The Surface System:** Surfaces do not "float" using shadows; instead, they sit on top of each other using subtle color shifts (e.g., a card being slightly lighter than the background cream).
- **Brutalist Shadows:** When elevation is required for interactivity (like a button hover), use a "Hard Shadow"—a solid 4px offset in Deep Maroon with 100% opacity. This reinforces the bold, startup aesthetic.
- **Backdrop Blur:** Use a subtle backdrop blur (8px) on navigation bars and modals to maintain context, but ensure the overlay has the grain texture applied.

## Shapes

The shape language is defined by **Large Radii** to soften the high-contrast colors.

- **Primary Radius:** 16px (1rem) for cards and main containers.
- **Secondary Radius:** 8px (0.5rem) for buttons and input fields.
- **Pill Shapes:** Reserved exclusively for tags, chips, and status indicators to distinguish them from actionable buttons.
- **Stroke:** Use 1.5px or 2px solid borders in Muted Taupe or Deep Maroon to define container boundaries, maintaining the Brutalist influence.

## Components

- **Buttons:** High-contrast blocks. Primary buttons use a Deep Maroon background with Cream text. On hover, they shift to Brick Red or trigger a 4px hard-drop shadow.
- **Input Fields:** Thick 2px borders in Muted Taupe. Labels are always placed above the field in `label-bold` style. Focus states use a Deep Maroon border.
- **Cards:** No soft shadows. Use a 1px border or a slightly different tonal fill. Apply the noise texture prominently to card surfaces.
- **Chips/Tags:** Pill-shaped with a Brick Red outline or a Muted Taupe fill. Text should be small and bold.
- **Checkboxes/Radios:** Oversized (24px) to emphasize the "Bold" aesthetic. Use Deep Maroon for the "Selected" state.
- **Grain Overlay:** A global CSS pseudo-element should apply a fine-grain SVG noise filter at 3% opacity across the entire viewport to unify the tech-meets-organic theme.
---
name: Haute Couture Editorial
colors:
  surface: '#fdf9f3'
  surface-dim: '#dddad4'
  surface-bright: '#fdf9f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3ed'
  surface-container: '#f1ede7'
  surface-container-high: '#ebe8e2'
  surface-container-highest: '#e6e2dc'
  on-surface: '#1c1c18'
  on-surface-variant: '#444748'
  inverse-surface: '#31302d'
  inverse-on-surface: '#f4f0ea'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c9c6c5'
  secondary: '#755b00'
  on-secondary: '#ffffff'
  secondary-container: '#fed977'
  on-secondary-container: '#785d00'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1f1b0f'
  on-tertiary-container: '#8a8372'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c9c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#ffe08f'
  secondary-fixed-dim: '#e6c364'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#584400'
  tertiary-fixed: '#ebe2cd'
  tertiary-fixed-dim: '#cec6b2'
  on-tertiary-fixed: '#1f1b0f'
  on-tertiary-fixed-variant: '#4b4637'
  background: '#fdf9f3'
  on-background: '#1c1c18'
  surface-variant: '#e6e2dc'
  gold-leaf: '#C9A84C'
  champagne: '#F5ECD7'
  ivory: '#FAF6F0'
  onyx: '#0A0A0A'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
    letterSpacing: 0.05em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: 0.03em
  body-lg:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '300'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '300'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.2em
  button:
    fontFamily: Montserrat
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.0'
    letterSpacing: 0.15em
spacing:
  container-max: 1440px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style
The design system embodies the essence of Parisian haute couture—a fusion of heritage craftsmanship and avant-garde minimalism. It is designed for a discerning, high-net-worth audience that values exclusivity, architectural precision, and editorial storytelling.

The aesthetic follows a **High-Contrast / Minimalist** direction. It leverages the dramatic negative space of Balenciaga with the cinematic warmth of Louis Vuitton. The interface should feel less like a shop and more like a digital atelier, utilizing high-quality photography, expansive layouts, and deliberate typographic pacing to evoke an emotional response of quiet luxury and timeless sophistication.

## Colors
The palette is rooted in a "New Neutral" philosophy, where high-contrast blacks provide structure against a soft, organic ivory foundation.

- **Onyx (#0A0A0A):** Used for primary typography, structural borders, and high-impact backgrounds to provide a sense of authority and modernity.
- **Gold Leaf (#C9A84C):** Reserved for subtle accents, fine lines, and interactive states. It should be used sparingly to maintain its perceived value.
- **Ivory & Champagne:** These serve as the primary "canvas" colors. Use Ivory for large background areas to avoid the clinical feel of pure white, and Champagne for subtle section transitions or container backgrounds.

## Typography
The typographic hierarchy relies on the tension between a romantic, high-contrast serif and a clean, airy sans-serif.

- **Playfair Display:** Used for headlines and editorial titles. In display sizes, use tight tracking for a modern look. For section headers, use wide tracking to evoke a sense of "breathing room."
- **Montserrat:** Strictly used in Light (300) and Regular (400) weights. It provides a functional, neutral counterpoint to the serif.
- **Key Directive:** All labels and navigation items must use uppercase with generous letter spacing (0.15em - 0.2em) to mimic high-end fashion branding.

## Layout & Spacing
The layout follows a **Fixed Grid** system with exaggerated margins to enforce the "editorial" feel. 

- **Desktop:** A 12-column grid with a maximum width of 1440px. The 80px side margins are sacred; they ensure the content feels framed like a photograph.
- **Rhythm:** Use a 4px baseline, but prioritize large, asymmetrical gaps between sections (120px+) to create a rhythm of discovery. 
- **Mobile:** Transition to a 4-column grid with 20px margins. Maintain vertical breathing room to keep the interface from feeling cluttered.

## Elevation & Depth
This design system rejects heavy shadows in favor of **Tonal Layers** and **Low-Contrast Outlines**.

- **Depth:** Create hierarchy through color blocking (e.g., an Onyx section following an Ivory section). 
- **Outlines:** Use 0.5px or 1px fine lines in Gold Leaf or a muted Grey-Beige for dividers and input borders. 
- **Grain Overlay:** Apply a subtle, 2-3% opacity monochrome noise overlay to the entire background to give the digital surface a tactile, paper-like quality.
- **Glass:** Use minimal backdrop blurs (20px+) with a Champagne tint for sticky navigation bars to maintain visibility of the high-fashion imagery underneath.

## Shapes
The shape language is strictly **Sharp (0px)**. 

To maintain an architectural and high-fashion aesthetic, every element—from buttons to image containers and input fields—must have right-angled corners. This echoes the precise cuts of tailoring and the structured silhouettes of haute couture. Avoid all rounded corners to differentiate the product from mass-market consumer tech.

## Components
- **Buttons:** Primary buttons are solid Onyx with Ivory text, uppercase, and no border-radius. Secondary buttons use a fine Gold Leaf border and no fill.
- **Input Fields:** Minimalist design featuring only a bottom border (1px). Labels should be small, uppercase, and positioned above the line.
- **Cards:** Product cards should use high-ratio portrait imagery (2:3). No borders or shadows; titles and prices are center-aligned beneath the image in small caps.
- **Chips/Selectors:** For size or color selection, use simple boxes with sharp corners. Active states are indicated by a solid Onyx fill.
- **Fine Lines:** Use horizontal and vertical "hairline" dividers (0.5px) in Gold Leaf to separate editorial sections or navigation tiers.
- **Imagery:** All images should feature a slight "fade" or cinematic grade to match the Champagne and Ivory palette.
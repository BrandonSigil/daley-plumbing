# Daley Plumbing Color Palette

Use these colors consistently throughout the site. They are defined in `tailwind.config.js`.

## Color Hierarchy (Most to Least Used)

| Role          | Name         | Hex       | Tailwind Class | Usage                                     |
| ------------- | ------------ | --------- | -------------- | ----------------------------------------- |
| Primary       | Blue         | `#3563BE` | `primary`      | Main brand color, headings, hero, buttons |
| Secondary     | Coral Red    | `#E05353` | `accent`       | CTAs, alerts, highlights, hover states    |
| Secondary     | Forest Green | `#426A5A` | `green`        | Secondary accent, success states          |
| Neutral       | Cream        | `#F3EEDE` | `secondary`    | Light backgrounds, cards, forms           |
| Tertiary      | Warm Tan     | `#C1B4AE` | `tan`          | Subtle backgrounds, borders               |
| Tertiary/Dark | Burgundy     | `#3B1F2B` | `dark`         | Footer, dark sections                     |
| Base          | White        | `#FFFFFF` | `white`        | Base background, text on dark             |

## Usage Guidelines

### Primary Blue (#3563BE)

- Hero banner background
- Section headings
- Primary buttons
- Navigation text highlights
- Icon backgrounds

### Coral Red (#E05353)

- Call-to-action buttons
- Emergency/urgent callouts
- Hover states
- Alert borders

### Forest Green (#426A5A)

- Secondary accent elements
- Success indicators
- Alternative highlight color

### Cream (#F3EEDE)

- Section backgrounds (alternating with white)
- Form backgrounds
- Card backgrounds

### Warm Tan (#C1B4AE)

- Subtle borders
- Muted text
- Background accents

### Burgundy (#3B1F2B)

- Footer background
- Dark section backgrounds
- High contrast areas

## Example Usage

```astro
<!-- Hero with primary blue -->
<div class="bg-primary text-white">

<!-- CTA button with coral red -->
<button class="bg-accent hover:bg-accent/90">

<!-- Card on cream background -->
<div class="bg-secondary p-6">

<!-- Footer with burgundy -->
<footer class="bg-dark text-white">
```

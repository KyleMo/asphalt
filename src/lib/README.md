# Theme Configuration System

This directory contains the theme configuration for the Star Asphalt website, providing a centralized way to manage brand colors and styling.

## Files

-   `theme.ts` - Main theme configuration with brand colors, utility functions, and class helpers
-   `globals.css` - Global CSS with CSS custom properties and utility classes
-   `tailwind.config.ts` - Tailwind CSS configuration with extended theme

## Brand Colors

The theme uses three main brand colors:

-   **Primary**: `#FFAA2A` (Orange)
-   **Secondary**: `#F6B640` (Lighter Orange)
-   **Dark**: `#202020` (Dark Gray)

## Usage

### 1. Using Tailwind Classes

The easiest way to use brand colors is with Tailwind classes:

```tsx
// Text colors
<h1 className="text-primary-500">Primary Orange Text</h1>
<p className="text-secondary-500">Secondary Orange Text</p>
<span className="text-neutral-900">Dark Gray Text</span>

// Background colors
<div className="bg-primary-500">Primary Orange Background</div>
<div className="bg-secondary-500">Secondary Orange Background</div>
<div className="bg-neutral-900">Dark Gray Background</div>

// Border colors
<div className="border-primary-500">Primary Orange Border</div>
<div className="border-secondary-500">Secondary Orange Border</div>
```

### 2. Using Theme Configuration

Import the theme configuration for programmatic access:

```tsx
import { brandColors, brandClasses, componentThemes } from "@/lib/theme";

// Access brand colors
const primaryColor = brandColors.primary; // "#FFAA2A"

// Use predefined class combinations
const buttonClasses = brandClasses.background.primary; // "bg-primary-500"

// Access component themes
const headerTheme = componentThemes.header;
```

### 3. Using CSS Custom Properties

You can also use CSS custom properties directly:

```css
.my-component {
    color: var(--color-brand-primary);
    background-color: var(--color-brand-secondary);
    border-color: var(--color-brand-dark);
}
```

### 4. Using Utility Classes

The global CSS includes utility classes:

```tsx
<div className="brand-primary">Primary Orange Text</div>
<div className="bg-brand-secondary">Secondary Orange Background</div>
<div className="border-brand-primary">Primary Orange Border</div>
<div className="hover-brand-primary">Hover to Primary Orange</div>
```

## Color Palette

The theme includes a full color palette for each brand color:

### Primary (Orange)

-   `primary-50` to `primary-900` - Various shades of orange
-   `primary-500` is the main brand color `#FFAA2A`

### Secondary (Lighter Orange)

-   `secondary-50` to `secondary-900` - Various shades of lighter orange
-   `secondary-500` is the secondary brand color `#F6B640`

### Neutral (Gray)

-   `neutral-50` to `neutral-900` - Various shades of gray
-   `neutral-900` is the dark brand color `#202020`

## Component Examples

### Button Component

```tsx
import Button from "@/components/Button";

<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="outline">Outline Button</Button>
```

### PageLayout Component

The PageLayout component automatically uses brand colors for:

-   Header background and navigation
-   Footer background and links
-   Brand name and headings

## Updating Brand Colors

To update brand colors, modify these files:

1. **`src/lib/theme.ts`** - Update the `brandColors` object
2. **`tailwind.config.ts`** - Update the color definitions
3. **`src/app/globals.css`** - Update CSS custom properties

All components will automatically use the new colors without additional changes.

## Best Practices

1. **Use Tailwind classes** for most styling needs
2. **Use theme configuration** for programmatic color access
3. **Use CSS custom properties** for complex styling scenarios
4. **Maintain consistency** by using the predefined color palette
5. **Test accessibility** with color contrast ratios

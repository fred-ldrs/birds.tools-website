# Fonts Directory

This directory contains locally hosted fonts for the SouvenirBird website.

## Recommended Fonts

For the minimalist, warm design of SouvenirBird, consider using:

### Option 1: Inter (Recommended)
- **Download:** https://fonts.google.com/specimen/Inter
- **License:** SIL Open Font License
- **Files needed:** 
  - `Inter-Regular.woff2`
  - `Inter-Medium.woff2`
  - `Inter-SemiBold.woff2`

### Option 2: Open Sans
- **Download:** https://fonts.google.com/specimen/Open+Sans
- **License:** SIL Open Font License
- **Files needed:**
  - `OpenSans-Regular.woff2`
  - `OpenSans-SemiBold.woff2`

### Option 3: System Fonts (Current)
Currently, the CSS uses system fonts to avoid additional HTTP requests:
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', 'Helvetica Neue', Arial, sans-serif;
```

## Adding Custom Fonts

If you want to add custom fonts, add them to this directory and update `css/styles.css`:

```css
@font-face {
    font-family: 'Inter';
    src: url('../fonts/Inter-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('../fonts/Inter-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('../fonts/Inter-SemiBold.woff2') format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}
```

Then update the CSS variables:
```css
:root {
    --font-main: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --font-heading: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

## Privacy Note

Hosting fonts locally ensures:
- No external requests to Google Fonts or other CDNs
- Better privacy for visitors (no tracking)
- Faster load times (one less DNS lookup)
- Compliance with GDPR

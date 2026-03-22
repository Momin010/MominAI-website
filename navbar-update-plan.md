# Navbar Update Plan

## Current Issues
- The navbar is "chopped" and not visually appealing
- Logo size is too large (140px height) causing layout issues
- Color scheme is too light and not matching the dark theme of the website
- Mobile menu overlay positioning may be off
- Transition effects could be smoother

## Design Inspiration
- Framer Motion website: smooth animations, minimalist design
- Apple website: clean, spacious, effective use of glassmorphism
- Modern dark theme with teal accents (matching index.css)

## New Navbar Design Specifications
- **Color Scheme**: Dark background with teal accents
  - Background: rgba(0, 31, 31, 0.6) (teal-transparent)
  - Scrolled background: rgba(0, 31, 31, 0.8)
  - Text: var(--text-primary) (#F8F6F0)
  - Accent: var(--accent-teal) (#00a3a3)
- **Dimensions**: 
  - Height: 70px (reduced from 64px for better proportions)
  - Logo height: 80px (reduced from 140px)
  - Container width: 90% max-width 1200px
- **Typography**: 
  - Font: var(--font-sans) ('Inter')
  - Nav link size: 1rem
  - Font weight: 500 for links, 600 for hover
- **Effects**:
  - Glassmorphism with backdrop-filter: blur(20px)
  - Smooth transitions for all state changes
  - Subtle hover animations
  - Improved mobile menu with better spacing

## Navbar.jsx Changes
1. Adjust logo import and sizing logic
2. Update navLinks to include active states (optional)
3. Improve mobile menu accessibility (add aria labels)
4. Optimize scroll event handling
5. Add proper closing of mobile menu on link click

## Navbar.css Changes
1. Update .navbar dimensions and background
2. Adjust .logo-image size
3. Refine .nav-links spacing and typography
4. Update .nav-actions button styling
5. Improve .mobile-toggle visibility and size
6. Enhance .mobile-menu positioning and animations
7. Add responsive breakpoints for better mobile experience
8. Implement glassmorphism effects consistently

## Implementation Steps
1. Update Navbar.jsx with improved structure and logic
2. Update Navbar.css with new design specifications
3. Ensure all changes are consistent with index.css variables
4. Test responsiveness and animations
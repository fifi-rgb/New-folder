# Scenario Detail Pages Ready

All four scenario detail pages have been created and linked from the homepage.

## Created Files

1. **New Frontier** - `new-frontier-standalone.html` ✅ (Content added)
2. **Star Rivals** - `star-rivals-standalone.html` ⏳ (Structure ready, awaiting content)
3. **Orbital Commons** - `orbital-commons-standalone.html` ⏳ (Structure ready, awaiting content)
4. **Cold Orbit** - `cold-orbit-standalone.html` ⏳ (Structure ready, awaiting content)

## Navigation Flow

Each page follows the same structure:
- **Back button** → Returns to homepage
- **Hero section** → Large title with scenario number and name
- **3-column grid**:
  - Left: Image placeholder (aspect ratio 3:4)
  - Right: 2 content sections + stats card + CTA button

## Color Schemes

- **New Frontier**: Cyan (#22d3ee) - Cooperative Breakthrough
- **Star Rivals**: Orange (#fb923c) - Fragmented Competition
- **Orbital Commons**: Blue (#3b82f6) - Cooperative Stagnation
- **Cold Orbit**: Red (#ef4444) - Fragmented Stagnation

## Where to Add Content

For each standalone HTML file, replace placeholder content in:

1. **Section 1** - Lines ~43-54
   - Update heading icon, title, and content paragraphs
   
2. **Section 2** - Lines ~58-69
   - Update heading icon, title, and content paragraphs

3. **Stats Card** - Lines ~73-134
   - Update 4 stat titles and descriptions
   - Each stat has its own colored border (orange, red, yellow, pink for Star Rivals, etc.)

## Homepage Links

All scenarios are linked in two places on the homepage:

1. **Scenario Matrix** (Section 4) - Click on any quadrant
2. **Scenario Tabs** (Section 5) - Click "Explore Details" button below each scenario description

## Next Steps

When ready to add content:
1. Open the specific standalone HTML file
2. Search for "Content placeholder" or "Stat X Title"
3. Replace with your actual content
4. Save the file
5. Refresh browser to see changes immediately (no build needed)

---

**Note**: All files are also copied to the `public/` folder for proper serving by Vite.

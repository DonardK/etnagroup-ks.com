# Building Coordinate Guide

To get the exact coordinates for each building in the SVG files, you can use this method:

## Method 1: Using Browser DevTools

1. Open the project detail page in your browser
2. Right-click on the SVG image and select "Inspect Element"
3. The SVG will load and you can see its dimensions
4. Hover over each building in the SVG to see its position
5. Calculate the percentage coordinates:
   - `x` = (building left edge / SVG width) × 100
   - `y` = (building top edge / SVG height) × 100
   - `width` = (building width / SVG width) × 100
   - `height` = (building height / SVG height) × 100

## Method 2: Using Image Editing Software

1. Open the SVG file in an image editor (Photoshop, GIMP, Figma, etc.)
2. Note the total dimensions of the SVG
3. For each building, note its bounding box coordinates
4. Convert to percentages as shown above

## Method 3: Provide the Coordinates

Please provide the coordinates in this format for each building:

```typescript
{
  id: 'building-a',
  name: 'Blloku A',
  clickableArea: { 
    x: 10,    // % from left
    y: 60,    // % from top
    width: 18, // % width
    height: 30 // % height
  }
}
```

## Current Status

All coordinates in `ProjectDetail.tsx` are placeholders and need to be updated with actual values based on the SVG building outlines.

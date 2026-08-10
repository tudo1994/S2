## 2024-05-18 - Avoid lodash.merge for style calculation
**Learning:** `lodash.merge` is too heavy for merging flat cell style objects (like background colors) in high-frequency rendering paths (e.g., `getBackgroundColor` inside tens of thousands of grid cells).
**Action:** Use native object spread `...` with optional chaining and nullish coalescing `??` for better performance when combining default styling with conditional styling.

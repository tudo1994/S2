
## 2024-05-18 - Replacing lodash.merge with Object Spread for Cell Styles
**Learning:** In `@antv/s2-core` and related packages, using `lodash.merge` for combining flat configuration objects (like cell styles and conditions) introduces unnecessary overhead and reduces rendering performance. `getBackgroundColor` on cells is called frequently during layout and rendering.
**Action:** Use native object spread (`...`) with nullish coalescing (`??`) for significantly better rendering performance when combining conditionally returned objects with base styles, ensuring the conditionally merged object is spread first. Always use optional chaining (e.g., `conditionFill?.backgroundColor`) when safely resolving possibly undefined properties.

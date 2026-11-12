
## 2024-06-19 - Using object spread over lodash.merge for style objects
**Learning:** `lodash.merge` in hot paths like `getBackgroundColor` of cell components adds significant overhead due to deep cloning, prototype checking, and array handling. Flat style configurations (like background color and opacity) can be safely merged using object spread and nullish coalescing.
**Action:** Prefer native object spread (`...`) with `??` over `lodash.merge` for combining or duplicating flat configuration objects (like cell styles) for significantly better rendering performance.

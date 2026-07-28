## 2024-07-28 - Avoid lodash.merge for style objects
**Learning:** `lodash.merge` in highly active rendering loops (like cell rendering in grid components) is a significant performance bottleneck due to its heavy runtime cost.
**Action:** Prefer native object spread (`...`) with nullish coalescing (`??`) for merging simple or shallow configuration objects (like cell styles or background conditions) instead of `lodash.merge`.

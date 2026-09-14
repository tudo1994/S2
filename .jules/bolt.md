## 2024-05-18 - Avoid lodash.merge for Cell Styles
**Learning:** `lodash.merge` creates a noticeable performance bottleneck during rendering loops in `@antv/s2-core`, particularly when fetching styles via getters like `getBackgroundColor()`. `merge` ignores `undefined` and recursively clones, adding huge overhead for flat config objects.
**Action:** Always prefer native object spread (`...`) with nullish coalescing (`??`) for merging flat config objects, ensuring fallbacks are handled cleanly.

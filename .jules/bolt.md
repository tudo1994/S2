## 2024-06-27 - Refactor lodash.merge to native object spread
**Learning:** In `@antv/s2-core` and related packages, using `lodash.merge` for combining or duplicating flat configuration objects (like cell styles in `getBackgroundColor`) is significantly slower than using native object spread (`...`). In high-frequency render paths like cell rendering, `lodash.merge` creates a performance bottleneck.
**Action:** When combining flat configuration objects, prefer native object spread (`...`) over `lodash.merge` or `cloneDeep` for better rendering performance.

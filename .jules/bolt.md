## 2026-09-06 - Replace lodash.merge with object spread in Cells for performance
**Learning:** Using `lodash.merge` in high-frequency rendering methods like `getBackgroundColor` across all Cell components (`data-cell`, `header-cell`, `row-cell`) creates significant overhead due to deep cloning and type checking checks, even for flat config objects.
**Action:** Replace `merge` with native object spread (`...`) and nullish coalescing (`??`) for flat configuration merging in performance-critical rendering paths.

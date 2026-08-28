## 2026-08-28 - Spread instead of `lodash.merge`
**Learning:** In `@antv/s2-core`, using `lodash.merge` for shallow conditional config merges (like `conditionFill`) creates an unnecessary performance overhead, especially in cell render loops. Native object spread with nullish coalescing (`??`) is significantly faster and achieves the same result.
**Action:** Use native object spread `...conditionFill` along with nullish coalescing for fallback property mappings to replace `lodash.merge` in high-frequency rendering paths.

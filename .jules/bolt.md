## 2024-05-23 - Avoid lodash.merge for style combinations
**Learning:** `lodash.merge` is very expensive when used in hot code paths like cell rendering methods (e.g., `getBackgroundColor`) in `@antv/s2-core`. It ignores `undefined` which might seem convenient for partial style overriding, but native object spread with nullish coalescing provides significantly better performance.
**Action:** Replace `lodash.merge(defaultStyles, conditionFill)` with `{ ...conditionFill, color: conditionFill?.color ?? defaultStyles.color }` to optimize cell rendering.

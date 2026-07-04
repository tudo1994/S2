## 2026-07-04 - Replaced Lodash merge with Spread Operator
**Learning:** Using `lodash.merge` on flat style configuration objects (like `{ backgroundColor }`) in high-frequency rendering methods (like cell creation) incurs unnecessary overhead. The spread operator (`...`) provides the same shallow merge functionality natively and is significantly faster, reducing CPU cycles during grid rendering.
**Action:** Avoid `lodash.merge` or `cloneDeep` for combining flat objects, especially in hot code paths like cell rendering in `@antv/s2-core`. Prefer native object spreads.

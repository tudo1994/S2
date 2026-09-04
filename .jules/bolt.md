## 2024-06-12 - Replacing lodash.merge with Object Spread
**Learning:** In highly frequently called cell render methods in `@antv/s2-core` (like `getBackgroundColor`), using `lodash.merge` creates a performance bottleneck due to its recursive nature.
**Action:** Replace `lodash.merge` with shallow native object spreads (`...`) and nullish coalescing (`??`), taking care to spread the conditional object first so that `undefined` values don't overwrite valid fallbacks.

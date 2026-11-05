## 2024-05-18 - Replacing lodash.merge with object spread for flat configurations
**Learning:** In `@antv/s2-core`, using `lodash.merge` for flat configuration objects like cell styles is significantly slower than using native object spreading (`...`). `lodash.merge` is unnecessary here as the configuration objects are flat.
**Action:** Use native object spread and nullish coalescing for flat configurations instead of `lodash.merge` to improve rendering performance. Avoid redundant property declarations when doing so.

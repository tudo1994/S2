## 2024-05-18 - Avoid deep merge on render critical paths
**Learning:** `lodash.merge` is significantly slower than object spread (`...`), especially in frequently executed getters like `getBackgroundColor` that run on every cell render cycle.
**Action:** Replace `lodash.merge` with object spread and nullish coalescing (`??`) for flat objects when computing conditional styles. Always spread the conditionally merged object *first* to avoid unintentional `undefined` overrides.

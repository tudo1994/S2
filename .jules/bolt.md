## 2024-06-25 - Replace lodash.merge with Object Spread
**Learning:** In S2 cell rendering, `lodash.merge` is repeatedly used on a hot code path to merge flat configuration objects (e.g. background colors). `lodash.merge` is much heavier than object spread due to deep cloning and type checks, which can significantly affect performance.
**Action:** Replace `lodash.merge` with object spread (`...`) and nullish coalescing (`??`) for flat objects that are merged repeatedly during cell rendering.

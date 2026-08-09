## 2024-06-18 - Replacing lodash.merge with native object spread
**Learning:** In table/grid libraries like `@antv/s2`, methods like `getBackgroundColor` are evaluated thousands of times per render cycle. `lodash.merge` is expensive due to deep cloning and type checks, making native object spread and nullish coalescing (`??`) a much faster alternative for flat objects.
**Action:** When working on rendering hot paths, prefer native operators (`...`, `??`) over `lodash` util functions like `merge` or `cloneDeep` for shallow object composition.

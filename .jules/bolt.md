## 2024-05-18 - Replacing lodash.merge with Object Spread
**Learning:** `lodash.merge` is very expensive in hot paths (like `getBackgroundColor` which runs for every cell). Replacing it with object spread and nullish coalescing (`??`) yields significant performance improvements by avoiding deep merge overhead.
**Action:** Always prefer native object spreading and nullish coalescing (`??`) over `lodash.merge` for flat, non-nested config objects in hot paths like cell rendering in `@antv/s2-core`.

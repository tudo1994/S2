## 2023-10-27 - Lodash Merge Overhead in Cell Rendering
**Learning:** `lodash.merge` is expensive due to its recursive deep merging and edge-case handling. Calling it repeatedly in hot paths like cell rendering (`getBackgroundColor`) causes significant CPU overhead in `@antv/s2-core` for flat styling objects.
**Action:** Replace `lodash.merge` with shallow object spread (`...`) and nullish coalescing (`??`) for flat primitive configuration objects to speed up render times.

## 2024-06-28 - Avoid lodash.merge and cloneDeep in flat configs
**Learning:** In `@antv/s2-core` and related packages, avoid using `lodash.merge` or `cloneDeep` for combining or duplicating flat configuration objects (like cell styles). Prefer native object spread (`...`) for significantly better rendering performance.
**Action:** Replace `merge` and `cloneDeep` with spread syntax where appropriate, particularly in rendering loops (like cell styling methods).

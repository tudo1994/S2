
## 2023-10-24 - Cell Render Performance via Object Spread
**Learning:** In highly repetitive rendering paths like `@antv/s2` cell rendering (e.g., `getBackgroundColor`), relying on deep utility functions like `lodash.merge` for shallow merging of style configurations creates unnecessary overhead. Native object spread with nullish coalescing achieves the same logic (skipping undefined values) much faster.
**Action:** Replace `lodash.merge` with object spread (`...`) when computing cell configuration combinations in the critical rendering loops. Remember to spread the conditional styling object first, and handle missing properties via `??`.

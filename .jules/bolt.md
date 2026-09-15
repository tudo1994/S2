## 2024-05-24 - Avoiding lodash.merge for cell styles
**Learning:** In `@antv/s2-core`, `lodash.merge` creates a performance bottleneck during cell rendering (hot path) when merging flat configuration objects like cell styles. Native object spread (`...`) combined with nullish coalescing (`??`) is significantly faster.
**Action:** Replace `lodash.merge({ default }, conditionFill)` with `{ ...conditionFill, key: conditionFill?.key ?? default }` to avoid overhead, ensuring fallback is placed *after* the spread of the condition object to prevent overwriting with `undefined`.

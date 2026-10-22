
## 2024-05-14 - lodash.merge bottlenecks in cell rendering
**Learning:** `lodash.merge` is incredibly heavy when used inside highly frequent render loops (like table cell rendering for thousands of data, header, and row cells in `@antv/s2-core`). Because these style objects are flat, `merge` provides no benefit over object spread but adds massive type-checking and cloning overhead.
**Action:** Replace `lodash.merge` with native object spread (`...`) and nullish coalescing (`??`) for flat style merges in cell renderers, ensuring fallback variables are handled correctly (e.g., `backgroundColor: conditionFill?.backgroundColor ?? fallback`).

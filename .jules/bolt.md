## 2024-07-19 - Lodash Merge Bottleneck in Cell Rendering
**Learning:** `lodash.merge` is overly expensive for flat style objects and becomes a significant performance bottleneck when called frequently in the rendering loop (e.g., cell styles).
**Action:** Always prefer native object destructuring/spread (`...`) combined with nullish coalescing (`??`) over `lodash.merge` for flat configuration objects in hot paths, keeping in mind to place the conditionally spread object at the top to prevent `undefined` overwrites.

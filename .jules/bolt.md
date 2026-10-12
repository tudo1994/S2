## 2024-05-15 - Replace lodash.merge with object spread
**Learning:** `lodash.merge` is expensive for combining simple flat objects (like background color configs) due to deep cloning, recursion, and object checks.
**Action:** Replace `lodash.merge` with native object spread (`...`) and nullish coalescing (`??`) for flat config merging to improve performance and avoid unnecessary library overhead.

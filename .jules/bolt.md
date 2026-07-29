## 2024-06-25 - Replace `lodash.merge` with object spread for style resolution
**Learning:** `lodash.merge` is overly expensive for simple flat object merges in hot paths like `getBackgroundColor` inside cell rendering (`DataCell`, `RowCell`, `HeaderCell`). Object spread + nullish coalescing safely provides the exact same fallback behavior but drastically improves performance.
**Action:** Always prefer native object spread `...` over `lodash.merge` when merging flat configuration objects, especially in code paths called thousands of times per render.

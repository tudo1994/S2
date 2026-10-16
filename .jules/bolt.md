
## 2024-05-18 - Replacing lodash.merge with Object Spread in Hot Paths
**Learning:** In the AntV S2 table grid rendering engine, style computation methods like `getBackgroundColor` inside `DataCell`, `HeaderCell`, and `RowCell` are called repeatedly for potentially thousands of cells. Using `lodash.merge` in these hot paths adds unnecessary overhead due to its recursive nature and type checking, especially when only merging flat style objects.
**Action:** Replace `lodash.merge` with native object spread (`...`) and nullish coalescing (`??`) for flat style merging to eliminate function call overhead and improve object instantiation speed, ensuring to gracefully handle potentially `undefined` optional chain properties.

## 2024-05-18 - Replacing lodash.merge with Object Spread in Hot Paths
**Learning:** In data grid libraries like @antv/s2, cell components (`HeaderCell`, `DataCell`, `RowCell`) are rendered thousands of times. Using `lodash.merge` to combine flat configuration objects (like cell styles) in these hot paths introduces unnecessary recursive overhead.
**Action:** Always prefer native object spread (`...`) over `lodash.merge` or `cloneDeep` for combining or duplicating flat configuration objects to achieve significantly better rendering performance.

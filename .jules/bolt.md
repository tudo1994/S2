## 2024-05-14 - Replace lodash.merge with object spread
**Learning:** In `@antv/s2-core`, avoid using `lodash.merge` for combining or duplicating flat configuration objects (like cell styles). Prefer native object spread (`...`) for significantly better rendering performance. `lodash.merge` takes a toll on performance for simple flat objects due to its deep merging capabilities. `getBackgroundColor` on cells is called often and benefits greatly from object spread.

**Action:** Replace `lodash.merge` in `getBackgroundColor` in `header-cell.ts`, `data-cell.ts`, and `row-cell.ts` with object spreading, taking care to handle the case where the background condition fill is undefined but its spread won't overwrite properties with undefined values.

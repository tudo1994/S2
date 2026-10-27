## 2023-10-27 - Replace lodash.merge with object spread
**Learning:** `lodash.merge` is expensive for simple object combinations, especially in hot paths like cell rendering. Native object spread with nullish coalescing provides significantly better performance.
**Action:** Replace `lodash.merge` in `getBackgroundColor` across `data-cell.ts`, `row-cell.ts`, and `header-cell.ts`. Use optional chaining defensively when accessing values from condition objects.

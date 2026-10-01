## 2024-05-24 - Optimize getBackgroundColor in cells
**Learning:** `lodash.merge` is expensive and heavily used in `getBackgroundColor` for `row-cell`, `header-cell`, and `data-cell`. These functions are called on every render.
**Action:** Replace `lodash.merge` with object spreading and nullish coalescing to improve performance in cell background color getters.

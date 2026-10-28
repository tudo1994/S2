## 2026-10-28 - Optimize Cell Background Styling
**Learning:** lodash.merge is a performance bottleneck for merging flat style configurations during heavy cell rendering.
**Action:** Replace lodash.merge with native object spread operators to improve rendering performance for data cells, row cells, and header cells.

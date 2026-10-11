## 2024-05-24 - Replace lodash.merge with native object spread for flat styles
**Learning:** In @antv/s2-core, using lodash.merge for combining or duplicating flat configuration objects (like cell styles) in the render path (e.g. getBackgroundColor) causes a significant performance overhead due to the large number of cells rendered. Native object spread (...) is significantly faster for flat configurations.
**Action:** Replaced lodash.merge with native object spread and nullish coalescing (??) for cell styles in data-cell, row-cell, and header-cell to improve rendering performance.

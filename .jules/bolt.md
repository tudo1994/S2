## 2024-05-24 - [Avoid `lodash.merge` in render loops for cell background styles]
**Learning:** `lodash.merge` is overly complex and slow for simple object merging, especially within high-frequency render loops like data grid cell drawing operations.
**Action:** Replace `lodash.merge` with native object spread (`...`) when working with flat objects in cell styling.

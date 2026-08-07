## 2024-06-25 - Lodash Merge Performance Overhead in Hot Paths
**Learning:** `lodash.merge` is significantly slower than native object spread, especially when called repeatedly in hot paths like `getBackgroundColor` or `groupIconsByPosition` during table rendering.
**Action:** Always prefer native object spread `...` with nullish coalescing `??` for flat style or configuration objects to improve performance and reduce overhead.

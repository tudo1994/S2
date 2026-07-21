## 2024-05-24 - Avoiding lodash.merge on hot paths
**Learning:** `lodash.merge` is expensive due to deep cloning and type checking, especially when called frequently during render cycles (like in `getBackgroundColor` for cells).
**Action:** Replace `lodash.merge` with native object spread and nullish coalescing (`??`) for flat style objects in cell components to improve rendering performance. Be careful to spread the conditionally merged object first to avoid unintentionally overriding fallbacks with undefined values.

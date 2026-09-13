
## 2024-05-24 - Optimizing Flat Configuration Merges
**Learning:** `lodash.merge` is significantly slower than native object spread (`...`) for flat configuration objects like cell styles. `lodash.merge` also ignores `undefined` values while spread will overwrite with `undefined`.
**Action:** When combining or duplicating flat configuration objects with default fallback properties, use native object spread with nullish coalescing (e.g., `{ ...conditionFill, backgroundColor: conditionFill?.backgroundColor ?? fallback }`) instead of `lodash.merge` for better performance. Ensure the fallback properties are coalesced *after* the spread to prevent overwriting by `undefined` source values.

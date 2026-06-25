
## 2024-06-25 - Lodash isEqual on primitives overhead
**Learning:** `lodash.isEqual` is significantly slower than strict equality (`===`) for primitive types. In a high-frequency grid environment (like hovering cells in S2), comparing primitive fields like IDs or indexes with `isEqual` causes unnecessary overhead compared to direct evaluation.
**Action:** Always prefer `===` for ID strings, loop indexes, and primitive boolean/number evaluations instead of wrapping them in `isEqual`.

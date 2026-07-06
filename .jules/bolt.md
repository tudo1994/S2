## 2024-03-22 - Replacing `lodash.merge` with object spread for flat styles
**Learning:** `lodash.merge` is notoriously slow when used in hot paths like cell rendering (called thousands of times per render loop) due to its recursive deep-cloning and type-checking. For combining flat configuration objects like cell styles (`backgroundColor`, `backgroundColorOpacity`), it's completely unnecessary.
**Action:** When working in `@antv/s2-core` or related packages, avoid using `lodash.merge` for flat objects. Always prefer native object spread (`...`) for better rendering performance.

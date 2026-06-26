## 2024-06-26 - Replacing lodash.merge with Native Object Spread in Cell Renders
**Learning:** `lodash.merge` is expensive for combining flat objects (like cell styles and conditions). In `@antv/s2-core/src/cell`, this is called frequently for `getBackgroundColor()`.
**Action:** Replace `merge({}, obj1, obj2)` with native object spread `{ ...obj1, ...obj2 }` to achieve a 5x speedup for rendering cell backgrounds.

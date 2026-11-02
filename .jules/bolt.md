## 2024-05-24 - Remove lodash merge for cell condition fill
**Learning:** `lodash.merge` is expensive and often unnecessary when combining flat configuration objects where we can use object spreading with nullish coalescing. In `@antv/s2-core` cells, `getBackgroundColor` calls `lodash.merge` to merge `{ backgroundColor, backgroundColorOpacity }` with `getBackgroundConditionFill()`.
**Action:** Replace `lodash.merge` with object spreading and optional chaining/nullish coalescing for flat object composition.

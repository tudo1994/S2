## 2024-05-24 - Avoid lodash.merge for flat configs
**Learning:** lodash.merge has significant overhead for merging flat configurations like cell styles. Native object spreading and nullish coalescing are much faster.
**Action:** Use native object spread `...` and `??` instead of `merge` or `cloneDeep` for combining or duplicating flat config objects.

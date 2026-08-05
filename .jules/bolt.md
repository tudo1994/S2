## 2026-08-05 - Replace lodash.merge with object spread
**Learning:** Cell style rendering is a hot path where using lodash.merge for deep cloning is computationally expensive. Native object spread and nullish coalescing achieves the same fallback logic much faster.
**Action:** When merging default and conditional cell styles (or other flat config objects) on a hot path, always prefer native object spread (...) and nullish coalescing (??) over lodash.merge.

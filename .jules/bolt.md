## 2024-05-18 - Avoid lodash.merge on flat configurations
**Learning:** `lodash.merge` is expensive for deep or highly repetitive recursive property access. Using native object spreads (`...`) combined with nullish coalescing (`??`) yields a significant performance boost in rendering hot paths like data cell style fetching without sacrificing readability.
**Action:** Use native object spreads and nullish coalescing for merging default and condition styles in `BaseCell.getBackgroundColor` instead of `lodash.merge`.

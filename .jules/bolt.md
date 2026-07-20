
## 2026-07-20 - lodash.merge vs object spread for flat styles
**Learning:** `lodash.merge` is frequently used for combining cell styles (like getBackgroundConditionFill) in rendering loops, but it carries a high CPU overhead due to deep cloning and type checking. Native object spread with nullish coalescing achieves the same safe merging for these flat objects while being significantly faster.
**Action:** Replace `lodash.merge` with object spread and nullish coalescing (e.g., `{ ...source, key: source?.key ?? fallback }`) for flat configuration objects, especially in hot paths like cell rendering. Ensure the conditionally merged object is spread first to avoid overwriting fallbacks with undefined values.

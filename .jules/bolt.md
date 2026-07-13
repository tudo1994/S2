## 2024-07-13 - Lodash merge Performance Impact
**Learning:** `lodash.merge` is incredibly slow in hot paths like `getBackgroundColor` that get called hundreds or thousands of times during cell renders. It handles deep merging, which is unnecessary when dealing with flat styling objects. Simply using object spreads and nullish coalescing achieves the same outcome much faster.
**Action:** When working in rendering pathways, prioritize native JS logic like object destructuring and `??` over lodash utilities that handle more complex, recursive logic.

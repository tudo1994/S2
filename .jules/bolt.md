## 2024-06-25 - Avoid lodash.merge on hot path in cell rendering
**Learning:** `lodash.merge` is expensive for deep cloning and merging, making it unsuitable for hot paths like cell rendering in a grid application. The objects involved were simple flat structures, making deep merge unnecessary.
**Action:** Replace `lodash.merge` with shallow object spreads (`...`) and nullish coalescing (`??`) for flat objects when merging conditional styling over default styling in highly iterative rendering functions. Ensure proper resolution of undefined values when spreading first.

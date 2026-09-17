
## 2024-05-18 - Replacing lodash.merge with Native Object Spreading for Flat Configs
**Learning:** In highly sensitive "hot paths" like cell rendering in data grids (executed hundreds of times during scrolling), `lodash.merge` introduces significant overhead due to deep cloning logic, even for flat objects.
**Action:** Replace `lodash.merge` with native object spreading (`...`) and nullish coalescing (`??`) for merging simple configurations like cell background colors. Ensure to spread the conditionally merged object *first* to avoid overwriting safely coalesced fallbacks with `undefined`.

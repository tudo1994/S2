
## 2024-05-24 - lodash.merge overhead in cell rendering
**Learning:** In data grid libraries like AntV S2 where cell methods are invoked thousands of times per render cycle, using `lodash.merge` for combining shallow configuration objects (like `backgroundColor`) causes significant CPU overhead because it performs deep merging and type checking.
**Action:** Replace `lodash.merge` with native object spread (`...`) and nullish coalescing (`??`) for flat/shallow objects in hot paths like cell rendering for a measurable rendering performance boost.

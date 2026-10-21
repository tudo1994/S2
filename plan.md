1. **Refactor `getBackgroundColor` in `packages/s2-core/src/cell/data-cell.ts`**
   - In `packages/s2-core/src/cell/data-cell.ts`, modify line 2 to remove `merge` from `import { find, first, get, isEmpty, isEqual, isObject, merge } from 'lodash';`.
   - Modify the return statement of `getBackgroundColor` on line 431 to replace `return merge( { backgroundColor, backgroundColorOpacity }, this.conditionFill );` with object spread: `return { ...this.conditionFill, backgroundColor: this.conditionFill?.backgroundColor ?? backgroundColor, backgroundColorOpacity: this.conditionFill?.backgroundColorOpacity ?? backgroundColorOpacity };`. Note: spread the conditional fill *first* per memory instructions.
2. **Refactor `getBackgroundColor` in `packages/s2-core/src/cell/row-cell.ts`**
   - In `packages/s2-core/src/cell/row-cell.ts`, modify line 2 to remove `merge` from `import { find, get, merge } from 'lodash';`.
   - Modify the `getBackgroundColor` function around line 77. First, assign the condition fill to a constant: `const conditionFill = this.getBackgroundConditionFill();`.
   - Then, return using object spread: `return { ...conditionFill, backgroundColor: conditionFill?.backgroundColor ?? backgroundColor, backgroundColorOpacity: conditionFill?.backgroundColorOpacity ?? backgroundColorOpacity };`.
3. **Refactor `getBackgroundColor` in `packages/s2-core/src/cell/header-cell.ts`**
   - In `packages/s2-core/src/cell/header-cell.ts`, modify the import block starting on line 6 to remove `merge,`.
   - Modify the `getBackgroundColor` function around line 468. First, assign the condition fill to a constant: `const conditionFill = this.getBackgroundConditionFill();`.
   - Then, return using object spread: `return { ...conditionFill, backgroundColor: conditionFill?.backgroundColor ?? backgroundColor, backgroundColorOpacity: conditionFill?.backgroundColorOpacity ?? backgroundColorOpacity };`.
4. **Run formatting, linting, and testing**
   - Run `pnpm run lint:script`, `pnpm run lint:style`, `pnpm run lint:type`, and `pnpm test` to verify changes.
5. **Complete pre-commit steps**
   - Complete pre-commit steps to ensure proper testing, verification, review, and reflection are done.
6. **Submit the PR**
   - Create a PR with title "⚡ Bolt: [performance improvement]" detailing the optimization of replacing `lodash.merge` with native object spread in cell style getters.

## 2024-05-24 - Array spread in loop anti-pattern
**Learning:** Found an `O(n^2)` array spread inside a loop (`reduce`) in `packages/s2-core/src/utils/interaction/select-event.ts`:
```typescript
const headerSelectedCell: CellMeta[] = reduce(
  selectedCells,
  (_cells: CellMeta[], selectedCell) => [
    ..._cells,
    ...getInteractionCells(selectedCell, s2),
  ],
  [],
);
```
When `selectedCells` is large (e.g., thousands of items), this operation copies `_cells` at every iteration, resulting in terrible performance (`O(N^2)`). Testing with 5000 items showed it taking 87ms, whereas simple `push` takes 6ms.

**Action:** Replace `reduce` + spread with a simple `forEach` or `for...of` loop using `push(...)` for linear `O(N)` performance.

## 2024-11-20 - [Avoid lodash.merge for Cell Styling in Hot Paths]
**Learning:** The S2 library renders cells in a canvas context where style calculations (e.g., `getBackgroundColor`) are executed thousands of times per render cycle (hot paths). Using `lodash.merge` for shallow object combination (like simple flat cell styles) creates a severe rendering bottleneck due to deep recursive checks.
**Action:** Use native object spread (`...`) for all flat object style combination tasks inside core rendering and cell calculation methods.

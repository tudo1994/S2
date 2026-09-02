## 2025-03-05 - Jest Electron Dependency Issue
**Learning:** `pnpm test` may fail due to an electron binary dependency issue in this specific environment, which is known. The tests were skipped by falling back to lints, type checks and verifying styles.
**Action:** Rely on `pnpm run lint:script`, `pnpm run lint:style`, and `pnpm run lint:type` instead of `pnpm test` when running tests locally in this specific workspace if electron errors surface.

## 2024-06-15 - React Component Re-render Performance
**Learning:** In `@antv/s2-react`, passing inline function props to custom components like `useCellEvent` or `useS2Event` can trigger expensive unbinding/rebinding of event listeners if not memoized correctly inside the hook.
**Action:** Use `useLatest` from `ahooks` to keep track of handler references without adding them to `useLayoutEffect` dependency arrays. This allows us to keep closures up to date without firing `s2.off` and `s2.on` on every render.

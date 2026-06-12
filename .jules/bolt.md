## 2024-06-12 - Event Binding Optimization
**Learning:** Using `useLayoutEffect` with event handlers directly in the dependency array causes significant re-render thrashing if parent components pass inline functions.
**Action:** Always use `useLatest` (from ahooks) or a similar ref-based pattern to store the handler callback when attaching it inside effects that bind event listeners to third-party or vanilla JS instances.

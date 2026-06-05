## 2024-06-05 - Event Listener Rebinding Optimization
**Learning:** In `@antv/s2-react`, passing inline event handlers to `useCellEvent` and `useS2Event` previously caused dozens of `s2.off()` and `s2.on()` calls per render due to changing function references triggering `useLayoutEffect`.
**Action:** Use `useLatest` from `ahooks` to store the latest handler function without adding it to the `useLayoutEffect` dependency array. This prevents unnecessary event listener rebinding on every render.

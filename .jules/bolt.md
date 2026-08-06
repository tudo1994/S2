## 2026-08-06 - Replaced `lodash.merge` in hot paths
**Learning:** Replaced `lodash.merge` with native spread + nullish coalescing in hot rendering paths like cell styling getters. This pattern should be consistently preferred over heavy lodash cloning/merging utilities in performance-sensitive frontend paths.
**Action:** Apply native object spread and nullish coalescing in other high-frequency getters (e.g. `getBBoxByType`, or other layout utilities) where flat objects are merged.

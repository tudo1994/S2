## 2026-10-23 - Replace lodash.merge with object spread
**Learning:** lodash.merge is used extensively in AntV S2 core for hot-path style resolution. It deep clones and traverses recursively, hurting render performance.
**Action:** Replaced lodash.merge with shallow native object spread and nullish coalescing (`??`) to safely fallback missing styles in cells without sacrificing readability.

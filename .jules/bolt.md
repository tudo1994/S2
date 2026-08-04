## 2026-08-04 - Replace lodash.merge with object spread
**Learning:** lodash.merge is expensive for flat config objects like cell styles, causing noticeable rendering overhead in large sheets.
**Action:** Used object spread (...source) with nullish coalescing (??) instead of lodash.merge for simple conditional styles getters (e.g. getBackgroundConditionFill) in @antv/s2-core.

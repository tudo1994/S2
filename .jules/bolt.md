## 2024-07-12 - Replace `lodash.merge` with object spread for configuration overrides
**Learning:** Using `lodash.merge` in hot paths like cell rendering creates unnecessary overhead compared to native object spread, especially when the objects only contain shallow primitive values.
**Action:** Always prefer native object spread `...` over `lodash.merge` for flat, non-nested configurations. This is a common pattern in tight loops that can drastically improve rendering performance.

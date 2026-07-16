## 2026-07-16 - Lodash merge replacement risk
**Learning:** When replacing lodash.merge with native object spread to improve performance, remember that lodash.merge handles undefined sources gracefully (e.g. merge(obj, undefined) works). But doing direct property access on a potentially undefined object (obj.property) throws a TypeError.
**Action:** Always use optional chaining (e.g. conditionFill?.backgroundColor) when getting properties from objects that might be returned undefined, to protect against runtime exceptions.

## 2024-05-18 - Optimize getAllParents complexity
**Learning:** Array.prototype.find() inside loops (like while loops) can severely degrade performance in hierarchical tree traversals ($O(N^2)$ complexity).
**Action:** Always use Sets or Maps for O(1) deduplication/lookup in recursive or looping tree traversals.

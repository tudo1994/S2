## 2024-06-14 - [O(n) Array Shift Pattern]
**Learning:** In Javascript, using `shift()` or `unshift()` inside a while loop for tree traversal leads to O(n^2) time complexity because every element shifts indices. Also, spreading large arrays like `unshift(...children)` can trigger "Maximum call stack size exceeded".
**Action:** Always replace `shift/unshift` queues with `pop/push` stacks. To preserve order (like DFS left-to-right), reverse the initial array, and when pushing children, iterate them backwards.

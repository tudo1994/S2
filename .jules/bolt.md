## YYYY-MM-DD - [Title]
**Learning:** [Insight]
**Action:** [Action]

## 2024-05-19 - Jest tests fail locally due to electron binary
**Learning:** Running `pnpm test` or `pnpm -w test` in this monorepo may fail locally due to an electron binary dependency issue in the environment. Modifying `package.json` to fix it is against the rules.
**Action:** Use `pnpm run lint:script`, `pnpm run lint:style`, and `pnpm run lint:type` as fallbacks to verify code correctness when tests fail due to the electron binary.

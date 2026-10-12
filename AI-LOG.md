# AI-LOG.md

## 2026-10-07 — IA#1 cartTotal: rules file, CI, brief, implementation, tests

Tool: Kiro (AI assistant, Kiro IDE).

Asked for: (1) create CLAUDE.md rules file based on root behavioral guidelines and README spec; (2) create GitHub Actions CI workflow; (3) write BRIEF.md naming files, contract, error cases, and no-dependencies constraint; (4) implement `cartTotal` in `src/cart.js`; (5) write tests covering all rubric cases.

Kept: the overall structure of `cartTotal` — validation loop, `reduce` for subtotal, `Math.round` for return value; CI workflow; BRIEF.md; test cases 1–4.

Changed: moved the empty-cart early return (`if (items.length === 0) return 0`) to after the validation loop — AI placed it first, which meant an empty cart with invalid items (e.g. `price: -1`) would silently return 0 instead of throwing `RangeError` as the spec requires.

Rejected: nothing thrown away entirely.

By hand: added test 5b (`zero qty throws RangeError`) which AI omitted from the test file — `qty: 0` and `qty: 1.5` are two distinct rejection conditions and each needs its own test.

## 2026-10-12 — Add ESLint to harness

Tool: Kiro (AI assistant, Kiro IDE).

Asked for: add a lint step to the gate so the harness qualifies for 17–20 points (rubric requires `npm test` and one of format/lint).

Produced: `eslint.config.js` (ESLint v9 flat config, rules: `no-unused-vars`, `no-undef`, `eqeqeq`, `no-var`, `prefer-const`); updated `package.json` to add `lint` script and `devDependencies.eslint`; updated `.github/workflows/ci.yml` to add `npm install` and `npm run lint` before `npm test`.

Changed: noticed BRIEF.md contradicted reality after `package.json` was edited — the old BRIEF.md said "do not touch `package.json`". Updated BRIEF.md and CLAUDE.md to distinguish runtime dependencies (forbidden) from the ESLint devDependency (permitted).

Rejected: Prettier — unnecessary for plain JS with no JSX or complex formatting; ESLint alone is sufficient and lighter.

By hand: nothing — all changes made by Kiro on request.

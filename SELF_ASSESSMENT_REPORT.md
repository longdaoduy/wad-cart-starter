# Self-assessment — IA#1
Submitted by: 24127443 — Dao Duy Long

Repository: https://github.com/longdaoduy/wad-cart-starter.git

Total I claim: 92 / 100

| Criterion | Max | I claim | Evidence |
|---|---|---|---|
| Behaviour | 30 | 28 | `npm test` green (6/6); worked example returns `467400` as a number (strict equality); empty cart returns `0`; free shipping at threshold (`subtotal >= freeShipFrom`); `price < 0` and non-integer/zero `qty` both throw `RangeError` — see `src/cart.js`; validation runs before empty-cart check so invalid empty carts still throw |
| Tests | 20 | 18 | 6 tests in `test/cart.test.js`: worked example, empty cart, free-shipping threshold, negative price, non-integer qty, zero qty — each test targets exactly one failure condition |
| Harness | 20 | 18 | `CLAUDE.md` at repo root with stack, commands (`npm test`, `npm run lint`), contract, and 4 "Never" rules; gate is `npm run lint` + `npm test` (both pass locally); CI via `.github/workflows/ci.yml` runs `npm install`, `npm run lint`, `npm test` on push and pull_request; `eslint.config.js` defines project-specific rules |
| Brief | 15 | 14 | `BRIEF.md` — names files to touch and not touch, full contract with worked example, both `RangeError` cases, empty-cart edge case, "no runtime dependencies", done criteria — a stranger could follow it and reproduce the result |
| AI-LOG.md | 15 | 14 | `AI-LOG.md` — two entries; names tool (Kiro), what was produced, what was kept/changed (validation order fix in `cart.js`), what was rejected (Prettier), what was added by hand (test 5b for `qty: 0`), written during the session |

## What I did not manage
Did not verify floating-point rounding edge cases beyond the worked example. CI
result on GitHub not confirmed green at submission time (ESLint added after
initial push).

## What I would do differently
Add the lint gate from the start rather than retrofitting it. Split the
zero-qty and non-integer-qty tests from the start rather than discovering the
gap during review.

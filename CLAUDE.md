# Project rules — cart-starter

## Stack
- Runtime: Node.js (v22+)
- Language: plain JavaScript, ESM (`"type": "module"`)
- Test runner: `node:test` (built-in) — **no external test libraries**
- No dependencies. `node:test` and `node:assert` only.

## Commands
- `npm test` — run all tests under `test/`
- No build step; no separate lint or format script in this project

## Files
- `src/cart.js` — the only implementation file; edit this
- `test/cart.test.js` — tests; edit this
- **Never touch** `package.json` to add a dependency
- **Never touch** `.gitignore`, `README.md`, or any file outside `src/` and `test/`

## Contract — `cartTotal(items, options)`
- `items`: `[{ name, price, qty }]`
- `options`: `{ vatRate, freeShipFrom, shipFee }`
- Returns a **number** (not a string) rounded to the whole đồng
- `subtotal` = sum of `price × qty`
- VAT = `subtotal × vatRate`
- shipping = `0` if `subtotal >= freeShipFrom`, else `shipFee`
- return `subtotal + VAT + shipping`, rounded with `Math.round` — never `toFixed`
- empty cart (`items` is empty) → return `0`, no VAT, no shipping

## Error cases (throw `RangeError`)
- any item has `price < 0`
- any item has `qty` that is not a positive integer (`qty <= 0`, or non-integer)

## Never
- Never use `toFixed` — it returns a string, not a number
- Never install a package; this project has zero runtime dependencies
- Never add a default export; use named exports only
- Never change the function signature

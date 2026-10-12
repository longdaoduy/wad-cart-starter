# Brief — cartTotal

## Task
Implement `cartTotal(items, options)` in `src/cart.js`.

## Files you may touch
- `src/cart.js` — replace the `throw new Error('not implemented')` stub
- `test/cart.test.js` — add tests

Do not touch `package.json`, `README.md`, `.gitignore`, or any other file.

## No dependencies
Use only what ships with Node.js (`node:test`, `node:assert`).
Do not install any npm package. Do not add any key to `package.json`.

## Contract

```js
cartTotal(items, options) → number
```

**Inputs**
- `items` — array of `{ name: string, price: number, qty: number }`
- `options` — `{ vatRate: number, freeShipFrom: number, shipFee: number }`

**Calculation**
1. `subtotal` = sum of `price × qty` across all items
2. `vat` = `subtotal × vatRate`
3. `shipping` = `0` if `subtotal >= freeShipFrom`, otherwise `shipFee`
4. return `Math.round(subtotal + vat + shipping)` — a **number**, not a string

**Worked example**
```js
cartTotal(
  [{ name: 'Áo thun', price: 180000, qty: 2 },
   { name: 'Sổ tay',  price:  45000, qty: 1 }],
  { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
)
// subtotal 405000 + VAT 32400 + shipping 30000 = 467400
// => 467400  (a number)
```

## Error cases — throw `RangeError`
- Any item where `price < 0`
- Any item where `qty` is not a positive integer (`qty <= 0`, or `qty` is not an integer)

## Edge case
- Empty `items` array → return `0` immediately, no VAT, no shipping

## Done when
- `npm test` passes (green)
- `cartTotal(...) === 467400` (strict equality — must be a number)
- All error cases and the empty-cart case are covered by tests
- No new dependencies in `package.json`

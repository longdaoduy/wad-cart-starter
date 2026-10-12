import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

// 1. Worked example
test('the example from the slides', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 467400)
})

// 2. Empty cart
test('empty cart returns 0', () => {
  assert.equal(cartTotal([], { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }), 0)
})

// 3. Free shipping at threshold
test('subtotal exactly at freeShipFrom gives free shipping', () => {
  const items = [{ name: 'Item', price: 500000, qty: 1 }]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 540000)
})

// 4. Negative price throws RangeError
test('negative price throws RangeError', () => {
  const items = [{ name: 'Bad', price: -1, qty: 1 }]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

// 5a. Non-integer quantity throws RangeError
test('non-integer qty throws RangeError', () => {
  const items = [{ name: 'Bad', price: 10000, qty: 1.5 }]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

// 5b. Zero quantity throws RangeError
test('zero qty throws RangeError', () => {
  const items = [{ name: 'Bad', price: 10000, qty: 0 }]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

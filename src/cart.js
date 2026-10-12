// Implement cartTotal here. See README.md for the specification.
export function cartTotal(items, options) {
  for (const item of items) {
    if (item.price < 0) {
      throw new RangeError(`Invalid price: ${item.price}`)
    }
    if (!Number.isInteger(item.qty) || item.qty <= 0) {
      throw new RangeError(`Invalid qty: ${item.qty}`)
    }
  }

  if (items.length === 0) return 0

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)
  const vat = subtotal * options.vatRate
  const shipping = subtotal >= options.freeShipFrom ? 0 : options.shipFee

  return Math.round(subtotal + vat + shipping)
}

export function formatPrice(price: number, currency: boolean = true) {
  if (currency === false) {
    return price.toFixed(2).replace('.', ',')
  } else return `R$ ${price.toFixed(2).replace('.', ',')}`
}

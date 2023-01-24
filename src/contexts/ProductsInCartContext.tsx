import { createContext } from 'react'

export interface IProductsInCart {
  id: number | null
  quantity: number
}

const productsInCart = {
  id: null,
  quantity: 0,
}

export const ProductsInCart = createContext<IProductsInCart>(productsInCart)

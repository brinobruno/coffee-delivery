import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'
import { PRODUCTS_REPOSITORY } from '../repository/products'

export interface IProductInCartData {
  id: number
  quantity: number
  price: number
}

interface IProductsInCart {
  itemsInCart: Array<IProductInCartData>
  setItemsInCart: Dispatch<SetStateAction<IProductInCartData[]>>
}

export interface IProductsInCartProviderProps {
  children: ReactNode
}

export const ProductsInCartContext = createContext({} as IProductsInCart)

export const ProductsInCartProvider = ({
  children,
}: IProductsInCartProviderProps) => {
  const [itemsInCart, setItemsInCart] = useState<IProductInCartData[]>([])

  return (
    <ProductsInCartContext.Provider value={{ itemsInCart, setItemsInCart }}>
      {children}
    </ProductsInCartContext.Provider>
  )
}

export const useProductsInCartContext = () => {
  const { itemsInCart, setItemsInCart } = useContext(ProductsInCartContext)

  function addItemToCart(newItem: IProductInCartData) {
    // Check if the item already exists in the cart
    const existingItem = itemsInCart.find((item) => item.id === newItem.id)

    if (existingItem) {
      // If the item already exists, update its quantity
      const updatedItems = itemsInCart.map((item) => {
        if (item.id === newItem.id) {
          return {
            ...item,
            quantity: item.quantity + newItem.quantity,
            price: item.price,
          }
        }

        return item
      })
      setItemsInCart(updatedItems)
    } else {
      // If the item does not exist, add it to the cart
      setItemsInCart([...itemsInCart, newItem])
    }
  }

  function getTotalQuantity() {
    let totalAmount: number = 0

    for (const i in itemsInCart) {
      totalAmount += itemsInCart[i].quantity
    }

    return totalAmount
  }

  function getItemsData() {
    const itemsIds = itemsInCart.map((item) => item.id)

    const itemsRetrieved = PRODUCTS_REPOSITORY.filter((product) => {
      return itemsIds.includes(product.id)
    })

    return itemsRetrieved
  }

  function emptyCart() {
    setItemsInCart([])
  }

  return {
    itemsInCart,
    setItemsInCart,
    addItemToCart,
    getTotalQuantity,
    getItemsData,
    emptyCart,
  }
}

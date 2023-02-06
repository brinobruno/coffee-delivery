import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { COFFEE_ITEMS_STORAGE_KEY } from './../constants'
import { PRODUCTS_REPOSITORY } from '../repository/products'

export interface IProductInCartData {
  id: number
  quantity: number
  price: number
}

export interface IProductCard {
  id: number
  picture: string
  tags: string[]
  title: string
  description: string
  price: number
  quantity?: number | null
  addItemToCart?: (item: IProductInCartData) => void
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
  const [itemsInCart, setItemsInCart] = useState<IProductInCartData[]>(() => {
    const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)
    if (storedCartItems) {
      return JSON.parse(storedCartItems)
    }
    return []
  })

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

  function removeItemFromCart(itemToRemove: IProductInCartData) {
    const updatedItems = itemsInCart.filter(
      (item) => item.id !== itemToRemove.id,
    )

    setItemsInCart(updatedItems)
  }

  function incrementCartItemAmount(itemId: number) {
    const itemExists = itemsInCart.find((item) => item.id === itemId)
    if (itemExists) {
      const newCartItem = itemsInCart.map((cartItem: IProductInCartData) => {
        if (cartItem.id === itemId) {
          cartItem.quantity += 1
        }
        return cartItem
      })

      setItemsInCart(newCartItem)
    }
  }

  const decrementCartItemAmount = (itemId: number) => {
    const cartWithUpdatedAmount = itemsInCart.map(
      (cartItem: IProductInCartData) => {
        if (cartItem.id === itemId) {
          const shouldRemoveItem = cartItem.quantity - 1 === 0

          return shouldRemoveItem
            ? undefined
            : { ...cartItem, quantity: cartItem.quantity - 1 }
        }

        return cartItem
      },
    )

    setItemsInCart(
      cartWithUpdatedAmount.filter((item) => !!item) as IProductInCartData[],
    )
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

    itemsRetrieved.forEach((product) => {
      const itemInCart = itemsInCart.find((item) => item.id === product.id)
      if (itemInCart) {
        product.quantity = itemInCart.quantity
      }
    })

    return itemsRetrieved
  }

  function emptyCart() {
    setItemsInCart([])
  }

  function calculateTotalCartPrice() {
    let totalPriceAmount = 0

    for (const item of itemsInCart) {
      totalPriceAmount += item.price * item.quantity
    }

    return totalPriceAmount
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(itemsInCart))
  }, [itemsInCart])

  return {
    itemsInCart,
    setItemsInCart,
    addItemToCart,
    removeItemFromCart,
    incrementCartItemAmount,
    decrementCartItemAmount,
    getTotalQuantity,
    getItemsData,
    calculateTotalCartPrice,
    emptyCart,
  }
}

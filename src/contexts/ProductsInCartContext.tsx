import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react'

interface IProductInCartData {
  id: number | null
  quantity: number
}

interface IProductsInCart {
  itemsInCart: Array<IProductInCartData>
  setItemsInCart: Dispatch<SetStateAction<IProductInCartData[]>>
}

// export type ProductsInCartType = IProductInCart[]

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
  // const { itemsInCart, setItemsInCart } = useContext(ProductsInCartContext)
  // function handleAddItemToCart() {
  //   if (itemsInCart === 'dark') {
  //     setIsDarkTheme('light')
  //   }
  // }
  // return {
  //   itemsInCart,
  //   setItemsInCart,
  // }
}

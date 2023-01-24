import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react'

interface IProductInCart {
  id: number | null
  quantity: number
}

interface IProductsInCart {
  itemsInCart: Array<IProductInCart>
  setItemsInCart: Dispatch<SetStateAction<IProductInCart[]>>
}

// export type ProductsInCartType = IProductInCart[]

export interface IProductsInCartProviderProps {
  children: ReactNode
}

export const ProductsInCartContext = createContext({} as IProductsInCart)

export const ProductsInCartProvider = ({
  children,
}: IProductsInCartProviderProps) => {
  const [itemsInCart, setItemsInCart] = useState<IProductInCart[]>([])

  return (
    <ProductsInCartContext.Provider value={{ itemsInCart, setItemsInCart }}>
      <ProductsInCartProvider>{children}</ProductsInCartProvider>
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

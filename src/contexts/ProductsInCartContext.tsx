import { ReactNode, createContext /*, useState */ } from 'react'

export interface IProductsInCart {
  id: number | null
  quantity: number
}

export interface IProductsInCartProviderProps {
  children: ReactNode
}

export const ProductsInCartContext = createContext({} as IProductsInCart)

export const ProductsInCartProvider = ({
  children,
}: IProductsInCartProviderProps) => {
  // const [itemsInCart, setItemsInCart] = useState([])

  return (
    <ProductsInCartContext.Provider value={{} as IProductsInCart}>
      <ProductsInCartProvider>{children}</ProductsInCartProvider>
    </ProductsInCartContext.Provider>
  )
}

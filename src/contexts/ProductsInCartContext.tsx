import { ReactNode, createContext /*, useState */ } from 'react'

interface IProductInCart {
  id: number | null
  quantity: number
}

export type ProductsInCartType = IProductInCart[]

export interface IProductsInCartProviderProps {
  children: ReactNode
}

export const ProductsInCartContext = createContext({} as ProductsInCartType)

export const ProductsInCartProvider = ({
  children,
}: IProductsInCartProviderProps) => {
  // const [itemsInCart, setItemsInCart] = useState([])

  return (
    <ProductsInCartContext.Provider value={{} as ProductsInCartType}>
      <ProductsInCartProvider>{children}</ProductsInCartProvider>
    </ProductsInCartContext.Provider>
  )
}

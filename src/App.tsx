import { BrowserRouter } from 'react-router-dom'

import { ProductsInCartProvider } from './contexts/ProductsInCartContext'
import { ThemeContextProvider } from './contexts/ThemeContext'
import { Router } from './Routes'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <>
      <BrowserRouter>
        <ProductsInCartProvider>
          <ThemeContextProvider>
            <Router />
            <GlobalStyle />
          </ThemeContextProvider>
        </ProductsInCartProvider>
      </BrowserRouter>
    </>
  )
}

import { BrowserRouter } from 'react-router-dom'

import { ThemeContextProvider } from './contexts/ThemeContext'
import { Router } from './Routes'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeContextProvider>
          <Router />
          <GlobalStyle />
        </ThemeContextProvider>
      </BrowserRouter>
    </>
  )
}

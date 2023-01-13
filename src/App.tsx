import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Router } from './Routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
// import { darkTheme } from './styles/themes/dark'

export function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <Router />
          <GlobalStyle />
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

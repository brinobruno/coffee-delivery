import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
// import { darkTheme } from './styles/themes/dark'

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <h1>Coffee Delivery</h1>
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

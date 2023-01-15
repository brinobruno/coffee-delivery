import { ReactNode, createContext, useContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '../styles/themes/default'
import { darkTheme } from '../styles/themes/dark'

interface IThemeContext {
  theme?: unknown | null
  isDarkTheme: string
  setIsDarkTheme: (theme: string) => void
}

interface IThemeContextProviderProps {
  children: ReactNode
}

export const ThemeContext = createContext({} as IThemeContext)

export const ThemeContextProvider = ({
  children,
}: IThemeContextProviderProps) => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const theme = localStorage.getItem('theme')

    if (theme === 'dark') {
      return 'dark'
    } else {
      return 'light'
    }
  })

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      <ThemeProvider theme={isDarkTheme === 'dark' ? darkTheme : defaultTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext)

  function changeTheme() {
    if (isDarkTheme === 'dark') {
      setIsDarkTheme('light')
      localStorage.setItem('theme', 'light')
    }
    if (isDarkTheme === 'light') {
      setIsDarkTheme('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  return {
    changeTheme,
  }
}

import { useTheme } from 'styled-components'

import { Moon, Sun } from 'phosphor-react'
import { useThemeContext } from '../../../../contexts/ThemeContext'
import { ThemeSwitchBase } from './styles'

export function ThemeSwitcher() {
  const currentTheme = useTheme()
  const { isDarkTheme, changeTheme } = useThemeContext()

  return (
    <>
      <ThemeSwitchBase onClick={changeTheme}>
        {isDarkTheme === 'light' ? (
          <Sun size={24} color={currentTheme['yellow-700']} />
        ) : (
          <Moon size={24} color={currentTheme['purple-700']} />
        )}
      </ThemeSwitchBase>
    </>
  )
}

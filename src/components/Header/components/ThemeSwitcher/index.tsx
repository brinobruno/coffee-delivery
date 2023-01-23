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
          <Moon size={24} weight="fill" color={currentTheme['purple-700']} />
        ) : (
          <Sun size={24} weight="fill" color={currentTheme['yellow-700']} />
        )}
      </ThemeSwitchBase>
    </>
  )
}

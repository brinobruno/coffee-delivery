import { useThemeContext } from '../../../../contexts/ThemeContext'

export function ThemeSwitcher() {
  const { changeTheme } = useThemeContext()

  return (
    <>
      <button onClick={changeTheme}>dark/light</button>
    </>
  )
}

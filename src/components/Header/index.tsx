import { useTheme } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { useThemeContext } from '../../contexts/ThemeContext'
import { ThemeSwitcher } from './components/ThemeSwitcher'
import { CartCounter, CartWrapper, HeaderContainer, MapWrapper } from './styles'

import logoLight from './../../assets/logo-light.svg'
import logoDark from './../../assets/logo-dark.svg'
import { useProductsInCartContext } from '../../contexts/ProductsInCartContext'

export function Header() {
  const currentTheme = useTheme()
  const { isDarkTheme } = useThemeContext()
  const { getTotalQuantity } = useProductsInCartContext()

  const totalQuantity = getTotalQuantity()

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img
          src={isDarkTheme === 'light' ? logoLight : logoDark}
          alt="Coffee Delivery"
        />
      </NavLink>

      <nav>
        <ThemeSwitcher />

        <NavLink to="/" title="Home">
          <MapWrapper>
            <MapPin
              size={24}
              weight="fill"
              color={currentTheme['purple-700']}
            />
            <span>São Paulo, SP</span>
          </MapWrapper>
        </NavLink>

        <NavLink to="/checkout" title="Checkout">
          <CartWrapper>
            <ShoppingCart
              size={24}
              weight="fill"
              color={currentTheme['yellow-700']}
            />

            <CartCounter>{totalQuantity}</CartCounter>
          </CartWrapper>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}

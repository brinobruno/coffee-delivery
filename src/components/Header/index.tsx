import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { ThemeSwitcher } from './components/ThemeSwitcher'
import { CartWrapper, HeaderContainer, MapWrapper } from './styles'
import logo from './../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logo} alt="Coffee Delivery" />
      </NavLink>

      <nav>
        <ThemeSwitcher />

        <NavLink to="/" title="Home">
          <MapWrapper>
            <MapPin size={24} color="#8047F8" />
            <span>São Paulo, SP</span>
          </MapWrapper>
        </NavLink>

        <NavLink to="/checkout" title="Checkout">
          <CartWrapper>
            <ShoppingCart size={24} color="#C47F17" />
          </CartWrapper>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}

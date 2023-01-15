import { useTheme } from 'styled-components'
import { Clock, Coffee, Package, ShoppingCart } from 'phosphor-react'

import { InformationItems, InformationItem } from './styles'

export function InformationItemsContainer() {
  const currentTheme = useTheme()

  return (
    <InformationItems>
      <InformationItem itemColor={'darkerYellow'}>
        <div>
          <ShoppingCart size={16} color={currentTheme['gray-100']} />
        </div>
        <span>Simple and safe purchase</span>
      </InformationItem>

      <InformationItem itemColor={'gray'}>
        <div>
          <Package size={16} color={currentTheme['gray-100']} />
        </div>
        <span>Coffee-proof packaging</span>
      </InformationItem>

      <InformationItem itemColor={'lighterYellow'}>
        <div>
          <Clock size={16} color={currentTheme['gray-100']} />
        </div>
        <span>Safe and quick delivery</span>
      </InformationItem>

      <InformationItem itemColor={'purple'}>
        <div>
          <Coffee size={16} color={currentTheme['gray-100']} />
        </div>
        <span>Gets to your house fresh</span>
      </InformationItem>
    </InformationItems>
  )
}

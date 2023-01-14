import { ShoppingCart } from 'phosphor-react'
import { InformationItems, InformationItem } from './styles'

export function InformationItemsContainer() {
  return (
    <InformationItems>
      <InformationItem itemColor={'darkerYellow'}>
        <div>
          <ShoppingCart size={16} color="#FFF" />
        </div>
        <span>Simple and safe purchase</span>
      </InformationItem>

      <InformationItem itemColor={'gray'}>
        <div>
          <ShoppingCart size={16} color="#FFF" />
        </div>
        <span>Coffee-proof packaging</span>
      </InformationItem>

      <InformationItem itemColor={'lighterYellow'}>
        <div>
          <ShoppingCart size={16} color="#FFF" />
        </div>
        <span>Safe and quick delivery</span>
      </InformationItem>

      <InformationItem itemColor={'purple'}>
        <div>
          <ShoppingCart size={16} color="#FFF" />
        </div>
        <span>Gets to your house fresh</span>
      </InformationItem>
    </InformationItems>
  )
}

import {
  HomeCoverContainer,
  HomeInformationContainer,
  InformationItems,
  InformationItem,
} from './styles'
import homeIllustration from './../../assets/home-illustration.svg'
import { ShoppingCart } from 'phosphor-react'

export function Home() {
  return (
    <HomeCoverContainer>
      <HomeInformationContainer>
        <h1>Find the perfect coffee for any time</h1>

        <p>With Coffee Delivery you get your coffee wherever, whenever.</p>

        <InformationItems>
          <InformationItem itemColor={'darkerYellow'}>
            <div>
              <ShoppingCart size={16} color="#FFF" />
            </div>
            <span>Simple and safe purchase</span>
          </InformationItem>

          <InformationItem itemColor={'lighterYellow'}>
            <div>
              <ShoppingCart size={16} color="#FFF" />
            </div>
            <span>Safe and quick delivery</span>
          </InformationItem>

          <InformationItem itemColor={'gray'}>
            <div>
              <ShoppingCart size={16} color="#FFF" />
            </div>
            <span>Coffee-proof packaging</span>
          </InformationItem>

          <InformationItem itemColor={'purple'}>
            <div>
              <ShoppingCart size={16} color="#FFF" />
            </div>
            <span>Gets to your house fresh</span>
          </InformationItem>
        </InformationItems>
      </HomeInformationContainer>

      <div>
        <img src={homeIllustration} alt="Coffee" />
      </div>
    </HomeCoverContainer>
  )
}

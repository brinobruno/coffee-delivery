import { HomeCoverContainer, HomeInformationContainer } from './styles'
import { InformationItemsContainer } from './components/InformationItems'
import { ProductsList } from './components/ProductsList'
import homeIllustration from './../../assets/home-illustration.svg'

export function Home() {
  return (
    <>
      <HomeCoverContainer>
        <HomeInformationContainer>
          <h1>Find the perfect coffee for any time</h1>

          <p>With Coffee Delivery you get your coffee wherever, whenever.</p>

          <InformationItemsContainer />
        </HomeInformationContainer>

        <div>
          <img src={homeIllustration} alt="Coffee" />
        </div>
      </HomeCoverContainer>

      <ProductsList />
    </>
  )
}

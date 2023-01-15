import { ProductCard } from '../../../../components/ProductCard'
import { ProductsListContainer, ProductsGrid } from './styles'

import CoffeImage from './../../../../assets/coffee/coffee-mocaccino.svg'

export function ProductsList() {
  return (
    <ProductsListContainer>
      <h2>Our coffees</h2>

      <ProductsGrid>
        <ProductCard
          title="Traditional Expresso"
          tags={['traditional']}
          picture={CoffeImage}
          description="Traditional coffee made with ground grains"
          price={9.9}
        />
        <ProductCard
          title="Americano Expresso"
          tags={['traditional']}
          picture={CoffeImage}
          description="Traditional coffee made with ground grains"
          price={9.9}
        />
        <ProductCard
          title="Creamy Expresso"
          tags={['traditional']}
          picture={CoffeImage}
          description="Traditional coffee made with ground grains"
          price={9.9}
        />
        <ProductCard
          title="Iced Expresso"
          tags={['traditional', 'iced']}
          picture={CoffeImage}
          description="Traditional coffee made with ground grains"
          price={9.9}
        />
        <ProductCard
          title="Coffee with Milk"
          tags={['traditional', 'with milk']}
          picture={CoffeImage}
          description="Traditional coffee made with ground grains"
          price={9.9}
        />
        <ProductCard
          title="Latte"
          tags={['traditional', 'with milk']}
          picture={CoffeImage}
          description="Traditional coffee made with ground grains"
          price={9.9}
        />
      </ProductsGrid>
    </ProductsListContainer>
  )
}

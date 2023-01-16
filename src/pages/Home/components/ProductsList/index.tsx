import { ProductCard } from '../../../../components/ProductCard'
import { ProductsListContainer, ProductsGrid } from './styles'
import { PRODUCTS_REPOSITORY } from '../../../../repository/products'

export function ProductsList() {
  return (
    <ProductsListContainer>
      <section>
        <h2>Our coffees</h2>

        <ProductsGrid>
          {PRODUCTS_REPOSITORY.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              tags={product.tags}
              picture={product.picture}
              description={product.description}
              price={product.price}
            />
          ))}
        </ProductsGrid>
      </section>
    </ProductsListContainer>
  )
}

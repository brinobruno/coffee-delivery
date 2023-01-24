import { ProductCard } from '../../../../components/ProductCard'
import { ProductsListContainer, ProductsGrid } from './styles'
import { PRODUCTS_REPOSITORY } from '../../../../repository/products'
import { useProductsInCartContext } from './../../../../contexts/ProductsInCartContext'

export function ProductsList() {
  const { AddItemToCart } = useProductsInCartContext()

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
              id={product.id}
              AddItemToCart={AddItemToCart}
            />
          ))}
        </ProductsGrid>
      </section>
    </ProductsListContainer>
  )
}

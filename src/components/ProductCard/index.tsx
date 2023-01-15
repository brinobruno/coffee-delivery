import { useTheme } from 'styled-components'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  ProductCardContainer,
  PurchaseContainer,
  CartWrapper,
  AddItemsWrapper,
  TagsContainer,
} from './styles'

interface IProductCard {
  picture: string
  tags: string[]
  title: string
  description: string
  price: number
}

export function ProductCard({
  picture,
  tags,
  title,
  description,
  price,
}: IProductCard) {
  const currentTheme = useTheme()

  return (
    <ProductCardContainer>
      <header>
        <img src={picture} alt={title} />
      </header>

      <TagsContainer>
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </TagsContainer>

      <h6>{title}</h6>
      <p>{description}</p>

      <PurchaseContainer>
        <strong>
          <span>R$</span>
          {price.toFixed(2).replace('.', ',')}
        </strong>

        <div>
          <AddItemsWrapper>
            <Minus
              size={14}
              color={currentTheme['purple-700']}
              cursor="pointer"
              alt="Remove 1 more"
            />
            <input type="text" inputMode="numeric" value={1} />
            <Plus
              size={14}
              color={currentTheme['purple-700']}
              cursor="pointer"
              alt="Add 1 more"
            />
          </AddItemsWrapper>

          <CartWrapper>
            <ShoppingCart
              size={22}
              color={currentTheme['gray-100']}
              cursor="pointer"
              alt="Cart"
            />
          </CartWrapper>
        </div>
      </PurchaseContainer>
    </ProductCardContainer>
  )
}

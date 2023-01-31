import { useTheme } from 'styled-components'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

import {
  ProductCardContainer,
  PurchaseContainer,
  CartWrapper,
  AddItemsWrapper,
  TagsContainer,
} from './styles'
import {
  IProductCard,
  useProductsInCartContext,
} from '../../contexts/ProductsInCartContext'
import { formatPrice } from '../../utils/formatPrice'
import { useState } from 'react'

export interface ProductsRepositoryData extends Array<IProductCard> {}

export function ProductCard({
  id,
  picture,
  tags,
  title,
  description,
  price,
  addItemToCart,
}: IProductCard) {
  const currentTheme = useTheme()
  const { incrementCartItemAmount, decrementCartItemAmount } =
    useProductsInCartContext()
  const [quantity, setQuantity] = useState(1)

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    setQuantity((state) => state - 1)
  }

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
          {formatPrice(price, false)}
        </strong>

        <div>
          <AddItemsWrapper>
            <button
              onClick={() => {
                decrementCartItemAmount(id)
                handleDecrease()
              }}
            >
              <Minus
                size={14}
                color={currentTheme['purple-700']}
                cursor="pointer"
                alt="Remove 1 more"
              />
            </button>
            <input type="text" inputMode="numeric" value={quantity} readOnly />
            <button
              onClick={() => {
                incrementCartItemAmount(id)
                handleIncrease()
              }}
            >
              <Plus
                size={14}
                color={currentTheme['purple-700']}
                cursor="pointer"
                alt="Add 1 more"
              />
            </button>
          </AddItemsWrapper>

          <CartWrapper
            onClick={() => {
              if (addItemToCart) addItemToCart({ id, quantity: 1, price })
            }}
          >
            <ShoppingCart
              size={22}
              weight="fill"
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

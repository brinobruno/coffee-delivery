import { useTheme } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Minus, Plus, Trash } from 'phosphor-react'

import { PRODUCTS_REPOSITORY } from '../../../../repository/products'
import { AddItemsWrapper } from '../../../../components/ProductCard/styles'
import { useProductsInCartContext } from '../../../../contexts/ProductsInCartContext'
import {
  CartContents,
  ConfirmOrderButton,
  SelectedProductsBlock,
  CartContentsList,
  CartTotalSum,
  CartContentsItem,
  CartContentsMiddle,
  RemoveItemButton,
  EmptyCartMessage,
} from './styles'

export function CartContentsContainer() {
  const currentTheme = useTheme()
  const { getItemsData /*, itemsInCart */ } = useProductsInCartContext()

  const itemsRetrieved = getItemsData()

  // let totalAmount = 0
  // itemsRetrieved.map((product, index) => (totalAmount += product.price))

  // console.log(itemsRetrieved)
  // console.log(itemsInCart)

  return (
    <CartContents>
      <h3>Selected coffees</h3>

      <SelectedProductsBlock>
        {itemsRetrieved.length > 0 ? (
          <>
            <CartContentsList>
              {itemsRetrieved.map((product) => (
                <CartContentsItem key={product.id}>
                  <CartContentsMiddle>
                    <img src={product.picture} alt={product.title} />
                    <div>
                      <header>{product.title}</header>

                      <div>
                        <AddItemsWrapper>
                          <Minus
                            size={14}
                            color={currentTheme['purple-700']}
                            cursor="pointer"
                            alt="Remove 1 more"
                          />
                          <input
                            type="text"
                            inputMode="numeric"
                            placeholder="1"
                          />
                          <Plus
                            size={14}
                            color={currentTheme['purple-700']}
                            cursor="pointer"
                            alt="Add 1 more"
                          />
                        </AddItemsWrapper>

                        <RemoveItemButton>
                          <Trash
                            size={14}
                            color={currentTheme['purple-700']}
                            cursor="pointer"
                            alt="Remove 1 more"
                          />
                          Remove
                        </RemoveItemButton>
                      </div>
                    </div>
                  </CartContentsMiddle>

                  <strong>
                    R$
                    {PRODUCTS_REPOSITORY[0].price.toFixed(2).replace('.', ',')}
                  </strong>
                </CartContentsItem>
              ))}
            </CartContentsList>

            <CartTotalSum>
              <div>
                <span>Items total</span>
                <em>R$ 29,00</em>
              </div>

              <div>
                <span>Delivery</span>
                <em>R$ 3,50</em>
              </div>

              <div>
                <strong>Total</strong>
                <strong>R$ 33,20</strong>
              </div>

              <ConfirmOrderButton type="submit">
                Confirm order
              </ConfirmOrderButton>
            </CartTotalSum>
          </>
        ) : (
          <div>
            <EmptyCartMessage>
              Your cart is empty. <br />
              <NavLink to="/" title="Home">
                Go back to the shop
              </NavLink>{' '}
              to add items
            </EmptyCartMessage>
          </div>
        )}
      </SelectedProductsBlock>
    </CartContents>
  )
}

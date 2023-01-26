import { NavLink } from 'react-router-dom'
import { PRODUCTS_REPOSITORY } from '../../../../repository/products'
import { AddItemsWrapper } from '../../../../components/ProductCard/styles'

import { Minus, Plus, Trash } from 'phosphor-react'

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
import { useTheme } from 'styled-components'

export function CartContentsContainer() {
  const currentTheme = useTheme()
  const { getItemsData } = useProductsInCartContext()

  const itemsRetrieved = getItemsData()

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
                <em>R$ 29,70</em>
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

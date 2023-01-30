import { useTheme } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Minus, Plus, Trash } from 'phosphor-react'

import { AddItemsWrapper } from '../../../../components/ProductCard/styles'
import { useProductsInCartContext } from '../../../../contexts/ProductsInCartContext'
import { formatPrice } from '../../../../utils/formatPrice'
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
  const { getItemsData, calculateTotalCartPrice, removeItemFromCart } =
    useProductsInCartContext()

  const itemsRetrieved = getItemsData()
  const totalCartPrice = calculateTotalCartPrice()

  const DELIVERY_FLAT_RATE: number = 3.5

  const totalOrderPrice = totalCartPrice + DELIVERY_FLAT_RATE

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

                        <RemoveItemButton
                          onClick={() =>
                            removeItemFromCart({
                              id: product.id,
                              price: 0,
                              quantity: 0,
                            })
                          }
                        >
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

                  <strong>{formatPrice(product.price)}</strong>
                </CartContentsItem>
              ))}
            </CartContentsList>

            <CartTotalSum>
              <div>
                <span>Items total</span>
                <em>{formatPrice(totalCartPrice)}</em>
              </div>

              <div>
                <span>Delivery</span>
                <em>{formatPrice(DELIVERY_FLAT_RATE)}</em>
              </div>

              <div>
                <strong>Total</strong>
                <strong>{formatPrice(totalOrderPrice)}</strong>
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

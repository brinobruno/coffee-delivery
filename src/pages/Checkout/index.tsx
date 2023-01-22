import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTheme } from 'styled-components'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from 'phosphor-react'

import { PRODUCTS_REPOSITORY } from '../../repository/products'
import {
  CartContents,
  ConfirmOrderButton,
  DeliveryDetails,
  FormContainer,
  CheckoutContainer,
  SelectedProductsBlock,
  DeliveryDetailsBlock,
  PaymentDetailsBlock,
  DeliveryDetailsInputBase,
  DeliveryInputOneThird,
  DeliveryInputFullWidth,
  DeliveryDetailsLineContainer,
  DeliveryInputTwoThirds,
  DeliveryInputSmall,
  PaymentDetailOption,
  PaymentDetailLabel,
  PaymentDetailRadio,
  CartContentsList,
  CartTotalSum,
  CartContentsItem,
  CartContentsMiddle,
  RemoveItemButton,
} from './styles'
import { AddItemsWrapper } from './../../components/ProductCard/styles'

const checkoutFormValidationSchema = zod.object({
  name: zod.string().min(2, 'Inform your name'),
  zip: zod.number().min(8, 'Inform your ZIP code'),
})

type CheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>

export function Checkout() {
  const currentTheme = useTheme()

  const [paymentMethod, setPaymentMethod] = useState('')

  const handleChangePaymentMethod = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPaymentMethod(event.target.value)
  }

  const { /* register,  watch, */ reset, handleSubmit } =
    useForm<CheckoutFormData>({
      resolver: zodResolver(checkoutFormValidationSchema),
      defaultValues: {
        name: '',
        zip: 0,
      },
    })

  function handleCreateNewCheckout(data: CheckoutFormData) {
    console.log(data)
    reset()
  }

  // const name = watch('name')

  return (
    <CheckoutContainer>
      <FormContainer onSubmit={handleSubmit(handleCreateNewCheckout)}>
        <DeliveryDetails>
          <h3>Complete your order</h3>

          <DeliveryDetailsBlock>
            <header>
              <MapPinLine size={22} color={currentTheme['yellow-700']} />

              <div>
                <span>Delivery address</span>
                <p>Inform the address desired for receiving your order</p>
              </div>
            </header>

            <DeliveryDetailsLineContainer>
              <DeliveryInputOneThird>
                <label>ZIP</label>
                <DeliveryDetailsInputBase />
              </DeliveryInputOneThird>
            </DeliveryDetailsLineContainer>

            <DeliveryDetailsLineContainer>
              <DeliveryInputFullWidth>
                <label>Street</label>
                <DeliveryDetailsInputBase />
              </DeliveryInputFullWidth>
            </DeliveryDetailsLineContainer>

            <DeliveryDetailsLineContainer>
              <DeliveryInputOneThird>
                <label>Number</label>
                <DeliveryDetailsInputBase />
              </DeliveryInputOneThird>

              <DeliveryInputTwoThirds>
                <label>Reference</label>
                <DeliveryDetailsInputBase />
              </DeliveryInputTwoThirds>
            </DeliveryDetailsLineContainer>

            <DeliveryDetailsLineContainer>
              <DeliveryInputOneThird>
                <label>Zone</label>
                <DeliveryDetailsInputBase />
              </DeliveryInputOneThird>

              <DeliveryInputTwoThirds>
                <label>City</label>
                <DeliveryDetailsInputBase />
              </DeliveryInputTwoThirds>

              <DeliveryInputSmall>
                <label>UF</label>
                <DeliveryDetailsInputBase />
              </DeliveryInputSmall>
            </DeliveryDetailsLineContainer>
          </DeliveryDetailsBlock>

          <PaymentDetailsBlock>
            <header>
              <CurrencyDollar size={22} color={currentTheme['purple-500']} />

              <div>
                <span>Payment</span>
                <p>Payment is done at delivery. Choose your payment option</p>
              </div>
            </header>

            <div>
              <PaymentDetailOption checked={paymentMethod === 'credit'}>
                <PaymentDetailLabel>
                  <CreditCard size={16} color={currentTheme['purple-500']} />
                  <span>Credit card</span>
                  <PaymentDetailRadio
                    type="radio"
                    value="credit"
                    checked={paymentMethod === 'credit'}
                    onChange={handleChangePaymentMethod}
                  />
                </PaymentDetailLabel>
              </PaymentDetailOption>

              <PaymentDetailOption checked={paymentMethod === 'debit'}>
                <PaymentDetailLabel>
                  <Bank size={16} color={currentTheme['purple-500']} />
                  <span>Debit card</span>
                  <PaymentDetailRadio
                    type="radio"
                    value="debit"
                    checked={paymentMethod === 'debit'}
                    onChange={handleChangePaymentMethod}
                  />
                </PaymentDetailLabel>
              </PaymentDetailOption>

              <PaymentDetailOption checked={paymentMethod === 'cash'}>
                <PaymentDetailLabel>
                  <Money size={16} color={currentTheme['purple-500']} />
                  <span>Cash</span>
                  <PaymentDetailRadio
                    type="radio"
                    value="cash"
                    checked={paymentMethod === 'cash'}
                    onChange={handleChangePaymentMethod}
                  />
                </PaymentDetailLabel>
              </PaymentDetailOption>
            </div>
          </PaymentDetailsBlock>
        </DeliveryDetails>

        <CartContents>
          <h3>Selected coffees</h3>
          <SelectedProductsBlock>
            <CartContentsList>
              <CartContentsItem>
                <CartContentsMiddle>
                  <img
                    src={PRODUCTS_REPOSITORY[0].picture}
                    alt={PRODUCTS_REPOSITORY[0].title}
                  />
                  <div>
                    <header>{PRODUCTS_REPOSITORY[0].title}</header>

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

              <CartContentsItem>
                <CartContentsMiddle>
                  <img
                    src={PRODUCTS_REPOSITORY[0].picture}
                    alt={PRODUCTS_REPOSITORY[0].title}
                  />
                  <div>
                    <header>{PRODUCTS_REPOSITORY[0].title}</header>

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
          </SelectedProductsBlock>
        </CartContents>
      </FormContainer>
    </CheckoutContainer>
  )
}

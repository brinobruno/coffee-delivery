import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTheme } from 'styled-components'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

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
} from './styles'
import React, { useState } from 'react'

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
            <CartContentsList>a</CartContentsList>

            <CartTotalSum>
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

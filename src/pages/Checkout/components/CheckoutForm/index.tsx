import React, { useState } from 'react'
import { useForm /*, useFormContext */ } from 'react-hook-form'
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
  DeliveryDetails,
  FormContainer,
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
} from './styles'

const checkoutFormValidationSchema = zod.object({
  // name: zod.string().min(2, 'Inform your name'),
  // email: zod.string().email().min(2, 'Inform your name'),
  zip: zod.number().min(8, 'Inform your ZIP code'),
  streetAddress: zod.string(),
  houseNumber: zod
    .number()
    .min(1, 'The house should be 1 character minimum')
    .max(5, 'The house number should have 5 characters maximum'),
  reference: zod.string().optional(),
  zone: zod.string().min(2, 'Inform your zone area name'),
  city: zod.string().min(2, 'Inform your city name'),
  uf: zod.string().length(2, 'Inform your UF code'),
})

type CheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>

export function CheckoutForm() {
  const currentTheme = useTheme()
  // const { register } = useFormContext()
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
        zip: 0,
        streetAddress: '',
        houseNumber: 0,
        reference: '',
        zone: '',
        city: '',
        uf: '',
      },
    })

  function handleCreateNewCheckout(data: CheckoutFormData) {
    console.log(data)
    reset()
  }

  // const name = watch('name')

  return (
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
    </FormContainer>
  )
}

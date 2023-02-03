import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
  zip: zod.number().gte(8, 'ZIP code not valid'),
  streetAddress: zod.string(),
  houseNumber: zod.number().min(1, 'The house should be 1 character minimum'),
  reference: zod.string().optional(),
  zone: zod.string().min(2, 'Inform your zone area name'),
  city: zod.string().min(2, 'Inform your city name'),
  uf: zod.string().length(2, 'Inform your UF code'),
  payment: zod.string(),
})

type CheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>

export function CheckoutForm() {
  const currentTheme = useTheme()
  const [paymentMethod, setPaymentMethod] = useState('')
  const navigate = useNavigate()

  const handleChangePaymentMethod = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPaymentMethod(event.target.value)
  }

  const newCheckoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {
      streetAddress: '',
      reference: '',
      zone: '',
      city: '',
      uf: '',
      payment: '',
    },
  })

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = newCheckoutForm

  function handleCreateNewCheckout(data: CheckoutFormData) {
    console.log(data)
    navigate('/success', {
      state: data,
    })
    reset()
  }

  return (
    <FormContainer
      id="checkout-form"
      onSubmit={handleSubmit(handleCreateNewCheckout)}
    >
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
              <DeliveryDetailsInputBase
                id="zip"
                type="number"
                {...register('zip', { valueAsNumber: true })}
              />
            </DeliveryInputOneThird>
          </DeliveryDetailsLineContainer>

          <DeliveryDetailsLineContainer>
            <DeliveryInputFullWidth>
              <label>Street</label>
              <DeliveryDetailsInputBase
                id="street"
                type="text"
                {...register('streetAddress')}
              />
            </DeliveryInputFullWidth>
          </DeliveryDetailsLineContainer>

          <DeliveryDetailsLineContainer>
            <DeliveryInputOneThird>
              <label>Number</label>
              <DeliveryDetailsInputBase
                id="number"
                type="number"
                {...register('houseNumber', { valueAsNumber: true })}
              />
            </DeliveryInputOneThird>

            <DeliveryInputTwoThirds>
              <label>Reference</label>
              <DeliveryDetailsInputBase
                id="reference"
                type="text"
                {...register('reference')}
              />
            </DeliveryInputTwoThirds>
          </DeliveryDetailsLineContainer>

          <DeliveryDetailsLineContainer>
            <DeliveryInputOneThird>
              <label>Zone</label>
              <DeliveryDetailsInputBase
                id="zone"
                type="text"
                {...register('zone')}
              />
            </DeliveryInputOneThird>

            <DeliveryInputTwoThirds>
              <label>City</label>
              <DeliveryDetailsInputBase
                id="city"
                type="text"
                {...register('city')}
              />
            </DeliveryInputTwoThirds>

            <DeliveryInputSmall>
              <label>UF</label>
              <DeliveryDetailsInputBase
                id="uf"
                type="text"
                {...register('uf')}
              />
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
                  {...register('payment')}
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
                  {...register('payment')}
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
                  {...register('payment')}
                  onChange={handleChangePaymentMethod}
                />
              </PaymentDetailLabel>
            </PaymentDetailOption>
          </div>
        </PaymentDetailsBlock>
      </DeliveryDetails>

      {errors.zip && <p>Zip: {errors.zip?.message}</p>}
      {errors.streetAddress && <p>Street: {errors.streetAddress?.message}</p>}
      {errors.houseNumber && <p>Number: {errors.houseNumber?.message}</p>}
      {errors.reference && <p>Reference: {errors.reference?.message}</p>}
      {errors.zone && <p>Zone: {errors.zone?.message}</p>}
      {errors.city && <p>City: {errors.city?.message}</p>}
      {errors.uf && <p>UF: {errors.uf?.message}</p>}
      {errors.payment && <p>Payment: {errors.payment?.message}</p>}
    </FormContainer>
  )
}

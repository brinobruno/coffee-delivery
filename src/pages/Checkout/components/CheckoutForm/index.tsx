import React, { useEffect, useState } from 'react'
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

import { useProductsInCartContext } from './../../../../contexts/ProductsInCartContext'
import { ErrorsDisplay } from './components/ErrorsDisplay'
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

export type CheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>

export function CheckoutForm() {
  const currentTheme = useTheme()
  const { getItemsData, emptyCart } = useProductsInCartContext()
  const [paymentMethod, setPaymentMethod] = useState('')
  const [zipAutocomplete, setZipAutocomplete] = useState(0)
  const [addressesAutocompleted, setAddressesAutocompleted] = useState({})
  const navigate = useNavigate()

  const itemsRetrieved = getItemsData()

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
    navigate('/success', {
      state: { data, itemsRetrieved },
    })
    emptyCart()
    reset()
  }

  function handleTrackZipForAutocomplete(e: Event) {
    setZipAutocomplete(parseInt((e.target as HTMLInputElement).value))
  }

  const URL = `https://viacep.com.br/ws/${zipAutocomplete}/json/`

  useEffect(() => {
    if (zipAutocomplete.toString().length === 8) {
      fetch(URL, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'content-type': 'application/json;charset=utf-8',
        },
      }).then((data) => {
        setAddressesAutocompleted(data.json())
      })
    }
  }, [URL, zipAutocomplete])

  console.log(addressesAutocompleted)

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
                onChange={() => handleTrackZipForAutocomplete}
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

      <ErrorsDisplay errorsDetected={errors} />
    </FormContainer>
  )
}

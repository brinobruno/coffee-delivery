import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  CartContents,
  ConfirmOrderButton,
  DeliveryDetails,
  FormContainer,
  CheckoutContainer,
  SelectedProductsBlock,
  DeliveryDetailsBlock,
  PaymentDetailsBlock,
} from './styles'

const checkoutFormValidationSchema = zod.object({
  name: zod.string().min(2, 'Inform your name'),
  zip: zod.number().min(8, 'Inform your ZIP code'),
})

type CheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>

export function Checkout() {
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

          <DeliveryDetailsBlock>Delivery</DeliveryDetailsBlock>

          <PaymentDetailsBlock>Payment</PaymentDetailsBlock>
        </DeliveryDetails>

        <CartContents>
          <h3>Selected coffees</h3>
          <SelectedProductsBlock>
            <ConfirmOrderButton type="submit">Confirm order</ConfirmOrderButton>
          </SelectedProductsBlock>
        </CartContents>
      </FormContainer>
    </CheckoutContainer>
  )
}

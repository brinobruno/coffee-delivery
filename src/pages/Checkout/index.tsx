import {
  CartContents,
  DeliveryDetails,
  FormContainer,
  ProductsListContainer,
} from './styles'

export function Checkout() {
  return (
    <ProductsListContainer>
      <FormContainer>
        <DeliveryDetails>delivery</DeliveryDetails>

        <CartContents>selected</CartContents>
      </FormContainer>
    </ProductsListContainer>
  )
}

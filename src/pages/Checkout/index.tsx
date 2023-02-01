import { CheckoutForm } from './components/CheckoutForm'
import { CartContentsContainer } from './components/CartContentsContainer'
import { CheckoutContainer, CheckoutWrapper } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CheckoutWrapper>
        <CheckoutForm />

        <CartContentsContainer />
      </CheckoutWrapper>
    </CheckoutContainer>
  )
}

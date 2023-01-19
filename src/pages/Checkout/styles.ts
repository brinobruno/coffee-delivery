import styled from 'styled-components'

export const CheckoutContainer = styled.section`
  min-height: calc(100vh - 6.5rem);
  padding-top: 2.5rem;
`

export const FormContainer = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  h3 {
    margin-bottom: 1rem;
  }
`

export const DeliveryDetails = styled.div`
  width: 57%;
`

export const CartContents = styled.div`
  width: 40%;
`

export const CheckoutContentsBlockBase = styled.div`
  background-color: ${(props) => props.theme['gray-200']};
  padding: 2.5rem;

  header {
    display: flex;
    gap: 0.5rem;
  }

  div span {
    font-size: 1rem;
    line-height: 1.25rem;
  }

  div p {
    font-size: 0.875rem;
    line-height: 1rem;
  }
`

export const DeliveryDetailsBlock = styled(CheckoutContentsBlockBase)`
  margin-bottom: 0.75rem;
`

export const PaymentDetailsBlock = styled(CheckoutContentsBlockBase)``

export const SelectedProductsBlock = styled(CheckoutContentsBlockBase)``

export const ConfirmOrderButton = styled.button`
  width: 100%;
  padding: 0.75rem 0;

  color: ${(props) => props.theme['gray-100']};
  background-color: ${(props) => props.theme['yellow-500']};
  transition: 0.3s ease-in-out;

  font-size: 0.875rem;
  line-height: 22.4px;
  font-weight: 700;
  text-transform: uppercase;

  border: none;
  border-radius: 6px;

  &:hover {
    background-color: ${(props) => props.theme['yellow-700']};
  }
`

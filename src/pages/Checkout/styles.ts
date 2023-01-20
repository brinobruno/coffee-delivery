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
    margin-bottom: 2rem;
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
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-bottom: 0.75rem;
`

export const PaymentDetailsBlock = styled(CheckoutContentsBlockBase)``

export const SelectedProductsBlock = styled(CheckoutContentsBlockBase)``

export const DeliveryDetailsLineContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`

export const DeliveryDetailsInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  background-color: ${(props) => props.theme['gray-300']};
  color: ${(props) => props.theme['gray-600']};
  padding: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.125rem;
  border-radius: 0.25rem;
  box-shadow: 0 0 0 1px ${(props) => props.theme['gray-400']};

  &:focus-within {
    color: ${(props) => props.theme['yellow-700']};
    box-shadow: 0 0 0 1.25px ${(props) => props.theme['yellow-700']};
  }
`

export const DeliveryDetailsInputBase = styled.input`
  color: ${(props) => props.theme['gray-600']};
  font-size: 0.875rem;
  line-height: 1.125rem;

  width: 100%;
  background: transparent;
  overflow: hidden;

  &::placeholder {
    color: ${(props) => props.theme['gray-600']};
  }

  &:focus {
    color: ${(props) => props.theme['yellow-700']};
    box-shadow: none;
  }
`

export const DeliveryInputOneThird = styled(DeliveryDetailsInputWrapper)`
  max-width: 33%;
  width: 100%;
`

export const DeliveryInputTwoThirds = styled(DeliveryDetailsInputWrapper)`
  max-width: 66%;
  width: 100%;
`

export const DeliveryInputFullWidth = styled(DeliveryDetailsInputWrapper)`
  max-width: 100%;
  width: 100%;
`

export const DeliveryInputHalfWidth = styled(DeliveryDetailsInputWrapper)`
  max-width: 50%;
  width: 100%;
`

export const DeliveryInputSmall = styled(DeliveryDetailsInputWrapper)`
  max-width: 13%;
  width: 100%;
`

export const ConfirmOrderButton = styled.button`
  width: 100%;
  padding: 0.75rem 0;

  color: ${(props) => props.theme['gray-100']};
  background-color: ${(props) => props.theme['yellow-500']};
  transition: 0.3s background-color ease-in-out;

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

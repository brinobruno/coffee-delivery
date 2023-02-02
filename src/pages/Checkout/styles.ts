import styled from 'styled-components'

export const CheckoutContainer = styled.section`
  min-height: calc(100vh - 6.5rem);
  padding-top: 2.5rem;
`

export const CheckoutWrapper = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 1100px) {
    flex-direction: column;
  }

  h3 {
    margin-bottom: 1rem;
  }
`

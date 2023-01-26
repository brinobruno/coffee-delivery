import styled from 'styled-components'
import { CheckoutContentsBlockBase } from '../../styles'

export const CartContents = styled.div`
  width: 40%;

  @media (max-width: 1100px) {
    width: 100%;
  }
`

export const SelectedProductsBlock = styled(CheckoutContentsBlockBase)`
  border-radius: 6px 44px;
`

export const CartContentsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const CartContentsItem = styled.div`
  display: flex;
  justify-content: space-between;

  padding-bottom: 2rem;
  border-bottom: 1px solid ${(props) => props.theme['gray-400']};

  @media (max-width: 600px) {
    align-items: center;
  }

  > div {
    display: flex;
    gap: 1.25rem;

    @media (max-width: 600px) {
      flex-direction: column;
    }
  }
`

export const CartContentsMiddle = styled.div`
  div > div {
    display: flex;
    gap: 0.5rem;
  }

  @media (max-width: 320px) {
    div > div {
      flex-direction: column;
    }

    div > div > div {
      flex-direction: row;
    }
  }

  header {
    margin-bottom: 0.5rem;
  }

  img {
    max-width: 4rem;
    width: 100%;
  }

  strong {
    color: ${(props) => props.theme['gray-700']};
  }
`

export const RemoveItemButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  background-color: ${(props) => props.theme['gray-400']};
  color: ${(props) => props.theme['gray-700']};
  font-size: 0.75rem;
  line-height: 19px;
  text-transform: uppercase;

  border: none;
  border-radius: 6px;
  padding: 0.4rem 0.5rem;

  @media (max-width: 320px) {
    justify-content: center;
    padding: 0.55rem;
  }
`

export const CartTotalSum = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  margin-top: 1.5rem;

  div {
    display: flex;
    justify-content: space-between;

    span {
      font-size: 0.875rem;
      line-height: 18px;
    }

    em {
      font-style: normal;
      font-size: 1rem;
      line-height: 21px;
    }

    strong {
      color: ${(props) => props.theme['gray-800']};
      font-size: 1.25rem;
      line-height: 26px;
    }
  }
`

export const ConfirmOrderButton = styled.button`
  width: 100%;
  padding: 0.75rem 0;
  margin-top: 1rem;

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

export const EmptyCartMessage = styled.span`
  line-height: 1.75rem;

  a {
    font-weight: 700;
    color: ${(props) => props.theme['purple-700']};
    transition: 0.2s color ease-in-out;

    &:hover {
      color: ${(props) => props.theme['purple-500']};
    }
  }
`

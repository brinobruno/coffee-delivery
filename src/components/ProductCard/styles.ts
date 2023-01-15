import styled from 'styled-components'

export const ProductCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px 36px;
  padding: 0 1.25rem 1.125rem;

  @media (max-width: 1100px) {
    padding: 0 1rem 0.75rem;
  }

  @media (max-width: 968px) {
    padding: 0 1.5rem 1.125rem;
  }

  header {
    display: flex;
    justify-content: center;
    padding-bottom: 0.75rem;

    margin-top: -20px;
  }

  img {
    display: flex;
    max-width: 7.5rem;
  }

  h6 {
    padding-bottom: 0.5rem;
  }

  p {
    padding-bottom: 2rem;
    color: ${(props) => props.theme['gray-600']};
  }

  h6,
  p {
    text-align: center;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;

  padding-bottom: 1rem;

  span {
    font-weight: 700;
    font-size: 0.7rem;
    line-height: 13px;

    text-align: center;
    text-transform: uppercase;

    display: flex;
    align-items: center;

    padding: 0.25rem 0.5rem;
    border-radius: 100px;

    color: ${(props) => props.theme['yellow-700']};
    background-color: ${(props) => props.theme['yellow-300']};
  }
`

export const PurchaseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  strong {
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
    line-height: 2rem;

    span {
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
    }
  }
`
export const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px;
  border-radius: 6px;

  span {
    width: 100%;
  }
  background: ${(props) => props.theme['purple-700']};

  span {
    color: ${(props) => props.theme['yellow-700']};
  }
`

export const AddItemsWrapper = styled.div`
  background-color: ${(props) => props.theme['gray-400']};
  border-radius: 6px;
  padding: 0.6rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  input {
    color: ${(props) => props.theme['gray-900']};

    text-align: center;
    max-width: 0.875rem;
    background transparent;

    &:focus {
      box-shadow: none;
    }
  }
`

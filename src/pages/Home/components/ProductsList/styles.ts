import styled from 'styled-components'

export const ProductsListContainer = styled.div``

export const ProductsGrid = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 2rem;
  grid-row-gap: 2.25rem;

  padding-top: 3.375rem;

  @media (max-width: 1100px) {
    grid-column-gap: 1rem;
  }

  @media (max-width: 968px) {
    grid-template-columns: auto auto auto;
  }

  @media (max-width: 768px) {
    grid-template-columns: auto auto;
  }

  @media (max-width: 500px) {
    grid-template-columns: auto;
  }
`

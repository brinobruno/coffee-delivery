import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 70rem;
  margin: 0 auto 2rem;
  padding: 0 2.5rem;

  display: flex;
  flex-direction: column;

  nav {
    display: flex;
    gap: 0.75rem;
  }

  @media (max-width: 500px) {
    padding: 0 1.5rem;
  }
`

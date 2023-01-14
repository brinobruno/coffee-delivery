import styled from 'styled-components'

export const HomeCoverContainer = styled.section`
  position: relative;

  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  padding: 5.875rem 0 6.75rem;

  &::before {
    content: '';
    position: absolute;

    background: url(${(props) => props.theme['background-home']}) no-repeat
      center;
    background-size: contain;
    opacity: 0.45;

    /* top, left... */
    inset: 0;
  }

  h1 {
    padding-bottom: 1rem;
  }

  p {
    color: ${(props) => props.theme['gray-800']};
  }

  @media (max-width: 1000px) {
    div > img {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    & {
      flex-direction: column;
      gap: 4rem;
      padding: 2rem 0;
    }
  }

  @media (max-width: 500px) {
    & h1 {
      font-size: 2.5rem;
      line-height: 50px;
    }
  }
`

export const HomeInformationContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 36rem;

  @media (max-width: 1000px) {
    max-width: 50%;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`

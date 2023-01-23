import styled from 'styled-components'

export const CheckoutSuccessContainer = styled.section`
  min-height: calc(100vh - 6.5rem);
  padding-top: 5rem;

  @media (max-width: 768px) {
    padding-top: 2.25rem;
  }

  h2 {
    color: ${(props) => props.theme['yellow-700']};
  }

  span {
    font-size: 1.25rem;
    line-height: 26px;
  }
`

export const CheckoutSuccessWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1rem;

  div img {
    max-width: 30.75rem;
    transform: translateY(1rem);

    @media (max-width: 768px) {
      max-width: 100%;
      transform: none;
    }
  }

  div:first-child {
    max-width: 526px;
    width: 100%;

    @media (max-width: 768px) {
      max-width: 100%;
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;
  }
`

export const SuccessDetails = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;
  margin-top: 2.5rem;

  background: ${(props) => props.theme['gray-100']};
  background-clip: padding-box;
  border: solid 1px transparent;
  border-radius: 6px 36px;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    margin: -1px;
    border-radius: inherit;
    background: linear-gradient(
      to left,
      ${(props) => props.theme['purple-500']},
      ${(props) => props.theme['yellow-500']}
    );
  }
`

interface SuccessDetailItem {
  backgroundColor: string
}

export const SuccessDetailsItem = styled.li<SuccessDetailItem>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  figure {
    padding: 0.5rem;
    background-color: ${(props) => props.backgroundColor};
    clip-path: circle();

    display: flex;
    justify-content: center;
    align-items: center;
  }

  div span {
    font-size: 1rem;
    line-height: 20px;
    color: ${(props) => props.theme['gray-700']};
  }
`

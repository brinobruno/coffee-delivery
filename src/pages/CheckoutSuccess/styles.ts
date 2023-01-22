import styled from 'styled-components'

export const CheckoutSuccessContainer = styled.section`
  min-height: calc(100vh - 6.5rem);
  padding-top: 5rem;

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
  align-items: flex-start;
  gap: 1rem;

  div img {
    max-width: 30.75rem;
  }
`

export const SuccessDetails = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  margin-top: 2.5rem;

  border-radius: 6px 36px;
  border: 1px solid;
  border-image-slice: 1;
  border-width: 1px;
  border-image-source: linear-gradient(to left, #8047f8, #dbac2c);

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    figure {
      padding: 0.5rem;
      background-color: ${(props) => props.theme['purple-500']};
      clip-path: circle();
    }
  }
`

export const DetailItemCircle = styled.div``

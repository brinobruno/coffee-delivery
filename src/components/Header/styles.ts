import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 6.5rem;

  nav *:focus {
    box-shadow: none;
  }
`

const BaseWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 10px;
  border-radius: 6px;

  span {
    width: 100%;
  }
`

export const MapWrapper = styled(BaseWrapper)`
  background: ${(props) => props.theme['purple-300']};

  span {
    color: ${(props) => props.theme['purple-700']};
  }
`

export const CartWrapper = styled(BaseWrapper)`
  position: relative;
  background: ${(props) => props.theme['yellow-300']};

  span {
    color: ${(props) => props.theme['yellow-700']};
  }
`

export const CartCounter = styled.div`
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme['gray-100']};
    background: ${(props) => props.theme['yellow-700']};
    padding: 0.5rem;
    clip-path: circle();

    font-size: 0.75rem;
    font-weight: 700;
    line-height: 0.5rem;
    letter-spacing -0.06em;
`

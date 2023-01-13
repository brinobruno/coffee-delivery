import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 6.5rem;
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
  background: ${(props) => props.theme['yellow-300']};

  span {
    color: ${(props) => props.theme['yellow-700']};
  }
`

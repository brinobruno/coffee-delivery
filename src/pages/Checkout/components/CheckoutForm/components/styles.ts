import styled from 'styled-components'

export const ErrorsContainer = styled.div`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p strong {
    color: ${(props) => props.theme['purple-500']};
  }
`

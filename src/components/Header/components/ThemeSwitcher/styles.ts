import styled from 'styled-components'

export const ThemeSwitchBase = styled.button`
  background-color: ${(props) => props.theme['purple-300']};
  border: none;

  display: flex;
  align-items: center;
  gap: 4px;

  padding: 10px;
  border-radius: 6px;

  &:focus {
    box-shadow: none;
  }
`

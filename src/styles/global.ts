import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-500']};
  }

  body {
    background: ${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme['gray-300']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 1.125rem
  }

  h1 {
    font-size: 3rem;
    line-height: 62.4px;
    color: ${(props) => props.theme['gray-900']};
  }

  h2 {
    font-size: 2rem;
    line-height: 41.6px;
    color: ${(props) => props.theme['gray-800']};
  }

  h3 {
    line-height: 23.4px;
  }

  input {
    border: 0;
  }

  button {
    cursor: pointer;
  }
`

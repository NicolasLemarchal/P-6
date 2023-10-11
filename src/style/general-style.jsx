import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: Montserrat;
    }

    body {
        margin: 0;
        padding: 0;
    }
`

function GlobalStyle() {

  return <StyledGlobalStyle />
}

export default GlobalStyle

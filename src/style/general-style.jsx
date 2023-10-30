import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: Montserrat;
    }

    body {
        margin: 0;
        margin-bottom: 212px;
        padding: 0;
    }
`

function GlobalStyle() {

  return <StyledGlobalStyle />
}

export default GlobalStyle

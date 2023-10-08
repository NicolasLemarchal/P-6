import styled from 'styled-components'
import FooterImg from '../../assets/Footer/Desktop_Footer.png'

const FooterLogo = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 209px;
`

function Footer() {

  return (
    <FooterLogo src={FooterImg} />
  )
}

export default Footer

import styled from 'styled-components'
import FooterImg from '../../assets/Footer/Desktop_Footer.png'

const FooterLogo = styled.img`
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 209px;
  object-fit: cover;
`

function Footer() {

  return (
    <FooterLogo src={FooterImg} />
  )
}

export default Footer

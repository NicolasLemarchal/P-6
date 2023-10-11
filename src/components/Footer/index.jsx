import styled from 'styled-components'
import FooterImg from '../../assets/Footer/Desktop_Footer.png'
import './footer.css'

const FooterLogo = styled.img`
`

function Footer() {

  return (
    <FooterLogo className='footer footer-logo' src={FooterImg} />
  )
}

export default Footer

import styled from 'styled-components'
import FooterImg from '../../assets/Footer/kasa-logo.png'
import './footer.css'

const FooterLogo = styled.img`
`

const Rights = styled.p`
`

const FooterContainer = styled.div`
`

function Footer() {

  return (
    <FooterContainer className='footer-container'>
      <FooterLogo src={FooterImg} alt='footer' />
      <Rights>© 2020 Kasa. All rights reserved</Rights>
    </FooterContainer>
  )
}

export default Footer

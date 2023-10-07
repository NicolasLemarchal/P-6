import styled from 'styled-components'
import FooterImg from '../../assets/Footer/D_Footer.png'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
`

const FooterLogo = styled.img`
  height: 70px;
`

function Footer() {

  return (
    <FooterContainer>
      <FooterLogo src={FooterImg} />
    </FooterContainer>
  )
}

export default Footer

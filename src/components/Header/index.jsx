import { Link } from 'react-router-dom'
import styled from 'styled-components'
import HeaderImg from '../../assets/Header/_Header.png'

const HeaderLogo = styled.img`
  height: 70px;
`

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Header() {

  return (
    <NavContainer>
      <Link to="/">
        <HeaderLogo src={HeaderImg} />
      </Link>
      <div>
        <Link to="/">
          Accueil
        </Link>
        <Link to="/Location">
          Location
        </Link>
        <Link to="/APropos">
          A-Propos
        </Link>
      </div>
    </NavContainer>
  )
}

export default Header

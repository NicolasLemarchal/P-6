import { Link } from 'react-router-dom'
import styled from 'styled-components'
import HeaderImg from '../../assets/Header/Logo_Header.png'

const HeaderLogo = styled.img`
  height: 70px;
`

const HeaderContainer = styled.nav`
  margin: 30px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavContainer =styled.div`
  width: 309px;
  display: flex;
  justify-content: flex-end;
  gap: 57px;
`

const NavLink = styled(Link)`
  font-weight: 500;
  font-size: 24px;
  color:#FF6060;
  text-decoration: none;
`

function Header() {

  return (
    <HeaderContainer>
      <Link to="/">
        <HeaderLogo src={HeaderImg} />
      </Link>
      <NavContainer>
        <NavLink to="/">
          Accueil
        </NavLink>
        <NavLink to="/APropos">
          A Propos
        </NavLink>
      </NavContainer>
    </HeaderContainer>
  )
}

export default Header

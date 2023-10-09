import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import HeaderImg from '../../assets/Header/Logo_Header.png'
import './header.css'

const HeaderLogo = styled.img`
  height: 70px;
`

const HeaderContainer = styled.nav`
  margin: 40px 100px 0px 100px;
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

function Header() {

  return (
    <HeaderContainer>
      <HeaderLogo src={HeaderImg} />
      <NavContainer>
        <NavLink to="/">
          Acceuil
        </NavLink>
        <NavLink to="/APropos">
          A Propos
        </NavLink>
      </NavContainer>
    </HeaderContainer>
  )
}

export default Header

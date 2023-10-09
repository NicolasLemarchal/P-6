import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import HeaderImg from '../../assets/Header/Logo_Header.png'
import './header.css'

const HeaderContainer = styled.nav`
`

const HeaderLogo = styled.img`
`

const NavContainer =styled.div`
`

function Header() {

  return (
    <HeaderContainer className='header-container'>
      <HeaderLogo src={HeaderImg} className='header-logo' />
      <NavContainer className='nav-container'>
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

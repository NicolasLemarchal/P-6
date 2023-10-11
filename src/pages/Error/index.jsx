import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ErrorImg from '../../assets/Error/404.png'
import './error.css'

const ErrorWrapper = styled.div`=
`

const ErrorIllustration = styled.img`
`

const ErrorSubtitle = styled.h2`
`

const ErrorRedirectionLink = styled(Link)`
`

function Error() {
  return (
    <ErrorWrapper className='error-wrapper'>
      <ErrorIllustration className='error-illustration' src={ErrorImg} />
      <ErrorSubtitle className='error-subtile'>
        Oups! La page que vous demandez n'existe pas.
      </ErrorSubtitle>
      <ErrorRedirectionLink className='error-redirection-link' to="/">
        Retourner sur la page d'accueil
      </ErrorRedirectionLink>
    </ErrorWrapper>
  )
}

export default Error

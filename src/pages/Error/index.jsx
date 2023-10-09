import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../../utils/style/colors'
import ErrorImg from '../../assets/Error/404.png'

const ErrorWrapper = styled.div`
  margin-top: 139px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
  align-items: center;
  justify-content: space-between;
`

const Illustration = styled.img`
  width: 597px;
  height: 263px;
  margin-bottom: 139px;
`

const ErrorSubtitle = styled.h2`
  font-weight: 500;
  font-size: 36px;
  color:#FF6060;
  margin-top: 0px;
  margin-bottom: 139px;
`

const ErrorRedirectionLink = styled(Link)`
  font-weight: 500;
  font-size: 18px;
  color:#FF6060;
  margin-bottom: 139px;
  text-decoration: underline;
`

function Error() {
  return (
    <ErrorWrapper>
      <Illustration src={ErrorImg} />
      <ErrorSubtitle>
        Oups! La page que vous demandez n'existe pas.
      </ErrorSubtitle>
      <ErrorRedirectionLink to="/">
        Retourner sur la page d'accueil
      </ErrorRedirectionLink>
    </ErrorWrapper>
  )
}

export default Error

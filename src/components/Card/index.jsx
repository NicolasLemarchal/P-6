import PropTypes from 'prop-types'
import styled from 'styled-components'
import DefaultPicture from '../../assets/Card/profile.png'

const CardTitle = styled.p`
  position: absolute;
  background-color: red;
  color: #FFF;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  margin: 0px;
  margin-left: 20px;
  margin-top: 268px;
`

const CardImage = styled.img`
  height: 340px;
  width: 340px;
  border-radius: 10px;
  background: #FF6060;
`

const CardOverlay = styled.div`
  position: absolute;
  width: 340px;
  height: 340px;
  border-radius: 10px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%);
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

function Card({ title, picture }) {

  return (
    <CardWrapper>
      <CardOverlay></CardOverlay>
      <CardImage src={picture} alt="photo logement" />
      <CardTitle> {title} </CardTitle>
    </CardWrapper>
  )
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
  label: '',
  title: '',
  picture: DefaultPicture,
}

export default Card

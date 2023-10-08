import styled from 'styled-components'
import AProposImg from '../../assets/A-Propos/Image source 2.png'

const AProposWrapper = styled.div`
  width: calc(100% - 200px);
  height: 560px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-left: 100px;
`

const Illustration = styled.img`
  width: calc(100%);
  height: 263px;
  border-radius: 25px;
  object-fit: cover;
`

const Valeurs = styled.p`
  width: calc(100% - 200px);
  height: 52px;
  display: flex;
  align-items: center;
  padding: 10px 20px 10px 15px;
  border-radius: 5px;
  background-color: #FF6060;
  color: #F6F6F6;
`

function APropos() {

  return (
    <AProposWrapper>
      <Illustration src={AProposImg} />
      <Valeurs>
        Fiabilité
      </Valeurs>
      <Valeurs>
        Respect
      </Valeurs>
      <Valeurs>
        Service
      </Valeurs>
      <Valeurs>
        Sécurité
      </Valeurs>
    </AProposWrapper>
  )
}

export default APropos

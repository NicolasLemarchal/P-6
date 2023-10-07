import styled from 'styled-components'
import AProposImg from '../../assets/A-Propos/Image source 2.png'

const AProposWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Illustration = styled.img`
  flex: 1;
`

function APropos() {

  return (
    <AProposWrapper>
      <Illustration src={AProposImg} />
    </AProposWrapper>
  )
}

export default APropos

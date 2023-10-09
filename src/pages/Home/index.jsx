import Card from '../../components/Card'
import styled from 'styled-components'
import HomeIllustration from '../../assets/Home/Image source 1.png'
import "./home.css";

const HomeWrapper = styled.div`
`

const Illustration = styled.img`
`

const Overlay = styled.div`
`

const TextImg = styled.p`
`

const HomeContainer = styled.div`
`


function Home() {

  return (
    <HomeWrapper className='home-wrapper'>
      <Illustration src={HomeIllustration} className='illustration' />
      <Overlay className='overlay'>
      </Overlay>
      <TextImg className='text-img'>
        Chez vous, partout et ailleurs
      </TextImg>
      <HomeContainer className='home-container'>
        <Card/>
      </HomeContainer>
    </HomeWrapper>
  )
}

export default Home

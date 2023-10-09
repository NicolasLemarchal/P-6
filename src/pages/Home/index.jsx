import React, { useState } from 'react';
import Card from '../../components/Card'
import logementsData from '../../data/logements.json';
import styled from 'styled-components'
import HomeIllustration from '../../assets/Home/Image source 1.png'

const HomeWrapper = styled.div`
  width: calc(100% - 200px);
  height: 1095px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 100px;
  gap: 43px;
`

const Illustration = styled.img`
  width: 100%;
  height: 223px;
  border-radius: 25px;
  flex-shrink: 0;
  object-fit: cover;
`

const Overlay = styled.div`
  position: absolute;
  width: calc(100% - 200px);
  height: 223px;
  border-radius: 25px;
  opacity: 0.3;
  background: #000;
  mix-blend-mode: darken;
`

const TextImg = styled.p`
  position: absolute;
  margin: 0px;
  margin-top: 84px;
  color: #FFF;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
`

const HomerContainer = styled.div`
  width: 100%;
  height: 829px;
  flex-shrink: 0;
  border-radius: 25px;
  background: #F6F6F6;
`
const CardsContainer = styled.div`
  display: grid;
  gap: 56px;
  grid-template-rows: 340px 340px;
  grid-template-columns: repeat(3, 1fr);
`

function Home() {
  const [data] = useState(logementsData || []);

  return (
    <HomeWrapper>
      <Illustration src={HomeIllustration} />
      <Overlay>
      </Overlay>
      <TextImg>
        Chez vous, partout et ailleurs
      </TextImg>
      <HomerContainer>
        <CardsContainer>
          {data.map((logements) => (
            <Card
              key={logements.id}
              title={logements.title}
              picture={logements.pictures}
            />
          ))}
        </CardsContainer>
      </HomerContainer>
    </HomeWrapper>
  )
}

export default Home

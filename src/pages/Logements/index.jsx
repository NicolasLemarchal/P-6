import React from 'react';
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import logementsData from '../../data/logements.json'
import Carousel from '../../components/Carousel';
import Host from '../../components/Host'
import Error from '../Error';

const LogementBody = styled.div`
  width: calc(100% - 200px);
  height: 643px;
  margin: 50px 100px;
`

const InfoBody = styled.div`
  display: flex;
  justify-content: space-between;
`

const LogementTitle = styled.h1`
  color: #FF6060;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  margin: 0px;
`

const InfoHouseWrapper =styled.div`
  display: flex;
  flex-direction: column;
`

const InfoHostAndRating =styled.div`
  display: flex;
  flex-direction: column;
`

function Logements() {
  const { id } = useParams();
  const house = logementsData.find((logement) => logement.id === id);

  if (!house) {
    return <Error />;
  }

  return (
    <LogementBody>
      <Carousel images={house.pictures} />
      <InfoBody>
        <InfoHouseWrapper>
          <LogementTitle>{house.title}</LogementTitle>
        </InfoHouseWrapper>
        <InfoHostAndRating>
          <Host name={house.host.name} picture={house.host.picture} />
        </InfoHostAndRating>
      </InfoBody>
    </LogementBody>
  );
}

export default Logements;

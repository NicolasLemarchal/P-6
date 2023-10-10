import React from 'react';
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import logementsData from '../../data/logements.json'
import Carousel from '../../components/Carousel';
import Host from '../../components/Host'
import Rating from '../../components/Rating';
import Collapsible from '../../components/Collapsible';
import Tags from '../../components/Tags';
import Error from '../Error';

const LogementBody = styled.div`
  width: calc(100% - 200px);
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

const LogementLocation = styled.h2`
  color: #FF6060;
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  margin: 0px;
`

const InfoHouseWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const InfoHostAndRating = styled.div`
  display: flex;
  flex-direction: column;
`

const CollapsibleDiv = styled.div`
  display: flex;
  gap: 76px;
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
          <LogementLocation>{house.location}</LogementLocation>
          <Tags tags={house.tags}/>
        </InfoHouseWrapper>
        <InfoHostAndRating>
          <Host name={house.host.name} picture={house.host.picture} />
          <Rating rating={house.rating}></Rating>
        </InfoHostAndRating>
      </InfoBody>
      <CollapsibleDiv>
        <Collapsible buttonText="Description" valeursText={house.description} />
        <Collapsible buttonText="Équipements" valeursText={house.equipments.map((equipments, index) => (
          <li key={index}>{equipments}</li>
        ))} />
      </CollapsibleDiv>
    </LogementBody>
  );
}

export default Logements;

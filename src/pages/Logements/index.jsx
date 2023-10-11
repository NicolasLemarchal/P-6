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
import './logements.css'

const LogementBody = styled.div`
`

const InfoBody = styled.div`
`

const LogementTitle = styled.h1`
`

const LogementLocation = styled.h2`
`

const InfoHouseWrapper = styled.div`
`

const InfoHostAndRating = styled.div`
`

const CollapsibleDiv = styled.div`
`

function Logements() {
  const { id } = useParams();
  const house = logementsData.find((logement) => logement.id === id);

  if (!house) {
    return <Error />;
  }

  return (
    <LogementBody className='logement-body'>
      <Carousel images={house.pictures} />
      <InfoBody className='info-body'>
        <InfoHouseWrapper className='info-house-wrapper'>
          <LogementTitle className='logement-title'>{house.title}</LogementTitle>
          <LogementLocation className='logement-location'>{house.location}</LogementLocation>
          <Tags tags={house.tags}/>
        </InfoHouseWrapper>
        <InfoHostAndRating className='info-host_rating'>
          <Host name={house.host.name} picture={house.host.picture} />
          <Rating rating={house.rating}></Rating>
        </InfoHostAndRating>
      </InfoBody>
      <CollapsibleDiv className='collapside-div'>
        <Collapsible buttonText="Description" valeursText={house.description} />
        <Collapsible buttonText="Équipements" valeursText={house.equipments.map((equipments, index) => (
          <li className='equipement' key={index}>{equipments}</li>
        ))} />
      </CollapsibleDiv>
    </LogementBody>
  );
}

export default Logements;

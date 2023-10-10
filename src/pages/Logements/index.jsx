import React from 'react';
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import logementsData from '../../data/logements.json'
import Carousel from '../../components/Carousel';
import Error from '../Error/index.jsx';

const LogementBody = styled.div`
  width: calc(100% - 200px);
  height: 643px;
  margin: 50px 100px;
`

const LogementTitle = styled.h1`
  color: #FF6060;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  margin: 0px;
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
      <LogementTitle>{house.title}</LogementTitle>
    </LogementBody>
  );
}

export default Logements;

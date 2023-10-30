import React from "react";
import Card from "../Card";
import logementsData from '../../data/logements.json';
import styled from 'styled-components';
import "../../components/Gallerie/gallerie.css";

const GallerieWrapper = styled.div`
`;

function Gallery() {
  return (
    <GallerieWrapper className="gallerie-wrapper">
      {logementsData.map((logement) => (
        <Card key={logement.id} id={logement.id} title={logement.title} cover={logement.cover} />
      ))}
    </GallerieWrapper>
  );
}

export default Gallery;

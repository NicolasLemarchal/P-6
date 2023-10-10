import React from "react";
import logementsData from '../../data/logements.json';
import { Link } from "react-router-dom";
import styled from 'styled-components'
import "../../components/Card/card.css";

const CardsWrapper = styled.div`
`

const CardImage = styled.img`
`

const CardTitle = styled.p`
`

function Card({ id, title, cover }) {
  return (
    <CardsWrapper className="cards-wrapper">
      {logementsData.map((logement) => (
        <Link to={`/Logement/${logement.id}`} key={logement.id}>
          <div className="card">
            <CardImage src={logement.cover} alt="" />
            <div className="card-title">
              <CardTitle>{logement.title}</CardTitle>
            </div>
          </div>
        </Link>
      ))}
    </CardsWrapper>
  );
}

export default Card

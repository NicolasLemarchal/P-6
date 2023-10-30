import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import "../../components/Card/card.css";

const CardWrapper = styled.div`
`

const CardImage = styled.img`
`

const CardTitle = styled.p`
`

function Card({ id, title, cover }) {
  return (
    <CardWrapper className="card">
      <Link to={`/Logement/${id}`} key={id}>
        <CardImage src={cover} alt="" />
        <div className="card-title">
          <CardTitle>{title}</CardTitle>
        </div>
      </Link>
    </CardWrapper>
  );
}

export default Card

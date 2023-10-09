import React, { useState } from 'react';
import Card from '../../components/Card'
import styled from 'styled-components'
import logementsData from '../../data/logements.json';

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
`

function Logements() {
  const [data] = useState(logementsData || []);

  return (
    <CardsContainer>
      {data.map((logements) => (
        <Card
          key={logements.id}
          title={logements.title}
          picture={logements.pictures}
        />
      ))}
    </CardsContainer>
  );
}

export default Logements

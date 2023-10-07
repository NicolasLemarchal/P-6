import React, { useState } from 'react';
import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import logementsData from '../../data/logements.json';

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
`

const PageTitle = styled.h1`
  font-size: 30px;
  text-align: center;
  padding-bottom: 30px;
  color: #000000;
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
  color: #000000;
`

function Location() {
  const [data] = useState(logementsData || []);

  return (
    <div>
      <PageTitle>Trouvez votre logements</PageTitle>
      <PageSubtitle>
        Chez Kasa nous trouvons le logements qui vous correspond.
      </PageSubtitle>
        <CardsContainer>
          {data.map((logements) => (
            <Card
              key={logements.id}
              title={logements.title}
              cover={logements.cover}
              pictures={logements.pictures}
              description={logements.description}
              hostName={logements.host.name}
              hostPicture={logements.host.picture}
              rating={logements.rating}
              location={logements.location}
              equipments={logements.equipments}
              tags={logements.tags}
            />
          ))}
        </CardsContainer>
    </div>
  );
}

export default Location

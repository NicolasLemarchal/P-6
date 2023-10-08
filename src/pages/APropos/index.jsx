import React from 'react';
import styled from 'styled-components'
import AProposImg from '../../assets/A-Propos/Image source 2.png'
import Collapsible from '../../components/Collapsible'

const AProposWrapper = styled.div`
  width: calc(100% - 200px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 38px 100px;
  gap: 30px;
`

const Illustration = styled.img`
  width: calc(100%);
  height: 263px;
  border-radius: 25px;
  object-fit: cover;
  margin-bottom: 8px;
`

function APropos() {

  return (
    <AProposWrapper>
      <Illustration src={AProposImg} />
      <Collapsible buttonText="Fiabilité" valeursText="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
 régulièrement vérifiées par nos équipes." />
      <Collapsible buttonText="Respect" valeursText="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
perturbation du voisinage entraînera une exclusion de notre plateforme." />
      <Collapsible buttonText="Service" valeursText="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />
      <Collapsible buttonText="Sécurité" valeursText="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
également des ateliers sur la sécurité domestique pour nos hôtes." />
    </AProposWrapper>
  );
}

export default APropos;

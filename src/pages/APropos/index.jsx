import React from 'react';
import styled from 'styled-components'
import AProposImg from '../../assets/A-Propos/Image source 2.png'
import Collapsible from '../../components/Collapsible'
import './a-propos.css'

const AProposWrapper = styled.div`
`

const Illustration = styled.img`
`

const BtnCollapsibleWrapper = styled.div`
`

function APropos() {

  return (
    <AProposWrapper className='a-propos-wrapper'>
      <Illustration className='illustration' src={AProposImg} />
      <BtnCollapsibleWrapper className='btn-collapside-wrapper'>
        <Collapsible buttonText="Fiabilité" valeursText="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
  régulièrement vérifiées par nos équipes." />
        <Collapsible buttonText="Respect" valeursText="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
  perturbation du voisinage entraînera une exclusion de notre plateforme." />
        <Collapsible buttonText="Service" valeursText="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />
        <Collapsible buttonText="Sécurité" valeursText="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
  correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
  locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
  également des ateliers sur la sécurité domestique pour nos hôtes." />
      </BtnCollapsibleWrapper>
    </AProposWrapper>
  );
}

export default APropos;

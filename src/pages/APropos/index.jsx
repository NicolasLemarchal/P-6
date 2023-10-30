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
  const data = require('../../data/collapsible.json');

  return (
    <AProposWrapper className='a-propos-wrapper'>
      <Illustration className='illustration' src={AProposImg} />
      <BtnCollapsibleWrapper className='btn-collapside-wrapper'>
        {data.collapsibles.map((item, index) => (
          <Collapsible
            key={index}
            buttonText={item.buttonText}
            valeursText={item.valeursText}
          />
        ))}
      </BtnCollapsibleWrapper>
    </AProposWrapper>
  );
}

export default APropos;

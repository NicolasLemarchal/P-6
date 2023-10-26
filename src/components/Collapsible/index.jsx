import ArrowIcone from '../../assets/Dropdown + Carousel/arrow.png'
import React, { useState } from 'react';
import styled from 'styled-components'
import './collapsible.css'

const CollapsibleWrapper = styled.div`
`

const CollapsibleButton = styled.button`
`

const ArrowImg = styled.img`
  transition: transform 0.5s ease;
  transform: ${({ rotated }) => (rotated ? 'rotate(-180deg)' : 'rotate(0)')};
`

const ValeursBox = styled.div`
`

const Valeurs = styled.p`
`

const Collapsible = (props) => {
  const [open, setOpen] = useState(false);
  const [arrowRotated, setArrowRotated] = useState(false);

  const toggle = () => {
    setOpen(!open);
    setArrowRotated(!arrowRotated);
  };

  return (
    <CollapsibleWrapper className='collapsible-wrapper'>
      <CollapsibleButton className='collapsible-button' onClick={toggle}>
        {props.buttonText}
        <ArrowImg className='arrow-img' src={ArrowIcone} alt="Arrow" rotated={arrowRotated} />
      </CollapsibleButton>
      <ValeursBox className={`toggle ${open ? 'content-open' : 'content-close'} `}>
        <Valeurs className={`valeurs ${open ? 'content-open' : 'content-close'} `}>{props.valeursText}</Valeurs>
      </ValeursBox>
    </CollapsibleWrapper>
  );
};

export default Collapsible;

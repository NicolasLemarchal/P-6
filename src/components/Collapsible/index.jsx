import ArrowIcone from '../../assets/Dropdown + Carousel/arrow.png'
import React, { useState } from 'react';
import styled from 'styled-components'

const CollapsibleWrapper = styled.div`
  align-items: center;
  width: 100%;
`

const ArrowImg = styled.img`
  position: absolute;
  right: 120px;
  transition: transform 0.5s ease;
  transform: ${({ rotated }) => (rotated ? 'rotate(-180deg)' : 'rotate(0)')};
`

const Button = styled.button`
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  padding: 10px 20px 10px 15px;
  border-radius: 5px;
  border: none;
  background-color: #FF6060;
  color: #FFF;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
`

const Valeurs = styled.h4`
  background-color: #F6F6F6;
  color: #FF6060;
  margin: 0px;
  padding: 10px;
  border-radius: 5px;
`

const Collapsible = (props) => {
  const [open, setOpen] = useState(false);
  const [arrowRotated, setArrowRotated] = useState(false);

  const toggle = () => {
    setOpen(!open);
    setArrowRotated(!arrowRotated);
  };

  return (
    <CollapsibleWrapper>
      <Button onClick={toggle}>
        {props.buttonText}
        <ArrowImg src={ArrowIcone} alt="Arrow" rotated={arrowRotated} />
      </Button>
      {open && (
        <div className="toggle">
          <Valeurs>{props.valeursText}</Valeurs>
        </div>
      )}
    </CollapsibleWrapper>
  );
};

export default Collapsible;

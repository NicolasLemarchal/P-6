import React from "react";
import styled from 'styled-components';
import './Host.css'

const HostBody = styled.div`
  display: flex;
`

const HostName = styled.p`
  width: 78px;
  font-size: 18px;
  line-height: 26px;
  text-align: right;
  color: #FF6060;
  margin: 0px;
`

function Host(props) {
  
  return (
    <HostBody>
      <HostName>{props.name}</HostName>
      <img className="host-picture" src={props.picture} alt={props.host} />
    </HostBody>
  );
}

export default Host;

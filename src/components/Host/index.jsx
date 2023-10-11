import React from "react";
import styled from 'styled-components';
import './host.css'

const HostBody = styled.div`
`

const HostName = styled.p`
`

function Host(props) {
  
  return (
    <HostBody className="host-body">
      <HostName className="host-name">{props.name}</HostName>
      <img className="host-picture" src={props.picture} alt={props.host} />
    </HostBody>
  );
}

export default Host;

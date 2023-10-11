import React from "react";
import styled from 'styled-components';
import "./tags.css";

const TagsContainer = styled.div`
`

const Tag = styled.p`
`

function Tags(props, index) {
  const tags = props.tags;

  return (
    <TagsContainer className="logement-tags">
      {tags.map((tag) => (
        <Tag className="logement-tag" key={`${tag}-${index}`}>{tag}</Tag>
      ))}
    </TagsContainer>
  );
}

export default Tags;

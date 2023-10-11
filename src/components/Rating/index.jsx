import React from "react";
import styled from 'styled-components';
import StarActive from "../../assets/Rating/star-active.png";
import StarInactive from "../../assets/Rating/star-inactive.png";
import './rating.css'

const StarRating = styled.div`
`

function Rating(props) {
  const range = [1, 2, 3, 4, 5];
  const rating = props.rating;
  const stars = [];

  for (let i = 0; i < range.length; i++) {
    stars.push(
      <div key={range[i].toString()}>
        {rating >= range[i] ? (
          <img src={StarActive} alt="Etoile active" />
        ) : (
          <img src={StarInactive} alt="Etoile inactive" />
        )}
      </div>
    );
  }

  return <StarRating className="star-rating">{stars}</StarRating>;
}

export default Rating;

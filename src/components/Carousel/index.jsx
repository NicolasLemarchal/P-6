import React, { useState } from 'react';
import styled from 'styled-components';
import Arrow from '../../assets/Dropdown + Carousel/big-arrow.png'

const ImgCarousel = styled.img`
  width: 100%;
  height: 413px;
  border-radius: 25px;
  margin-bottom: 30px;
  object-fit: cover;
`

const BtnCarouselLeft = styled.img`
  position: absolute;
  width: 80px;
  height: 80px;
  color: #FFFFFF;
  top: 326.5px;
  transform: rotate(0deg);
`

const BtnCarouselRight = styled.img`
  position: absolute;
  width: 80px;
  height: 80px;
  color: #FFFFFF;
  right: 96px;
  top: 326.5px;
  transform: rotate(180deg);
`

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <BtnCarouselLeft src={Arrow} onClick={goToPrevSlide} alt='' />
      <ImgCarousel src={images[currentIndex]} alt={`Image numéro ${currentIndex + 1}`} />
      <BtnCarouselRight src={Arrow} onClick={goToNextSlide} alt='' />
    </div>
  );
};

export default Carousel;

import React, { useState } from 'react';
import styled from 'styled-components';
import Arrow from '../../assets/Dropdown + Carousel/big-arrow.png'
import './carousel.css'

const ImgCarousel = styled.img`
`

const BtnCarouselLeft = styled.img`
`

const BtnCarouselRight = styled.img`
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
      {images.length > 1 && (
      <BtnCarouselLeft className='btn-carousel__left' src={Arrow} onClick={goToPrevSlide} alt='' />
      )}
      {images.length === 1 ? (
        <ImgCarousel className='img-carousel' src={images[currentIndex]} alt='Image' />
      ) : (
        <ImgCarousel className='img-carousel' src={images[currentIndex]} alt={`Image numéro ${currentIndex + 1}`} />
      )}
      {images.length > 1 && (
      <BtnCarouselRight className='btn-carousel__right' src={Arrow} onClick={goToNextSlide} alt='' />
      )}
    </div>
  );
};

export default Carousel;

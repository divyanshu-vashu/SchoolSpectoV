import React, { useState, useEffect } from 'react';
import '../styles/Carousel.css';  // Import the CSS file

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        >
          {index === 0 && (
            <div className="carousel-text-overlay">
              Welcome to Prakash Play School!
              <br />
            </div>
          )}
        </div>
      ))}
      <button className="carousel-arrow left" onClick={prevSlide}>&#10094;</button>
      <button className="carousel-arrow right" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Carousel;

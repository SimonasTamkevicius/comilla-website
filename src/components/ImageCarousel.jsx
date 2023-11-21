import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="w-full px-10 md:px-20 lg:px-36 mt-24 md:mt-20 slide-up-carousel">
      <Carousel
        selectedItem={currentImageIndex}
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={9000}
      >
        {images.map((image, index) => (
          <div key={index}>
            <div className="w-full aspect-w-4 aspect-h-3 md:aspect-h-7">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="object-cover w-full h-[200px] md:h-[500px] lg:h-[700px]"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;

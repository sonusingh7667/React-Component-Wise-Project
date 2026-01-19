import { useState } from "react"
import React  from 'react'

const ImageSlider = () => {

    const images = [
        'https://www.istockphoto.com/photos/photo-image-art',
        'https://unsplash.com/s/photos/free-images',
        'https://www.pexels.com/search/elephant/'
    ]

    const [currentIndex , setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex(prev => 
            prev === images.length - 1 ? 0 : prev + 1
        )
    }

    const handlePrev = () => {
        setCurrentIndex(prev => 
            prev === 0 ? images.length - 1 : prev + 1
        )
    }


  return (
    <div>
      <h1>Image Carousel / Slider</h1>

      <img src={images[currentIndex]} 
      alt="carousel"
      style={{ width: '400px', height: '200px' }} 
      />
    <button onClick={handlePrev}>Previous</button>
    <button onClick={handleNext}>Next</button>
      
    </div>
  )
}

export default ImageSlider

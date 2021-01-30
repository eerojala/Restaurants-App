// External libraries and components
import React from 'react'
import Carousel from '@brainhubeu/react-carousel'

// External CSS
import '@brainhubeu/react-carousel/lib/style.css';

// Internal components
import CarouselItem from './CarouselItem'

const RestaurantCarousel = ({ title, restaurants }) => {

  return (
    <div>
      <h1>{title}</h1>
      <Carousel 
        arrows 
        infinite 
        slidesPerPage={restaurants.length < 3 ? restaurants.length : 3}
      >
        {restaurants.map(restaurant => 
          <CarouselItem 
            key={restaurant.name} 
            blurhash={restaurant.blurhash}
            overlayText={restaurant.online ? "Online" : "Offline"}
            bottomText={restaurant.name}
          />
        )}
      </Carousel>
    </div>
  )
}

export default RestaurantCarousel
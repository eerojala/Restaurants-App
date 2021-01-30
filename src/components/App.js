// External libraries
import React from 'react'

// JSON data
import data from '../data/data.json'

// Components
import RestaurantCarousel from './RestaurantCarousel'

const App = () => {

  return (
    <div>
      {data.sections.map((section, index) => 
        <RestaurantCarousel 
          key={section.title} 
          id={`carousel_${index + 1}`} 
          title={section.title} 
          restaurants={section.restaurants} 
        />
      )}
    </div>
  )
}

export default App
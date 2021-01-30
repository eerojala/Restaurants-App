// External libraries
import React from 'react'

// JSON data
import data from '../data/data.json'

// Components
import RestaurantCarousel from './RestaurantCarousel'

const App = () => {

  return (
    <div>
      {data.sections.map(section => 
        <RestaurantCarousel key={section.title} title={section.title} restaurants={section.restaurants} />
      )}
    </div>
  )
}

export default App
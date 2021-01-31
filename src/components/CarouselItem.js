// External libraries and components
import React from 'react'
import { Blurhash } from 'react-blurhash'

const CarouselItem = ({ blurhash, overlayText, bottomText }) => {
  return (
    <div className="image">
      <Blurhash hash={blurhash} width={480} height={270} />
      <h2 className="overlay-text">{overlayText}</h2>
      <h2>{bottomText}</h2>
    </div>
  )
}

export default CarouselItem
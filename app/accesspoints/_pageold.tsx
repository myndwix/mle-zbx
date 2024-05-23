'use client'
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

function AccessPoints() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

    // useEffect(() => {
    //     if(emblaApi){
    //         console.log(emblaApi.slideNodes())
    //     }
    // }, [emblaRef])
    return (
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide border-2">Slide 1</div>
          <div className="embla__slide border-2">Slide 2</div>
          <div className="embla__slide border-2">Slide 3</div>
        </div>
      </div>
    )
}

export default AccessPoints;
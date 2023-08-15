import React from 'react'
import { Slide } from 'react-slideshow-image'
import './slider.css'

function Slider() {
  return (
    <div className='slides'>
         <Slide>
          
             <img src='https://www.comsats.edu.pk/slider/sdgs.jpg' alt='slider1' /> 
            <img src='https://www.comsats.edu.pk/slider/WUR2023.jpg' alt='slider2' />
            <img src='https://www.comsats.edu.pk/slider/fall2023banner.jpg' alt='slider3' />
            <img src='https://www.comsats.edu.pk/slider/ranked-151.jpg' alt='slider4' />
           </Slide>

    </div>
  )
}

export default Slider
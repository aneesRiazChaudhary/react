import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Slider from '../../components/slider/Slider'
import Cards from '../../components/cards/Cards'
import Form from '../../components/form/Form'

import './home.css'

function Home() {
  return (
    <div className='homey' >
      
        <Navbar/>
        <Slider/>
        <Cards/>
        <Form/>
        
    </div>
  )
}

export default Home
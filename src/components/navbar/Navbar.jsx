import React from 'react'
import {  useNavigate } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  
    const navigate=useNavigate()
  
  
    return (
      <div className='quickMenu'>
  <img src='https://www.comsats.edu.pk/img/comsats.png' alt='logo of comsats'/>
  <div ><h3 
  onClick={()=>{navigate("/home")}}
  >Home</h3></div>
  <div ><h3 onClick={()=>{navigate("/about")}}
  >About</h3></div>
  <div ><h3 
  onClick={()=>{navigate("/services")}}
  >Services</h3></div>
  <div > <h3 
   onClick={()=>{navigate("/contact")}} 
  >Contact</h3></div>
  
  
  
  
  
      </div>
    )
  
}

export default Navbar
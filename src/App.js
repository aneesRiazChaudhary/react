import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Servicess from './pages/services/Servicess';
import {BrowserRouter, Routes, Route } from 'react-router-dom'


import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      
    <Route path='/' element ={<Home/>}/>
      <Route path='/home' element ={<Home/>}/>
      <Route path='/about' element ={<About/>}/>
      <Route path='/services' element ={<Servicess/>}/>
      <Route path='/contact' element ={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  
    </div>
  );
}

export default App;

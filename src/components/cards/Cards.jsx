import React from 'react'
import './cards.css'














function Cards() { 
  function generateFiles(e) {
    e.target.innerHTML= 'div';
    let div=document.createElement('div');
    div.innerHTML=''
    document.body.appendChild(div)
  console.log(div);
  div.style='position:absolute;width:100%;height:100vh;background-color:red'
  }

  function generateFilesb(e){
    e.target.innerHTML='div'
    let dive=document.createElement('div');
    dive.innerHTML=''
    document.body.appendChild(dive)
  console.log(dive);
  dive.style='position:absolute;width:100%;height:100vh;background-color:red'
  }
  function generateFilesc(e) {
    e.target.innerHTML= 'div';
    let div1=document.createElement('div');
    div1.innerHTML=''
    document.body.appendChild(div1)
  console.log(div1);
  div1.style='position:absolute;width:100%;height:100vh;background-color:red'
  }
  function generateFilesd(e) {
    e.target.innerHTML= 'div';
    let div2=document.createElement('div');
    div2.innerHTML=''
    document.body.appendChild(div2)
  console.log(div2);
  div2.style='position:absolute;width:100%;height:100vh;background-color:red'
  }
  function generateFilese(e) {
    e.target.innerHTML= 'div';
    let div3=document.createElement('div');
    div3.innerHTML=''
    document.body.appendChild(div3)
  console.log(div3);
  div3.style='position:absolute;width:100%;height:100vh;background-color:red'
  }
  function generateFilesf(e) {
    e.target.innerHTML= 'div';
    let div4=document.createElement('div');
    div4.innerHTML=''
    document.body.appendChild(div4)
  console.log(div4);
  div4.style='position:absolute;width:100%;height:100vh;background-color:red'
  }
 

  return (
    <div className='cards'>
        
        <div id='one'>
            
           
        </div>
        
        <div id='two'>
           
        </div>
        <div id='three'></div>
        <div id='four'></div>
        <div id='five'></div>
        <div id='six'></div>
          <div id='seven'>
          
          
      
          

            <h3 onMouseOver={(e) => generateFiles(e)
          
          } >undergraduate</h3>
           

              
            

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     





            <h6>addmission</h6>
            
          </div>

          <div id='eight'>
            <h3  onMouseOver={(e) => generateFilesb(e)}>graduate</h3>
            <h6>addmission</h6>
            
          </div>

          <div id='nine'>
            <h3 onMouseOver={(e) => generateFilesd(e)}>phd</h3>
            <h6>addmission</h6>
            
          </div>

          <div id='ten'>
            <h3 onMouseOver={(e) => generateFilesc(e)}>fee structure</h3>
            <h6>fall 2023</h6>
            
          </div>

          <div id='eleven'>
            <h3 onMouseOver={(e) => generateFilese(e)}>how to apply</h3>
            <h6>procedure</h6>
            
          </div>

          <div id='twelve'>
          


 
            <h3 onMouseOver={(e) => generateFilesf(e)}>apply now</h3>


            


            
             




            <h6>fall 2023</h6>
            
          </div>
          


    </div>
  )
}

export default Cards
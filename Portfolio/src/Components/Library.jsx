import React from 'react'
import image from "../assets/gsap.png"
const Library = () => {
  return (
        <div>
        <div className="skill-container d-flex ">
      <div className="skilll">
       
        <div className='d-flex flex-column justify-content-center align-items-center '>
           
            <img className='l-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
           <p className='l-name'>REACT</p>
        </div>
        
      </div>
         <div className="skilll">
       
        <div className='d-flex flex-column justify-content-center align-items-center '>
           
           
           
            <img className='l-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" />
          
          
          
            <p className='l-name'>SPRING</p>
        </div>
        
      </div>
         <div className="skilll">
       
        <div className='d-flex flex-column justify-content-center align-items-center '>
           
           
           
            <img className='l-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
          
          
          
            <p className='l-name'>BOOTSTRAP</p>
        </div>
        
      </div>
         <div className="skilll">
       
        <div className='d-flex flex-column justify-content-center align-items-center '>
          
            <img className='l-icon' src={image}/>
            <p className='l-name'>GSAP</p>
        </div>
</div>

    </div>
    </div>
  )
}

export default Library
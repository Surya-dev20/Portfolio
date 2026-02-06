import React, { useState } from 'react'
import image from '../assets/gsap.png'
import image2 from '../assets/todo.webp'
import Languages from './Languages';
import { Button } from 'bootstrap';
const ProjectComponent = () => {
    const data = [{
        id:1,
        images:image2,
        title:"TO-DO List",
        Languages:"fastapi",
        desc:"created my first project as todo list with fastapi. ",
        status:true
    },
{           
    id:2,
           images:image,
        title:"Online chatbot for healthcare management",
        Languages:"...",
        desc:"academic project is ongoing",
        status:false
    
}]
   
    const [finished,setFinished] = useState(true);
    const [id,setId] = useState(1);
     const show = data.find(item => item.id===id)
  return (
    <div className='d-flex flex-column align-items-center'>
    <div className='single-p'>
        <div className='inside-p'>
            <img src={show.images} alt="" />
            <p className='status'style={finished?{color:'green'}:{color:'red'}}>{show.status?<div>FINISHED</div>:<div>On-Going</div>}</p>
            <h2 className='project-title'>{show.title}</h2>
            <p className='language used'><b>{show.Languages}</b></p>
            <p className='project-desc'>{show.desc} </p>
            <button className='view'>view</button>
        </div>
    </div>
    <div className='d-flex gap-5 mt-2'>

        {id===1?<button className='rounddd px-2'><i class="bi bi-arrow-left-circle"></i></button>:<button className='roundde  px-2' onClick={()=>setId(id-1)}><i class="bi bi-arrow-left-circle"></i></button> }
        {id===data.length?<button className='rounddd px-2'><i class="bi bi-arrow-right-circle"></i></button>: <button className='roundde  px-2' onClick={()=>setId(id+1)}><i class="bi bi-arrow-right-circle"></i></button>}
        
    </div>
    </div>
  )
}

export default ProjectComponent
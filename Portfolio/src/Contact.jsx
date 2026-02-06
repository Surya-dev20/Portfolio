import React, { useState } from 'react'
import Navbar from './Navbar'
import { useContext } from 'react'
import axios from 'axios';
import DarkContext from './DarkContext'
const Contact = () => {
      const {dark,setDark,page} = useContext(DarkContext)
      const [name,setName] = useState("");
      const [email,setEmail] = useState("");
      const [message,setMessage] = useState("");

  function handleSubmit(e){
    e.preventDefault()
       console.log(name + email + message)
    axios.post('http://192.168.174.176:5173/send',{
      name:name,
      mail:email,
      number:message
    });
 
  }
  return (
      
    <div className='contact' style={dark?{background:"black",color:"white"}:{background:"white",color:"black"}}>
      <>Stay connect!!</>
        {page?null:<Navbar/>}
        <div className='d-flex justify-content-center align-items-center hello'>
            <form action="" onSubmit={handleSubmit} id='form'className='d-flex flex-column align-items-center gap-5'>
              <div className='d-flex gap-5'>
                <span>Name</span><input style={dark?{color:"white"}:{color:"black"}} type="text" id='inp'onChange={(e)=>{setName(e.target.value)}}/>
              </div>
              <div className='d-flex gap-5'>
                <span>Email</span><input style={dark?{color:"white"}:{color:"black"}} type="text" id='inp' onChange={(e)=>{setEmail(e.target.value)}}/>
              </div>
              <div className='d-flex gap-3'>
                <span>message </span><textarea style={dark?{color:"white"}:{color:"black"}}id='txta' onChange={(e)=>{setMessage(e.target.value)}}/>
              </div>
              <input className='inp-btn' type='submit' value="Submit"/>
            </form>
        </div>
    </div>
  )
}

export default Contact
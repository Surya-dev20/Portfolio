import React, { useContext, useState } from 'react'
import Menulist from './Components/Menulist'
import DarkContext from './DarkContext'

const Navbar = () => {
  
  const {dark,setDark , navbar , setNavbar} = useContext(DarkContext)

  return (
    <div  className='nav-bar' style={dark?{background:"black",color:"white"}:{background:"white",color:"black"}}>
        <div className='d-flex justify-content-between '>
      
            <div>
              <div>
                <i className="bi bi-list" onClick={()=>setNavbar(!navbar)}></i>
                {navbar?<Menulist/>:null}
              </div>
              <div></div>

            </div>
                  <div>
                <div className='mt-3'>
                <p className='' style={{height:"10px",marginRight:"20px"}}>
                  Portfolio
                </p>
              </div>

            </div>
        </div>
    </div>
  )
}

export default Navbar
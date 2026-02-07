import React, { useContext } from "react";
import Navbar from "./Navbar.jsx";
import DarkContext from "./DarkContext.jsx";
import { useNavigate } from "react-router-dom";
import man from "./assets/man.png"
import iam from "./assets/iam.jpeg"
const Home = () => {
  const navigate = useNavigate();
  const { dark, setDark ,page} = useContext(DarkContext);
  return (
    <div
      className="home"
      style={
        dark
          ? { background: "linear-gradient(to bottom,black 30%,  rgb(37, 0, 70))", color: "white" }
          : { background: "white", color: "black" }
      }
    >
      <div className="">
      
      <Navbar />
      </div>
      <div className="h-fix">
      <div className="set-pi">
        <img src={iam} alt="" className="main-img" />
      </div>
      <div className="set-pb">
        <div className="set-p">
         
        
        <div className="main-name d-flex align-items-center ">
          
          <p className="d-flex align-items-baseline gap-2"><p className="sm">Hi, I'm</p>Surya</p>
          <div className="d-flex gap-2">
            <button  className="bkb" style={dark?{color:"white"}:{color:"black"}}><i class="bi bi-github"></i></button>
            <button  className="bkb" style={dark?{color:"white"}:{color:"black"}}><i className="bk bi-instagram"></i></button>
            <a href="https://www.linkedin.com/in/surya-s-47a851375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="bkb" style={dark?{color:"white"}:{color:"black"}}><i class="bi bi-linkedin"></i></a>
          </div>
          </div>
          

        </div>
        <div>
          <p className="main-para">
            I am a passionate and detail-oriented developer with a strong intrest in building user-friendly and responsive web 
            applications. I enjoy turning ideas into practical solutions using modern technologies and continously improving my skills through hands-on-projects.
            
          </p>
          <p className="main-para">
             i am a quick learner, adaptable to new tools, and motivated to grow as a professional  while contributing positively to a learn and delivering meaningful digital experiences
          </p>
        </div>
        <div>
                    <button className="aboutme-btn" onClick={()=>navigate("/about")} style={dark?{color:"white",border:"2px solid blueviolet"}:{color:"black",border:"2px solid blueviolet"}}>About</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;

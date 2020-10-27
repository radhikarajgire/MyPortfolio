import React from 'react';
import pin from '../assets/icons/pin.svg';
import download from '../assets/icons/download.svg';
import resume from "../assets/projectimages/resume.pdf";
import {motion} from 'framer-motion';
import photo from "../assets/projectimages/photo.svg";


const Sidebar = () =>{
    const handleEmailMe = () => {
        window.open("mailto:radhika.rajgire@gmail.com");
    }
    
    return (
   <motion.div className='sidebar'>
     <img src={photo} alt="avatar" className="sidebar_avatar"/>
       <div className="sidebar_name">Radhika <span>Rajagiri</span></div>
       <div className="sidebar_item">Fullstack Web Developer</div>
       <a href= {resume} download="resume.pdf">
           <div className="sidebar_item sidebar_resume">
               <img src={download} alt="" className="sidebar_icon"/>Resume
           </div>
           </a>
          
          

           <div className = "sidebar_contact">
         
               <div className="sidebar_location">
               <img src={pin} alt="location" className="sidebar_item"/>Munich, Germany</div> 
               <div className="sidebar_item"> radhika.rajgire@gmail.com</div>
               <div className="sidebar_item">+4915129676048</div>
               
           </div>
      <div className="sidebar_item sidebar_email" onClick={handleEmailMe}>Email Me</div>
      <div class="wrapper">
          <ul>
   
         <li class="twitter"><a href="https://twitter.com/home"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a></li>
         <li class="linkedin"><a href="https://www.linkedin.com/feed/"><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></a></li>
         <li class="github"><a href="https://github.com/radhikarajgire"><i class="fa fa-github fa-2x" aria-hidden="true"></i></a></li>
   
         </ul>
         </div>
   </motion.div>
    )
}
export default Sidebar;
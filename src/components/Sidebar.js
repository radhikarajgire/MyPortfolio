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
    // const sidebar_variant = {
    //     hidden: {
    //         x: '-20vw',
    //     },
    //     visble:{
    //         x:0,
    //         transition:{
    //             delay: 0.1, duration: 0.5, type:'spring'
    //         }
    //     }
    // }
    return (
   <motion.div className='sidebar'
//    variants ={sidebar_variant}
//    initial="hidden"
//    animate="visible" 
   >
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
               <img src={pin} alt="location" className="sidebar_item"/>Munich,Germany</div> 
               <div className="sidebar_item"> radhika.rajgire@gmail.com</div>
               <div className="sidebar_item">+4915129676048</div>
               
           </div>
      <div className="sidebar_item sidebar_email" onClick={handleEmailMe}>Email Me</div>
      <div class="wrapper">
          <ul>
   
         <li class="twitter"><a href="#"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a></li>
         <li class="linkedin"><a href="#"><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></a></li>
         <li class="github"><a href="#"><i class="fa fa-github fa-2x" aria-hidden="true"></i></a></li>
   
         </ul>
         </div>
   </motion.div>
    )
}
export default Sidebar;
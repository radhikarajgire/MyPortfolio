import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
const Navbar = () =>{
   const [active, setActive]= useState('');
   useEffect(() => {
       let currentURL = window.location.href
       console.log(currentURL);
       if(currentURL.endsWith('/'))
       setActive('About me');
       else if(currentURL.endsWith('/projects'))
       setActive('Projects')
       else if(currentURL.endsWith('/resume'))
       setActive('Resume')
   }, [active])
   const navbar_variant = {
       hidden:{
           y:'-30vh',
           opacity:0
       },
       visible:{
           y:0,
           opacity:1,
           transition:{
               delay:0.2,duration:0.7,type:'spring'
           }
       }
   }
    return(
        <motion.div className = "navbar"
        variants={navbar_variant}
        initial='hidden'
        animate='visible'>
            <div className= "navbar_active">{active}</div>
            <div className="navbar_items">
                {active !== 'About me' && 
                <Link to ="/"> 
                 <div className="navbar_item" onClick={()=> setActive('About me')}>About Me</div>
                 </Link>
                }
            {active !== 'Resume' ?  
            <Link to ="/resume"><div className="navbar_item" onClick={()=> setActive('Resume')}>Resume</div>
            
            </Link> : null
}
            
            {active !== 'Projects' && <Link to ="/projects"><div className="navbar_item" onClick={()=> setActive('Projects')}>Projects</div></Link> }
             

      

            </div>

        </motion.div>
    );
};
export default Navbar;
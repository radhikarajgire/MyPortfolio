import React from 'react';
import api from '../assets/icons/api.svg';
import backend from '../assets/icons/backend.svg';
import frontend from "../assets/icons/front-end.svg";
import Skillcard from './Skillcard';
import {motion} from 'framer-motion';
const skills =[
{

    icon: frontend,
    title:"Frontend",
    about:"HTML5, CSS3, JavaScript, React ( Hooks, Context), UX/UI Fundamentals"
},
{

    icon: backend,
    title:"Backend",
    about:"Node.js, Express, Databases (SQL, NoSQL), MongoDB"
},
{

    icon: api,
    title:"Tools",
    about:" Git & GitHub, Docker Fundamentals, Console"
},
{

    icon: api,
    title:"AWS & DevOps",
    about:"DevOps Fundamentals (CI/CD, Deployment),AWS S3,AWS Lambda"
},
{

    icon: api,
    title:"APIs",
    about:"REST, GraphQL ,Contentfull"
},
{

    icon: api,
    title:"Other",
    about:"Testing with Jest, Agile Methodologies (Scrum), Project Management"
}
    
]
const About = () => {
    const about_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                dealy: 0.2, duration: 0.6
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }
    return(
        <motion.div className = "about"
        variants={about_variants}
        initial="hidden"
        animate="visible"
        exit="exit">
          <h6 className ="about_intro">I'am a 31year old Web Developer with a passion for web applications development and managing projects using Scrum,Agile and learn process.Certified Web Developer, trained in the latest Technologies.Equipped with a diverse and promising skill-set. Proficient in an assortment of technologies, including JavaScript, React.js, Node.js . Highly adaptable. Detail oriented. Having strong knowledge in AWS Cloud Computing. </h6>
          <div className="container about_container">
              <h6 className="about_heading">Familiar technologies</h6>
              <div className="row ">
{
    skills.map(skill =>
        <Skillcard skill={skill}/>
   
            )
}


              </div>
          </div>
        </motion.div>
    );
};
export default About;
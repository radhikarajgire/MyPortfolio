import React from 'react';
import api from '../assets/icons/api.svg';
import backend from '../assets/icons/backend.svg';
import frontend from "../assets/icons/front-end.svg";
import Skillcard from './Skillcard';
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
export default skills;
import React from 'react';
import Bar from './Bar';
import {motion} from 'framer-motion';
import { tools , languages } from './data/resume_data';


const Resume = () => {
    const resume_variants={
        hidden:{
            opacity:0
        },
        visible:{
            opacity:1,
            transition:{
                delay:0.2,duration:0.6,
            }
        },
        ext:{
            opacity:0,
            transition:{
                ease:'easeInOut'
            }
        }
    }
    return (
        <motion.div className="container resume"
        
        variants={resume_variants}
        initial="hidden"
        animate="visible"
        exit="exit">
            <div className="row">
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Education
                    </h4>
                    <div className="resume-card__body">
                    <h5 className="resume-card__title">
                           Fullstack Web and App Development
                        </h5>
                        <p className="resume-card__name">
                          WBS Coding School, Berlin, Germany    (May 2020-0ct 2020) 
                        </p>
                        <h5 className="resume-card__title">
                       Bachelor's in Electronics & Communications Engineering
                        </h5>
                        <p className="resume-card__name">
                            Vishweshwaraya Technological University, Belgaum, India(2007-2011)
                        </p>
                       
                    </div>
                </div>
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Experience
                    </h4>
                    <div className="resume-card__body">
                    <h5 className="resume-card__title">
                    Teaching And Instructional Coach

                        </h5>
                        <p className="resume-card__name">
                        PDA College of Engineering, India (2016-2019)
</p>
                       <h5 className="resume-card__title">
                        Program Associate
                        </h5>
                        <p className="resume-card__name">
                        Milan Infotech Ltd. Bengaluru, India (2012-2016)
                        </p>
                        <h5 className="resume-card__title">
                        Trainee Software Engineer
                        </h5>
                        <p className="resume-card__name">
                        J Spiders tech Ltd. Bengaluru, India (2011-2012)
                        </p>
                        <p className="resume-card__details">j</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        Language and Framework
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            languages.map(language =>
                                <Bar value={language} />
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        Tools and Softwares
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            tools.map(tool => <Bar value={tool} />)
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Resume;
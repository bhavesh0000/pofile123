import React from 'react';
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import { easeInOut, motion } from 'framer-motion';

import { Card } from 'react-bootstrap';

const Projects = () =>{
    const ProjectList = [
        {
         id: 1,
         name: "contact management backend",
         imageUrl: project1,
         gitHubLink: "https://github.com/bhavesh0000/my-contact-backend",
         

        },
        {
         id: 2,
         name: "live chatting app",
         imageUrl: project2,
    
        },
        {
         id: 3,
         name: "e-commerce website",
         imageUrl: project1,
        },
        {
            id: 4,
            name: "extras",
            imageUrl: project2,
           },

    ];
    return(
    <motion.div className='projects' animate={{
        scale:[2,1],
        rotate:[90,0],
        }}
        transition={{
            duration:1,
            ease:easeInOut,
        }}
    
    >
        <h2><font>Projects</font></h2>
        <div className='wrapper'>
            {ProjectList.map((item) =>{
                return (
                <motion.div key={item.id}
                whileHover={{
                    scale:1.3
                }}
                transition={{duration:0.3}}
                >
                    <a href={item.gitHubLink} target='_blank' rel="noopener noreferrer">
                    <Card>
                        <Card.Img variant='top' src={item.imageUrl}/>
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                        </Card.Body>
                    </Card>
                    </a>
                </motion.div>
                );    
            })}
        </div>
        </motion.div>
    );
    
};

export default Projects;
import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../images/profile.jpg'

const Home = () =>{
    return(
    <div className="home">
        <div className='content'>
    <motion.div className='name' 
    initial= {{ x: 200, z: -300, rotateX:190, scale: 0.4}}
    animate= {{ x:0, z: 0, rotateX:0, scale: 1.04}}
    transition={{duration: 1}}
    style={{ transformStyle: 'preserve-3d' }}
    >
        Bhavesh <font>Gupta</font>
        </motion.div>
    <motion.div className='desc'
    initial= {{ x:-300, z:400, rotateX:-290, scale: 0.4}}
    animate= {{ x:0, z:0, rotateX:0, scale: 1.04}}
    transition={{duration: 1}}
    style={{ transformStyle: 'preserve-3d' }}
    >
       Fullstack  <font>Developer</font>
        </motion.div>
        </div>
    <div className="image-container">
        <img src={profileImage} alt='Profile' className='profile-image' />
        </div>
    </div>
    ); 
};

export default Home;
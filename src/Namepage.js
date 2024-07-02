import React from 'react'
import "./App.css";
import {motion} from "framer-motion";

function Namepage() {
    const textVariants={
        initial:{
            x:-500,
            opacity:0,
        },
        animate:{
            x:0,
            opacity:1,
            transition:{
                duration:1,
                staggerChildren:0.1,
            },
        },
    };
    const sliderVariants={
        initial:{
            x:0,
        },
        animate:{
            x:"-220%",
            opacity:1,
            transition:{
                repeat:Infinity,
                duration:20,    
            },
        },
    };
  return (
    <div className='hero'>
        <div className='wrapper2'>
        <motion.div className='text' variants={textVariants} initial="initial" animate="animate">
            <motion.h2 className='name'variants={textVariants}>R Mohan</motion.h2>
            <motion.h1 className='proff' variants={textVariants}>professor</motion.h1>
            <motion.div className='homebuttons' variants={textVariants}>
                <button className='contbutton'>Contact Me</button> 
            </motion.div>
        </motion.div>
     </div>  
     <motion.div className='slidingtext' variants={sliderVariants} initial="initial" animate="animate">
        NIT TRICHY
     </motion.div>
      <div className='imagecontainer'>
        <img src='https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg' alt=''></img>
      </div>
    </div>
  )
}

export default Namepage

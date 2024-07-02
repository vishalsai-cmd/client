import React from 'react'
import './App.css'; 
import {motion} from "framer-motion";
function Contact() {
    const variants={
        initial:{
            y:500,
            opacity:0,
        },
        animate:{
            y:0,
            opacity:1,
            tranistion:{
                duration:0.5,
                staggerChildren:0.1,
            },
        },
    };
  return (
    <motion.div className='contactcontainer' variants={variants} initial="initial" whileInView="animate">
      <motion.div className='context' variants={variants}>
        <motion.h1 className='conhead' variants={variants}>Willing to work with me</motion. h1>
        <motion.div className='contitem' variants={variants}>
            <h2>Mail</h2>
            <span className='ans'>rmohan@nitt.edu</span>
        </motion.div>
        <motion.div className='contitem' variants={variants}>
            <h2>Dept</h2>
            <span className='ans'>Computer Science and Engineering</span>
        </motion.div>
        <motion.div className='contitem' variants={variants}>
            <h2>Address</h2>
            <span className='ans'>Room No : CSE 202B</span>
            <span className='ans'>National Institute of Technology</span>
            <span className='ans'>Tiruchirapalli -620015.</span>
        </motion.div>
      </motion.div>
      <div className='formcontainer'>
        <form className='form'>
            <input className='input' type='text' placeholder='Name'></input>
            <input className='input' type='email' placeholder='Email'></input>
            <textarea className='input' rows={8} placeholder='mesage'></textarea>
            <button className='submit'>Submit</button>
        </form>
      </div>
    </motion.div>
  )
}

export default Contact

import React from 'react';
import "./App.css";
import {motion} from "framer-motion";

function Services() {
    const variants={
        initial:{
            x:-500,
            y:100,
            opacity:0,
        },
        animate:{
            x:0,
            opacity:1,
            y:0,
            transition:{
                duration:1,
                staggerChildren:0.1,
            },
        },
    };
  return (
    <motion.div className='services' variants={variants} initial="initial" whileInView="animate"> 
       <motion.div className='text2' variants={variants}>   
         <p>
            I focus on helping
         </p>
         <hr/>
       </motion.div>
       <motion.div className='titlecontainer' variants={variants}>
         <div className='titleserve'>
            <h1><motion.b whileHover={{color:"orange"}}>unique</motion.b>ideas</h1>
         </div>
         <div className='titleserve'>
            <h1 className='serveheading'>
                <motion.b whileHover={{color:"orange"}}>ABOUT</motion.b> !!.
            </h1>
            <button>WHAT WE DO?</button>
         </div>
       </motion.div>
       <motion.div className='listcontainer' variants={variants}>
         <motion.div className='box' whileHover={{background:"lightgray",color:"black"}}>
            <h2>Qualifications</h2>
            <p>B.E (CSE) - From Thiagarajar College of Engineering, Madurai, 1998.</p>
            <p>M.E (Software Engg.) - From Jadavpur University, Kolkata, 2004.</p>
            <p>Ph. D (CSE) - From National Institute of Technology, Trichy, 2014.</p>
            <p>B.E (CSE) Area of Specialization: High Performance Computing</p>
            <p>Title of the Thesis: A study of Task Assignment Problems in Distributed systems</p>     
            <button className='servebutton'>Go</button> 
         </motion.div>
         <motion.div className='box' whileHover={{background:"lightgray",color:"black"}}>
            <h2>Full Time PHD</h2>
            <h3>Preeth R (Completed)</h3>
            <p>Localization Strategies for Wireless Sensor Networks using Soft Computing Techniques</p> 
            <h3>Midhula Vijayan (Completed)</h3> 
            <p>Moving Object Detection Techniques for Visual Surviellance Systems</p>
            <h3>Krunal Randive (On-Going)</h3>
            <p>Image based Feature Representations for Anomaly Classification</p>
            <h3>Ambairam Muthu Sivakrishna (On-Going)</h3>
            <p>Insider Threat Classification using Behavioral Analytics</p>
            <button className='servebutton'>Go</button> 
         </motion.div>
         <motion.div className='box' whileHover={{background:"lightgray",color:"black"}}>
            <h2>Part Time PHD</h2>
            <h3>SSSN Usha Devi (On-Going)</h3>
            <p>Stock Value Prediction using Deep Learning</p>
            <h3>Shalini (On-Going)</h3>
            <p>Hyper Graph Learning</p>
            <h3>Hariharan (On-Going)</h3>
            <p>Image Segmentation Techniques</p>
            <h3>Raghu H (On-Going)</h3>
            <p>High Performance Computing</p>
            <button className='servebutton'>Go</button> 
         </motion.div>
{/*          <motion.div className='box' whileHover={{background:"lightgray",color:"black"}}>
            <h2>Branding</h2>
            <p>lorem ipsum</p>
            <button className='servebutton'>Go</button> 
         </motion.div> */}
       </motion.div>
    </motion.div>
  )
}

export default Services

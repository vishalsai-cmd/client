import React,{useState} from 'react';
import Togglebutton from './Togglebutton';
import Links from './Links';
import {motion} from 'framer-motion';   
import './App.css';

function Sidebars() {
/* const [isOpen,setIsOpen]=useState(true); */
const [open,setOpen]=useState(false);
const variants={
   open:{
      clipPath:"circle(1200px at 50px 50px)",
      transition:{
         type:"spring",
         stiffness:20,
      },
   },
   closed:{
      clipPath:"circle(30px at 50px 50px)",
      transition:{
         delay:0.5,
         type:"spring",
         stiffness:400,
         damping:40,
      },
   },
};
  return (
     <motion.div className='sidebar2' animate={open ? "open":"closed"}>
{/*         <button className='btn triggerBtn' onClick={()=>setIsOpen(!isOpen)}>
        {
            isOpen ? 
            <p>button</p> :
            <span>X</span>
        }
        </button>
        <div className={`myside bg-info
        ${isOpen ? 'sideClose' :'sideOpen'}
         `}>
            <Links />       
        </div> */}
         <motion.div className='bg' variants={variants}>
            <Links />
         </motion.div>
         <Togglebutton setOpen={setOpen}/>
     </motion.div>
  )
}

export default Sidebars

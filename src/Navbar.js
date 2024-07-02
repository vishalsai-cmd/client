import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {motion} from 'framer-motion';        
import Sidebars from './Sidebars';

function Navbar() {
  return (
    <div className='navbar'>
        <Sidebars />
      <div className='wrapper'>
        <motion.span
        initial={{opacity:0,scale:0}}
        animate={{opacity:1,scale:1}}
        transition={{duration:0.5}}>R Mohan</motion.span>
        <div className='social'>
            <a href='https://mail.google.com/mail/u/0/#inbox'></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar

import React,{useRef} from 'react';
import "./App.css";
import {motion,useScroll,useSpring, useTransform} from "framer-motion";

const items=[
    {
        id:1,
        title:"web of science",
        img:"https://play-lh.googleusercontent.com/kLVaTwis1K_rhrn0t0pY9rHNOHcBQl1YJHi845-PhaREajRS3-I1FdyAwRedFgcPo1Y",
        desc:<a href='https://www.webofscience.com/wos/author/record/129698'>https://publons.com/researcher/3016894/mohanr/</a>
    },
    {
        id:2,
        title:"react commerce",
        img:"https://www.scopusimpactfactor.com/wp-content/uploads/2021/07/scopus-final.png",
        desc:<a href='https://www.scopus.com/authid/detail.uri?authorId=57201496797'>https://www.scopus.com/authid/detail.uri?authorId=57201496797</a>
    },
]
const Single=({item}) =>{
    const ref=useRef();
    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["start start","end start"],
    });
    const y=useTransform(scrollYProgress,[0,1],["0%","-300%"]); 
     return(
        <section ref={ref}>
            <div className='publiccontainer'>
                <div className='wrapper3'>
                <div className='publicimage'>

                   <img src={item.img} alt="" />
                </div>
                <motion.div className='publictext' style={{y}} >
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                </motion.div>
                </div>
            </div>
        </section>
    ) 
}

function Publications() {
    const ref=useRef();
    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["end end","start start"],
    });
    const scaleX=useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    });
  return (
    <div className="public" ref={ref}>
        <div className='progress'>
            <h1>PUBLICATIONS</h1>
            <motion.div className="progressbar" style={{scaleX}}></motion.div>
        </div>
      {items.map(item=>(
        <Single item={item} key={item.id}/>
      ))}
{/*       <h1 className='books'>Books Published</h1>    
      <div className='published'>
        <div className='box2'>
        <p>1. Contributed Problem with solutions for Computer Organization and Architecture, 9th Edition, William Stallings, Pearson International Edition.</p>
        </div>
        <div className='box2'>
        <p>2. Artificial Immune System Based Clonal Classifiers: A New Dimension of Innovation, Scholars Press (2016), ISBN-10: 3659839434, ISBN-13: 978-3659839436.</p>
        </div>
        <div className='box2'>
        <p>3. Impact of Artificial Intelligence on Bioinformatics, LAP LAMBERT Academic Publishing (2016), ISBN-10: 365988202X, ISBN-13: 978-3659882029</p>
        </div>
      </div> */}
    </div>
  )
}

export default Publications

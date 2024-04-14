import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div data-scroll data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='"textstructure mt-52 px-20'>
        {["We Create","Eye Opening","Presentations"].map((item,index)=>{
          return (
            <div className='masker'>
              <div className='w-fit flex gap-3 overflow-hidden'>
                {index === 1 && (
                  <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76,0,0.24,1],duration:1}} className='w-[9vw] h-[5.7vw] top-[1vw]  relative'>
                    <img className="rounded-xl w-50" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt=""/>
                  </motion.div>
                )}
                <h1 className='py-[1vw] -mb-[3vw]  uppercase text-[9vw] leading-none font-["Founders_Grotesk_X"] font-semibold'>
                  {item}
                </h1>
              </div>
            </div>
          )
        })}
      </div>
        <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
            {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(
              <p className='text-[1.5vw] font-light tracking-tight leading-none'>{item}</p>
            ))}
            <div className='start flex items-center gap-5'>
              <div className='px-5 py-2 border-[1px] border-zinc-400 font-light text-[1.0vw] uppercase rounded-full'>start the project</div>
                <div className='w-10 h-10 flex items-center justify-center  border-[1px] border-zinc-400 rounded-full'>
                   <span className='rotate-[45deg]'>
                    <FaArrowUpLong/>
                   </span>
                </div>
            </div>
          </div>
       </div>
  )
}

export default LandingPage
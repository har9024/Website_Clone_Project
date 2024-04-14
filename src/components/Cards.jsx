import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
        <div className='cardcontainer w-1/2 h-[60vh]'>
            <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
                <img className='w-80' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt=""/>
                <button className='absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full text-[#CDEA68] text-[1vw] font-medium tracking-tighter mb-5 font-sans'>&#169;2019-2022</button>
            </div>
        </div>        
        <div className='cardcontainer flex gap-5 w-1/2 h-[60vh]'>
          <div className='card w-1/2 relative rounded-xl h-full bg-[#192826] flex items-center justify-center'>
            <img className='w-80' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt=""/>
            <button className='absolute left-10 bottom-10 py-1 px-5 border-2 rounded-full text-[1vw]  mb-5 tracking-tighter font-medium' >RATING 5.0 ON CLUTCH</button>
          </div>
          <div className='card w-1/2 relative rounded-xl h-full bg-[#192826] flex items-center justify-center'>
            <img className='w-80' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt=""/>
            <button className='absolute left-10 bottom-10 py-1 px-5 border-2 rounded-full text-[1vw]  ml-7 tracking-tighter font-medium mb-5 '>BUSINESS BOOTCAMP ALUMNI</button>
          </div>

        </div>
    </div>
  )
}

export default Cards
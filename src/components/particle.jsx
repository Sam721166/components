import React from 'react'

function Particle() {
  return (
    <div className='h-screen w-screen bg-white flex mt-15 justify-center'>
        <div className='w-115 h-110  p-5'>
            <h1 className='text-4xl font-playfair italic'>Hey,</h1>

            
            <div className='w-full h-50 mt-3 rounded-md grid grid-cols-25 grid-rows-10'>
                 {Array.from({ length: 250 }).map((_, index) => (
                <div key={index} 
                className='flex justify-center items-center'>
                    
                    <p className='text-2xl font-bold text-neutral-400 transition-all duration-0 hover:text-black cursor-default hover:delay-0 [transition-delay:0.5s] ease-in-out hover:scale-120 '>+</p> 
                </div>
                 ))}
            </div>

            <p className='mt-5 mb-2 tracking-tight text-[23px] font-ios text-neutral-800'>We help <span className='italic'> founders </span> launch their site in 2 weeks from  
                <span className='text-blue-500 '> copy</span>,<span className='text-red-500 '> brand</span>,<span className='text-green-500 '> tagline</span>, <span className='text-yellow-400 '> research</span>,<span className='text-purple-500 '> visual</span>  all done by us.</p>
            <p className='tracking-tighter text-neutral-400 font-playfair italic text-md'>spead and building premium site is our superpower</p>

            <div className='flex gap-2'>
                <button className='text-black font-playfair rounded-xl mt-3  border-2 border-neutral-200 py-1 px-3.5 italic text-[15px] font-semibold tracking-tight hover:border-neutral-400 transition-all duration-200 '>Book a call</button>

                <button className='text-white bg-black font-playfair rounded-xl mt-3 px-5 italic text-[15px] hover:bg-neutral-700 transition-all duration-200 tracking-tight'>$9k/mo  →</button>
            </div>

        </div>
    </div>
  )
}

export default Particle
import React from 'react'
import { MdAutoGraph } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";

function Linear() {
  return (
    <div className='h-screen w-screen bg-black flex items-center justify-center '>
    <div className='rounded-xl  w-130 h-130 p-10 flex flex-col border-2 border-neutral-800'>

            <div>
                <h1 className='text-white text-[27px] tracking-tight mb-2'>Project updates</h1>
                <p className='text-neutral-400/70 text-lg tracking-tight w-70 mb-5'>Communicate progress and project health with built-in project updates.</p>
            </div>


            <div className='w-full h-full border  mask-r-from-25% mask-r-to-100%   mask-b-from-50% mask-b-to-130% '>
                <div className='relative w-full h-full top-15'>

                    <div className='w-100 h-30 border border-neutral-700 rounded-xl px-5  justify-center bg-neutral-800/80 backdrop-blur-xs flex flex-col gap-2 absolute z-10 -rotate-y-20 rotate-x-20 shadow-lg top-20 left-16
                    cursor-default  transition-all duration-400 hover:top-15 hover:bg-neutral-700/70 hover:border-neutral-600 group '>
                        <div className='flex gap-2.5 items-center '>
                            <FaArrowTrendUp className='text-green-500  rounded-full bg-green-900 size-6 p-1 transition-all duration-500 ' />
                            <h1 className='text-green-500 font-semibold text-[18px] transition-all duration-500'>On track</h1>
                        </div>
                        <div>
                            <h1 className='text-white tracking-tight font-clean'>We are ready to launch next Thursday</h1>
                        </div>
                        <div>
                            <p className='text-neutral-600 text-sm  font-ios'>Sep 8</p>
                        </div>
                    </div>


                    <div className='w-100 h-30 border border-neutral-700/70 rounded-xl px-5  justify-center bg-neutral-800/80 backdrop-blur-xs flex flex-col gap-2 absolute z-8 -rotate-y-20 rotate-x-20 shadow-md top-10 left-8  cursor-default  transition-all duration-400 hover:top-5 hover:bg-neutral-700/70 hover:border-neutral-600 group'>
                        <div className='flex gap-2.5 items-center '>
                            <MdAutoGraph className='text-neutral-500 rounded-full bg-neutral-700 size-6 p-1 group-hover:text-yellow-500  group-hover:bg-yellow-900/80 transition-all duration-500' />
                            <h1 className='text-neutral-700 font-semibold text-[18px] group-hover:text-yellow-500  transition-all duration-400'>At risk</h1>
                        </div>
                        <div>
                            <h1 className='text-neutral-700 tracking-tight  transition-all duration-400 group-hover:text-white font-clean'>Progress slowed down because...</h1>
                        </div>
                        <div>
                            <p className='text-neutral-700/50 text-sm font-ios   transition-all duration-400 group-hover:text-neutral-600'>Nov 10</p>
                        </div>
                    </div>


                    <div className='w-100 h-30 border border-neutral-800 rounded-xl px-5  justify-center bg-neutral-900/90 backdrop-blur-xs flex flex-col gap-2 absolute z-6 -rotate-y-20 rotate-x-20 shadow-md top-0 cursor-default  transition-all duration-400 hover:-top-7 hover:bg-neutral-700/70 hover:border-neutral-600 group'>
                        <div className='flex gap-2.5 items-center '>
                            <FaArrowTrendDown className='text-neutral-600 rounded-full  size-6 p-1 bg-neutral-800  transition-all duration-500 group-hover:bg-red-900/60 group-hover:text-red-500' />
                            <h1 className='text-neutral-700/60  transition-all duration-400 group-hover:text-red-500 font-semibold text-[18px]'>Off track</h1>
                        </div>
                        <div>
                            <h1 className='text-neutral-700/60 tracking-tight  transition-all duration-400 group-hover:text-white font-clean'>Unexpected roadblocks forced us to take a different...</h1>
                        </div>
                        <div>
                            <p className='text-neutral-700/40 text-sm  font-ios   transition-all duration-400 group-hover:text-neutral-600'>Oct 16</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Linear
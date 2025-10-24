import React from 'react'
import { IoIosWifi } from "react-icons/io";
import { GiNetworkBars } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";



function Phone() {
  return (
    <div className='relative min-h-screen w-screen bg-black flex items-center justify-center  z-0'>
       <div className='flex items-center justify-center  
        mask-b-from-black mask-b-from-40% mask-b-to-90%  mask-r-from-40% mask-r-to-130% 
        absolute w-100 min-h-130 pl-25'>

            <div className='absolute z-10 w-80 h-110 bg-neutral-800/50 border-2 border-neutral-600/80 rounded-[55px] transform  rotate-x-20 rotate-y-20 rotate-z-0 '>
                
                <div className='w-full h-full mask-r-from-5% mask-r-to-50% transform rotate-x-20 rotate-y-10 rotate-z-0'>
                    <p className='absolute top-3.5 left-10.5 text-white text-md font-ios '>9:41</p>
                </div>

                <div className='absolute left-25 top-3 rounded-full w-30 h-9 bg-black'></div>

                <div className='absolute bottom-0 w-full h-full mask-r-from-30% mask-r-to-100%'>
                    <GiNetworkBars className='text-white absolute bottom-100 left-59 text-[14px] ' />
                    <IoIosWifi className='text-white absolute bottom-99.5 left-65 text-[16px]' />
                </div>



                <div>
                    <p className='absolute bottom-80 left-6 text-white/40 font-mono text-md transform rotate-x-20  translate-z-10'>Linear</p>

                    <h2 className='absolute bottom-70 left-6 text-white/90 font-mono text-2xl transform rotate-x-20  translate-z-10 mask-r-from-20% mask-r-to-160%'>Inbox</h2>
                </div>

                <div className='flex flex-col gap-5'>
                    <div className='w-full h-10  absolute bottom-50 pl-5 flex gap-3'>
                        <CgProfile className='h-10 w-10 bg-neutral-300/20 rounded-full ' />

                        <div className='flex flex-col'>
                            <h2 className='text-neutral-100/90'>UI Refresh 2025</h2>
                            <p className='text-neutral-400/80 text-[13px]'>Project update reminder • 2h</p>
                        </div>
                    </div>

                    <div className='w-full h-10  absolute bottom-33 pl-5 flex gap-3'>
                        <CgProfile className='h-11 w-14 bg-neutral-300/20 rounded-full ' />

                        <div className='flex flex-col'>
                            <h2 className='text-neutral-100/90'>CP52-E PTZ CAmera</h2>
                            <p className='text-neutral-400/80 text-[13px]'>Josh mentioned you: what are you doing brother • 4h</p>
                        </div>
                    </div>

                    <div className='w-full h-10  absolute bottom-15 pl-5 flex gap-3'>
                        <CgProfile className='size-11 bg-neutral-300/20 rounded-full ' />

                        <div className='flex flex-col'>
                            <h2 className='text-neutral-100/90'>Submit to app store</h2>
                            <p className='text-neutral-400/80 text-[13px]'>Issue due • 11h</p>
                        </div>
                    </div>

                    
                </div>

            </div>

            <div className='absolute z-1 w-87 h-115 bg-neutral-950 border-3 border-neutral-700/35 rounded-[65px] transform  rotate-x-20 rotate-y-20 rotate-z-0 transform-3d '>
            </div>

            <div className='absolute -z-1 w-104 h-115 bg-neutral-950 border-3 border-neutral-700/35 rounded-[100px] transform  rotate-x-20 rotate-y-20 rotate-z-0 transform-3d '>
            </div>
        </div>

    </div>
  )
}

export default Phone
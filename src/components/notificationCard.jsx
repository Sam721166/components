import React from 'react'
import { FaRegCheckCircle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

function NotificationCard() {
  return (
    <div className='min-h-screen w-screen bg-neutral-100 flex items-center justify-center'>
        <div className='w-100 h-90 pb-1 overflow-hidden bg-white shadow-md rounded-xl flex items-center justify-center group'>

            <div className='w-90 h-80  overflow-hidden bg-white'>
                <h2 className='text-[25px] font-semibold tracking-tight'>Turn on Notifications</h2>
                <p className='text-[15px] tracking-tight mt-4 text-neutral-500 font-ios'>Toggle the switch bellow to start receiving real-time notifications about brand spending and new opportunities.</p>

                <div className='flex gap-3 mt-7 '>
                    <div className='w-13 h-6 rounded-full bg-neutral-300 flex items-center  group-hover:bg-purple-800 transition-all duration-200'>
                        <div className='absolute ml-1 size-4.5 rounded-full bg-white group-hover:ml-7.5 transition-all duration-200'></div>
                    </div>

                    <p className='text-sm font-semibold text-neutral-700 tracking-tight'>Enable notifications</p>
                </div>

                <div className='relative mt-8 flex justify-center'>

                    <div className='absolute w-90 h-50 top-30 rounded-lg bg-white border-2 border-neutral-200 z-10 group-hover:top-10 transition-all duration-700  group-hover:delay-800 shadow-sm ease-in-out  [transition-delay:0.2s]'>

                        <div className='flex gap-3 p-2 pl-5 pt-3 items-center'>
                            <div className='size-9 mr-1 flex items-center justify-center rounded-md bg-black'>
                                <FaApple className='text-[20px] text-white' />
                            </div>
                            <div className='flex flex-col gap-1 '>
                                <h2 className='text-[17px] font-semibold'>Apple Q4 Campaign</h2>
                                <p className='text-[14px] font-semibold text-neutral-500'>New product launch campaign</p>
                            </div>
                            <div>
                                <h2 className='absolute top-3.5 right-5 text-[13px] font-semibold text-neutral-400'>5m ago</h2>
                            </div>
                        </div>
                    </div> 

                    <div className='absolute w-85 h-100 top-30 rounded-lg bg-white border-2 border-neutral-200 z-8 group-hover:top-8 transition-all duration-600  shadow-sm ease-in-out [transition-delay:0.6s] group-hover:delay-400'>


                         <div className='flex gap-3 p-2 pl-5 pt-3 items-center'>
                            <div className='size-9 mr-1 flex items-center justify-center rounded-md bg-orange-500'>
                                <p className='text-white'>T</p>
                            </div>
                            <div className='flex flex-col gap-1 '>
                                <h2 className='text-[17px] font-semibold '>Total spend $80K</h2>
                                <p className='text-[14px] font-semibold text-neutral-500'>25% spend last month</p>
                            </div>
                            <div>
                                <h2 className='absolute top-3.5 right-5 text-[13px] font-semibold text-neutral-400'>2m ago</h2>
                            </div>
                        </div>

                    </div>


                    <div className='absolute w-80 h-50 top-30  rounded-lg bg-white border-2 border-neutral-200 z-6 group-hover:top-6 transition-all duration-500 shadow-sm ease-in-out [transition-delay:1s] group-hover:delay-0 '>


                         <div className='flex gap-3 p-2 pl-5 pt-3 items-center'>
                            <div className='size-9 mr-1 flex items-center justify-center rounded-md bg-black'>
                                <FaCheckCircle className='text-[19px] text-white' />
                            </div>
                            <div className='flex flex-col gap-1 '>
                                <h2 className='text-[17px] font-semibold'>Nike Winner 2025</h2>
                                <p className='text-[14px] font-semibold text-neutral-500'>New campaign from Nike</p>
                            </div>
                            <div>
                                <h2 className='absolute top-3.5 right-5 text-[13px] font-semibold text-neutral-400'>10m ago</h2>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            
        </div>
    </div>
  )
}

export default NotificationCard
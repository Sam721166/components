import React from 'react'
import { RxDividerVertical } from "react-icons/rx";
import { LuDot } from "react-icons/lu";
import { IoSparklesSharp } from "react-icons/io5";
import { LuMousePointer2 } from "react-icons/lu";
import { LuMousePointerClick } from "react-icons/lu";

function PinkCard() {
  return (
    <div className='bg-neutral-100 h-screen w-screen flex items-center justify-center'>
        <div className='h-110 w-82 bg-white rounded-2xl shadow-xl flex flex-col justify-center p-1.5'>

            <div className='relative h-75 w-full flex items-center justify-center bg-gradient-to-t from-purple-200 to-purple-50  rounded-xl -mt-1 overflow-hidden '>


                <div className='absolute bottom-20 left-13 flex items-center pl-5 gap-3 rounded-full w-154 h-18    bg-white/20 shadow-lg z-1 backdrop-blur-xs '>

                    <div className='absolute shadow-md h-14 w-150 left-2 rounded-full mask-t-from-10% mask-t-to-140%  mask-r-from-10%'>

                    
                        <div className='absolute 
                        border border-purple-500  left-0 pl-5 w-150 h-14 rounded-full flex items-center gap-3 shadow-[inset_-3px_-10px_15px_-5px_var(--color-purple-300)] bg-purple-50 z-30  '>

                            <IoSparklesSharp className='text-purple-800 size-6.5 mt-0.5  mask-t-from-10% mask-t-to-170%
                            drop-shadow-md ' />
                            <p className='text-neutral-300 text-xl 
                            mask-t-from-40% mask-t-to-190%'>|</p>
                            <p className=' text-neutral-500 text-[17px]'>Generating reply...</p>
                        </div>
                    </div>

                </div>

                <div className='absolute z-0 -right-10 bottom-2 bg-gradient-to-b from-purple-500/60 to-transparent w-70 h-20 mask-l-from-60% mask-r-from-100%'>
                </div>

                <div>
                    <LuMousePointer2 className='absolute text-purple-700 z-60 rotate-90 text-[30px] fill-purple-50 drop-shadow-lg  bottom-10 left-8 [stroke-width:1]' />
                </div>

                <div className='w-full h-full mask-t-from-40%'>
                    <div className='absolute   left-26 bottom-40 flex flex-col gap-2 '>
                    <p className='text-sm text-neutral-500/70 w-100  bg-white rounded-full p-2 pl-5'>This is the perfect comment i have</p>
                    </div>

                    <div className='absolute   left-34 bottom-51 flex flex-col gap-2'>
                    <p className='text-sm text-neutral-500/60 w-100  bg-white rounded-full p-1.5 pl-5'>You have to be really smart</p>
                    </div>
                </div>


                
                    
                
                

              
            </div>


            <div className='p-5 mt-1'>
                <h2 className='mb-1.5 text-xl font-semibold tracking-tight'>Reply suggestions</h2>
                <p className='text-neutral-400 text-[14px]'>Get AI-generated responses for relevant posts</p>
            </div>
        </div>
    </div>
  )
}

export default PinkCard
import React from 'react'

function GreenCard() {
  return (
    <div className='min-h-screen w-screen bg-gradient-to-t from-green-100 to-neutral-50 flex items-center justify-center'>

        <div className='w-85 h-120 rounded-2xl bg-white shadow-xl p-2 flex flex-col gap-2'>

            <div className=' w-full h-85 rounded-lg bg-gradient-to-t from-green-200 to-neutral-100 overflow-hidden mask-t-from-70% mask-t-to-160% %'>
                <div className='relative '>

                    <div className='absolute top-5 left-7 flex rounded-full bg-white shadow-xs w-35 h-7 px-2 py-1 items-center justify-center gap-1.5'>
                        <p className=' text-xs text-neutral-600 font-semibold'>Engagement</p>
                        <span className='text-neutral-300'>|</span>
                        <span className='text-xs text-lime-500 font-semibold'>+18%</span>
                    </div>

                    <div className='absolute top-14 left-39 flex rounded-full bg-white shadow-xs w-29 h-7 px-2 py-1 items-center justify-center gap-1.5'>
                        <p className=' text-xs text-neutral-600 font-semibold'>Activity</p>
                        <span className='text-neutral-300'>|</span>
                        <span className='text-xs text-lime-500 font-semibold'>+34%</span>
                    </div>

                    <div className='absolute top-5 left-44 flex rounded-full bg-white shadow-xs w-31 h-7 px-2 py-1 items-center justify-center gap-1.5'>
                        <p className=' text-xs text-neutral-600 font-semibold'>Followers</p>
                        <span className='text-neutral-300'>|</span>
                        <span className='text-xs text-lime-500 font-semibold'>+26%</span>
                    </div>

                    <div className='absolute top-14 left-10 flex rounded-full bg-white shadow-xs w-27 h-7 px-2 py-1 items-center justify-center gap-1.5'>
                        <p className=' text-xs text-neutral-600 font-semibold'>Reach</p>
                        <span className='text-neutral-300'>|</span>
                        <span className='text-xs text-lime-500 font-semibold'>+65%</span>
                    </div>


                </div>


                <div className='relative w-full h-full flex items-end mask-l-from-70% mask-r-from-70%'>

                    <div className='absolute left-3 -bottom-5 w-8 h-35 bg-neutral-500/15 rounded-md'>
                    </div>
                    <div className='absolute left-14 -bottom-5 w-8 h-44.5 bg-neutral-500/16 rounded-md'>
                    </div>
                    <div className='absolute left-25 -bottom-5 w-8 h-40 bg-neutral-500/18 rounded-md'>
                    </div>
                    
                    <div className='relative w-full h-full'>

                        <div className='absolute left-37 -bottom-5 w-8 h-60 bg-gradient-to-t from-green-700 to-lime-300  rounded-md border border-lime-700/30 border-t-lime-500 shadow-[inset_3px_3px_5px_-3px_var(--color-white)]'>

                            <div className='absolute left-2.5 top-14 w-3 h-3 bg-white rounded-full z-5 shadow-sm'>
                            </div>
                            <div className='absolute left-[7px] top-[53.5px] w-4.5 h-4.5 bg-white/40 rounded-full z-2'>
                            </div>

                            

                        </div>
                        

                        <div className='absolute left-36 -bottom-4 -z-10  bg-white/10 w-10 h-60 rounded-md shadow-md'>

                        </div>

                        <div className='absolute top-45.5  w-200  border-dashed border border-green-700 [border-image:repeating-linear-gradient(90deg,_green_0,_green_8px,_transparent_5px,_transparent_12px)_1]
                        
                        mask-r-from-30% mask-r-to-40% mask-l-from-10% mask-l-to-130%'>

                        </div>

                        <p className='absolute text-[10px] text-green-800/80 top-40.5 left-13.5 tracking-tighter font-semibold'>1 Week Avg.</p>

                    </div>

                    <div className='absolute left-49 -bottom-5 w-8 h-36 bg-neutral-500/18 rounded-md'>
                    </div>
                    <div className='absolute left-60 -bottom-5 w-8 h-42 bg-neutral-500/16 rounded-md'>
                    </div>
                    <div className='absolute left-71 -bottom-5 w-8 h-50 bg-neutral-500/15 rounded-md'>
                    </div>

                </div>

            </div>



            <div className='px-5 tracking-tighter mt-4'>
                <h2 className='text-xl font-semibold '>Advanced analytics</h2>
                <p className='text-md text-neutral-400 mt-1.5'>Deep, actionable insights into perfomance and audience trends.</p>
            </div>
        </div>
    </div>
  )
}

export default GreenCard
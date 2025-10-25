import React from 'react'
import { useState, useEffect } from 'react';
import { IoIosWifi } from "react-icons/io";
import { GiNetworkBars } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";



function Phone() {


    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem("theme")
        if (saved) return saved
        return window.matchMedia("(prefers-color-scheme)").matches? "dark" : "light"
    })
    
        useEffect(() => {
        if(theme === "dark"){
            document.documentElement.classList.add("dark")
        } 
        else{
            document.documentElement.classList.remove("dark")
        }

        localStorage.setItem("theme", theme)
    }, [theme])

  return (

    <div className='relative min-h-screen w-full bg-black dark:bg-white transition-all duration-300 flex items-center justify-center  z-0'>


        

        <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")}  className='absolute size-8 border-2 border-neutral-500 dark:border-neutral-700 rounded-md p-2 flex items-center justify-center top-5 right-5'>
            <FaMoon className='absolute inset-0 size-5 dark:text-black dark:scale-100 scale-0 dark:rotate-0 rotate-45 shrink-0 m-auto transition-all duration-300' />
            <FaSun className='absolute inset-0 size-5 shrink-0 text-white dark:scale-0 scale-100 rotate-0 dark:rotate-45 m-auto transition-all duration-300' />
        </div>



       <div className='flex items-center justify-center  
        mask-b-from-black mask-b-from-50% mask-b-to-90%  mask-r-from-50% mask-r-to-110% 

         dark:mask-b-from-40% dark:mask-b-to-90%  dark:mask-r-from-50% dark:mask-r-to-105%
        absolute w-110 min-h-130 pl-25 '>

            <div className='absolute -bottom-29 z-10 w-80 h-150 bg-neutral-800/50 dark:bg-neutral-100 border-2 border-neutral-600/80 dark:border-neutral-400 rounded-[55px] transform  rotate-x-20 rotate-y-20 rotate-z-0  transition-all duration-300'>
                
                <div className='w-full h-full mask-r-from-5% mask-r-to-50% transform rotate-x-20 rotate-y-10 rotate-z-0'>
                    <p className='absolute top-2.5 left-10.5 text-white dark:text-black text-md font-ios  transition-all duration-300'>9:41</p>
                </div>

                <div className='absolute left-25 top-3 rounded-full w-30 h-8.5 bg-black dark:bg-neutral-800 transition-all duration-300'></div>

                <div className='absolute bottom-40 w-full h-full mask-r-from-30% mask-r-to-100%'>
                    <GiNetworkBars className='text-white dark:text-black absolute bottom-100 left-59 text-[14px]  transition-all duration-300' />
                    <IoIosWifi className='text-white dark:text-black absolute bottom-99.5 left-65 text-[16px] transition-all duration-300' />
                </div>



                <div className='absolute bottom-40'>
                    <p className='absolute bottom-80 left-6 text-white/40 dark:text-black/80 font-mono text-md transform rotate-x-20  translate-z-10 transition-all duration-300'>Linear</p>

                    <h2 className='absolute bottom-70 left-6 text-white/90 dark:text-black font-mono text-2xl transform rotate-x-20  translate-z-10 mask-r-from-20% mask-r-to-160% dark:font-semibold transition-all duration-300'>Inbox</h2>
                </div>

                <div className='flex flex-col gap-5'>
                    <div className='w-full h-10  absolute bottom-90 pl-5 flex gap-3'>
                        <CgProfile className='h-11 w-11 bg-neutral-300/20 rounded-full  transition-all duration-300' />

                        <div className='flex flex-col'>
                            <h2 className='text-neutral-100/90 dark:text-black dark:font-semibold transition-all duration-300'>UI Refresh 2025</h2>
                            <p className='text-neutral-400/80 dark:text-black/80 d text-[13px] transition-all duration-300'>Project update reminder • 2h</p>
                        </div>
                    </div>

                    <div className='w-full h-10  absolute bottom-73 pl-5 flex gap-3'>
                        <CgProfile className='h-11 w-14 bg-neutral-300/20 rounded-full  transition-all duration-300' />

                        <div className='flex flex-col'>
                            <h2 className='text-neutral-100/90 dark:text-black dark:font-semibold transition-all duration-300'>CP52-E PTZ CAmera</h2>
                            <p className='text-neutral-400/80 dark:text-black/80 text-[13px] transition-all duration-300'>Josh mentioned you: what are you doing brother • 4h</p>
                        </div>
                    </div>

                    <div className='w-full h-10  absolute bottom-55 pl-5 flex gap-3'>
                        <CgProfile className='size-11 bg-neutral-300/20 rounded-full  transition-all duration-300' />

                        <div className='flex flex-col'>
                            <h2 className='text-neutral-100/90 dark:text-black dark:font-semibold transition-all duration-300'>Submit to app store</h2>
                            <p className='text-neutral-400/80 text-[13px] dark:text-black/80 transition-all duration-300'>Issue due • 11h</p>
                        </div>
                    </div>

                    
                </div>

            </div>

            <div className='absolute -bottom-21.5 z-1 w-87 h-145 bg-neutral-950 dark:bg-neutral-200 border-3 dark:border-2 border-neutral-600/35 dark:border-neutral-500 rounded-[65px] transform  rotate-x-20 rotate-y-20 rotate-z-0 transform-3d  transition-all duration-300'>
            </div>

            <div className='absolute left-15 -bottom-30.5 -z-1 w-90 h-155 bg-neutral-950 dark:bg-neutral-300 border-3 dark:border-2 border-neutral-600/35 dark:border-neutral-700 rounded-[110px] transform  rotate-x-20 rotate-y-20 rotate-z-0 transform-3d  transition-all duration-300'>
            </div>
        </div>

    </div>
  )
}

export default Phone
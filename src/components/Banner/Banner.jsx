import React from 'react'
import BannerImg from '../../assets/Mainpage/img4.png'
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { TbClockHour10Filled } from "react-icons/tb";
import { GiFoodTruck } from "react-icons/gi";

function Banner() {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
      <div className='container'>
       <div className='grid  grid-cols-1 sm:grid-cols-2 gap:6 items-center'>
       {/* ***********Image Section*********** */}
       <div data-aos='zoom-in'>
         <img src={BannerImg} alt="" className='mx-[400px ] h-[350px] w-[70%] mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover' />
       </div>
        {/* ***********Detial Section*********** */}
       <div className='flex flex-col justify-center gap-6 sm:pt-0 '>
          <h1 data-aos='fade-up ' className='text-3xl sm:text-4xl font-bold'>Winter Sale</h1>
          <p data-aos='fade-up ' className=' text-sm text-gray-500 tracking-wide leading-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam debitis illo facere molestiae voluptates ullam quaerat enim! Asperiores eos voluptas, suscipit molestiae labore ea maxime sunt cumque nisi veniam quos dolorum esse incidunt.</p>
       <div className='flex flex-col gap-4'>
         <div className='flex items-center gap-4 '>
         <GrSecure className='text-4xl h-12 w-12 shadow-sm p-4 rounded-ful bg-violet-100 dark:bg-violet-400'/>
           <p>Quality product</p>
         </div>
         <div data-aos='fade-up' className='flex items-center gap-4 '>
         <IoFastFood className='text-4xl h-12 w-12 shadow-sm p-4 rounded-ful bg-violet-100 dark:bg-violet-400'/>
         <p> Fast Deliver</p>
         </div>
         <div data-aos='fade-up ' className='flex items-center gap-4 '>
         <TbClockHour10Filled className='text-4xl h-12 w-12 shadow-sm p-4 rounded-ful bg-violet-100 dark:bg-violet-400'/>
           <p>Quality product</p>
         </div>
         <div data-aos='fade-up' className='flex items-center gap-4 '>
         <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-ful bg-violet-100 dark:bg-violet-400'/>
           <p>Quality product</p>
         </div>
       </div>
       </div>
       </div>
      </div>
    </div>
  )
}

export default Banner
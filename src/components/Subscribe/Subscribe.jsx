import React from 'react'
import Banner from '../../assets/banner1.jpg'

const BannerImg = {
   backgroundImage: `url(${Banner})`,
   backgroundPosition: 'center',
   backgroundRepeat: 'no-repeat',
   backgroundSize: 'cover',
   height: '100%',
   width: '100%'
}

function Subscribe() {
   return (
      <div>
         <div 
            data-aos='zoom-in' 
            className='mb-20 border-y-gray-100 dark:bg-gray-300 text-white'  
            style={BannerImg}
         >
            <div className='container backdrop:-blur-sum py-10'>
               <div  className='space-y-6 max-w-xl max-auto'>
                  <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-semibold '>get notified about new product</h1>
                  <input  data-aos='fade-up' type="text" placeholder='Enter Your Email' className='w-full p-3' />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Subscribe

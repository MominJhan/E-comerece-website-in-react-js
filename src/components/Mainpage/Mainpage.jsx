import React from 'react';
import image1 from '../../assets/Mainpage/img1.png';
import image2 from '../../assets/Mainpage/img2.png';
import image3 from '../../assets/Mainpage/img3.png';
import Slider from "react-slick";
import WhatsNew from '../WhatsNew/WhatsNew';

const ImageList = [
   {
      id: 1,
      img: image1,
      title: 'Upto 50% off on all Women clothes',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis aliquam eligen',
   },
   {
      id: 2,
      img: image2,
      title: 'Upto 50% off on all Women clothes',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis aliquam eligen',
   },
   {
      id: 3,
      img: image3,
      title: 'Upto 50% off on all Women clothes',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis aliquam eligen',
   },
];

function Mainpage() {
   const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      cssEase: 'ease-in-out',
      pauseOnHover: false,
      pauseOnFocus: true,
   };
  
   return (
      <div className='relative overflow-hidden min-h-[550px] sm:min-h-[550px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
         {/* ***********Background Pattern*********** */}
         <div className='h-[650px] w-[650px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]'></div>
         
         {/* ***********Content Section*********** */}
         <div className='container pb-5 sm:pb-0 pt-10' >
            <Slider {...settings}>
               {ImageList.map((data) => (
                  <div>
                  <div className='grid grid-cols-1 sm:grid-cols-2' key={data.id}>
                     {/* ***********Text Content Section*********** */}
                     <div className='flex flex-col justify-center gap-4 pt-9 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 '>
                        <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='text-5xl sm:text-6xl lg:text-5xl font-bold'>{data.title}</h1>
                        <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="100"  className='text-sm'>{data.description}</p>
                        <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" >
                           <button  className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>
                              Order Now
                           </button>
                        </div>
                     </div>
                     
                     {/* ***********Image Section*********** */} 
                     <div className='order-1 sm:order-2 '>
                        <div data-aos="zoom-in" data-aos-once="true"  className='relative z-10'>
                           <img src={data.img} alt={data.title} className='w-[300px] h-[300px] sm:h-[350px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto relative right-0' />
                        </div>
                     </div>
                  </div>
                  </div>
               ))}
            </Slider>
         </div>
      </div>
   );
}

export default Mainpage;

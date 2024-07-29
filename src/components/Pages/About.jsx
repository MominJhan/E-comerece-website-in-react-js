import React from 'react'
import Footer from '../Footer/Footer'
import Aboutimg from '../../assets/blog/aboutusimg.png'
import { FiPhone } from "react-icons/fi";

function About() {
  return (
    <>
    <div className="container pt-20 pb-20">
    <div className='grid grid-cols-1 sm:grid-cols-2'>

      {/* ***********Image Section*********** */} 
      <div className='order-1 sm:order-2 '>
        <div data-aos="zoom-in" data-aos-once="true"  className='relative z-10'>
          <img src={Aboutimg} className='w-[300px] h-[300px] sm:h-[350px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto relative right-0' />
            </div>
            </div>                
      {/* ***********Text Content Section*********** */}
      <div className='flex flex-col justify-center gap-4 pt-9 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 '>
          <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='font-sans text-4xl sm:text-5xl lg:text-5xl font-bold'>About</h1>
          <hr className="border-t-8 border-pink-300 w-1/3 pb-[30px]" />
          <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" className='text-sm'> we believe that shopping should be easy, enjoyable, and accessible to everyone. Founded in 2024, our mission is to bring you the best products from around the world, all in one convenient place.</p>
          <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="100"  className='text-sm font-bold'> we offer a wide range of products to cater to your every need. Shop with us and experience the difference.We believe in putting our customers first. From exceptional customer service to hassle-free returns, we strive to make your shopping experience seamless and enjoyable.</p>
            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300"  className='flex text-[20px] font-bold  text-pink-400 hover:text-black transition-colors duration-300 dark:hover:text-white'>
            <FiPhone  className='h-8 w-8 m-3'/>
            <span className='pt-[13px] px-2'>+92 32968383</span>
            </div>
              </div>
               </div>
               </div>
    <Footer/>
    </>
  )
}

export default About
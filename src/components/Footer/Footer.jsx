import React from 'react'
import Logo from '../../assets/eagle.webp'
import Footerimg from '../../assets/banner2.avif'
import { FaEnvelope, FaFacebook, FaLocationArrow, FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram, FaLinkedin, FaMobileAlt, FaYoutube } from 'react-icons/fa';


const BannerImg = {
   backgroundImage: `url(${Footerimg})`,
   backgroundPosition: 'bottom',
   backgroundRepeat: 'no-repeat',
   backgroundSize: 'cover',
   height: '100%',
   width: '100%'
}
const Footerlinks = [
  {
    id: 1,
    name: 'Home',
    link: '/#',
 },
 {
    id: 2,
    name: 'Shop',
    link: '/#Shop',
 },
 {
    id: 3,
    name: 'About',
    link: '/#',
 },
 {
    id: 4,
    name: 'Blog',
    link: '/#',
 },
 {
    id: 5,
    name: 'Contact',
    link: '/#',
 },
]

function Footer() {
  return (
    <div style={BannerImg} className='text-white' >
      <div className='container '>
       <div data-aos='zoom-in' className='grid md:grid-cols-3 pb-40 pt-5'>
         {/* ***********company details*********** */}
         <div className='py-8 px-4'>
          <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'> <img src={Logo} className='max-w-[50px]' />shopyfy</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ad beatae deleniti rem, nisi quam sequi? Illum impedit iure saepe odio nihil.</p>
         </div>
          {/* ***********footer links*********** */}
          <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pt-10'>
            <div>
              <div className='py-8 px-4'>
                <h1 className=' sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                <ul className='flex flex-col gap-3'>
                  {
                    Footerlinks.map((link)=>(
                     <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200 ' key={link.title}>
                      <span>{link.name}</span>
                     </li>
                    ))
                  }
                </ul>
              </div>
            </div>

            <div>
              <div className='py-8 px-4'>
                <h1 className=' sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Links</h1>
                <ul className='flex flex-col gap-3'>
                  {
                    Footerlinks.map((link)=>(
                     <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200 ' key={link.link}>
                      <span>{link.name}</span>
                     </li>
                    ))
                  }
                </ul>
              </div>

            {/* ***********Social links*********** */}
            
            </div>
            <div>
            <div className='flex items-center gap-3 mt-6'>
              <a href="#"><FaFacebook  className='text-3xl'/></a>
              <a href="#"><FaLinkedin  className='text-3xl'/></a>
              <a href="#"><FaSquareXTwitter  className='text-3xl'/></a>
              <a href="#"><FaInstagram  className='text-3xl'/></a>
              <a href="#"><FaYoutube  className='text-3xl'/></a>
            </div>
            <div className='mt-6'>
            <div className='flex items-center gap-3 cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200 '>
            <FaLocationArrow />
            <p>location</p>
            </div>

            <div className='flex items-center gap-3 mt-3 cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200 '>
            <FaMobileAlt/>
            <p>+32022881684</p>
            </div>

            <div className='flex items-center gap-3 mt-3 cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200 '>
            <FaEnvelope  />
            <p>nadeemmomina@gmail.com</p>
            </div>
            </div>
            </div>
          </div>
       </div>
      </div>
    </div>
  )
}

export default Footer
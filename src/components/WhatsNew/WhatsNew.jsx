import React from 'react';
import Img1 from '../../assets/categories/women.png';
import Img2 from '../../assets/categories/men.png';
import Img3 from '../../assets/categories/necklace.png';
import Img4 from '../../assets/categories/shoes.png';
import Img5 from '../../assets/categories/glasses.png';
import Img6 from '../../assets/categories/kid.png';
import Img7 from '../../assets/categories/bride.png';
import Img8 from '../../assets/categories/bag.png';
import Img9 from '../../assets/categories/watch.png';
import Img10 from '../../assets/categories/perfume.png';
import { FaStar } from 'react-icons/fa';
import {  Link } from 'react-router-dom';


const Detailmenu = [
   {
      id: 1,
      name: 'New Arrival',
      link: '/#',
   },
   {
      id: 2,
      name: 'Trending',
      link: '/#Shop',
   },
   {
      id: 3,
      name: 'Best Seller',
      link: '/#',
   },
   {
      id: 4,
      name: 'Featured',
      link: '/#',
   },
   {
      id: 5,
      name: 'On Sale',
      link: '/#',
   },
];

const ProductsData = [
   {
      id:1,
      img:Img1,
      title:'Women Wear',
      description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
       link: '/womenwears'
   },
   {
      id:2,
      img:Img2,
      title:'Men Wear',
      description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
       link: '/menwear'
   },
   {
      id:3,
      img:Img3,
      title:"Accessories",
      description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
       link: '/accessories'
   },
   {
      id:4,
      img:Img4,
      title:'Shoes',
      description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
       link: '/shoes'
   },
   {
      id:5,
      img:Img5,
      title:'Sunglasses',
      description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
      link: '/sunglasses'
   },
   {
      id:6,
      img:Img6,
      title:'Kids Collection',
      description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
      link: '/kidscollection'
   },
   {
      id:7,
      img:Img7,
      title:'Bridal Wear',
      description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
      link: '/bridalwear'
   },
   {
      id:8,
      img:Img8,
      title:'Handbags',
      description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
      link: '/handbags'
   },
   {
      id:9,
      img:Img9,
      title:'Luxury Items',
      description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
      link: '/luxuryitems'
   },
   {
      id:10,
      img:Img10,
      title:'Perfume',
      description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
      link: '/perfume'
   },
]

function WhatsNew() {
  return (
    <div className='mt-10 mb-12'> 
      <div className='text-center max-w-[600px] mx-auto'>
        {/* *********** Header Section *********** */}
        <div className='text-center mb-20 max-w-[600px] mx-auto '>
          <p data-aos="fade-up" className='text-sm text-primary font-bold'>Selling Products</p>
          <h1 data-aos="fade-up" className='text-3xl font-bold'>Categories</h1>
          <p data-aos="fade-up" className='text-xm text-gray-400 pt-2 pb-10'>
          Explore our wide range of fashion products. 
          Discover the latest trends and timeless styles in one place.          </p>
        </div>
       
      </div>
      {/* ***********Body Section*********** */}
      <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  place-items-center gap-5 px-[100px]'>
         {
            ProductsData.map((data)=>(
               <div data-aos='zoom-in' className='mb-[80px] rounded-2xl bg-white dark:bg-gray-800 hover:bg-black dark:hover:bg-primary hover:text-white relative  shadow-xl duration-300 group max-w-[300px] h-[400px]: '>
                  {/* ***********Image Section*********** */}
                  <div key={data.id} data-aos="fade-up" data-aos-delay={data.aosDelay} className=' h-[100px] '> 
                  <Link to={data.link}>
                    <img src={data.img} alt="" className='mx-w-[140px] block mx-auto -translate-y-20 group-hover:scale-105 duration-300 group-shadow-md' /> 
                    </Link>
                  </div>
                   {/* ***********Details Section*********** */}
                   <div className='p-4 text-center'>
                  {/* ***********Star Rating*********** */}
                  <div className="w-full flex items-center justify-center gap-1 pt-10">
                   <FaStar className='text-yellow-500' />
                   <FaStar className='text-yellow-500' />
                   <FaStar className='text-yellow-500' />
                   <FaStar className='text-yellow-500' />
                   <FaStar className='text-yellow-500' />
                   </div>
                   <h1 className='text-xl font-bold'>{data.title}</h1>
                   <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
               </div>
               </div>
            ))
         }
      </div>
    </div>
  );
}

export default WhatsNew;

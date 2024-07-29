import React, { useState } from 'react';
import logo from '../../assets/weblogo.png';
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart, FaCaretDown } from "react-icons/fa";
import Darkmode from './Darkmode';
import { Link } from 'react-router-dom';


const dropdownlink =[
  {
     id:1,
     title:'Women Wear',
     description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
      link: '/womenwears'
  },
  {
     id:2,
     title:'Men Wear',
     description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
      link: '/menwear'
  },
  {
     id:3,
     title:"Accessories",
     description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
      link: '/accessories'
  },
  {
     id:4,
     title:'Shoes',
     description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
      link: '/shoes'
  },
  {
     id:5,
     title:'Sunglasses',
     description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
     link: '/sunglasses'
  },
  {
     id:6,
     title:'Kids Collection',
     description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
     link: '/kidscollection'
  },
  {
     id:7,
     title:'Bridal Wear',
     description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
     link: '/bridalwear'
  },
  {
     id:8,
     title:'Handbags',
     description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
     link: '/handbags'
  },
  {
     id:9,
     title:'Luxury Items',
     description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
     link: '/luxuryitems'
  },
  {
     id:10,
     title:'Perfume',
     description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
     link: '/perfume'
  },
]

function Navbar() {
  const [menu, setmenu] = useState('home');

  return (
    <div className='shadow-md bg-white dark:bg-gray-600 dark:text-white duration-200 relative z-40'>
      <div className='bg-primary/40 py-2 px-5'>
        <div className='Container flex justify-between items-center'>
          <div>
            <a href="#">
              
              <img src={logo} alt="logo" className='w-10' />
            </a>
          </div>
          <div className='font-bold text-[23px]  font-tiemann'>SCLOTHERS</div>
          <div className='flex justify-between items-center gap-4'>
            <div className='relative group hidden sm:block'>
              <input type="text" placeholder='search' className='border border-gray-400 rounded-full focus:outline-none focus:border-none focus:border-primary dark:border-gray-500 dark:bg-gray-800 w-[200px] px-2 pb-1 group-hover:w-[300px] transition-all duration-300' />
              <IoMdSearch className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3' />
            </div>
            <button className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'>
              <span className='group-hover:block hidden transition-all duration-200'><Link to='/order'>Order</Link></span>
              <FaShoppingCart className='text-xl text-white drop-shadow-sm cursor-pointer' />
            </button>
            <div>
              <Darkmode />
            </div>
          </div>
        </div>
      </div>
      <div data-aos='zoom-in' className='flex justify-center'>
        <ul className='flex justify-center space-x-5  sm:flex-hidden'>
          <li className={`cursor-pointer px-2 py-3 transition-all duration-200 ${menu === 'home' ? 'text-primary' : 'hover:text-primary'}`} onClick={() => setmenu('home')}>
            <Link to='/'>Home</Link>
            {menu === 'home' && <hr />}
          </li>
          <li className={`cursor-pointer  px-2 py-3 transition-all duration-200 ${menu === 'shop' ? 'text-primary' : 'hover:text-primary'}`} onClick={() => setmenu('shop')}>
            <Link to='/shop'>Shop</Link>
            {menu === 'shop' && <hr />}
          </li>
          <li className={`cursor-pointer  px-2 py-3 transition-all duration-200 ${menu === 'about' ? 'text-primary' : 'hover:text-primary'}`} onClick={() => setmenu('about')}>
            <Link to='/about'>About</Link>
            {menu === 'about' && <hr />}
          </li>
          <li className={`cursor-pointer  px-2 py-3 transition-all duration-200 ${menu === 'blog' ? 'text-primary' : 'hover:text-primary'}`} onClick={() => setmenu('blog')}>
            <Link to='/blog'>Blog</Link>
            {menu === 'blog' && <hr />}
          </li>
          <li className={`cursor-pointer  px-2 py-3 transition-all duration-200 ${menu === 'contact' ? 'text-primary' : 'hover:text-primary'}`} onClick={() => setmenu('contact')}>
            <Link to='/contact'>Contact</Link>
            {menu === 'contact' && <hr />}
          </li>
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-2 px-2 py-3 hover:text-primary transition-all duration-200">
              Categories
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="dark:bg-gray-600 dark:text-white absolute z-[9999] hidden group-hover:block w-[170px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {dropdownlink.map((data) => (
                  <li key={data.id}>
                     <Link to={data.link}>
                    <a href={data.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/20">
                      {data.title}
                    </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
      
    </div>
  );
}

export default Navbar;

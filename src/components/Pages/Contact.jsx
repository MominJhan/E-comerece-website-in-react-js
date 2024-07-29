import React from 'react'
import './Contact.css'
import { FaPhone, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMessage } from 'react-icons/fa6';
import Footer from '../Footer/Footer';

function Contact() {
  return (
    <>
          <div className="ffbox gap-4"> 
        <div className="ffbox1 dark:bg-black rounded-md"> 
            <h1 className="gfg"></h1> 
            <h2 data-aos="zoom-in" className='text-3xl font-bold text-center pb-4'>Contact Us</h2> 
            <form data-aos="zoom-in "> 
                <label for="fullName"  className='flex '> 
                <FaUser className='mr-[13px] h-7' /> Full Name: 
                </label> 
                <input type="text" 
                       id="fullName" 
                       name="fullName" required/> 
  
                <label for="email" className='flex '> 
                <MdEmail className='mr-[13px] h-7' /> 
                    Email Address: 
  
                </label> 
                <input type="email"
                       id="email" 
                       name="email" required/> 
  
                <label for="mobile"  className='flex '> 
                <FaPhone className='mr-[13px] h-7'/>
                    Contact No: 
                </label> 
                <input  type="tel"
                       id="mobile" 
                       name="mobile" required />
                
  
                <label for="msg" className='flex '> 
                <FaMessage className='mr-[13px] h-7'/> 
                    Write Message: 
                </label> 
                <textarea id="msg" 
                          name="msg" 
                          rows="5" required> 
                </textarea> 
                <div class="flex items-center justify-center center-screen">
                <button type="submit"className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary'> 
                    Submit 
                </button> 
                </div>
            </form> 
        </div> 
        <div className="map-div" data-aos="zoom-in"> 
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.3353870766973!2d71.71266759999999!3d29.3897433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b91c866914697%3A0xe58907dce2ee1358!2sEnigmatix%20(Pvt)%20Ltd!5e0!3m2!1sen!2s!4v1721718814755!5m2!1sen!2s" width="600" height="610" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div> 
    </div> 
    <Footer/>
    </>
  )
}

export default Contact
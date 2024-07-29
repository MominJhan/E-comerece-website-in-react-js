import React from 'react';
import support1 from '../../assets/SupportArea/support-1.png'; 
import support2 from '../../assets/SupportArea/support-2.png'; 
import support3 from '../../assets/SupportArea/support-3.png'; 
import support4 from '../../assets/SupportArea/support-4.png'; 
import './SupportArea.css'

function SupportArea() {
  return (
    <div className='container '>
      <div className="row flex flex-wrap  ">
        <div className='col-lg-3 col-sm-6'>
       <div className='support-wrap flex mb-30px mr-67px'>
        <div className="support-icon">
          <img src={support1} alt="" className='vibrate dark:bg-white'/>
        </div>
        <div className="support-content">
          <h5>Free Shipping</h5>
          <p>Free shipping on all order</p>
        </div>
        </div>
       </div>
       <div className='col-lg-3 col-sm-6'>
       <div className='support-wrap flex mb-30px mr-67px'>
        <div className="support-icon">
          <img src={support2} alt=""  className='vibrate dark:bg-white'/>
        </div>
        <div className="support-content">
          <h5>Support 24/7</h5>
          <p> Free shipping on all order</p>
        </div>
        </div>
       </div>
       <div className='col-lg-3 col-sm-6'>
       <div className='support-wrap flex mb-30px mr-67px' >
        <div className="support-icon">
          <img src={support3} alt=""  className='vibrate dark:bg-white'/>
        </div>
        <div className="support-content">
          <h5>Money Return</h5>
          <p>Free shipping on all order</p>
        </div>
        </div>
       </div>
       <div className='col-lg-3 col-sm-6'>
       <div className='support-wrap flex mb-30px mr-67px'>
        <div className="support-icon">
          <img src={support4} alt="" className='vibrate dark:bg-white' />
        </div>
        <div className="support-content">
          <h5>Order Discount</h5>
          <p>Free shipping on all order</p>
        </div>
        </div>
       </div>
      </div>
    </div>
  );
}

export default SupportArea;

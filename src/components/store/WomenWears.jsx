import React, { useState } from 'react';
import { IoCloseCircleSharp } from "react-icons/io5";
import { useCart } from '../contextpage/CartContext.jsx';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const womenweardata = [
  {
    id: 1,
    img: 'https://hustlenholla.com.pk/cdn/shop/files/HRW03821.jpg?v=1709894084&width=823',
    hoverImg:'https://hustlenholla.com.pk/cdn/shop/files/HRW03787.jpg?v=1709894084&width=823',
    title: 'Ruffle Chambray Crop Top',
    price: '39',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 2,
    img: 'https://hustlenholla.com.pk/cdn/shop/files/HRW01490.jpg?v=1709894708&width=823',
    hoverImg:'https://hustlenholla.com.pk/cdn/shop/files/HRW01434_8df06680-980a-4d95-af10-5c22885b9ed5.jpg?v=1709894708&width=823',
    title: 'White Crossover Shirt',
    price: '45',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 3,
    img: 'https://hustlenholla.com.pk/cdn/shop/files/BrownCorduroyShacket_4.jpg?v=1695104164&width=823',
    hoverImg:'https://hustlenholla.com.pk/cdn/shop/files/BrownCorduroyShacket_5.jpg?v=1695104164&width=823',
    title: 'Brown Corduray Shacket',
    price: '21',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 4,
    img: 'https://hustlenholla.com.pk/cdn/shop/files/HRW07282.jpg?v=1709895191&width=823',
    hoverImg:'https://hustlenholla.com.pk/cdn/shop/files/HRW07257.jpg?v=1709895191&width=823',
    title: 'Cropped Green Silk Shirt',
    price: '24',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 5,
    img: 'https://furorjeans.com/cdn/shop/files/24_W_WomenShirts_FWTS24-009_3.jpg?v=1711450132',
    hoverImg:'https://furorjeans.com/cdn/shop/files/24_W_WomenShirts_FWTS24-009_1_375x469_crop_center.jpg?v=1711450132',
    title: 'Regular Fit Button Up Shirt ',
    price: '77',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 6,
    img: 'https://furorjeans.com/cdn/shop/files/24_W_WomenShirts_FWTS23-122_1_375x469_crop_center.jpg?v=1706857167',
    hoverImg:'https://furorjeans.com/cdn/shop/files/24_W_WomenShirts_FWTS23-122_2_375x469_crop_center.jpg?v=1706857167',
    title: 'Relaxed Fit Button Down Shirt',
    price: '22',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 7,
    img: 'https://furorjeans.com/cdn/shop/files/24_W_WomenShirts_FWTS23-155_1_613a6d7e-1da3-4ec8-ac2c-94a99cbbb688_375x469_crop_center.jpg?v=1711448021',
    hoverImg:'https://furorjeans.com/cdn/shop/files/24_W_WomenShirts_FWTS23-155_3_9cd853dd-f05c-41ab-9f78-304f6181f12a_375x469_crop_center.jpg?v=1711448021',
    title: 'Relaxed Fit Button Up Shirt',
    price: '12',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 8,
    img: 'https://furorjeans.com/cdn/shop/files/24_W_WomenShirts_FWTS23-130_1_375x469_crop_center.jpg?v=1706857131',
    hoverImg:'https://furorjeans.com/cdn/shop/files/24_W_WomenShirts_FWTS24-051_1_375x469_crop_center.jpg?v=1715768215',
    title: 'Regular Fit Shirt',
    price: '12',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
];

function WomenWears() {
  const [blur, setBlur] = useState(false);
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const { addToCart} = useCart();


  const detailpage = (WomenWears) => {
    setDetail([{ ...WomenWears }]);
    setClose(true);
    setBlur(true);
    setQuantity(1);
  };
  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      img: product.img,
      quantity,
    });
    setClose(false);
    setBlur(false);
    toast.success('Added to Cart Successfully!', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };


  return (
    <>
      {close ? 
        <div className="detailcontainer dark:text-black">
          <div className="deatilcontent">
            <button className='close absolute top-2 right-2 text-xl' onClick={() => {setClose(false); setBlur(false);}}><IoCloseCircleSharp /></button>
            {detail.map((x) => {
              return (
                <div key={x.id} className="detailinfo ">
                  <div className="imgbox">
                    <img src={x.img} alt={x.title} />
                  </div>
                  <div className="productdetails">
                    <h2 className='font-semibold'>{x.title}</h2>
                    <p className='text-md text-red-600'>${x.price}</p>
                    <p className='text-sm text-gray-600'>{x.description}</p>
                    <div className="quantity-selector mt-4">
                      <button className="decrement bg-gray-200 p-1 rounded" onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                      <span className="quantity mx-2">{quantity}</span>
                      <button className="increment bg-gray-200 p-1 rounded" onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>
                    <button onClick={() => handleAddToCart(x)}  className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary'>Order Now</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        : null
      }
      <div className={`mt-10 mb-12 ${blur ? 'blur-background' : ''}`}>
        <div className='container'>
          <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 place-items-center gap-5 px-[100px]'>
              {womenweardata.map((data) => (
                <div data-aos="fade-up" key={data.id} className='space-y-3'>
                  <div className="image-container h-[300px] w-[200px] relative">
                    <img
                      src={data.img}
                      className='main-img h-full w-full object-cover hover:scale-110 rounded-md mb-[10px]'
                      alt={data.title}
                    />
                    {data.hoverImg && data.hoverImg !== 'https://example.com/blank-image.jpg' && (
                      <img
                        src={data.hoverImg}
                        className='hover-img h-full w-full object-cover rounded-md mb-[10px]'
                        alt={`${data.title} hover`}
                      />
                    )}
                    <button      
                      onClick={() => detailpage(data)}
                      className="view-button absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary hover:scale-105 duration-300 text-white pb-[25px] px-4 rounded-full">
                      View
                    </button>
                  </div>
                  <div>
                    <h3 className='font-semibold'>{data.title}</h3>
                    <p className='text-sm text-gray-600'>${data.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WomenWears;




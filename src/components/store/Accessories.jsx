import React, { useState } from 'react';
import { IoCloseCircleSharp } from "react-icons/io5";
import { useCart } from '../contextpage/CartContext.jsx';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const accessoriesdata = [
  {
    id: 1,
    img: 'https://meerzah.pk/cdn/shop/files/en-752_2_1800x1800.jpg?v=1720794058',
    hoverImg:'https://meerzah.pk/cdn/shop/files/en-597ssssss_1800x1800.jpg?v=1708332772',
    title: 'Elegant Design Real Stone Earrings',
    price: '39',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 2,
    img: 'https://meerzah.pk/cdn/shop/files/ch-608_3_1800x1800.jpg?v=1720256130',
    hoverImg:'https://meerzah.pk/cdn/shop/files/ch-537_3_650x.jpg?v=1711192203',
    title: 'Men Bracelets',
    price: '45',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 3,
    img: 'https://meerzah.pk/cdn/shop/files/WhatsAppImage2024-06-29at3.01.26PM_1_1800x1800.jpg?v=1719655874',
    hoverImg:'https://meerzah.pk/cdn/shop/files/WhatsAppImage2024-06-29at3.01.23PM_1800x1800.jpg?v=1719655862',
    title: 'Glamorous Beautiful Crystal Bracelet ',
    price: '21',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 4,
    img: 'https://meerzah.pk/cdn/shop/files/meerzah-collectiomn_400x.jpg?v=1707838816',
    hoverImg:'https://meerzah.pk/cdn/shop/files/meerzah-collectiomn2_400x.jpg?v=1707838835',
    title: 'Elegent rings Design',
    price: '24',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 5,
    img: 'https://meerzah.pk/cdn/shop/files/ns-303_1800x1800.jpg?v=1706127348',
    hoverImg:'https://meerzah.pk/cdn/shop/files/f949dd41-f1ce-46cb-b239-eb4122b14567_1800x1800.jpg?v=1706127348',
    title: 'Elegant Fancy Golden Necklace ',
    price: '77',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 6,
    img: 'https://meerzah.pk/cdn/shop/files/ns-267._1800x1800.jpg?v=1700051217',
    hoverImg:'https://meerzah.pk/cdn/shop/files/996a5aa1-bdaa-4a7f-9d8c-44da9d9abe19_650x.jpg?v=1702125446',
    title: 'Elegant Fancy Golden Necklace ',
    price: '22',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 7,
    img: 'https://meerzah.pk/cdn/shop/files/1536e5bc-3200-4891-af9c-1f94331c40b1_1800x1800.jpg?v=1706110483',
    hoverImg:'https://meerzah.pk/cdn/shop/files/df3ee46e-cbd5-4e1b-b313-c5adc676f539_650x.jpg?v=1706110494',
    title: 'Unique Design Long Mala ',
    price: '12',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 8,
    img: 'https://meerzah.pk/cdn/shop/files/en-731_3_1800x1800.jpg?v=1717845746',
    hoverImg:'https://meerzah.pk/cdn/shop/files/en-731_7_1800x1800.jpg?v=1717848194',
    title: 'Sophisticated Gold Plated Earrings',
    price: '12',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
]

function Accessories() {
  const [blur, setBlur] = useState(false);
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const { addToCart} = useCart();


  const detailpage = (Accessories) => {
    setDetail([{ ...Accessories }]);
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
        <div className="detailcontainer">
          <div className="deatilcontent">
            <button className='close absolute top-2 right-2 text-xl' onClick={() => {setClose(false); setBlur(false);}}><IoCloseCircleSharp /></button>
            {detail.map((x) => {
              return (
                <div key={x.id} className="detailinfo">
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
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 place-items-center gap-5 px-[100px]'>
              {accessoriesdata.map((data) => (
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

export default Accessories;




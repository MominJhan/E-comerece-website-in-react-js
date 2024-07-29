import React, { useState } from 'react';
import { IoCloseCircleSharp } from "react-icons/io5";
import { useCart } from '../contextpage/CartContext.jsx';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const menweardata = [
  {
    id: 1,
    img: 'https://shopgroove.pk/cdn/shop/products/b6f70a5b7778a7d56a6ab64a9479a517.jpg?v=1677458509&width=713',
    hoverImg:'https://shopgroove.pk/cdn/shop/products/S522ae347b33e49d89e916206a8e820b8h_jpg_640x640Q90_jpg.jpg?v=1664899714',
    title: 'Mens Premium Cotton Printed T-Shirt',
    price: '39',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 2,
    img: 'https://shopgroove.pk/cdn/shop/products/Hfcc0927ea3ae40068c954e58b72d34bbP_jpg_640x640Q90_jpg.jpg?v=1664899820',
    hoverImg:'https://shopgroove.pk/cdn/shop/products/S310524e01f3540f5ac0277d5ffde1844q_jpg_640x640Q90_jpg.jpg?v=1664899515',
    title: 'Black Crossover Shirt',
    price: '45',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 3,
    img: 'https://shopgroove.pk/cdn/shop/products/L_g0126071149.jpg?v=1664899919&width=600',
    hoverImg:'https://shopgroove.pk/cdn/shop/products/L_g0126071151.jpg?v=1664899919&width=600',
    title: 'Mens Premium Cotton Printed T-Shirt',
    price: '21',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 4,
    img: 'https://shopgroove.pk/cdn/shop/products/S3de10d87d99b4ef787a75caaa6dba0dak_jpg_640x640Q90_jpg.jpg?v=1664899581&width=493',
    hoverImg:'https://shopgroove.pk/cdn/shop/products/ddb5e1e0f2662799718be86357e2f1e2.jpg?v=1664899988&width=713',
    title: 'Mens Premium Cotton Printed T-Shirt',
    price: '24',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 5,
    img: 'https://shopgroove.pk/cdn/shop/products/1650595685a137c9c9bba286a9bfeb21dfbfe11134_thumbnail_750x_b3eb81db-2fa6-4b45-beb1-e83da72a43e1.webp?v=1679001743&width=493',
    hoverImg:'https://shopgroove.pk/cdn/shop/products/1648435295fde3767486c75a67e113fb26bb632c21_thumbnail_750x_f1774948-9191-46d7-a8a2-5fb2ad119368.webp?v=1679001762&width=493',
    title: 'Mens Printed Cotton Shorts  ',
    price: '77',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 6,
    img: 'https://shopgroove.pk/cdn/shop/products/OIG-_88.jpg?v=1699099906&width=713',
    hoverImg:'https://shopgroove.pk/cdn/shop/products/ddad96fb-f964-4a50-9dc2-148097e004b4.jpg?v=1699099886&width=713',
    title: 'APL Hoodie and Pants Printed Set',
    price: '22',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 7,
    img: 'https://shopgroove.pk/cdn/shop/products/IMG-20211128-WA0054.jpg?v=1664901487&width=600',
    hoverImg:'https://shopgroove.pk/cdn/shop/products/IMG-20211128-WA0055.jpg?v=1664901487&width=600',
    title: 'Groove Round Neck Printed Fleece Sweatshirt ',
    price: '12',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 8,
    img: 'https://shopgroove.pk/cdn/shop/products/Screenshot-20230915_044416_Chrome.jpg?v=1694809274&width=600',
    hoverImg:'https://shopgroove.pk/cdn/shop/products/Screenshot-20230915_044428_Chrome.jpg?v=1694809274&width=600',
    title: 'Mens Printed Kangaroo Hoodie ',
    price: '12',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
]

function MenWears() {
  const [blur, setBlur] = useState(false);
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const { addToCart} = useCart();


  const detailpage = (MenWears) => {
    setDetail([{ ...MenWears }]);
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
              {menweardata.map((data) => (
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

export default MenWears;




import React, { useState } from 'react';
import { IoCloseCircleSharp } from "react-icons/io5";
import { useCart } from '../contextpage/CartContext.jsx';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const bridalweardata = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1492175742197-ed20dc5a6bed?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hoverImg:'https://plus.unsplash.com/premium_photo-1668698471470-af22d400ed98?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'White Dress',
    price: '39',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 2,
    img: 'https://www.faizasaqlain.pk/cdn/shop/files/1_ccb80978-243f-4a50-93ec-d89edee418a6.jpg?v=1695186235',
    hoverImg:'https://www.faizasaqlain.pk/cdn/shop/files/3_c381c6a4-aa3e-4bdb-be49-d1dfac7e3a83.jpg?v=1695186236',
    title: 'Walima Dress',
    price: '45',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 3,
    img: 'https://www.faizasaqlain.pk/cdn/shop/products/1_4a977e97-ab52-4f07-9f37-db3f1f041b0f.jpg?v=1661170052',
    hoverImg:'https://www.faizasaqlain.pk/cdn/shop/products/3_f31256b9-7e52-4898-b17a-760b712dd5cc.jpg?v=1661170053',
    title: 'Walima Dress',
    price: '21',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 4,
    img: 'https://faizasaqlain.pk/cdn/shop/files/2_25e5ef8f-0487-4248-8c28-4c0234331148.jpg?v=1695186049',
    hoverImg:'https://www.faizasaqlain.pk/cdn/shop/files/1_24ecac1a-b7a5-4333-b30b-9bc9566d8211.jpg?v=1695186050',
    title: 'Bride Dress ',
    price: '24',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 5,
    img: 'https://www.faizasaqlain.pk/cdn/shop/products/1_8b6ebc25-ff55-4d3b-8da6-0fc15311e392.jpg?v=1661153170',
    hoverImg:'https://www.faizasaqlain.pk/cdn/shop/products/4_08797449-33d8-4fc7-96ca-3e10112b07fe.jpg?v=1661153171',
    title: 'Mehndi Dress ',
    price: '77',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 6,
    img: 'https://www.faizasaqlain.pk/cdn/shop/products/PK-600x795_0018_HSK08704.jpg?v=1611293621',
    hoverImg:'https://www.faizasaqlain.pk/cdn/shop/products/PK-600x795_0016_HSK08723.jpg?v=1611293621',
    title: 'Party Dress',
    price: '22',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 7,
    img: 'https://www.faizasaqlain.pk/cdn/shop/products/024.jpg?v=1610555090',
    hoverImg:'https://www.faizasaqlain.pk/cdn/shop/products/021.jpg?v=1610555090',
    title: 'Dolki Dress',
    price: '12',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 8,
    img: 'https://www.faizasaqlain.pk/cdn/shop/products/VERTICAL_7_03c9b186-bad1-40c0-ac8f-2987e3e73550.jpg?v=1607855862',
    hoverImg:'https://www.faizasaqlain.pk/cdn/shop/products/VERTICAL_2.jpg?v=1607855862',
    title: 'Casual Dress',
    price: '12',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
]
function BridalWear() {
  const [blur, setBlur] = useState(false);
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const { addToCart} = useCart();


  const detailpage = (BridalWear) => {
    setDetail([{ ...BridalWear }]);
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
              {bridalweardata.map((data) => (
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

export default BridalWear;




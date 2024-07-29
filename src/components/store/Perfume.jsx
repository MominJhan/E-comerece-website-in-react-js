import React, { useState } from 'react';
import { IoCloseCircleSharp } from "react-icons/io5";
import { useCart } from '../contextpage/CartContext.jsx';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const perfumedata = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1458538977777-0549b2370168?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hoverImg:'https://images.unsplash.com/photo-1635178792420-b90837a4e5d0?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Blue Lady Perfume',
    price: '39',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 2,
    img: 'https://scentsnstories.pk/cdn/shop/files/qgsoch.png?v=1706359044&width=900',
    hoverImg:'https://scentsnstories.pk/cdn/shop/files/QGbottlesoch.png?v=1714501839&width=720',
    title: 'Soch Perfume',
    price: '45',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1605619082574-e92eee603b95?q=80&w=1481&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hoverImg:'https://images.unsplash.com/photo-1605619082574-e92eee603b95?q=80&w=1481&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Lowoe Perfume',
    price: '21',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hoverImg:'https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Blue Lady perfume',
    price: '24',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 5,
    img: 'https://media.istockphoto.com/id/1449079882/photo/black-female-hand-showing-classic-perfume-bottle.jpg?s=1024x1024&w=is&k=20&c=4EwYLtik3Db63SF3X2--HBUESt9dv2hXF3xoUxMl0dw=',
    hoverImg:'https://images.unsplash.com/photo-1593086997231-5006a292b79a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: ' Paradise Perfume',
    price: '77',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1588680388356-127f57196ca8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hoverImg:'https://images.unsplash.com/photo-1588680388356-127f57196ca8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Daisy Perfume',
    price: '22',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 7,
    img: 'https://scentsnstories.pk/cdn/shop/files/Saifulmalook.png?v=1715755187&width=720',
    hoverImg:'https://scentsnstories.pk/cdn/shop/files/Saifulmalook.png?v=1715755187&width=720',
    title: 'Saif ul mlook perfume',
    price: '12',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 8,
    img: 'https://scentsnstories.pk/cdn/shop/files/Saifulmalook.jpg?v=1715755187&width=180',
    hoverImg:'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1408&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Saif ul mlook perfume',
    price: '12',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
]
function Perfume() {
  const [blur, setBlur] = useState(false);
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const { addToCart} = useCart();


  const detailpage = (Perfume) => {
    setDetail([{ ...Perfume }]);
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
              {perfumedata.map((data) => (
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

export default Perfume;




import React, { useState } from 'react';
import { IoCloseCircleSharp } from "react-icons/io5";
import { useCart } from '../contextpage/CartContext.jsx';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const kiddata = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1684244160171-97f5dac39204?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hoverImg:'https://images.unsplash.com/photo-1664918688104-4eb8956f97a2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Little Frok ',
    price: '39',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1622290291165-d341f1938b8a?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hoverImg:'https://images.unsplash.com/photo-1622290319146-7b63df48a635?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Roper for Summer',
    price: '45',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 3,
    img: 'https://thetrendytoddlers.com/cdn/shop/products/1_e7fc121e-5028-4b9b-ab20-caf20574c952_1100x.progressive.jpg?v=1653728620',
    hoverImg:'https://thetrendytoddlers.com/cdn/shop/products/9_d9656327-7151-4c02-8dba-bca94fb895cd_1120x.progressive.jpg?v=1656324200',
    title: 'Gentleman Khaki Shorts Toddler Set',
    price: '21',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 4,
    img: 'https://thetrendytoddlers.com/cdn/shop/products/8_def04c17-33b4-47aa-b3bf-1420ef510b20_1100x.progressive.jpg?v=1673562249',
    hoverImg:'https://thetrendytoddlers.com/cdn/shop/products/2_59efed77-40f8-49a0-a097-ad1403c5fd71_1100x.progressive.jpg?v=1656749472',
    title: 'Solid Shorts Hooded Toddler Set',
    price: '24',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 5,
    img: 'https://thetrendytoddlers.com/cdn/shop/files/1D_233bbe75-4316-4812-a3b3-bf36bba12204_775x.progressive.jpg?v=1686685815',
    hoverImg:'https://thetrendytoddlers.com/cdn/shop/files/1_9aa6bcb4-0fc6-49c1-8ff8-f6d796541ffe_800x.progressive.jpg?v=1686685807',
    title: 'Long Sleeve Checkered Toddler Set',
    price: '77',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 6,
    img: 'https://thetrendytoddlers.com/cdn/shop/files/10_760x.progressive.jpg?v=1692069211',
    hoverImg:'https://thetrendytoddlers.com/cdn/shop/files/10a_47d81bc1-3874-4ab4-9588-48a9ed81d5b3_800x.progressive.jpg?v=1692069271',
    title: 'Pink Floral Tulle Baby Dress',
    price: '22',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 7,
    img: 'https://thetrendytoddlers.com/cdn/shop/products/4_b30ee30f-c0ed-43d6-8a7b-37af60690bf0_1100x.progressive.jpg?v=1642786582',
    hoverImg:'https://thetrendytoddlers.com/cdn/shop/products/1_11571564-ec94-4df3-9a80-dc284db5a6a9_1100x.progressive.jpg?v=1642793767',
    title: 'Solid Lace Sleeve Baby Dress',
    price: '12',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 8,
    img: 'https://thetrendytoddlers.com/cdn/shop/products/product-image-582426816_1200x.progressive.jpg?v=1619204083',
    hoverImg:'https://thetrendytoddlers.com/cdn/shop/products/product-image-582426816_1200x.progressive.jpg?v=1619204083',
    title: 'Denim Shorts Toddler Jumpsuit',
    price: '12',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
]
function KidsCollection() {
  const [blur, setBlur] = useState(false);
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const { addToCart} = useCart();


  const detailpage = (KidsCollection) => {
    setDetail([{ ...KidsCollection }]);
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
              {kiddata.map((data) => (
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

export default KidsCollection;




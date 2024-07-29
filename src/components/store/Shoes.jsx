import React, { useState } from 'react';
import { IoCloseCircleSharp } from "react-icons/io5";
import { useCart } from '../contextpage/CartContext.jsx';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const shoesdata = [
  {
    id: 1,
    img: 'https://www.julke.pk/cdn/shop/files/Reina-women-leather-summer-flats-black-croc-texture-diamantes-front-view-JULKE_700x.jpg?v=1720417825',
    hoverImg:'https://www.julke.pk/cdn/shop/files/Reina-women-leather-summer-flats-brutus-maroon-croc-texture-diamantes-top-view-2-JULKE_700x.jpg?v=1720589891',
    title: 'Sandals Reina',
    price: '39',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 2,
    img: 'https://fhsofficial.com/cdn/shop/files/MSZ00371-BLACK_11_1024x1024@2x.jpg?v=1700818934',
    hoverImg:'https://fhsofficial.com/cdn/shop/files/MSZ00371-BLACK_13_1024x1024@2x.jpg?v=1700818934',
    title: 'Scaled Wire Buckled Loafers-Black',
    price: '45',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 3,
    img: 'https://www.julke.pk/cdn/shop/files/Ether-women-summer-flats-silver-frost-thing-diamante-pearl-straps-top-view-JULKE_700x.jpg?v=1714114574',
    hoverImg:'https://www.julke.pk/cdn/shop/files/Ether-women-summer-flats-peach-quartz-thing-diamante-pearl-straps-side-view-JULKE_700x.jpg?v=1714114574',
    title: 'Flat',
    price: '21',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 4,
    img: 'https://fhsofficial.com/cdn/shop/files/FHS240319-05_11_1024x1024.jpg?v=1711117854',
    hoverImg:'https://fhsofficial.com/cdn/shop/files/FHS240319-05_31_1024x1024.jpg?v=1711117854',
    title: 'Brass Buckled Half Moccasins-Brown',
    price: '24',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 5,
    img: 'https://www.julke.pk/cdn/shop/products/Dia-women-leather-flats-summer-thong-bronze-top-view-JULKE_700x.jpg?v=1709702904',
    hoverImg:'https://www.julke.pk/cdn/shop/products/Dia-women-leather-flats-summer-thong-gun-metal-three-quarter-view-JULKE_700x.jpg?v=1709702904',
    title: 'Women Flat ',
    price: '77',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 6,
    img: 'https://fhsofficial.com/cdn/shop/files/MSZ00378-TAN_1024x1024.jpg?v=1714043005',
    hoverImg:'https://fhsofficial.com/cdn/shop/files/FHS240319-10_1_1024x1024.jpg?v=1714043005',
    title: 'Unique Patterned Double Monks-Tan',
    price: '22',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 7,
    img: 'https://www.julke.pk/cdn/shop/files/Kloss-women-block-heels-caramel-brown-leather-cross-straps-top-view-JULKE_f8f1eb26-7774-4d6c-83a9-1c4b984f6e44_600x.jpg?v=1714114528',
    hoverImg:'https://www.julke.pk/cdn/shop/files/Kloss-women-block-heels-black-leather-cross-straps-front-view-JULKE_600x.jpg?v=1714114528',
    title: 'Kloss Block Heel Sandal',
    price: '12',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 8,
    img: 'https://www.julke.pk/cdn/shop/files/Aimery-women-heels-square-toe-peruvian-caramel-gold-chain-side-view-JULKE_1200x1800.jpg?v=1702466573',
    hoverImg:'https://www.julke.pk/cdn/shop/files/Aimery-women-heels-square-toe-peruvian-caramel-gold-chain-three-quarter-view-JULKE_600x.jpg?v=1702017572',
    title: 'Sandal',
    price: '12',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
]

function Shoes() {
  const [blur, setBlur] = useState(false);
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const { addToCart} = useCart();


  const detailpage = (Shoes) => {
    setDetail([{ ...Shoes }]);
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
              {shoesdata.map((data) => (
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

export default Shoes;




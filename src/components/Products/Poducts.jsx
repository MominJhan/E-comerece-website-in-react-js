
import React, { useState } from 'react';
import { IoCloseCircleSharp } from "react-icons/io5";
import { useCart } from '../contextpage/CartContext.jsx';
import { FaStar } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ProductsData = [
  {
    id: 1,
    img: 'https://hustlenholla.com.pk/cdn/shop/files/HRW03821.jpg?v=1709894084&width=823',
    hoverImg:'https://hustlenholla.com.pk/cdn/shop/files/HRW03787.jpg?v=1709894084&width=823',
    title: 'Ruffle Chambray Crop Top',
    price: '39',
     description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima',
  },
  {
    id: 2,
    img: 'https://hustlenholla.com.pk/cdn/shop/files/HRW01490.jpg?v=1709894708&width=823',
    hoverImg:'https://hustlenholla.com.pk/cdn/shop/files/HRW01434_8df06680-980a-4d95-af10-5c22885b9ed5.jpg?v=1709894708&width=823',
    title: 'White Crossover Shirt',
    price: '45',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima',
   
  },
  {
    id: 3,
    img: 'https://hustlenholla.com.pk/cdn/shop/files/BrownCorduroyShacket_4.jpg?v=1695104164&width=823',
    hoverImg:'https://hustlenholla.com.pk/cdn/shop/files/BrownCorduroyShacket_5.jpg?v=1695104164&width=823',
    title: 'Brown Corduray Shacket',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima',
    price: '21',
   
  },
  {
    id: 4,
    img: 'https://www.faizasaqlain.pk/cdn/shop/products/PK-600x795_0018_HSK08704.jpg?v=1611293621',
    hoverImg:'https://www.faizasaqlain.pk/cdn/shop/products/PK-600x795_0016_HSK08723.jpg?v=1611293621',
    title: 'Party Dress',
    price: '22',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 5,
    img: 'https://www.faizasaqlain.pk/cdn/shop/products/024.jpg?v=1610555090',
    hoverImg:'https://www.faizasaqlain.pk/cdn/shop/products/021.jpg?v=1610555090',
    title: 'Dolki Dress',
    price: '12',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 6,
    img: 'https://meerzah.pk/cdn/shop/files/meerzah-collectiomn_400x.jpg?v=1707838816',
    hoverImg:'https://meerzah.pk/cdn/shop/files/meerzah-collectiomn2_400x.jpg?v=1707838835',
    title: 'Elegent rings Design',
    price: '24',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 7,
    img: 'https://meerzah.pk/cdn/shop/files/ns-303_1800x1800.jpg?v=1706127348',
    hoverImg:'https://meerzah.pk/cdn/shop/files/f949dd41-f1ce-46cb-b239-eb4122b14567_1800x1800.jpg?v=1706127348',
    title: 'Elegant Fancy Golden Necklace ',
    price: '77',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 8,
    img: 'https://images.unsplash.com/photo-1617039346892-d72191157374?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hoverImg:'https://images.unsplash.com/photo-1581915649317-41fc6eb9597d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Glasses for Men and Women',
    price: '45',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 9,
    img: 'https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hoverImg:'https://plus.unsplash.com/premium_photo-1672239496593-f51cdc01c0f8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Black Glasses foe men',
    price: '21',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 10,
    img: 'https://images.unsplash.com/photo-1575032617751-6ddec2089882?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hoverImg:'https://plus.unsplash.com/premium_photo-1672829371769-bcff266023a4?q=80&w=1483&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Side Bag',
    price: '45',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 11,
    img: 'https://images.unsplash.com/photo-1614179689702-355944cd0918?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hoverImg:'https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Black Handbags',
    price: '21',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 12,
    img: 'https://images.unsplash.com/photo-1458538977777-0549b2370168?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hoverImg:'https://images.unsplash.com/photo-1635178792420-b90837a4e5d0?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Blue Lady Perfume',
    price: '39',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 13,
    img: 'https://www.julke.pk/cdn/shop/files/Ether-women-summer-flats-silver-frost-thing-diamante-pearl-straps-top-view-JULKE_700x.jpg?v=1714114574',
    hoverImg:'https://www.julke.pk/cdn/shop/files/Ether-women-summer-flats-peach-quartz-thing-diamante-pearl-straps-side-view-JULKE_700x.jpg?v=1714114574',
    title: 'Flat',
    price: '21',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 14,
    img: 'https://thetrendytoddlers.com/cdn/shop/products/4_b30ee30f-c0ed-43d6-8a7b-37af60690bf0_1100x.progressive.jpg?v=1642786582',
    hoverImg:'https://thetrendytoddlers.com/cdn/shop/products/1_11571564-ec94-4df3-9a80-dc284db5a6a9_1100x.progressive.jpg?v=1642793767',
    title: 'Solid Lace Sleeve Baby Dress',
    price: '12',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 15,
    img: 'https://thetrendytoddlers.com/cdn/shop/products/product-image-582426816_1200x.progressive.jpg?v=1619204083',
    hoverImg:'https://thetrendytoddlers.com/cdn/shop/products/product-image-582426816_1200x.progressive.jpg?v=1619204083',
    title: 'Denim Shorts Toddler Jumpsuit',
    price: '12',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  {
    id: 16,
    img: 'https://www.faizasaqlain.pk/cdn/shop/products/VERTICAL_7_03c9b186-bad1-40c0-ac8f-2987e3e73550.jpg?v=1607855862',
    hoverImg:'https://www.faizasaqlain.pk/cdn/shop/products/VERTICAL_2.jpg?v=1607855862',
    title: 'Casual Dress',
    price: '12',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illum mollitia ullam minima possimus qui dignissimos aperiam enim aliquid, doloremque officiis nostrum?',
  },
  
 
];

function Products() {
 const [blur, setBlur] = useState(false);
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const { addToCart} = useCart();


  const detailpage = (Products) => {
    setDetail([{ ...Products }]);
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
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,  
      slidesToSlide: 4,  
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
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
        {/* *********** Header Section *********** */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p data-aos="fade-up" className='text-sm text-primary font-bold'>Top Selling Products For You</p>
          <h1 data-aos="fade-up" className='text-3xl font-bold'>All Products</h1>
          <p data-aos="fade-up" className='text-xs text-gray-400 font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem quasi, nemo voluptates eius ea odio asperiores, neque magnam earum sequi minus ratione.</p>
        </div>
        {/* *********** Body Section *********** */}
        <div>
          {/* *********** Card Section *********** */}
          <Carousel responsive={responsive}>
          {ProductsData.map((data) => (
  <div
    data-aos="fade-up"
    data-aos-delay={data.aosDelay}
    key={data.id}
    className='relative space-y-3 group'
  >
    <div className='relative'>
      <img src={data.img} className='h-[300px] w-[200px] object-cover rounded-md' />
      {data.hoverImg && (
        <img
          src={data.hoverImg}
          className='hover-img h-[300px] w-[200px] object-cover rounded-md absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
          alt={`${data.title} hover`}
        />
      )}
      {/* <button
        onClick={() => detailpage(data)}
        className="view-button absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary hover:scale-105 duration-300 text-white pb-[25px] px-4 rounded-full opacity-0 group-hover:opacity-100"
      >
        Add to Cart
      </button> */}
    </div>
    <div>
      <h3 className='font-semibold'>{data.title}</h3>
      <p className='text-sm text-gray-600'>${data.price}</p>
      <p className='text-sm black'>{data.description}</p>
      <div className='flex items-center gap-1'>
        <FaStar className='text-yellow-400' />
        <FaStar className='text-yellow-400' />
        <FaStar className='text-yellow-400' />
        <FaStar className='text-yellow-400' />
        <FaStar className='text-yellow-400' />
        <span>{data.rating}</span>
      </div>
    </div>
  </div>
))}
          </Carousel>
        </div>
      </div>
    </div>
    </>
  );
}

export default Products;

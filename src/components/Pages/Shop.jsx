import React from 'react'
import Footer from '../Footer/Footer'
import { useEffect, useState } from 'react'
import axios from 'axios';
import ShopDetial from './ShopDetial';


function Shop() {
  let [finalcatagory,setfinalcatagory] = useState([])
  let  [finalproducts,setfinalproducts] =useState([])
  let [catname , setcatname] = useState('')
  const getcategory = () => {
    axios.get('https://dummyjson.com/products/category-list')
      .then((res) => res.data)
      .then((finalresponse) => {
        setfinalcatagory(finalresponse);
      })
      .catch((error) => {
        console.error('Error fetching category list:', error);
      });
  };
  const getproducts = () => {
    axios.get('https://dummyjson.com/products')
      .then((res) => res.data)
      .then((finalresponse) => {
        setfinalproducts(finalresponse.products);
      })
      .catch((error) => {
        console.error('Error fetgetproductsching category list:', error);
      });
  };
  let pitems = finalproducts.map((products,i)=>{
    return(
      <Productsitems key={i} pdata={products}/>
    )
  })

  useEffect(() => {
    getcategory();
    getproducts();
  }, []);

  useEffect(() => {
   if (catname!=='') {
    axios.get(`https://dummyjson.com/products/category/${catname}`)
      .then((res) => res.data)
      .then((finalresponse) => {
        setfinalproducts(finalresponse.products);
      })
      .catch((error) => {
        console.error('Error fetgetproductsching category list:', error);
      });
   }
  }, [catname]);
  return (
    <>
    <div className="py-[30px]">
    <div className='max-w-[3320px] mx-auto'>
      <h1 className=' text-center text-[40px] font-bold mb-[30px]'>Our products</h1>
     <div className='grid grid-cols-[30%_auto] gap-[20px] px-[44px]'>
      
       <div >
       
        <ShopDetial finalcatagory={finalcatagory} setcatname={setcatname}/>
       </div>

       <div>
       <div className='grid grid-cols-4 gap-5'>
        { pitems}
        </div>
       </div>
       </div>

  
    </div>
    </div>
   <Footer/>
    </>
  )
}

export default Shop
 function Productsitems({pdata}) {
  return(
    <div>
      <div className='shadow-lg text-center pb-4'>
      <img src={pdata.thumbnail} className='w-[100%] h-[200px]'/>
          <h4>{pdata.title}</h4>
          <b>{pdata.price}</b>
          </div>
    </div>
  )
 }
import React from 'react'

function ShopDetial({finalcatagory, setcatname}) {
  let cat = finalcatagory.map((v,i)=>{
    return(
      <li onClick={()=>setcatname(v)} className=' bg-lime-300 text-[17px] p-[14px] cursor-pointer font-serif font-bold mb-2' key={i}>{v}</li>
    )
  })
  return (
    <div>
      <h2 className=' text-[20px] font-[500] p-[14px] bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  '>Category</h2>

      <ul>
       {cat}
      </ul>
      
    </div>
  )
}

export default ShopDetial
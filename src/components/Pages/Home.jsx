import React from 'react'
import Mainpage from '../Mainpage/Mainpage';
import SupportArea from '../SupportArea/SupportArea';
import WhatsNew from '../WhatsNew/WhatsNew';
import Subscribe from '../Subscribe/Subscribe';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Poducts from '../Products/Poducts';

function Home() {
 
  return (
    <div>
      <>
      <Mainpage />
      <SupportArea/>
      <WhatsNew/>
      <Poducts  />
      <Subscribe/>
      <Banner/>
      <Footer/>    
      </>
    </div>
  )
}

export default Home
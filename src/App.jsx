import './App.css';
import Navbar from './components/Navbar/Navbar';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import Shop from './components/Pages/Shop';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Blog from './components/Pages/Blog';
import WomenWears from './components/store/WomenWears';
import Order from './components/OrderPage/Order';
import MenWears from './components/store/MenWears';
import Accessories from './components/store/Accessories';
import BridalWear from './components/store/BridalWear';
import Handbags from './components/store/Handbags';
import KidsCollection from './components/store/KidsCollection';
import LuxuryItems from './components/store/LuxuryItems';
import Perfume from './components/store/Perfume';
import Shoes from './components/store/Shoes';
import Sunglasses from './components/store/Sunglasses';
import { CartProvider } from './components/contextpage/CartContext.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <CartProvider>
      <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
        <BrowserRouter>
          <Navbar />
          <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/about' element={<About />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/order' element={<Order />} />
            <Route path='/womenwears' element={<WomenWears />} />
            <Route path='/accessories' element={<Accessories />} />
            <Route path='/bridalwear' element={<BridalWear />} />
            <Route path='/handbags' element={<Handbags />} />
            <Route path='/kidscollection' element={<KidsCollection />} />
            <Route path='/luxuryitems' element={<LuxuryItems />} />
            <Route path='/menwear' element={<MenWears />} />
            <Route path='/perfume' element={<Perfume />} />
            <Route path='/shoes' element={<Shoes />} />
            <Route path='/sunglasses' element={<Sunglasses />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;

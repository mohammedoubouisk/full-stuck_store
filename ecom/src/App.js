
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Component/Footer/Footer';

import men_banner from './Component/Assets/banner_mens.png';
import banner_women from './Component/Assets/banner_women.png'
import kid_banner from './Component/Assets/banner_kids.png';
import { Login } from './Pages/Login';
import { useState, useEffect } from 'react';




function App() {
  const [check, setcheck] = useState({})

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setcheck(JSON.parse(localStorage.getItem('token')))
    }
  }, [])

  return (
    <div>

      {
        Object.keys(check).length > 0 && (
          <>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path='/' element={<Shop />} />
                <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
                <Route path='/womens' element={<ShopCategory banner={banner_women} category="women" />} />
                <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />

                <Route path='/product' element={<Product />} />
                <Route path=':productId' element={<Product />} />
                <Route />
                <Route path='/cart' element={<Cart />} />
                <Route path='/register' element={<LoginSignup />} />
                <Route path='/login' element={<Login />} />

              </Routes>
              <Footer />
            </BrowserRouter>
          </>
        )
      }

      {
        Object.keys(check).length === 0 && (
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/register' element={<LoginSignup />} />
              <Route path='/login' element={<Login />} />
              <Route path='*' element={<h1 style={{"fontSize":"50px","padding":"100px 0px","color":"red","textAlign":"center"}}>Error 404 Not Found</h1>}/>
            </Routes>
            <Footer />
          </BrowserRouter>
        )
      }

    </div>
  );
}

export default App;

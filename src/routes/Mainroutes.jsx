import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'motion/react'

import Home from '../pages/Home'
import Products from '../pages/Products'
import ProductDetail from '../pages/ProductDetails'
import About from '../pages/About'
import Login from '../pages/Auth'

const Mainroutes = () => {

  const location = useLocation(); // Get the current location for AnimatePresence

  return (
    <AnimatePresence mode="wait"> 
    <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/About" element={<About />} />
        <Route path="/Auth" element={<Login />} />
      
    </Routes>
    </AnimatePresence>
  );
};

export default Mainroutes;
import React, { useState } from 'react';
import ProductList from './ProductList';
import CartModal from './CartModal';
import OrderForm from './OrderForm';
import { Routes, Route, Link } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import './App.css';

const App = () => {
    const [cart, setCart] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);


    const addToCart = (product) => {
        setCart((cart) => [...cart, product]);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsOrderFormOpen(false);
    };
    const clearCart = () => {
        setCart([]); 
    }

    const totalPrice = cart.reduce((total, product) => total + product.price, 0);

    return (
        <div>
          <Navbar />
          <h1>فروشگاه آنلاین</h1>
             
            <Navbar />

            {(isModalOpen || isOrderFormOpen) && <div className="overlay"></div>}

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductList addToCart={addToCart} />}/>
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
            </Routes>



            {isModalOpen && (
            <CartModal
              cart={cart}
              totalPrice={totalPrice}
              closeModal={closeModal}
              openOrderForm={() => setIsOrderFormOpen(true)}
            />
            )}
            {isOrderFormOpen && (
            <OrderForm
              closeModal={closeModal}
              cart={cart}
              totalPrice={totalPrice}
              clearCart={clearCart}
            />
            )}
        </div>
    );
};

export default App;
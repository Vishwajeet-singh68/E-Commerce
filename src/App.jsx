import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Products from "./components/Products";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import BuyNow from "./components/BuyNow";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const [cartItems,setCartItems]=useState([]);
  const [cartContent,setCartContents]=useState([]);

  function handleAddToCart(product){
    setCartItems((prevCartItems)=>[...prevCartItems,product]);
    setCartContents((prev)=>[...prev,product.id]);
  }

  function removeFromCart(id){
    setCartItems(cartItems.filter((item)=>item.id!=id));
  }
  
  return (
    <div>
      <BrowserRouter>
        <Navbar cart={cartItems.length}/>
        <Routes>
          <Route path="/" element={<Category/>}/>
          <Route path="/Products" element={<Products/>}/>
          <Route path="/Cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart}/>}/>
          <Route path="/BuyNow" element={<BuyNow/>}/>
          <Route path="/Products/:id" element={<ProductDetails addToCart={handleAddToCart} cartContent={cartContent}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
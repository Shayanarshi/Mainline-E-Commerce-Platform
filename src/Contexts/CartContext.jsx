import js from '@eslint/js';
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(()=> JSON.parse(localStorage.getItem("cartData"))|| []);

  let [showCart, setShowCart] = useState(CartContext)

  const addToCart = (item) => {
    let updateData = [...cart, item];
    setCart(updateData);
    localStorage.setItem("cartData",JSON.stringify(updateData))
    alert("Item added to cart")
  };

  const removeFromCart = (itemId) => {

    let updateData = cart.filter(item => item.id !== itemId);
    setCart(updateData);
    localStorage.setItem("cartData".JSON.stringify(updateData))

    
    alert("Are you Sure to remove item from cart?");
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, showCart, setShowCart }}>
      {children}
    </CartContext.Provider>
  );
};
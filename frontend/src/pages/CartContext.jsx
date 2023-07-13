import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {

  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (productToRemove) => {
    setCartItems(cartItems.filter(product => product._id != productToRemove._id));
  }

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, removeFromCart }}>
      {props.children}
    </CartContext.Provider>
  );
  };

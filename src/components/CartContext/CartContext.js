import React, { createContext, useContext, useState } from 'react'

export const CartContext = createContext({})
export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  const clearCart = () => setCart([]);
  const isInCart = (selectedProduct) => cart.filter((item) => item.id === selectedProduct.id).length === 0;

  const addToCart = (selectedProduct) => {
    if (isInCart(selectedProduct)) {
      setCart([...cart, selectedProduct])
    } else { return selectedProduct }
  };
 
  const removeFromCart = (selectedProduct) => {
    let removeFiltered = cart.filter(
      (item) => item.id !== selectedProduct.id
    );
    setCart(removeFiltered);
  };

  const cartLength = () =>{
    return cart.reduce((acc, item) => acc + item.quantity, 0)
  };

  const removeItemFromCart = id => setCart(cart.filter(item=>item.id !==id))

  return  <CartContext.Provider
            value={{ 
              cartLength,
              cart,
              setCart,
              clearCart,
              removeFromCart,
              addToCart,
              isInCart,
              removeItemFromCart
            }}>
            {children}
          </CartContext.Provider>
}

import React from 'react'
import { useCartContext } from '../CartContext/CartContext';
import cartLogo from '../../assets/cart.png'

export const CartWidget = () => {
  const { cart } = useCartContext();
  const cartLength = cart.reduce((acc, item) => { return acc + item.quantity}, 0 )
  
  return (
    <>
      {cartLength !== 0 &&
        <div>
          <img src={ cartLogo } className="cart" alt="cart"/>
          <span className="cartNumber">{'' + cartLength }</span>
        </div>
      }
    </>
  )
}


import React from 'react';
import { Redirect } from 'react-router-dom';
import { useCartContext } from '../CartContext/CartContext';

export const Cart = () => {
  const {cart, clearCart, removeItemFromCart} = useCartContext();

  if (!cart.length) return <Redirect to='/' />;

  return (
    <div className="container mt-5">
      {cart.map((item) => (
        <p key={item.id}>
          <strong> Artículo en Carrito:</strong> {item.title} - 
          <strong> Cantidad:</strong> {item.quantity} - 
          <strong> Precio Unitario:</strong> $ {item.price} - 
          <strong> Subtotal: ${ item.price * item.quantity }</strong>
          <span className="btn btn-sm btn-danger ml-2" onClick={ () => removeItemFromCart(item.id) }>X</span>
        </p> 
        ))}
        <hr />
        <h2>Precio Total: ${cart.reduce((acc, {quantity, price}) => acc + quantity * price, 0)  }</h2>
        <hr />
      <button className="btn btn-sm btn-danger" onClick={clearCart}>Vaciar Carrito</button>
    </div>
  )
}

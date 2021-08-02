import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../CartContext/CartContext';

export const Cart = () => {
  const {cart, clearCart, removeItemFromCart} = useCartContext();

  return (
    <>
      {cart.length > 0
        ? <>
          <div className="container mt-1">
            <table>
              <thead>
                <tr>
                  <th className="pl-5">Imagen</th>
                  <th className="pl-5">Producto</th>
                  <th className="pl-5">Cantidad</th>
                  <th className="pl-5">Precio</th>
                  <th className="pl-5">Subtotal</th>
                  <th className="pl-5">Remover</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                <tr key={item.id}>
                  <img className="ml-5" src={ item.pictureUrl } alt={ item.title } style={{ maxWidth: 70 }}></img>
                  <td className="pl-5">{ item.title}</td>
                  <td className="pl-5">{ item.quantity}</td>
                  <td className="pl-5">${ item.price }</td>
                  <td className="pl-5">${ item.price * item.quantity }</td>
                  <td className="btn btn-danger ml-5" onClick={ () => removeItemFromCart(item.id) }>X</td>
                </tr>
                ))}
              </tbody>
            </table>
            <hr />
            <h2>Precio Total: ${cart.reduce((acc, { quantity, price }) => acc + quantity * price, 0)  }</h2>
            <hr />
            <button className="btn btn-danger" onClick={ clearCart }>Vaciar Carrito</button>
          </div>
          </>

        : <> <div className="container mt-5">
              <h3 className="alert alert-info" >Carrito vacío</h3>
              <hr />
              <Link to='/'> <button className="btn btn-danger">Volver a Home</button></Link>
            </div>
          </>
      }
    </>
  )
}

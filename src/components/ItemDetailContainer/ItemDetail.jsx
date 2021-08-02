import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../CartContext/CartContext';
import { ItemCount } from '../ItemCount/ItemCount';
import { Loader } from '../Loader/Loader';

const ItemDetail = ({ selectedProduct, loader }) => {
  const [counter, setCounter] = useState(1);
  const [added, setAdded] = useState(false);
  const { cart, addToCart, removeFromCart, checkStock } = useCartContext();

  const stock = checkStock(selectedProduct)

  const handleAdd = () => setAdded(!added);
  const handleToCart = () => { addToCart({ ...selectedProduct, quantity: counter }) }
  const handleRemoveFromCart = () => { removeFromCart(selectedProduct) }

  useEffect(() => {
    cart.filter((element) => element.id === selectedProduct.id).length > 0 &&
    setAdded(true);
  },[cart, selectedProduct.id]);

  const handleModifyCounter = () => { 
    handleRemoveFromCart()
    handleAdd()
  }

  const handleButtonAddtoCart = () => {
    handleAdd()
    handleToCart()
  }

  return (
    <>
      {loader === 'Cargando...' 
      ? <Loader />
      : (
        selectedProduct && (
        <div className="container">
          <div className="row mt-5">
            <div className="col-4">
              <img src={selectedProduct.pictureUrl} alt={selectedProduct.title} className="img-thumbnail"/>
            </div>


            <div className="col-4">
              <h3>{ selectedProduct.title }</h3>
              <p> { selectedProduct.description }</p>

              {stock > 0 ? <>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"> <b> Precio:</b> ${ selectedProduct.price } </li>
                <li className="list-group-item"> <b> Stock: </b> { selectedProduct.stock } </li>
              </ul>


              {!added  
              ?   (<>   <ItemCount initial={1} stock={ selectedProduct.stock } counter={ counter } setCounter={ setCounter }/>
                        <button className="btn btn-info mt-2" onClick={ handleButtonAddtoCart }> Agregar al Carrito </button>
                    </>)
                :  (<>  <Link to='/cart' onClick={ handleAdd }> 
                          <button className="btn btn-sm btn-danger" onClick={ handleAdd }> Terminar Compra </button>
                        </Link>
                        <button className="btn btn-sm btn-info ml-2" onClick={ handleModifyCounter }> Modificar </button>
                    </>)
              }
            <hr />
          </>
          : <>
              <h3 className="text-info">
                  Sin Stock!
              </h3>
            </>
          } 
            </div>
          </div>
        </div>
        )
      )}
    </>
  )
}

export default ItemDetail

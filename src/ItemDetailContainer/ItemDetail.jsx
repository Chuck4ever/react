import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ItemCount } from '../components/ItemCount/ItemCount';
import { Loader } from '../components/Loader/Loader';

const ItemDetail = ({ products, loader }) => {
  const itemId = useParams();
  const [selectedProduct, setSelectedProduct] = useState([]);

  useEffect(() => {
    let filterProduct = products.filter((product) => product.id.toString() === itemId.id);
    setSelectedProduct(filterProduct[0])
  }, [itemId, products])


  return (
    <>
      {loader === 'Cargando...' 
      ? <Loader />
      : (
        selectedProduct && (
        <div className="container">
          <div className="row mt-5">
            <div className="col-4">
              <img src={selectedProduct.pictureUrl} alt={selectedProduct.alt} className="img-thumbnail"/>
            </div>

            <div className="col-4">
                <h3>{ selectedProduct.title }</h3>
                <p> { selectedProduct.description }</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"> <b> Precio:</b> ${ selectedProduct.price } </li>
                  <li className="list-group-item"> <b> Stock: </b> { selectedProduct.stock } </li>
                </ul>
                <ItemCount initial={0} price={ selectedProduct.price } stock={ selectedProduct.stock }/>
            </div>
          </div>
        </div>
        )
      )}
    </>
  )
}

export default ItemDetail

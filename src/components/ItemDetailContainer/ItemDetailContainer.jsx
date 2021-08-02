import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { database } from '../firebase/firebase';
import { Loader } from '../Loader/Loader';
import ItemDetail from './ItemDetail';



const ItemDetailContainer = () => {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [promiseStatus, setPromiseStatus] = useState(null)
  console.log(setPromiseStatus)

  useEffect(() => {
    (async() => {
      const resolve = await database.doc(id).get();
      setSelectedProduct({ id: resolve.id, ...resolve.data()})
    })()
  }, [id]);

  if (selectedProduct.length < 1) {
    return <Loader />
  } else {
  return (
    <div>
       <ItemDetail loader={promiseStatus} selectedProduct={selectedProduct}/>
    </div>
  )}
}

export default ItemDetailContainer;

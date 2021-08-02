import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const dataPromiseDetail = () => {
  return new Promise ((resolve, reject) => {
    setTimeout(
      () => 
      resolve([
        {id:1, title:'All Star W', category: 'zapatillas', description: 'Zapatillas Adidas All Star. Cuero color Blanco, suela de caucho. Made in Argentina',  price:100, stock: 2, pictureUrl: '/assets/images/zapa-blanca.jpg'},
        {id:2, title:'All Star B', category: 'zapatillas', description: 'Zapatillas Adidas All Star. Cuero color Negro, suela de caucho. Made in Argentina', price:200, stock: 4, pictureUrl:'/assets/images/zapa-negra.jpg'},
        {id:3, title:'Gorra White', category: 'gorras', description: 'Gorra Adidas Trucker Blanca, hecha 100% de poliester. Made in Argentina', price:20, stock: 5, pictureUrl:'/assets/images/gorra-blanca.jpg'},
        {id:4, title:'Gorra Black', category: 'gorras', description: 'Gorra Adidas Trucker Negra, hecha 100% de poliester. Made in Argentina', price:40, stock: 6, pictureUrl:'/assets/images/gorra-negra.jpg'},
      ]),2000
    );
  });
};

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [promiseStatus, setPromiseStatus] = useState('Cargando...')

  const getPromise = () => {
    dataPromiseDetail()
    .then((info) => {
      const foundItem = info.find(item => item.id === +id)
      setPromiseStatus('Success')
      setSelectedProduct(foundItem)
    });
  };

  useEffect(() => {
    getPromise();
  // eslint-disable-next-line
  }, []);

  return (
    <div>
       <ItemDetail loader={promiseStatus} selectedProduct={selectedProduct}/>
    </div>
  )
}

export default ItemDetailContainer;

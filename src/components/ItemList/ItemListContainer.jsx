import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';

const dataPromise = () => {
  return new Promise ((resolve, reject) => {
    setTimeout(
      () => 
      resolve([
        {id:1, title:'All Stars W', category: 'zapatillas', description: 'Zapatillas Adidas 1',  price:100, stock: 2, pictureUrl: '/assets/images/zapa-blanca.jpg'},
        {id:2, title:'All Stars B', category: 'zapatillas', description: 'Zapatillas Adidas 2', price:200, stock: 4, pictureUrl:'/assets/images/zapa-negra.jpg'},
        {id:3, title:'Gorra White', category: 'gorras', description: 'Gorra Adidas 1', price:20, stock: 5, pictureUrl:'/assets/images/gorra-blanca.jpg'},
        {id:4, title:'Gorra Black', category: 'gorras', description: 'Gorra Adidas 2', price:40, stock: 6, pictureUrl:'/assets/images/gorra-negra.jpg'},
      ]),2000
    );
  });
};

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [promiseListStatus, setPromiseListStatus] = useState('Cargando');

 // Función donde consulto la promesa
  const getPromise = () => {
    dataPromise()
    .then((info) => {
      setItems(info)
      setPromiseListStatus('Success')
    });
  };

  useEffect(() => {
    getPromise();
  }, []);

  return (
    <div>
      <ItemList loader={ promiseListStatus } items={ items }/>
    </div>
  )
}


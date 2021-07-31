import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList';

const dataPromise = () => {
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

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [promiseListStatus, setPromiseListStatus] = useState('Cargando');
  const categoryId = useParams();

 // Función donde consulto la promesa
  const getPromise = () => {
    dataPromise()
    .then((info) => {
      setItems(info)
      filterByCategory(info)
      setPromiseListStatus('Success')
    });
  };

  useEffect(() => {
    getPromise();
    // eslint-disable-next-line
  }, [categoryId]);

  const filterByCategory = (data) => {
    //console.log(data)
    let productFiltered;

    switch (categoryId.id) {
      case undefined:
        productFiltered = data;
        break;
  
        case 'zapatillas':
          productFiltered = data.filter(
          (prod) => prod.category === 'zapatillas');
        break;
  
      case 'gorras':
        productFiltered = data.filter(
          (prod) => prod.category !== 'zapatillas');
        break;
  
      default:
        productFiltered = data;
        break;
    }
    setItems(productFiltered);
  }

  return (
    <div>
      <ItemList loader={ promiseListStatus } items={ items }/>
    </div>
  )
}


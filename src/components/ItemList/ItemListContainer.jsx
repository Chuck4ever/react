import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { database } from '../firebase/firebase';
import { Loader } from '../Loader/Loader';
import { ItemList } from './ItemList';

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id: categoryId} = useParams();

  useEffect(() => {
    (async () => {
      let categoryProducts = database
      if (categoryId)
        categoryProducts = database.where("category", "==", categoryId)
        const response = await categoryProducts.get();
        setItems( response.docs.map((item) => ({ id: item.id, ...item.data() })) );
    })()
  },[categoryId]);
    
  if (items.length < 1) {
    return <Loader />
  } else {
  return (
    <div>
      <ItemList items={ items }/>
    </div>
  )
  }
}


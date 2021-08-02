import React from 'react'
import { Link } from 'react-router-dom'
// import { ItemCount } from '../ItemCount/ItemCount'

export const Item = ({ ...item }) => {

  return (
    <div className="card text-center shadow ml-2">
      <div className="overflow">
        <img src={ item.pictureUrl } className="card-img-top" alt={ item.title } />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{ item.title }</h4>
        <p className="card-text text-secondary"> { item.description } </p>
        <h5 className="card-price">Precio: $ { item.price } </h5>
        <p>Stock: { item.stock } </p>
        {/* <ItemCount initial={ 1 } stock={ stock } /> */}
        <Link to={ `/item/${item.id}`}>
          <button className="btn btn-outline-info">+Info</button>
        </Link>
      </div>
    </div>
  )
}

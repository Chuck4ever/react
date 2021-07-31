import React from 'react'
import { Link } from 'react-router-dom'
// import { ItemCount } from '../ItemCount/ItemCount'

export const Item = ({ pictureUrl, title, description, price, stock, id }) => {

  console.log(title)

  return (
    <div className="card text-center shadow ml-2">
      <div className="overflow">
        <img src={ pictureUrl } className="card-img-top" alt={ title } />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{ title }</h4>
        <p className="card-text text-secondary"> { description } </p>
        <h5 className="card-price">Precio: $ { price } </h5>
        <p>Stock: { stock } </p>
        {/* <ItemCount initial={ 1 } stock={ stock } /> */}
        <Link to={ `/item/${id}`}>
          <button className="btn btn-outline-info">Detalles...</button>
        </Link>
      </div>
    </div>
  )
}

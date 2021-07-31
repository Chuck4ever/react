import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount'

export const Item = ({ pictureUrl, title, description, price, stock, counter, initial }) => {

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
        <ItemCount initial={ 1 } stock={ stock } />
      </div>
    </div>
  )
}

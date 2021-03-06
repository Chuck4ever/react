import React from 'react'
import { Loader } from '../Loader/Loader'
import { Item } from './Item'

export const ItemList = ({ items, loader }) => {
  return (
    <>
      {loader === 'Cargando' 
      ? <Loader />
      : (
        <div className="container-fluid d-flex justify-content-center" >
          <div className="row col-md-8">
            {items.map((item) => {
              return (
                <div className="col mb-4" key={ item.id }>
                  <Item 
                    { ...item }
                  />
                </div>
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}

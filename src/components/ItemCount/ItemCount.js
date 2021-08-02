import React from 'react'
import './ItemCount.css'

export const ItemCount = ({initial, counter, setCounter, stock}) => {

  const handleDecrement = () => { counter > initial && setCounter(counter - 1) }
  const handleIncrement = () => { counter < stock && setCounter(counter + 1) }

  return (
    <>
      <div>
        <div className="buttonGroup">
          <span><button className="btn btn-info btn-circle functionButton" onClick={ handleDecrement } disabled={ counter === initial }> - </button></span>
          <span><h3 className="counter"> { counter } </h3></span>
          <span><button className="btn btn-info btn-circle functionButton" onClick={ handleIncrement } disabled={ counter === stock }> + </button></span>
        </div>
      </div>
    </>
  )
}
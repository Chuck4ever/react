import React, { useState } from 'react'

export const ItemCount = ({initial, stock}) => {
const [count, setCount] = useState(initial);

  const handleDecrement = () => setCount(count - 1)
  const handleIncrement = () => setCount(count + 1)

  return (
    <div>
      <button className="btn btn-info btn-circle" onClick={ handleDecrement } disabled={count <= initial}> - </button>
      <strong>{ count }</strong>
      <button className="btn btn-info btn-circle" onClick={ handleIncrement } disabled={count === stock}> + </button>
    </div>
  )
}

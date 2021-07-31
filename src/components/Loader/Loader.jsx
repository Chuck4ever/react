import React from 'react'

export const Loader = () => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="spinner-border text-info" role="status">
          <span className="sr-only">Loading...</span>
        </div>
          <h3 className="ml-2 mt-1">Loading...</h3>
      </div>
    </div>
  )
}

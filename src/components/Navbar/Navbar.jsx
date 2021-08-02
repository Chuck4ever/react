import React from 'react'
import { NavLink } from 'react-router-dom'
import { CartWidget } from './CartWidget'

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light mt-4">
        <NavLink className="navbar-brand text-info" to="/"><h1>e-Shop</h1></NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end mr-5" id="navbarNavDropdown" >
          <ul className="navbar-nav" >
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/zapatillas">Zapatillas</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/gorras">Gorras</NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/cart">
          <CartWidget />
        </NavLink>    
      </nav>
    </>
  )
}

    
 
import React from 'react';
import { NavLink } from 'react-router-dom';
import Cart from '../Cart/Cart'

const Navbar = () => {
  
  return(
    <nav className="navbar navbar-expand-lg">
      <div className="row px-3 mx-0">          
        <div className="col px-0">
        <NavLink to="/" className="navbar-marca dlv-logo px-0">
            <span className="">
              <strong>e-Shop</strong>
            </span>
        </NavLink>
        </div>
        <div className="col-2 col-lg-10 px-0 mx-0">
          <span className="menu-btn d-block d-lg-none text-right ml-auto mr-0">
            <span>
              <i className="icon ico-bars"></i>
            </span>
          </span>

          <ul className="navbar-nav d-none d-lg-block text-right px-0 mx-0">
            <li className="nav-item">
                <NavLink className="nav-link" to="/category/home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/zapatillas">Zapatillas</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/gorras">Gorras</NavLink>
            </li>
            <li className="nav-item">
              <button className="nav-link">
                <Cart />  
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav> 
    // <div className="nav">
    // <h1 className="navbar-marca dlv-logo px-0">
    //   <a>
    //     <strong className="px-3">e-Shop</strong>
    //   </a>
    // </h1>
    // <nav>
    //   <ul className="navbar-nav d-none d-lg-block px-0 mx-0">
    //     <li className="nav-item">
    //       <a className="nav-link active" aria-current="page"><span>01</span> Inicio</a>
    //     </li>
    //     <li className="nav-item">
    //       <a className="nav-link"><span>02</span> Quienes Somos</a>
    //     </li>
    //     <li className="nav-item">
    //       <a className="nav-link"><span>03</span> Contacto</a>
    //     </li>
    //     <li className="nav-item">
    //       <a className="nav-link"><i className="icon ico-cart"></i></a>
    //     </li>
    //   </ul>
    // </nav>
      
    // </div>
  )
}

export default Navbar;

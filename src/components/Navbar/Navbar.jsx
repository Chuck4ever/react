import React from 'react';
import Cart from '../Cart/Cart'

const Navbar = () => {
  
  return(
    <nav className="navbar navbar-expand-lg">
      <div className="row px-3 mx-0">          
        <div className="col px-0">
          <h1 className="navbar-marca dlv-logo px-0">
            <span className="">
              <strong>e-Shop</strong>
            </span>
          </h1>
        </div>
        <div className="col-2 col-lg-10 px-0 mx-0">
          <span className="menu-btn d-block d-lg-none text-right ml-auto mr-0">
            <span>
              <i className="icon ico-bars"></i>
            </span>
          </span>
          <ul className="navbar-nav d-none d-lg-block text-right px-0 mx-0">
            <li className="nav-item">
              <span className="nav-link active" aria-current="page"><span>01</span> Inicio</span>
            </li>
            
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" id="navbarDropdownWorks" data-bs-toggle="dropdown" aria-expanded="false"><span>02</span> Categorías <i className="icon ico-chevron-down"></i>
              </span>
              <div id="drop-works-menu" className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownWorks">
                <span><span className="dropdown-item">Sitios Web</span></span>
              </div>
            </li>
            <li className="nav-item">
              <span className="nav-link"><span>03</span> Contacto</span>
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

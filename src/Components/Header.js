import React from 'react'
import{Link} from 'react-router-dom'
import "./Header.css";

function Header({cartitems}) {
    return (
     <div className="header">
         <nav className="navbar sticky-top bg-dark justify-content-between">
         <a className="navbar-brand">Shopping Website</a>
         <div id="cart">
         <button id="sign"  className="btn btn-outline-primary my-2 my-sm-0">Sign up</button>
        <Link to="/cart"><button type="button" className="btn btn-primary" id="cart">Cart <span className="badge badge-light">{ cartitems.length }</span></button></Link>
         </div>

        </nav>
     </div>
    )
}

export default Header;

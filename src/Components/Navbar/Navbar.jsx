import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo-transparent.png'
import cartLogo from '../Assets/cart-logo.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
        <img className='nav-logo' src={logo} alt=''/>
        <h3 className='nav-logo-title'>OPULENCE</h3>
      </div>
      <ul className='nav-menu'>
        <li>Shop</li>
        <li><Link to={"/womens"}>Women</Link></li>
        <li><Link to={"/mens"}>Men</Link></li>
        <li><Link to={"/jewelery"}>Jewelery</Link></li>
        <li><Link to={"/electronics"}>Electronics</Link></li>
      </ul>
      <div className='nav-cart-login'>
        <button><Link to={"/login"}>Login</Link></button>
        <Link to={"/cart"}><img src={cartLogo} alt=''/></Link>
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  )
}

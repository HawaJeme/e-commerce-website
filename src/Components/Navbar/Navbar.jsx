import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo-transparent.png'
import cartLogo from '../Assets/cart-logo.png'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
        <img className='nav-logo' src={logo} alt=''/>
        <h3 className='nav-logo-title'>OPULENCE</h3>
      </div>
      <ul className='nav-menu'>
        <li>Shop</li>
        <li>Women</li>
        <li>Men</li>
        <li>Jewelery</li>
        <li>Electronics</li>
      </ul>
      <div className='nav-cart-login'>
        <img src={cartLogo} alt='' />
        <button>login</button>
      </div>
    </div>
  )
}

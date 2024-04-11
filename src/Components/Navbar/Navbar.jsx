import {React, useContext} from 'react'
import './Navbar.css'
import logo from '../Assets/logo-transparent.png'
import cartLogo from '../Assets/cart-logo.png'
import { Link } from 'react-router-dom'
import { DataContext } from '../../Context/DataContext'

export const Navbar = () => {
  const {cartTotalItems} = useContext(DataContext)
  return (
    <div className='navbar'>
      <div>
        <img className='nav-logo' src={logo} alt=''/>
        <h5 className='nav-logo-title'>OPULENCE</h5>
      </div>
      <ul className='nav-menu'>
        <li><Link to={"/"}>Shop</Link></li>
        <li><Link to={"/womens"}>Women</Link></li>
        <li><Link to={"/mens"}>Men</Link></li>
        <li><Link to={"/jewelery"}>Jewelery</Link></li>
        <li><Link to={"/electronics"}>Electronics</Link></li>
      </ul>
      <div className='nav-cart-login'>
        <Link to={"/login"}><button>Login</button></Link>
        <Link to={"/cart"}><img src={cartLogo} alt=''/></Link>
        <div className='nav-cart-count'>{cartTotalItems()}</div>
      </div>
    </div>
  )
}

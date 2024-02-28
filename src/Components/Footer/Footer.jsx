import React from 'react'
import './Footer.css'
import logo from '../Assets/logo-transparent.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={logo} alt=''/>
            <h3 className='footer-logo-title'>OPULENCE</h3>
        </div>
        <ul className='footer-links'>
            <li>Products</li>
            <li>Offers</li>
            <li>Contact</li>
            <li>About</li>
        </ul>
        <p className='footer-copyright'>Copyright @ 2024 - All rights reserved</p>
    </div>
  )
}

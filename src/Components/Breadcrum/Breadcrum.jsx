import React, { useState } from 'react'
import './Breadcrum.css'
import line from '../Assets/narrow-line.png'

export const Breadcrum = ({product}) => {

    return (
        <>
        <div className='Breadcrum'>
            Home <img src={line} alt=''/>
            Shop <img src={line} alt=''/>
            {product.category}
            <img src={line} alt=''/>
            {product.title}
        </div>
    </>
    )
}

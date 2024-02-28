import React from 'react'
import "./Products.css"

export const Products = ({product, ...props}) => {
    return (
        <div className='product-div' key={props.key}>
            <img className='product-img' src={product.image} alt=''/>
            <h4 className='product-name'>{product.title}</h4>
            <h5 className='product-price'>${product.price}</h5>
            <p className='product-description'>{product.description}</p>
        </div>
    )
}
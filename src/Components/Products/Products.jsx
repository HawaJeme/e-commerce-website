import React from 'react'
import "./Products.css"
import { Link } from 'react-router-dom'

export const Products = ({product, ...props}) => {
    return (
        <div className='product-div' key={props.key}>
            <Link to={`/product/${product.id}`}><img className='product-img' src={product.image} alt=''/></Link>
            <h4 className='product-name'>{product.title}</h4>
            <h5 className='product-price'>SR {product.price}</h5>
        </div>
    )
}
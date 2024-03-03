import React from 'react'
import './ProductDetails.css'
import star from '../Assets/star-icon.png'

export const ProductDetails = ({product}) => {
  return (
    <div className='productDetails'>
        <div className='productDetails-leftSide'>
            <img className='productDetails-img' src={product.image} alt='' />
        </div>
        <div className='productDetails-RightSide'>
            <h2>{product.title}</h2>
            <div className='productDetails-rating'>
                <div>
                    <img className='star-icon' src={star} alt=''></img>
                    <p>{product.rating.rate}</p>
                </div>
                <p>({product.rating.count})</p>
            </div>
            <h3>SR {product.price}</h3>
            <p className='productDetails-description'>{product.description}</p>
            <h5>Select size</h5>
            <div className='productDetails-size'>
                <p>S</p>
                <p>M</p>
                <p>L</p>
                <p>XL</p>
                <p>XXL</p>
            </div>
            <button className='addToCart-btn'>Add to cart</button>
        </div>
    </div>
  )
}

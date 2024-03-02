import React, { useContext } from 'react'
import './ProductDetail.css'
import { DataContext } from '../../Context/DataContext'
import { useParams } from 'react-router-dom'

export const ProductDetail = (props) => {
    const allProducts = useContext(DataContext)
    const productId = useParams()
    const selectedProduct = allProducts.find(e => e.id === Number(productId))
    return (
        <div>
            <h3>select size</h3>
            <h3>Add to cart</h3>
        </div>
    )
}

import React, { useContext } from 'react'
import './ProductDisplay.css'
import { DataContext } from '../../Context/DataContext'
import { useParams } from 'react-router-dom'
import { Breadcrum } from '../Breadcrum/Breadcrum'
import { ProductDetails } from '../ProductDetails/ProductDetails'

export const ProductDisplay = (props) => {
    const {data} = useContext(DataContext)
    const Id = useParams()
    const selectedProduct = data.find((e) => e.id === Number(Id.productId))
    // console.log(selectedProduct)
    return (
        <>
        {selectedProduct && (
            <div>
                <Breadcrum product={selectedProduct} />
                <ProductDetails product={selectedProduct} />
            </div>
        )}
        </>
    )
}

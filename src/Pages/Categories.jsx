import React, { useContext } from 'react'
import { DataContext } from '../Context/DataContext'
import { Products } from '../Components/Products/Products'

export const Categories = (props) => {
  const productsData = useContext(DataContext)

    return (
        <div className='category'>
          {productsData.map((product, i) => {
            if(product.category === props.category){
              return <Products key={i} product={product}/>
            }
          })}
        </div>
    )  
}

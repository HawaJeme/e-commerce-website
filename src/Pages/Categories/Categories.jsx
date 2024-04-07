import React, { useContext } from 'react'
import { DataContext } from '../../Context/DataContext'
import { Products } from '../../Components/Products/Products'
import './Categories.css'

export const Categories = (props) => {
  const {data} = useContext(DataContext)
  
    return (
      <div className='category-container'>
        <h2 className='category-title'>{props.category}</h2>
        <div className='category'>
          {data.map((product, i) => {
            if(product.category === props.category){
              return <Products key={i} product={product}/>
            }
          })}
        </div>
      </div>
    )  
}

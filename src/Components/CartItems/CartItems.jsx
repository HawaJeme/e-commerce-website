import React, { useContext } from 'react'
import './CartItems.css'
import deleteIcon from '../Assets/delete-icon.png'
import { DataContext } from '../../Context/DataContext'

export const CartItems = () => {
    const {data, cartItems, removeFromCart} = useContext(DataContext)
    // const {data, cartItems, removeFromCart} = useContext(DataContext)
  return (
    <div className='cartItems'>
        <div className='cartItems-options'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        {data.map(e => {
            if(cartItems[e.id] > 0){
            return (
                <div>
                    <div className='cartItem-format'>
                        <img src={e.image} alt='' className=''/>
                        <p>{e.title}</p>
                        <p>SR{e.price}</p>
                        <button className='quantity'>{cartItems[e.id]}</button>
                        <p>{e.price*cartItems[e.id]}</p>
                        <img src={deleteIcon} onClick={()=>{removeFromCart(e.id)}} className=''></img>
                    </div>
                    <hr/>
                </div>)
            }
        })}
    </div>
  )
}

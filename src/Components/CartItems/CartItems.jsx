import React, { useContext } from 'react'
import './CartItems.css'
import deleteIcon from '../Assets/delete-icon.png'
import { DataContext } from '../../Context/DataContext'

export const CartItems = () => {
    const {data, cartItems, removeFromCart, cartTotal} = useContext(DataContext)
  return (
    <div className='cartItems'>
        <div className='cartItems-options'>
            <p>Product</p>
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
                    <div className='cartItems-format cartItems-options'>
                        <img src={e.image} alt='' className='cartItems-img'/>
                        <p>{e.title}</p>
                        <p>SR{e.price}</p>
                        <button className='quantity'>{cartItems[e.id]}</button>
                        <p>SR{e.price*cartItems[e.id]}</p>
                        <img src={deleteIcon} onClick={()=>{removeFromCart(e.id)}} className='deleteIcon'></img>
                    </div>
                    <hr/>
                </div>)
            }
            return null
        })}
        <div className='cartItems-totalSection'>
            <div className='cartItems-total'>
                <h1>Total price</h1>
                <div>
                    <div className='cartItems-total-option'>
                        <p>Subtotal</p>
                        <p>SR {cartTotal()}</p>
                    </div>
                    <hr></hr>
                    <div className='cartItems-total-option'>
                        <p>Shipping fee</p>
                        <p>Free</p>
                    </div>
                    <hr></hr>
                    <div className='cartItems-total-option'>
                        <h3>Total</h3>
                        <h3>SR {cartTotal()}</h3>
                    </div>
                </div>
                <button>Proceed to check-out</button>
            </div>
            <div className='cartItems-promocode'>
                <p>If you have a promocode enter it here:</p>
                <div className='cartItems-promocodeBox'>
                    <input type='text' placeholder='Promo-code'></input>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

import React, { createContext, useState, useEffect } from 'react';

const DataContext = createContext()

const DataProvider = ({ children }) => {  
    const [data, setData] = useState([])
    const [cartItems, setCartItems] = useState({})

    useEffect(()=> {
      fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setData(json)
        setCartItems(getCart(json))
      })
      .catch((error) => {
        console.error("Error fetching data:", error)
      })
    }, [])

    
    const getCart = (data)=> {
      let cart = {}
      for (let i = 0; i < data.length; i++) {
        cart[data[i].id] = 0
      }
      return cart
    }

    const addToCart = (itemId) =>{
      setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1}))
    }

    const removeFromCart = (itemId) =>{
      setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}))
    }

    const cartTotal = () => {
      let total = 0
      for(const item in cartItems){
        if(cartItems[item]>0){
          let itemData = data.find((prod) => prod.id === Number(item))
          total += itemData.price * cartItems[item]
        }
      }
      return total
    }
    
    const cartTotalItems = () => {
      let totalItems = 0
      for(const item in cartItems){
        if(cartItems[item]>0){
          totalItems += cartItems[item]
        }
      }
      return totalItems
    }

  console.log(cartItems)
  const contextVal = {data, cartItems, addToCart, removeFromCart, cartTotal, cartTotalItems}
  return (
    <DataContext.Provider value={contextVal}>
      {children}
    </DataContext.Provider>
  )
}

export { DataContext, DataProvider }

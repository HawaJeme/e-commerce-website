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
      // console.log(cartItems)
    }

    const removeFromCart = (itemId) =>{
      setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}))
    }

  console.log(cartItems)
  const contextVal = {data, cartItems, addToCart, removeFromCart}
  return (
    <DataContext.Provider value={contextVal}>
      {children}
    </DataContext.Provider>
  )
}

export { DataContext, DataProvider }

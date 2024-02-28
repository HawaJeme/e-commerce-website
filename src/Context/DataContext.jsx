import React, { createContext, useState, useEffect } from 'react';

const DataContext = createContext()

const DataProvider = ({ children }) => {
    const [data, setData] = useState([])

    useEffect(()=> {
      fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setData(json)
      })
    }, [])

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider }

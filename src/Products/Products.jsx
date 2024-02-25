import React, {useState, useEffect} from 'react'

export const Products = () => {
    const [womens, setWomens] = useState([])
    const [mens, setMens] = useState([])
    const [jewelery, setJewelery] = useState([])
    const [electronics, setElectronics] = useState([])
  
    useEffect(()=> {
      fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setWomens(json.filter(el => el.category === "women's clothing"))
        setMens(json.filter(el => el.category === "men's clothing"))
        setJewelery(json.filter(el => el.category === "jewelery"))
        setElectronics(json.filter(el => el.category === "electronics"))
      })
    }, [])
    const ExtractElements = ({product}) => {
      return (
        <div>
          {product.map(el => (
            <div key={el.id}>
              <h3>{el.title}</h3>
              <h5>{el.price}</h5>
              <p>{el.description}</p>
              <img src={el.image} alt=''/>
            </div>
            )
          )}
        </div>
      )}
    return (
      <div className='products'>
          <div className='categories'>
            <h2>Shop by category</h2>
            <div className='womens'>
              <h2>Womens section</h2>
              <ExtractElements product={womens}/>
            </div>
            <div className='mens'>
              <h2>Mens section</h2>
              <ExtractElements product={mens}/>
            </div>
            <div className='jewelery'>
              <h2>Jewelery section</h2>
              <ExtractElements product={jewelery}/>
            </div>
            <div className='electronics'>
              <h2>Electronics section</h2>
              <ExtractElements product={electronics}/>
            </div>
          </div>
      </div>
    )  
}

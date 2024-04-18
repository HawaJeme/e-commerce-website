import React, { useContext } from 'react'
import './Home.css'
import { DataContext } from '../../Context/DataContext'
import { Categories } from '../Categories/Categories'

export const Home = () => {
    const products = useContext(DataContext)
    return (
        <div className='home'>
            <div className='womens'>
                <Categories category="women's clothing" />
            </div>
            <div className='mens'>
                <Categories category="men's clothing" />
            </div>
            <div className='jewelery'>
                <Categories category="jewelery" />
            </div>
            <div className='electronics'>
                <Categories category="electronics" />
            </div>
        </div>
    )
}

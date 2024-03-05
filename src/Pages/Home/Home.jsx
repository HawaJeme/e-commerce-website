import React, { useContext } from 'react'
import './Home.css'
import { DataContext } from '../../Context/DataContext'

export const Home = () => {
    const products = useContext(DataContext)
    return (
        <div className='home'>Home</div>
    )
}

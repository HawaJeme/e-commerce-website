import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footer } from './Components/Footer/Footer'
import { Navbar } from './Components/Navbar/Navbar'
import { Categories } from './Pages/Categories/Categories'
import { Login } from './Pages/Login/Login'
import { Cart } from './Pages/Cart'
import { ProductDisplay } from './Components/ProductDisplay/ProductDisplay'
import { Home } from './Pages/Home/Home'
// import { AuthProvider } from "./Firebase/fbcontext";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/womens' element={<Categories category="women's clothing" />}></Route>
        <Route path='/mens' element={<Categories category="men's clothing"/>}></Route>
        <Route path='/jewelery' element={<Categories category="jewelery"/>}></Route>
        <Route path='/electronics' element={<Categories category="electronics"/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/product' element={<ProductDisplay/>}></Route>
        <Route path='/product/:productId' element={<ProductDisplay/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App

import React from 'react'
import Navbar from './components/Navbar'
import { Link } from 'react-router-dom'
import CartWidget from './components/CartWidget'

const Header = () => {
    return (
        <header id='menu'>
            <Link to="/">
                <h1 className='titulo'>MI E-COMMERCE</h1>
            </Link>
            <Link to="/carrito">
                <CartWidget/>
            </Link>
            <Navbar/>
        </header>   
    )
}

export default Header
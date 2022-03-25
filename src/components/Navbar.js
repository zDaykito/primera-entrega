import React from 'react'
import ItemListContainer from './ItemListContainer'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navmenu'>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/categoria/2">GALERIA</NavLink>
            <NavLink to="/categoria/3">CONTACTO</NavLink>
        </nav>
    )
}

export default Navbar
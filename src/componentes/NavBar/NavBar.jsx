import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import '../NavBar/NavBar.css'
import { Link,NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
        <h1>FAKE STORE REACT</h1>
        <nav className='navbar'>
            <ul>
                <li><NavLink to={'/'}>Inicio</NavLink></li>
                <li><NavLink to={'categoria/beauty'}>Belleza</NavLink></li>
                <li><NavLink to={'categoria/groceries'}>Almacen</NavLink></li>
            </ul>
        </nav>
        <a href=""><CartWidget/></a>
    </header>
  )
}

export default NavBar
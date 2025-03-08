import React from 'react'
import cart from '../../assets/carrito-de-compras.png'
import { useContext } from 'react'
import { carritoContext } from '../../context/CarritoProvider'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const {cantidad}= useContext(carritoContext);

  return (
    <div>
      <Link to="/cart">
        <img src={cart} alt="carrito de compra" />
        {
          cantidad> 0 && <strong>{cantidad}</strong>
        }
      </Link>
    </div>
  )
}

export default CartWidget
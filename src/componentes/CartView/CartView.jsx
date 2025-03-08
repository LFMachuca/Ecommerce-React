import React from 'react'
import { useContext } from 'react'
import { carritoContext } from '../../context/CarritoProvider'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'

const CartView = () => {

    const {carrito, vaciarCarrito, total, cantidad} = useContext(carritoContext);

    if (cantidad === 0) {
        return (
            <>
                <h2>No hay productos en el carrito</h2>
                <Link to="/">VER PRODUCTOS</Link>
            </>
        )
    }
  return (
    <div>
      {
      carrito.map(item =><CartItem  key={item.item.id} {...item}/>)
      }
      <h3>Total: ${Math.floor(total)}</h3>
      <h3>Cantidad:{cantidad}</h3>
      <button onClick={()=> vaciarCarrito()}>Vaciar Carrito</button>
      <Link to={'/checkout'}><button>Terminar Compra</button></Link>
    </div>
  )
}

export default CartView
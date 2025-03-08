import React from 'react'
import { useContext } from 'react'
import { carritoContext } from '../../context/CarritoProvider'


const CartItem = ({item, cantidad}) => {

    const {eliminarProducto}= useContext(carritoContext);

  return (
    <div>
        <h4>{item.title}</h4>
        <p>Cantidad:{cantidad}</p>
        <p>Precio: {item.price}</p>
        <button onClick={()=>eliminarProducto(item.id)}>Eliminar</button>

    </div>
  )
}

export default CartItem
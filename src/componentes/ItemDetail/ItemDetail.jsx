import React, { useState } from 'react'
import   './ItemDetail.css'
import { Link } from 'react-router-dom'
import { carritoContext } from '../../context/CarritoProvider'
import { useContext } from 'react'
import Contador from '../Contador/Contador'

const ItemDetail = ({id,title,price,images,stock}) => {

  const {agregarAlCarrito} = useContext(carritoContext);

  const [agregarCantidad , setAgregarCantidad] = useState(0);


  const handlerComprar = (cantidad)=>{

    setAgregarCantidad(cantidad);

    const item = {id,title,price}

    agregarAlCarrito(item,cantidad)
  }

  return (
    <div className='item-detail'>
      <img src={images} alt="" />
      <div className='detail-info'>
      <h3>{title}</h3> 
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde perferendis nihil accusamus repellat animi libero laboriosam doloribus molestiae, dolor facilis consequuntur cumque debitis voluptates itaque ducimus nostrum quidem illo rerum!</p>
      <div>
          <p>Disponibles:{stock}</p>
      </div>
      <h3>${price}</h3>

      <Contador inicio={1} stock={stock} funcionAgregar={handlerComprar}/>
      <Link to='/cart'>Ir al carrito</Link>
      </div>
    </div>
  )
}

export default ItemDetail
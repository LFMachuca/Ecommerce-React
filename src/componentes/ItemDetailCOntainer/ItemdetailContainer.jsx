import React, { useEffect, useState } from 'react'
import { getProductos, getProducto} from '../../../asyncMock'
import '../ItemDetailCOntainer/ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


const ItemdetailContainer = () => {

    const {id} = useParams();
     const [producto, setProducto]=useState(null)

     useEffect(() => {
        getProducto(id)
        .then(respuesta =>{
            setProducto(respuesta)
        })
        .catch(error => console.log(error))
     },[id])

     if (!producto) {
        return <p>Cargando .....</p>
     }
  return (
    <div className='detail-contenedor'>
      <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemdetailContainer
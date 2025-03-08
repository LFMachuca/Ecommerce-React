import React, { useEffect, useState } from 'react'
// import { getProductos, getProducto} from '../../../asyncMock'
import '../ItemDetailCOntainer/ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from '../../service/config';
import { doc, getDoc } from 'firebase/firestore';

const ItemdetailContainer = () => {

    const {id} = useParams();
     const [producto, setProducto]=useState(null)

     useEffect(() => {
      const getProducto = doc(db,'productos',id);
      getDoc(getProducto)
      .then(res =>{
        const data = res.data()
        const obtenerProducto = {id:res.id, ...data}
        setProducto(obtenerProducto)
      })
      .catch(err => console.log(err))
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
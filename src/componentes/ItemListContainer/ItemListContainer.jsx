import React, { useEffect, useState } from 'react'
import { getProductos, getProductosPorCategoria } from '../../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [productos, setProductos]=useState([])
    const {categoria}=useParams();
    // useEffect(()=>{
    //     getProductos()
    //     .then(respuesta => setProductos(respuesta))
    // }, [])

    useEffect(()=>{
      const traerProductos = categoria ? getProductosPorCategoria : getProductos

      traerProductos(categoria)
      .then(respuesta => setProductos(respuesta))

    },[categoria])
    
  return (
    <div>
        <h2>Nuestros Productos</h2>
        <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer
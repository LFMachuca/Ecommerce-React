import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import {db} from '../../service/config'
import { collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = () => {
    const [productos, setProductos]=useState([])
    const {categoria}=useParams();


    useEffect(()=>{
      const getProductos = categoria ? query(collection(db,'productos'),where('category','==',categoria)) : collection(db,'productos')
    
      getDocs(getProductos)
      .then(res =>{
        const productos = res.docs.map(doc => {
          const data = doc.data()
          return {id:doc.id, ...data}
        })
        setProductos(productos)
      })
      .catch(err => console.log(err))
    },[categoria])
    
  return (
    <div>
        <h2>Nuestros Productos</h2>
        <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer
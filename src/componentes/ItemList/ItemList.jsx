import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'
const ItemList = ({productos}) => {

  return (
    <div className='list-container'>
      
            {
                productos.map(p => <Item key={p.id}{...p}/>)
            }
        
    </div>
  )
}

export default ItemList
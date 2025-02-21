import React from 'react'
import '../Item/Item.css'
import { Link } from 'react-router-dom'
const Item = ({id,title,description,thumbnail,price}) => {
  return (
    <div className='product-card'>
      <div className='card-img'>
        <img src={thumbnail} alt={title} />
      </div>
        <div className='card-body'>
            <h3>{title}</h3>
            <p>{description}</p>
            <p><strong>${price}</strong></p>
        </div>
        <button className='card-btn'><Link to={`/producto/${id}`}>Detalle</Link></button>
    </div>
  )
}

export default Item
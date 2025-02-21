import React from 'react'
import   './ItemDetail.css'
const ItemDetail = ({id,title,price,images,stock}) => {
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
      <button className='btn-detail'>COMPRAR</button>
      </div>
    </div>
  )
}

export default ItemDetail
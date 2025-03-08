import React, { useState } from 'react'

const Contador = ({inicio, stock, funcionAgregar}) => {

    const [contador, setContador] = useState(inicio);

    const sumar = () => {
        if(contador < stock){
            setContador(contador + 1);
        }
    }
    const restar =()=>{
        if(contador > 1){
            setContador(contador - 1);
        }
    }
  return (
    <>
        <div>
            <button onClick={restar}>-</button>
            <span>{contador}</span>
            <button onClick={sumar}>+</button>
        </div>
        <button onClick={()=> funcionAgregar(contador)}>Agregregar al Carrito</button>
    </>
  )
}

export default Contador
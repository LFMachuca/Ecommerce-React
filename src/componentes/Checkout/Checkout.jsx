import React from 'react'
import { useState,useContext } from 'react'
import {carritoContext} from '../../context/CarritoProvider'
import {db}from '../../service/config'
import { collection,addDoc } from 'firebase/firestore'

const Checkout = () => {

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [emailConfirmacion, setEmailConfirmacion] = useState('')
    const [error , setError] = useState("")
    const [ordenId, setOrdenId] = useState("")

    const {carrito, total, vaciarCarrito} = useContext(carritoContext)

    const formularioHandler =(event)=>{
        event.preventDefault();

        //Validaciones
        if(!nombre || !apellido || !email || !telefono || !emailConfirmacion){
            setError("Todos los campos son obligatorios")
            return
        }

        if(email !== emailConfirmacion){
            setError("Los emails no coinciden")
            return
        }

        //Orden

        const orden = {
            item:carrito.map(producto =>({
                id: producto.id,
                title: producto.title,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre: nombre,
            apellido: apellido,
            email: email,
            telefono: telefono
        }
        console.log(orden);
        //Guardar en Firestore
        addDoc(collection(db, "ordenes"), orden)
        .then(docRef =>{
            setOrdenId(docRef.id)
            vaciarCarrito()
        })
        .catch(error =>{
            console.error("Error al guardar la orden", error)
        })
    }

  return (
    <div>
        <h2>Finaliza tu compra</h2>

        <form onSubmit={formularioHandler}>
            {
                carrito.map(producto =>{
                    <div key={producto.id}>
                        <p>{producto.title}</p>
                        <p>Cantidad: {producto.cantidad}</p>
                        <p>${producto.price}</p>
                    </div>
                })
            }
            <div>
                <label htmlFor="">Nombre</label>
                <input type="text" onChange={e=>setNombre(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Apellido</label>
                <input type="text" onChange={e=>setApellido(e.target.value)}  />
            </div>
            <div>
                <label htmlFor="">Telefono</label>
                <input type='tel' onChange={e=>setTelefono(e.target.value)}  />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="email" onChange={e=>setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Email confirmacion</label>
                <input type="email" onChange={e=>setEmailConfirmacion(e.target.value)} />
            </div>
            {
                error && <p style={{color:'red'}}>{error}</p>
            }
            <button type='submit'>Confirmar Compra</button>
            {
                ordenId && (
                    <strong>Compra realizada con exito. Nro de orden: {ordenId}</strong>
                )
            }
        </form>
    </div>
  )
}

export default Checkout
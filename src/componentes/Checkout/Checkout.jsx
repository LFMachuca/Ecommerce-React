import React from 'react'
import { useState,useContext } from 'react'
import {carritoContext} from '../../context/CarritoProvider'
import {db}from '../../service/config'
import { collection,addDoc, getDoc,doc,updateDoc} from 'firebase/firestore'

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
            item:carrito.map(producto => ({
                id: producto.item.id,
                title: producto.item.title,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre: nombre,
            apellido: apellido,
            email: email,
            telefono: telefono
        }

        //Guardar en Firestore
        Promise.all(
            orden.item.map(async (producto) =>{
                const productosRef = doc(db,"productos",producto.id)
                const productosDoc = await getDoc(productosRef)
                const stockActual = productosDoc.data().stock 

                await updateDoc(productosRef,{
                    stock: stockActual - producto.cantidad
                })
            })
        )
        .then(()=>{
            addDoc(collection(db,"ordenes"),orden)
            .then(docRef =>{
                setOrdenId(docRef.id)
                vaciarCarrito();
            })
            .catch(error =>{
                console.log("Error al generar la orden",error)
                setError("Error al generar la orden")
            })
        })
        .catch(error =>{
            console.log("Error al actualizar el stock",error)
            setError("Error al actualizar el stock")
        })
    }

  return (
    <div>
        <h2>Finaliza tu compra</h2>

        <form onSubmit={formularioHandler}>
            {
                carrito.map(producto =>(
                    <div key={producto.item.id}>
                        <p>{producto.item.title}</p>
                        <p>Cantidad: {producto.cantidad}</p>
                        <p>${producto.item.price}</p>
                    </div>
                ))
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
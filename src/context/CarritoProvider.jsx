import { useState, createContext, Children } from "react";

export const carritoContext = createContext({
    carrito:[],
    cantidad: 0,
    total: 0
});

export const carritoProvider = ({children}) => {

    const [carrito, setCarrito]=useState([]);
    const [total, setTotal]=useState(0);
    const [cantidad, setCantidad]=useState(0);


    const agregarAlCarrito=(item, cantidad)=>{
        const productoExistente = carrito.find(producto => producto.item.id === item.id)

        if (!productoExistente) {

            setCarrito(prev => [...prev, {item,cantidad}])
            setCantidad(prev => prev + cantidad)
            setTotal(prev => prev + (item.precio * cantidad))
        }else{
            const carritoActualizado = carrito.map(producto =>{
                if(producto.item.id === item.id){
                    return {...producto,cantidad: producto.cantidad + contador}
                }else{
                    return producto
                }
            })
            setCarrito(carritoActualizado);
            setCantidad(prev=>prev+cantidad);
            setTotal(prev=>prev+(item.precio * cantidad));
        }
    }

    return(
        <carritoContext.Provider value={(carrito,total,cantidad,agregarAlCarrito)}>
            {children}
        </carritoContext.Provider>
    )
}
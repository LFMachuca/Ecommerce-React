import { useState, createContext, Children } from "react";

export const carritoContext = createContext({
    carrito:[],
    cantidad: 0,
    total: 0
});

export const CarritoProvider = ({children}) => {

    const [carrito, setCarrito]=useState([]);
    const [cantidad, setCantidad]=useState(0);
    const [total, setTotal]=useState(0);


    const agregarAlCarrito=(item, cantidad)=>{
        const productoExistente = carrito.find(producto => producto.item.id === item.id)

        if (!productoExistente) {

            setCarrito(prev => [...prev, {item,cantidad}])
            setCantidad(prev => prev + cantidad)
            setTotal(prev => prev + (item.price * cantidad))
        }else{
            const carritoActualizado = carrito.map(producto =>{
                if(producto.item.id === item.id){
                    return {...producto,cantidad: producto.cantidad + cantidad}
                }else{
                    return producto
                }
            })
            setCarrito(carritoActualizado);
            setCantidad(prev=>prev+cantidad);
            setTotal(prev=>prev+(item.price * cantidad));
        }
    }
    //funcion eliminar un producto 

    const eliminarProducto= (id)=>{
        const productoAEliminar = carrito.find(producto => producto.item.id === id)
        const carritoActualizado = carrito.filter(producto => producto.item.id !== id)

        setCarrito(carritoActualizado);
        setCantidad(prev=>prev-productoAEliminar.cantidad);
        setTotal(prev=>prev-(productoAEliminar.item.price * productoAEliminar.cantidad));
    }   

    const vaciarCarrito=()=>{
        setCarrito([]);
        setCantidad(0);
        setTotal(0);
    }

    return(
        <carritoContext.Provider value={{carrito,total,cantidad,agregarAlCarrito, eliminarProducto, vaciarCarrito}}>
            {children}
        </carritoContext.Provider>
    )
}
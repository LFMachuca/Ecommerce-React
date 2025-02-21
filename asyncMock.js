
export const getProductos =  async () => {
   return fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => data.products);
}

export const getProducto = async (id) => {
    const respuesta = await fetch(`https://dummyjson.com/products/${id}`)
    const datos = await respuesta.json();
    return datos;
}   

export const getProductosPorCategoria = async (categoria)=> {
   return fetch(`https://dummyjson.com/products/category/${categoria}`)
        .then(res => res.json())
        .then(data => data.products);
}
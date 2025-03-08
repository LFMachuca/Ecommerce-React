import React from 'react'
import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemdetailContainer from './componentes/ItemDetailCOntainer/ItemdetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {CarritoProvider} from './context/CarritoProvider'
import CartView from './componentes/CartView/CartView'
import Checkout from './componentes/Checkout/Checkout'
function App() {

  return (
    <>
    <BrowserRouter>
    <CarritoProvider>
      <NavBar/>
      <Routes>
      <Route exact path='/' element={<ItemListContainer/>}></Route>
      <Route exact path='/categoria/:categoria' element={<ItemListContainer/>}></Route>
      <Route exact path='/producto/:id' element={<ItemdetailContainer/>}></Route>
      <Route exact path='/cart' element={<CartView/>}/>
      <Route exact path='/checkout' element={<Checkout/>}></Route>
      <Route path='*' element={<h1>404 sitio no encontrado</h1>}></Route>
      </Routes>
      </CarritoProvider>
      </BrowserRouter>
    </>
  )
}

export default App

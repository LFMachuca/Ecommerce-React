import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemdetailContainer from './componentes/ItemDetailCOntainer/ItemdetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import CarritoProvider from './context/CarritoProvider'
function App() {

  return (
    <>
    <BrowserRouter>
    {/* <CarritoProvider> */}
      <NavBar/>
      <Routes>
      <Route exact path='/' element={<ItemListContainer/>}></Route>
      <Route exact path='/producto/:id' element={<ItemdetailContainer/>}></Route>
      <Route exact path='/categoria/:categoria' element={<ItemListContainer/>}></Route>
      </Routes>
      {/* </CarritoProvider> */}
      </BrowserRouter>
    </>
  )
}

export default App

import React from 'react'
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { Route, Routes } from 'react-router-dom'
import Carrito from './components/Carrito'

const Main = () => {

    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}></Route>
                <Route path="/carrito" element={<Carrito/>}></Route>
                <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}></Route>
                <Route path="/producto/:idProducto" element={<ItemDetailContainer/>}></Route>
            </Routes>
        </main>
    )
}

export default Main
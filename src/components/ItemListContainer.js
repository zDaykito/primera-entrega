import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import ItemList from './ItemList'

let productosIniciales = [
    {
        id: 1,
        nombre: "Producto 1",
        precio: 100
    },
    {
        id: 2,
        nombre: "Producto 2",
        precio: 200
    },
    {
        id: 3,
        nombre: "Producto 3",
        precio: 300 
    }
]

const ItemListContainer = () => {

    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])

    const {idCategoria} = useParams()
    
    useEffect(() => {

        toast.info("✔ Cargando productos ✔")

        const pedido = new Promise((res,rej) => {
            setTimeout(() => {
                console.log(idCategoria)
                res(productosIniciales)
            },2000) 
        })

        pedido
        .then((resultado) => {
            toast.dismiss()
            console.log("Estuvo Bien")
            setProductos(resultado)
        })
        .catch((error) => {
            toast.error("No se cargaron bien los productos")
            console.log("Estuvo Mal")
        })
        .finally(() => {
            setLoading(false)
        })

    },[idCategoria])

    if(loading) {
        return <h1>Cargando...</h1>
    }else {
        return <ItemList productos={productos}/>
    }
}

export default ItemListContainer
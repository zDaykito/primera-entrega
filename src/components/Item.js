import React from 'react'
import Contador from './Contador'
import { Link } from 'react-router-dom'

const Item = ({ producto }) => {
    return (
        <article className='articulos'>
            <h2>{producto.nombre}</h2>
            <img src="https://www.gustore.cl/temp/img/poleras/poleraNegra_800x859.png?v=7"></img>
            <p>${producto.precio}</p>
            <Contador/>
            <Link to={`/producto/${producto.id}`}>
                <button>Ver Producto</button>
            </Link>
        </article>
    )
}

export default Item
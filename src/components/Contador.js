import React from 'react'
import { useState, useEffect } from 'react'

const Contador = () => {

    const stock = 20

    const[estado, setEstado] = useState(0)

    const handleSumar = () => {
        if(estado < stock) {
            setEstado(estado + 1)
        }
    }

    const handleRestar = () => {
        if(estado > 1) {
            setEstado(estado - 1)
        }
    }

    return (
            <div className='contador'>
                <button className='botonSuma' onClick={handleRestar}>-</button>
                <p>{estado} Producto/s</p>
                <button className='botonResta' onClick={handleSumar}>+</button>
            </div>
    )
}

export default Contador
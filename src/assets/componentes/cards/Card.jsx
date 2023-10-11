import React from 'react'
import './card.css'

export const Card = () => {
    return (
        <div className='tarjeta'>
            <div className="banner">
                <img src="" alt="" className='imgportada'/>
                <h2 className='curso'>sdad</h2>
            </div>
            <div className="detallesProyecto">
                <h3>tituloProyecto</h3>
                <span>detalle</span>
                <a className="btnLink">Ver más</a>
            </div>

        </div>
    )
}

export default Card

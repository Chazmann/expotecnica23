import React from 'react'
import './card.css'



export const Card = (props) => {
    let mod = props.modalidad == 'Alimentos' ? 'alimentos' : 'info'
    return (
        
        <div className='tarjeta'>
             <div className="banner unica">
                <img src={props.imgurl} alt="" className='imgportada'/>
                <h2 className={mod}>{props.curso}</h2>
            </div>
            <div className="detallesProyecto titilium">
                <h3>{props.proy}</h3>
                <span>{props.descrip}</span>
                <a className="btnLink">Ver más</a>
            </div>

        </div>
    )
}


import React from 'react'

export const Tarjetas = ({campeones}) => {

    const incrementar =() => {

    }
  return (
    <div className='card'>
        <img src={campeones.imagen} alt=" " className='cardImg'></img>
        <p> {campeones.nombre}</p>
        <button onClick={incrementar}>+</button>
    </div>
  )
}

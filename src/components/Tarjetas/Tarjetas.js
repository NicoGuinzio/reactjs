import React, {useState} from 'react'
import './tarjetas.css'

export const Tarjetas = ({campeones}) => {

    const [seleccionCompra, setseleccionCompra] = useState(0)
    const incrementar =() => {
      setseleccionCompra(seleccionCompra + 1)
    }
  return (
    <div>
        <div className='imgContainer'>
          <img src={campeones.imagen} alt={campeones.nombre}className='imagen-size'></img>
          <p> {campeones.nombre}</p>
          <h3> Mi posicion es:{campeones.posicion}</h3>
          <h4> Precio:{campeones.precio}</h4>
          <p>Cantidad seleccionada: {seleccionCompra}</p>
          <button onClick={incrementar}>+</button>
        </div>
    </div>
  )
}

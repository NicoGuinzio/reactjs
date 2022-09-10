// import React, {useState} from 'react'
import React from 'react'

import './items.css'


export const Item =({data})=>{

    return (
        <div className='tarjetasDedata' key={data.name}>
            <div className='imgContainer'>
              <img src={data.imagen} alt={data.nombre}className='imagen-size'></img>
              <p> {data.nombre}</p>
              <h3> Posicion:{data.posicion}</h3>
              <h4> Poder:{data.poder}</h4>
              <h4> Precio:{data.precio}</h4>
            </div>
        </div>
    )
  }
    
  


// export const Item = ({campeones}) => {

//     const [seleccionCompra, setseleccionCompra] = useState(0)
//     const incrementar =() => {
//       setseleccionCompra(seleccionCompra + 1)
//     }
//   return (
//     <div className='tarjetasDeCampeones'>
//         <div className='imgContainer'>
//           <img src={campeones.imagen} alt={campeones.nombre}className='imagen-size'></img>
//           <p> {campeones.nombre}</p>
//           <h3> Posicion:{campeones.posicion}</h3>
//           <h4> Poder:{campeones.poder}</h4>
//           <h4> Precio:{campeones.precio}</h4>
//           <p>Cantidad seleccionada: {seleccionCompra}</p>
//           <button onClick={incrementar}>+</button>
//         </div>
//     </div>
//   )
// }

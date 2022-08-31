// import React, { useState } from 'react';

// export function CountButton() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>Has comprado {count} </p>
//       <button onClick={() => setCount(count + 1)}>
//         Comprar
//       </button>
//     </div>
//   );
// }

import {useState} from 'react'
import './itemCount.css'

export const CountButton = ({limite,initial,agregarProducto})=> {
  //Cuando una propiedad o variable de estado cambie, el componente vuelve a renderizarse.
  const [contador, setContador] = useState(initial)

const incrementarCompra =() => {
  if(contador<limite) {
    setContador(contador + 1)
  } 
}

const decrementarCompra =()=> {
  if(contador>0){
    setContador(contador-1)
  }
}
  return (
    <div> 
      <div className='buyContainer'>
        <button onClick={decrementarCompra}>-</button>
        <h4> Compraste: {contador}</h4>
        <button onClick={incrementarCompra}>+</button> 
        </div>

        <div> 
        <button onClick={()=>(agregarProducto(contador))} style={{background: contador>0 ? 'green' : 'white'}}> Agregar al carrito</button>
      </div>
    </div>
  )
}

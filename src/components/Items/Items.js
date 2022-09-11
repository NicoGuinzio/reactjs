// import React, {useState} from 'react'
import React from 'react'

import './items.css'


export const Item =({data})=>{

    return (
      
      <div className='tarjetaDeCampeones'>
        <div className='tarjetasDeData' key={data.name}>
            <div className='imgContainer'>
              <img src={data.imagen} alt={data.nombre}className='imagen-size'></img>
              <p> {data.nombre}</p>
            </div>
        </div>
        </div>

    )
  }
  
import React from 'react'
import { Mensaje } from '../Mensaje/Mensaje'
import { Tarjetas } from '../Tarjetas/Tarjetas'
import Aatrox from '../../assets/aatrox.jpg'
import Brand from '../../assets/brand.jpg'

const champions = 
[
    { id: 1, nombre: "Aatrox", poder: 29, Precio: 100, Posicion: "top",imagen:Aatrox},
    { id: 2,  nombre: "Brand", poder: 29, Precio: 100, Posicion: "mid",imagen:Brand},
]

console.log();

export const Landing = () => {
  return (
    <div className='listContainer'>
        <Mensaje/>
            <div className='cardsContainer'>
                <Tarjetas campeones={champions}/>
            </div>
   </div>
  )
}

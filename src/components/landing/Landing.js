import React, { useEffect, useState } from "react";
import { Tarjetas } from "../Tarjetas/Tarjetas";
import Aatrox from "../../assets/aatrox.png";
import Brand from "../../assets/brand.png";
import './landing.css'

//Respuesta de un servidor
const champions = [
  {
    id: 1,
    nombre: "Aatrox",
    poder: 29,
    Precio: 100,
    Posicion: "top",
    imagen: Aatrox,
  },
  {
    id: 2,
    nombre: "Brand",
    poder: 29,
    Precio: 100,
    Posicion: "mid",
    imagen: Brand,
  },
];

export const Landing = () => {
  const [personajes,setPersonajes] = useState([])

  const obtenerCampeones = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(champions)
      }, 3000)
    })
  }



useEffect(()=>{
  const funcionAsincrona = async()=> {
    try {
      const listado = await obtenerCampeones()
      setPersonajes(listado)
      console.log('listado', listado);
    } catch (error) {
      console.log("Hubo un error");
    }
  }
  funcionAsincrona()
},[])

  return (
      <div  className="cardContainer">
        {
            personajes.length>0 && 
            <>
              <Tarjetas campeones={personajes[0]} />
              <Tarjetas campeones={personajes[1]} />
            </>
        }
        
      </div>
  );
}

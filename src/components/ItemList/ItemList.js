import React, { useEffect, useState } from "react";
import { Tarjetas } from "../Items/Items";
import './itemList.css'
import { champions } from "../../Data/ArrayChampions";

export const ItemList = () => {
  const [personajes,setPersonajes] = useState([])

  const obtenerCampeones = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(champions)
      }, 2000)
    })
  }



useEffect(()=>{
  const funcionAsincrona = async()=> {
    try {
      const listado = await obtenerCampeones()
      setPersonajes(listado)
      } catch (error) {
      console.log("Hubo un error");
    }
  }
  funcionAsincrona()
},[])

  return (
      <div  className="cardContainer">
          {
          personajes.map(campeones=>{
            return (
              <Tarjetas key={campeones.id} campeones={campeones}/>
            )
          })
        }
        
      </div>
  );
}
   
import React, { useEffect, useState } from "react";
import getFetch from "../../Data/ArrayChampions";
import './itemList.css'
import { Item } from "../Items/Items";



export const ItemList = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    getFetch.then(data => {
      setData(data)
      setLoading(false)
    })
  }, [])
  
  return (
    <>
  <h1> Aca tengo que hacer el map para que me traiga todos los objetos</h1>
  {
    loading ? <h2>Cargando...</h2> 
    :
    <div className="grid-product">
      {data.map(data=>(
              <Item key={data.producto} data={data}/>
      ))}
    </div>
  }
  </>
)
}



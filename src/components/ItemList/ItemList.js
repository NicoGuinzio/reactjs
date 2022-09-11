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
  {
    loading ? <h2>Cargando champions...</h2> 
    :
    <div className='cardContainer'>
      {data.map(data=>(
              <Item key={data.id} data={data}/>
              ))}
    
    </div>
  }
  </>
)
}



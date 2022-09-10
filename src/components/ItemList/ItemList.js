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
    })
  }, [])
  
  
  return (
    <>
  <h1> Aca tengo que hacer el map para que me traiga todos los objetos</h1>

  </>
)
}



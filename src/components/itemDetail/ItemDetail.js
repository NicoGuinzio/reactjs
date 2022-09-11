import { useState, useEffect } from "react";
import getFetch from "../../Data/ArrayChampions";
import './ItemDetail.css'
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = () => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState()
    const agregarProducto = (count) => {
        setContador(count)
    }
    const [contador, setContador] = useState(0)
    useEffect(() => {
        setLoading(true)
        getFetch
            .then(response => {
                setData(response.find(prod => prod.id === 1))
                setLoading(false)
            })
    }, [])
  

    console.log(data)
    return (
        <div className='tarjetasDedata' key={data.name}>
            <div className='imgContainer'>
                <img src={data.imagen} alt={data.nombre} className='imagen-size'></img>
                <p> {data.nombre}</p>
                <h3> Posicion:{data.posicion}</h3>
                <h4> Poder:{data.poder}</h4>
                <h4> Precio:{data.precio}</h4>
                <h4> Count {contador}</h4>
                <ItemCount initial={data.initial} agregarProducto={agregarProducto} />
            </div>
        </div>
    )
}

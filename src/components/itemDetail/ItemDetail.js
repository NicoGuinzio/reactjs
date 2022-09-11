import { useState, useEffect } from "react";
import getFetch from "../../Data/ArrayChampions";
import './ItemDetail.css'
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = () => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
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

    /*  En ItemDetail.js
    Se realiza una logica muy similar a la logica de itemList pero el componente en este caso lo resolvemos con un objeto.
    La diferencia es en el setData cuando se quiere setear toda la informacion, en vez de traer el array se trae solo un producto.
    Se utiliza ".find" porque se busca uno solo y además devuelve un solo objeto.
  
    Luego del return se realiza la parte del renderizado, se podria crear en un nuevo componente pero en este caso preferí no realizarlo.
    Se le pasa la propiedad de data y se realiza lo mismo que en ItemList. Por supuesto que se renderizan otras cosas y se le aplica otro estilo.

    Como se esta haciendo la emulando la tardanza de lo que lleva una base datos, se realiza una renderizado condicional para poder mostrar un
    display hasta que se rendericen todos los datos que se buscan.

    En la promesa del getFetch, al igual que setData se pone el setLoading que es la funcion que se le pide a react para que se pueda mostrar
    lo que se retorna debajo.
    */

    console.log(data)
    return (
        <div className='tarjetasDedata' key={data.name}>
            {
                loading ? <h2>Cargando detalles...</h2>
                    :
                    <div className='imgContainer'>
                        <img src={data.imagen} alt={data.nombre} className='imagen-size'></img>
                        <p> {data.nombre}</p>
                        <h3> Posicion:{data.posicion}</h3>
                        <h4> Poder:{data.poder}</h4>
                        <h4> Precio:{data.precio}</h4>
                        <h4> Count {contador}</h4>
                        <ItemCount initial={data.initial} agregarProducto={agregarProducto} />
                    </div>
            }
        </div>

    )
}

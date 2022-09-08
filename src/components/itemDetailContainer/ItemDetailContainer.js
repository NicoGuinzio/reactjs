import { champions } from "../../Data/ArrayChampions";
import { ItemDetail } from "../itemDetail/ItemDetail";
import { useEffect, useState } from "react";

// aca se ponee la card de item detail que va a tomar el array, se deben poner las propiedades a item detail

export const itemDetailContainer = () => {
    const [campeoncito, setCampeoncito] = useState([])

    const obtenerCampeones = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(champions.find(product => product.id === 1))
            }, 2000)
        })
    }


    useEffect(() => {
        const campeonSacadoDeLaPromesa = async () => {
            try {
                const listado2 = await obtenerCampeones()
                setCampeoncito(listado2)
            } catch (error) {
                console.log("Hubo un error");
            }
        }
        campeonSacadoDeLaPromesa()
    }, [])

    return (
        <div>
            <ItemDetail objeto={campeoncito} />
        </div>
    )
}


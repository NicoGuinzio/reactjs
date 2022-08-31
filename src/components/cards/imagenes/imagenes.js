import { CountButton } from '../../ItemCount/ItemCount';
import './imagenes.css';


export const Imagenes = ({imagen, poder,texto}) => {

    const agregar = (productos) => {
        console.log('agregar', productos);
    }
    return (
        <div>
        <div className='imgContainer'>
            <img src={imagen} alt='' className='imagen-size'/>
            <p>Poder: {poder}</p>
            <p>{texto}</p>
            <CountButton limite ={10} initial={0} agregarProducto={agregar}/>
        </div>
        </div>
    )

}
import { CountButton } from '../../ItemCount/ItemCount';
import './imagenes.css';


export const Imagenes = ({imagen, poder,texto}) => {
    return (
        <div>
        <div className='imgContainer'>
            <img src={imagen} alt='' className='imagen-size'/>
            <p>Poder: {poder}</p>
            <p>{texto}</p>
            <CountButton/>
        </div>
        </div>
    )

}
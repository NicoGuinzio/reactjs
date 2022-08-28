import './imagenes.css';


export const Imagenes = ({imagen, poder,texto}) => {
    return (
        <div>
        <div className='imgContainer'>
            <img src={imagen} alt='' className='imagen-size'/>
            <p>Poder: {poder}</p>
            <p>{texto}</p>
            <button>Comprar</button>
        </div>
        </div>
    )

}
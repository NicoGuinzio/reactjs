import {useState} from 'react'
import './itemCount.css'

export const ItemCount = ({stock,initial,agregarProducto})=> {
  //Cuando una propiedad o variable de estado cambie, el componente vuelve a renderizarse.
  const [contador, setContador] = useState(initial)

const incrementarCompra =() => {
  if(contador<stock) {
    setContador(contador + 1)
  } 
}

const decrementarCompra =()=> {
  if(contador>0){
    setContador(contador - 1)
  }
}
  return (
    <div> 
      <div className='buyContainer'>
        <button  disabled={stock===0}  onClick={decrementarCompra}> - </button>
        <h4> Compra: {contador}</h4>
        <button  disabled={stock===0}  onClick={incrementarCompra}> + </button> 
        </div>

        <div> 
        <button onClick={()=>(agregarProducto(contador))} style={{background: contador>0 ? 'green' : 'white'}}> Agregar al carrito</button>
      </div>
    </div>
  )
}

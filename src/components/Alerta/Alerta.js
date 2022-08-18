import './Alerta.css';
import Button from 'react-bootstrap/Button';

function Alerta () {
    return(
        <nav className='alerta-contenedor'>
            <h1 style={{color:'green'}}>Titulo</h1>
            <img src="" alt=""/>
            <p className='alerta-parrafo'>Parrafo</p>
            <Button variant="primary">Primary</Button>
        </nav>
    )
}

export default Alerta
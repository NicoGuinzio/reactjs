export const Alerta = (props) => { 
    console.log('props', props.children);
    return (
        <div style={{background: 'ping', borderRadius: 5, margin:10}}>
        <p>{props.mensaje}</p>
        {props.children}
        </div>
    )
}

export default Alerta
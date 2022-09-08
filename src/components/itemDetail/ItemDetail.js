
//Aca hago la card que traiga los array.

export const itemDetail = (objeto)=>{

return (
    <div>
        <p>{objeto.id}</p>
        <p>{objeto.nombre}</p>
        <p>{objeto.precio}</p>
        <p>{objeto.poder}</p>
    </div>
)
}
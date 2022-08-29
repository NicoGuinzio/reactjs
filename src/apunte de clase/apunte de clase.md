**1> Exportacion e importacion de componentes**
Los componentes se exportan con export default "nombre del componente" y se importan el el archivo que se quiera usar.

**2> Componentes de tipo clase:**
Las clases deberian heredar un modulo de react. por tanto se debe import. luego se usa render () para renderizar y ya queda como una funcion

import {Component} from 'react'
class "nombre" extends "Components" {

    render() {
        return (
                    <h1> EJEMPLO </h1>
        )
    }
} 

export default "nombre"

**3> Etiquetas fragment**
Toda la estructura react se arma ddentro de una etiqueta para que funcione, por tanto se utilizan los fragments que pueden llamarse como <React.Fragment> o directamente "<>" y "</>".

**4> Padres e hijos** 
La estructura de como se realice el codigo es lo que determina que componente es padre y que componente es hijo, asi compartan la misma carpeta.


**5> Propiedades en componentes**
Los nombres de las propiedades en los componentes son infinitos, se le puede dar todoas las necesarias. Luego el atributo que se le otorgue a esa propiedad sera renderizado segun indica el componente.
ej> <Navbar propiedad1: "nombre"  propiedad2: "nombre2>

Una vez definidas las propiedades se pueden recibir en la definicion de los componentes como parametros. Pero se le da un nombre definido por el lenguaje que es el evento [props]

**6> Destructuracion props**
Se pueden obtener los valores directamente la desestructuracion dentro de la funcion:
ej>
import './Welcome.css';
function Welcome ({titulo,comision}) {
    return(
        < >
            <h1> {titulo} comisión{comision}</h1>
        </>
    )
}
export default Welcome;

**7>Reutilizacion de los componentes**
Se puede crear un elemento con la misma estructura pero diferente informacion y tambien se le puede definir los estilos en las propiedades y colocandoselo en la desestructuracion de props como se indico en el punto 6.

 **8> Componentes de presnetacion o STATELESS COMPONENTS**
 Componentes que solo presentan informacion con valores, muestran datos solamente.


**9> Nueva forma de exportar**
La forma de exportar para que no haya confusiones en el codigo y como alternativa que se utlilza actualmente. 
El export se utiliza previo a la funcion y luego se llama con corchetes dentro del archivo al cual se quiera importar.

**10> Componente de contenedores**
Un componente puede tener otros componentes en su codigo. Como es el caso de App.js
El componente contenedor de define los datos de los contenidos.
En este tipo de componentes se llama a las API's externes y se establece logica.
Tambien se puede realizar interaccion con el usuario.

**11> Propiedad CHILDREN**
Forma en que se le puede pasar codigo HTML a otro componente.


**12> State Hooks dentro de Reactjs**
Te permite captar funcionalidades externas y utilizarlas dentro de una funcion y realizar cosas adicionales.
Una de las funciones para manejar el estado es "useState" es una funcionalidad externa para manejar el estado en las funciones, podes tomar una funcion externa que maneja variables de estado e integrarla dentro de mi componente de tipo funcion y de esta forma se puede usar el estado en los componentes de tipo funcion. y podes manipular datos de forma dinamica o si el usuario interactua con mi componente tambien se pueden modificar esos datos que estan dentro del componente.

Reglas generales de los State Hooks> 
Deben ejecutarse siempre.
Esto implica que no pueden ser ejecutados dentro de otras estructuras, como IF, FOR, ó ternary  A ? B : C
Se ejecutan en orden y nunca en simultáneo.

**13> set"NOMBRE"** 
Es una funcion que permite cambiar el nombre de la variable. se utiliza por lo general la palabra "set" seguida del nombre de la variable. 
Ej> const [apellido, setApellido].
Es una forma de que el codigo se pueda leer correctamente.

**14> Estructura inicial de una variable de estado en un componente de tipo funcion**
export const EstadoFunciones =()=> {
const [apellido, setApellido] = useState("perez")ñ
    return (
        <div>
            <p> "texto" </p>
            <p> {apellido} </p>
        </div>
    )
}

**15> LAS TRES CLASIFICACIONES DE ESTADOS DENTRO DE UN CICLO DE VIDA**
--> El montaje se produce la primera vez que un componente va a generarse, incluyéndose en el DOM.
--> La actualización se produce cuando el componente ya generado se está actualizando.
--> El desmontaje se produce cuando el componente se elimina del DOM.


**16> Hook de efecto "useEffect"** 
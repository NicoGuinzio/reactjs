# ¡Hola, Bienvenid@!

*Mi nombre es Nicolás Nahuel Guinzio*
Soy el creador de este proyecto de ReactJS necesario para finalizar mi curso de CODERHOUSE siendo de la comisión 41590.

Mi intención es poder comentar paso a paso lo que voy creando, modificando y eliminando si es necesario para que puedan entender correctamente mi trabajo.


**18/8/2022**
Se creó la app con react js.
En la carpeta "src" creé la carpeta "Components"
En la carpeta "Components" voy a estar creando nuevas carpetas con sus respectivos hojas de lenguaje.
Para el desafio de esta semana debo crear una hoja llamada "NavBar.js" y realizar una barra de menu simple.

### >Aspectos a incluir en el entregable:
Crea una carpeta dentro de src llamada components que contenga a NavBar.js para crear una barra de menú simple, que tenga:
Brand (título/nombre de la tienda)
Un listado de categorías clickeables
Incorpora alguna librería de estilos con bootstrap/materialize u otro de tu preferencia (opcional).


**23/8/2022**

Se crean mas carpetas en la sección componentes llamadas "CartWidget" como subcarpeta de NavBar y se crear "ItemListContainer".
Ambas carpetas con sus respectivos archivos de lenguaje. 
A dia de hoy solo estoy usando js y css. Un aspecto a mejorar en la medida que me vaya dando el tiempo seria incluir SASS en mi proyecto.

Por otro lado se instala la libreria de React icons para poder agregar el icono de carrito de compras. 


### > Aspectos a incluir en le entregable: 
Parte 1: crea un componente CartWidget.js que haga rendering de un ícono Cart, e inclúyelo dentro de NavBar.js para que esté visible en todo momento.
Parte 2: crea un componente ItemListContainer. Impórtalo dentro de App.js, y abajo de NavBar.js. 


**25/08/2022**

Se crea un componente  ItemCount.js compuesto de numeros y controles para incrementar y decrementar la cantidad de items.
creé también las carpetas de "assets" para contener mis imagenes, la carpeta "cards" para contenerla y la carpeta "imagenes" para guardar organizar bien los modulos.
De a poco se le va dando estilo a la página para que también se vea ordenado.


### >Aspectos a incluir en el entregable:
Componente ItemCount.js con los respectivos controles de la consigna.


**31/08/2022** 

Se crea un archivo "ArrayChampions que servirá para guardar los datos de mis cards y asi renderizarlas. 
También se corrige el desafio pasado, agregando un boton contadador para incrementar, para decrementar y para agregar al carrito.
Queda pendiente la actualizacion del CSS.


**2/9/2022**


Se crea el componente itemlist.css/js y se crea el componente item.css/js. Tambien se crea en la carpeta Data un comonente de Arrays para ser utilizado como una API. 
Lo que se realizo fue una promesa para renderizar las cards de champions y se le aplico un tiempo para renderizar a travez del setTimeout(). Se utlilzó también una función asincrona y un map para no utilizar muchas lineas de codigo. 
También aparte del desafio, se eliminaron carpetas y hojas de trabajo que no eran utilizadas.


### >Aspectos a incluir en el entregable:
Item.js: Es un componente destinado a mostrar información breve del producto que el user clickeará luego para acceder a los detalles (los desarrollaremos más adelante)
ItemList.js Es un agrupador de un set de componentes Item.js (Deberías incluirlo dentro de ItemListContainer del desafío 3)
Implementa un async mock (promise): Usa un efecto de montaje para poder emitir un llamado asincrónico a un mock (objeto) estático de datos que devuelva un conjunto de item { id, title, description, price, pictureUrl } en dos segundos (setTimeout), para emular retrasos de red.


**05/09/2022**


*En ItemList.js*
  En getfetch se traen los datos a traves del .then osea trae una promesa.
  Esa promesa se resuelve con el useEffect y su lista de dependencias.
  Se crea entonces un estado inicializado con un array, porque se debe buscar una forma de almacenar lo que trae la promesa
  esto se realiza a traves del "setData". 
  Luego en el return, se realiza el rendering de data.
  Se crea un div que va a tener a data, se realiza un mapeo renderizando al componente "item". Es importante siempre darle una key.

*En Itemlist.js*
  Se recibe la data, se desestructura y recibe una estructura HTML.
  Se crea en este archivo la estructura de la card inicial.

*En ItemDetail.js*
    Se realiza una logica muy similar a la logica de itemList pero el componente en este caso lo resolvemos con un objeto.
    La diferencia es en el setData cuando se quiere setear toda la informacion, en vez de traer el array se trae solo un producto.
    Se utiliza ".find" porque se busca uno solo y además devuelve un solo objeto.
    Luego del return se realiza la parte del renderizado, se podria crear en un nuevo componente pero en este caso preferí no realizarlo.
    Se le pasa la propiedad de data y se realiza lo mismo que en ItemList. Por supuesto que se renderizan otras cosas y se le aplica otro estilo.
    Como se esta haciendo la emulando la tardanza de lo que lleva una base datos, se realiza una renderizado condicional para poder mostrar un
    display hasta que se rendericen todos los datos que se buscan.
    En la promesa del getFetch, al igual que setData se pone el setLoading que es la funcion que se le pide a react para que se pueda mostrar
    lo que se retorna debajo.

  
  

__Entregable de 2 puntos.__
### >1>Aspectos a incluir en el entregable:
Al iniciar utilizando un efecto de montaje, debe llamar a un async mock, utilizando lo visto en la clase anterior con Promise, que en 2 segundos le devuelva un 1 ítem, y lo guarde en un estado propio.

### >2>Aspectos a incluir en el entregable:
ItemDetail.js, que debe mostrar la vista de detalle de un ítem incluyendo su descripción, una foto y el precio.



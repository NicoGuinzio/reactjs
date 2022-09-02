# ¡Hola, Bienvenid@!

***## Mi nombre es Nicolás Nahuel Guinzio***
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


Se crea el componente de Landing
### > Consigna:
Crea los componentes Item.js e ItemList.js para mostrar algunos productos en tu ItemListContainer.js. Los ítems deben provenir de un llamado a una promise que los resuelva en tiempo diferido (setTimeout) de 2 segundos, para emular retrasos de red


### >Aspectos a incluir en el entregable:
Item.js: Es un componente destinado a mostrar información breve del producto que el user clickeará luego para acceder a los detalles (los desarrollaremos más adelante)
ItemList.js Es un agrupador de un set de componentes Item.js (Deberías incluirlo dentro de ItemListContainer del desafío 3)
Implementa un async mock (promise): Usa un efecto de montaje para poder emitir un llamado asincrónico a un mock (objeto) estático de datos que devuelva un conjunto de item { id, title, description, price, pictureUrl } en dos segundos (setTimeout), para emular retrasos de red.


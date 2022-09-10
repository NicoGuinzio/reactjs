export const champions = [
  {
    id: 1,
    nombre: "Aatrox",
    poder: 29,
    precio: 100,
    posicion: "mid",
    imagen: "/assets/aatrox.png",
    initial: 1
  },
  {
    id: 2,
    nombre: "Brand",
    poder: 29,
    precio: 100,
    posicion: "mid",
    imagen: "/assets/brand.png",
    initial: 1
  },
  {
    id: 3,
    nombre: "Caitlyn",
    poder: 29,
    precio: 100,
    posicion: "mid",
    imagen: "/assets/caitlyn.png",
    initial: 1
  },
  {
    id: 4,
    nombre: "Corki",
    poder: 29,
    precio: 100,
    posicion: "mid",
    imagen: "/assets/corki.png",
    initial: 1
  },
  {
    id: 5,
    nombre: "Darius",
    poder: 29,
    precio: 100,
    posicion: "mid",
    imagen: "/assets/darius.png",
    initial: 1
  },
  {
    id: 6,
    nombre: "Draven",
    poder: 29,
    precio: 100,
    posicion: "mid",
    imagen: "/assets/draven.png",
    initial: 1
  },
  {
    id: 7,
    nombre: "Dr.Mundo",
    poder: 29,
    precio: 100,
    posicion: "mid",
    imagen: "/assets/drmundo.png",
    initial: 1
  },
  {
    id: 8,
    nombre: "Fizz",
    poder: 29,
    precio: 100,
    posicion: "mid",
    imagen: "/assets/fizz.png",
    initial: 1
  },
  {
    id: 9,
    nombre: "Janna",
    poder: 29,
    precio: 100,
    posicion: "mid",
    imagen: "/assets/janna.png",
    initial: 1
  },
  {
    id: 10,
    nombre: "Jax",
    poder: 29,
    precio: 100,
    posicion: "mid",
    imagen: "/assets/jax.png",
    initial: 1
  },
  {
    id: 11,
    nombre: "Jinx",
    poder: 29,
    precio: 100,
    posicion: "mid",
    imagen: "/assets/jinx.png",
    initial: 1
  },
  {
    id: 12,
    nombre: "Karma",
    poder: 29,
    precio: 100,
    posicion: "mid",
    imagen: "/assets/karma.png",
    initial: 1
  },
  {
    id: 13,
    nombre: "Lee Sin",
    poder: 29,
    precio: 100,
    posicion: "mid",
    imagen: "/assets/leeSin.png",
    initial: 1
  },
  {
    id: 14,
    nombre: "Lucian",
    poder: 29,
    precio: 100,
    posicion: "mid",
    imagen: "/assets/lucian.png",
    initial: 1
  },
  {
    id: 15,
    nombre: "Lulu",
    poder: 29,
    precio: 100,
    posicion: "mid",
    imagen: "/assets/lulu.png",
    initial: 1
  },
  {
    id: 16,
    nombre: "Lux",
    poder: 29,
    precio: 100,
    posicion: "mid",
    imagen: "/assets/lux.png",
    initial: 1
  },
  {
    id: 17,
    nombre: "Maestro Yi",
    poder: 29,
    precio: 100,
    posicion: "mid",
    imagen: "/assets/maestroyi.png",
    initial: 1
  },
  {
    id: 18,
    nombre: "Miss Fortune",
    poder: 29,
    precio: 100,
    posicion: "mid",
    imagen: "/assets/missfortune.png",
    initial: 1
  },
];



const getFetch = new Promise ((resolve,reject)=>{
  setTimeout(()=>{
    resolve(champions)
    reject(err => console.log(err))
  }, 3000)
})

export default getFetch
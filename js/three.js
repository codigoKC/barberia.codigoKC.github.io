import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js'



//creamos el cursor con posicion o 
const cursor = {
    x : 0,
    y : 0
}
//evento para escuchar la posicion del mouse y mover la camara en funcion de su direccion 
window.addEventListener('mousemove', (event) =>{
    //usamos el cursor creado para saber la posicion exacta en nuneros del 0 al 1 
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = - (event.clientY / sizes.height -0.5)
    console.log(cursor.x)
})

//canvas 
const canvas = document.querySelector('canvas.webgl-animacion')
// creamos la scena 
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x00ff00);



//objeto 
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
scene.add(cube1)

// se crea la camera y las medidas
const sizes = {
    width : window.innerWidth,
    height: window.innerHeight
}
const camera = new THREE.PerspectiveCamera( 75, sizes.width / sizes.height, 0.01 , 1000)
camera.position.z = 3
scene.add(camera)
// creamos el renderizador 
const renderer = new THREE.WebGLRenderer({
    canvas : canvas
})
renderer.setSize(sizes.width, sizes.height)

//para abreviar en creacion de constantes podemos importar gsap para realizar animaciones
//creamos un reloj y aunque podemos crear tanbien delay vamos a clock
//const clock = new THREE.Clock()
//NOTA : si nuetro unico objetivo es manipular el objeto y no animarlo usamos los controladore
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true //hace que el manejo del control sea mucho mas normal
controls.update()
const animation  = () => {
    //constante que almacenara el tiempo de la animation 
    // const elapsedTime = clock.getElapsedTime()
    //camera.position.x = cursor.x * Math.PI *2  la posicion de la camara cambia cuando el cursor lo toca 
    //cube1.rotation.x = elapsedTime //el cubo gira 
    //necesitamos actualizarlo constantemente
    //actualizamos los controles 
    controls.update()
    renderer.render(scene, camera)
    //añadimos los requisitos a la ventana 
    window.requestAnimationFrame(animation)
}
//lo MASS IMPORTANTE LLAMAR LA FUNCION
animation()
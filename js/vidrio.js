// Seleccionamos el botón y la pantalla de inicio
const pantallaPrincipal = document.getElementById('pantalla-inicio');
const botonEntrar = document.getElementById('boton-entrar');

// Evento para hacer clic en "Entrar"
botonEntrar.addEventListener('click', () => {
    // Añadir la clase que aclara el fondo y oculta la pantalla principal
    pantallaPrincipal.classList.add('aclarar-vidrio');

    // Aquí puedes hacer otras cosas después de la transición
    setTimeout(() => {
        console.log('Transición completada. Puedes activar otras funcionalidades.');
        document.getElementById('escena-3d').style.pointerEvents = 'auto';
    }, 2500); // Ajustar el tiempo según la duración de la transición
});

const button = document.getElementById('animated-button');

button.addEventListener('mouseover', () => {
  button.style.backgroundColor = '#FFC107'; // Yellow on hover
  button.style.borderColor = '#FFC107';
});

button.addEventListener('mouseout', () => {
  button.style.backgroundColor = '#4CAF50'; // Back to green on mouseout
  button.style.borderColor = '#4CAF50';
});
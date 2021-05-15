// alert('hola soy inputs.js')

const formulario = document.getElementById('loginForm');
const correo = document.getElementById('correo');
const clave = document.getElementById('clave');



formulario.addEventListener('submit', (e) => { // funcion de flecha
    e.preventDefault();
    console.log(`email: `, correo.value, `clave: `, clave.value )
})



// formulario.addEventListener('submit', 
// function(e) { // funcion anonima

// })



